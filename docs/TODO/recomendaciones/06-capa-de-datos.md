# 06 · Capa de datos e interacción (`src/app/shared/data`, `src/app/shared/interaction`)

[← Índice](README.md)

El diseño es acertado:
- los repositorios hablan con **hosts lógicos** (`http://net-civeira-phylax/access/oauth-clients`) que `ApiService` resuelve contra `phylax-config.json → api`;
- hay una caché compartida por entidad;
- el ACL se consulta por recurso;
- las proyecciones resuelven referencias (`$ref`) a otras entidades.

Lo que falla son detalles de implementación que provocan **pantallas que no terminan de cargar**, **fechas mal convertidas** y **mucho tipado `any`**.

---

## `data/api/client.service.ts` · 🔴 Crítico · 🧩 Plantilla

**Estado actual**
1. **Peticiones que no terminan nunca sin sesión.** Si el endpoint requiere identidad, `prepareWithConf` espera a que haya token:
   ```ts
   return this.appState.userInfo[identity].pipe(filter((identity) => !!identity.token), take(1), …)
   ```
   Si el usuario no ha iniciado sesión (o el token ha caducado y el refresh ha fallado), el observable **ni emite ni da error**: los spinners (`searching`) se quedan girando para siempre y el usuario no sabe que tiene que volver a entrar.
2. **Las fechas con offset `±hh:mm` no se convierten.** `isIsoDateString` usa la regex `…(Z|[+-]\d{4})?$`. Un backend Java (`OffsetDateTime` / `ZonedDateTime` con Jackson) serializa `2025-10-30T12:00:00+02:00` (con dos puntos), que **no encaja** y queda como `string`, aunque el modelo diga `registeredAt?: Date`. Las fechas sin hora (`2025-10-30`, `LocalDate`) tampoco se convierten.
3. Además, **cualquier** string con forma de fecha se convierte en `Date`, aunque el campo sea texto libre (por ejemplo, el valor de una variable de plantilla).
4. Los parámetros de cada método se repiten seis veces (`{ url; params?; headers?; identity?; withIdentity? }`).
5. Deja `console.error('IM MASK IN', sreq)` en `trace()`.
6. `download()` no se traza y `upload()` sí, a medias.

**Qué cambiar**
1. Esperar el token con límite y error explícito:
   ```ts
   this.identity.token$(identity).pipe(
     timeout({ first: 5_000, with: () => throwError(() => new HttpErrorResponse({ status: 401, statusText: 'No session' })) }),
     take(1), …)
   ```
   El 401 lo trata `ErrorService` y la página de *unauthorized*, que muestra "Inicia sesión" (doc 05).
2. Convertir las fechas **por metadatos**, no por regex global: el generador conoce qué campos son `date`/`datetime` (ya existe `EntityMetadata.dates`/`datetimes` en `repository-provider.interface.ts`, comentado). Aplicar `mapItem` en el repositorio con esa lista. Si se mantiene la regex, que acepte `[+-]\d{2}:?\d{2}`.
3. Un tipo `type RequestTarget = { url: string; params?: HttpParams; headers?: Record<string,string>; identity?: string; withIdentity?: boolean }`.
4. Quitar el `console.error` y trazar `download`/`upload` igual que `send`.

**Qué aporta**
- Usabilidad: sin sesión no hay spinners infinitos, sino un mensaje claro.
- Datos correctos: las fechas que vienen del backend Java se muestran y editan bien (los editables `datetime` reciben un `Date`).
- No se corrompen strings que parecen fechas.

**Cómo enfocarlo**
1. Corregir la regex (cambio mínimo y seguro).
2. Añadir el `timeout` del token.
3. En la plantilla del repositorio, emitir la lista de campos de fecha por entidad y convertir en `mapItem`.

---

## `data/api/api.service.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- `contextualizeBody` combina cada petición con `appState.filterContext()` (un `combineLatest` de todos los contextos) mediante `switchMap`. Las peticiones **no completan** mientras el contexto pueda cambiar. Para un GET hace de "consulta viva" (si cambia el tenant, se repite). Para **mutaciones**, depende de que quien llame use `take(1)`:
  - `RepositoryService.add/update/deleteByKey/partialByKey` sí lo hacen;
  - `ApiProvider.deleteAllForQuery` y `patchAllForQuery` **no**. Si el contexto cambia mientras dura el sondeo de una operación masiva, **el DELETE o PATCH masivo se reenvía**.
- La resolución de host lógico prueba `startsWith(key)` sobre todas las entradas y **gana la última que coincida**. Una clave `api` coincidiría también con `api-v2/...`.
- El body mezcla el "contexto fijo" (`fixedContext`), lo que puede añadir propiedades que el backend no espera, sin que se vea.

**Qué cambiar**
- Separar dos APIs:
  - `query(endpoint, params)`: GET reactivo al contexto (comportamiento actual);
  - `command(method, endpoint, body)`: **una sola emisión**, con `take(1)` dentro de `ApiService`, que toma el contexto en el momento de la llamada (`first()`).
- Resolver el host lógico con `new URL(url).host === key` (coincidencia exacta) y dejar el prefijo como alternativa documentada.
- Hacer la inyección de contexto fijo en el body **opcional por endpoint** (`api.<key>.inject-context: ['tenant']`).

**Qué aporta**
Ninguna mutación se repite por efecto secundario, el ruteo de APIs es predecible y lo que se envía al backend queda claro.

**Cómo enfocarlo**
Cambiar `ApiProvider` para que use `command` en `post/put/patch/delete` y añadir un test que cambie el contexto durante un `deleteAllForQuery`.

---

## `data/repository/provider/impl/api.provider.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- Las operaciones masivas sondean con `timer(1000, 4000)` (el comentario dice "cada 3 segundos"), **sin límite de tiempo ni backoff**: si el backend nunca devuelve `FINISHED`/`FAILED`, se sondea indefinidamente.
- `list()` reconstruye `next` a partir de la URL `value.next` (`split('?')[1]`) con `URLSearchParams`. Funciona, pero acopla el formato de paginación.
- `formatAcl` usa `(<any>v).name`, `(<any>v).reason`.
- `acl()` concatena `this.aclUrl + '/' + key` sin `encodeURIComponent`.

**Qué cambiar**
- Sondeo con backoff y límite: `pollUntil(statusUrl, { initial: 1000, max: 10_000, factor: 1.5, timeout: 5 * 60_000 })`, como utilidad compartida.
- `encodeURIComponent(key)` en todas las rutas con clave.
- Tipar la respuesta del ACL (`AclResponse`).
- Opcional: aceptar paginación por `cursor` explícito en la respuesta, además de `next` como URL.

**Qué aporta**
Más robustez ante backends lentos, claves con caracteres especiales que funcionan y menos `any`.

**Cómo enfocarlo**
Plantilla. La utilidad `pollUntil` sirve también para `long-task-view`.

---

## `data/repository/repository.service.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- **Las fechas se pierden en las proyecciones**: `buildProjection` clona cada ítem con `JSON.parse(JSON.stringify(item))`, así que los `Date` que convirtió `ClientService` **vuelven a ser strings ISO**. En las listas (`{{ row.registeredAt }}`) se ve `2025-10-30T10:00:00.000Z` en crudo.
- `TIME_TO_LIVE = 3_000` es fijo para todas las entidades.
- La caché es un `Map` **a nivel de módulo** (`repositoryStore`), compartido entre instancias por `meta.name`, invisible para DI y para los tests (no se puede reiniciar entre specs).
- Las APIs `Tick`/`Shift` se construyen añadiendo propiedades a un `computed` mediante `as any` (`res.fetch = …`, `res.next = …`), con muchos `setTimeout(() => searching.set(...))`.
- Tiene restos: `console.log('REMOVE UNSUSCRIBES OF THE PROYECTION')`, varios `FIXME` y `// TODO: reload last page again`. `list()` devuelve un observable al que se le añade `next()`, que lanza `'Complex results'`.
- `generateComb()` depende de `uuid` (doc 03).

**Qué cambiar**
1. **Ya:** sustituir el clon JSON por `structuredClone(item)` (conserva los `Date`) o por un clon superficial `{ ...item }`, porque solo se reemplazan las propiedades `include`.
2. TTL configurable por entidad (`RepositoryMetadata.ttl`) y global (`data.cache.ttl` en la configuración).
3. Mover el store a un servicio `@Injectable({ providedIn: 'root' }) RepositoryStore` con `clear()` para tests y cierre de sesión (hoy, al cambiar de usuario, la caché conserva datos del anterior hasta que caduca).
4. Medio plazo: reescribir `Tick`/`Shift` sobre las primitivas nativas de Angular (`resource()`/`rxResource()` y `linkedSignal`), manteniendo la **misma fachada pública** que usan las features (`fetch`, `next`, `reset`, `searching`). Así desaparecen los `setTimeout` y los `as any`.

**Qué aporta**
- Fechas correctas en listas y detalles.
- Al cerrar sesión no quedan datos de otro usuario en caché (seguridad y privacidad).
- Menos código propio que mantener y tests aislados.

**Cómo enfocarlo**
1. `structuredClone` es un cambio de una línea.
2. Store inyectable + `clear()` enganchado al evento `logout` de `IdentityService`.
3. La reescritura interna va en una rama aparte, con los specs existentes (`repository.service.spec.ts`) como red de seguridad.

---

## `data/repository/provider/repository-provider.interface.ts` y `repository.model.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Hay grandes bloques comentados (`/* resourceAcl… count… statistical… ListExport… */`, `/* Slide… Resource… */`) que muestran una API prevista y no implementada. `EntityMetadata` existe, pero no se usa.

**Qué cambiar**
- Borrar los comentarios y llevar las ideas a un ADR o *issue*.
- **Usar** `EntityMetadata` (`dates`, `datetimes`, y añadir `sensitive`, `display`) como contrato entre generador y runtime (ver `client.service.ts` y doc 08).

**Qué aporta**
Interfaces legibles y metadatos que sirven para convertir fechas, ocultar campos sensibles y elegir columnas por defecto.

**Cómo enfocarlo**
Plantilla.

---

## `data/selector-provider.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- La interfaz declara `error: Signal<any>`, pero `selectorProvider()` **nunca asigna** `result.error` (crea `errors` y lo deja suelto). Cualquier plantilla que haga `provider.error()` lanzará `TypeError: provider.error is not a function`.
- El error se relanza con `throwError` dentro del `subscribe` sin manejador, así que se convierte en un error no capturado.
- Compara con `JSON.stringify` para deduplicar.

**Qué cambiar**
`result.error = errors.asReadonly();`, capturar sin relanzar (`catchError(() => EMPTY)` tras registrar el error) y comparar con `handler.equals(handler.value(a), handler.value(b))`.

**Qué aporta**
El selector puede mostrar "Error al buscar, reintentar" en lugar de quedarse vacío o romperse.

**Cómo enfocarlo**
Plantilla. Mostrar el error en `editable-selectone` (doc 07).

---

## `data/selection-model.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
- `toogle` (errata).
- **Muta** el array del signal (`items.push`/`splice`) y vuelve a hacer `set` con la **misma referencia**: los `computed` que dependen de `selected()` **no se recalculan** (los signals comparan por referencia).
- Con `mapper`, `isSelected` usa `indexOf(this.mapper(item))`, que solo funciona si el mapper devuelve primitivos.

**Qué cambiar**
```ts
toggle(item: T) {
  this.selectedItems.update((items) => this.has(items, item) ? items.filter(i => !this.eq(i, item)) : [...items, item]);
}
```
Mantener `toogle` como alias *deprecated* durante una versión.

**Qué aporta**
La barra de acciones de selección múltiple (que depende de `hasSelection()`) se actualiza bien al marcar o desmarcar.

**Cómo enfocarlo**
Plantilla, con un test unitario de `computed` sobre `selected`.

---

## `data/acl/acl.model.ts`, `display-provider.ts`, `long-task.model.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Son interfaces correctas. `LongTask*` repite literales de estado (`'PENDING' | 'PROCESSING' | 'FINISHED' | 'FAILED'`).

**Qué cambiar**
`export type TaskStatus = 'PENDING' | …` reutilizado. Sin más cambios.

**Qué aporta**
Coherencia.

**Cómo enfocarlo**
Opcional.

---

## `interaction/local-route-state/local-route-state.service.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- Está `providedIn: 'root'`, pero inyecta `ActivatedRoute`. En root, eso es **la ruta raíz**, no la del componente, así que funciona con query params pero no con params de ruta, por casualidad.
- La suscripción del constructor a `queryParams` no se cancela nunca.
- `watch()` emite el estado inicial dentro de un `setTimeout`.
- Al destruir, `clear()` **navega** para borrar los query params. Si el componente se destruye porque el usuario ya navega a otra página, se lanza una segunda navegación que compite con la primera.

**Qué cambiar**
- Proveer el servicio a nivel de componente (`providers: [LocalRouteStateService]`) o leer de `router.routerState` de forma explícita.
- `takeUntilDestroyed`.
- En `clear()`, comprobar `router.getCurrentNavigation()` y no navegar si ya hay una navegación en curso, o usar `replaceUrl: true` + `skipLocationChange` según el caso.

**Qué aporta**
No hay navegaciones fantasma al salir de una pantalla y el botón "atrás" del navegador se comporta de forma predecible.

**Cómo enfocarlo**
Plantilla. Probar el caso "abrir detalle → pulsar otro ítem del menú".

---

## `interaction/local-route/local-route-context.component.ts` / `local-router.service.ts` / `local-route.directive.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
- `LocalRouterService` accede al contexto con `(this as any).context`, asignado por el componente (`(register as any).context = this`).
- Si no hay plantillas, el componente pinta un `<h1>` de ayuda para desarrolladores ("To use a local route…").
- La directiva acepta `initial="true"` como string o boolean.

**Qué cambiar**
- Un `InjectionToken<LocalRouteContext>` en lugar de `as any`.
- Inputs con `booleanAttribute` (`initial = input(false, { transform: booleanAttribute })`).
- Mensaje de ayuda solo con `isDevMode()`.

**Qué aporta**
Tipado y no aparecen mensajes de desarrollo en producción.

**Cómo enfocarlo**
Plantilla.
