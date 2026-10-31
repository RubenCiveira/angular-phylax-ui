# 05 · Contexto compartido (`src/app/shared/context`)

[← Índice](README.md)

Esta capa resuelve la configuración en runtime, la i18n, la identidad, la autorización, la observabilidad y el estado global. Las abstracciones están bien pensadas (proveedores de identidad intercambiables, configuración externa, mezcla de idiomas por prefijo), pero tienen **errores funcionales**, **diálogos nativos bloqueantes** y **APIs sin tipar**, lo que dificulta adaptarlas.

---

## `context/identity/oidc-identity/step-up.interceptor.ts` + `step-up.service.ts` · 🔴 Crítico · 🧩 Plantilla

**Estado actual**
- `StepUpInterceptor` es un interceptor de clase registrado con `HTTP_INTERCEPTORS` en `OidcLoginModule`. `app.config.ts` llama a `provideHttpClient()` **sin** `withInterceptorsFromDi()`, así que **Angular nunca lo ejecuta**: un 401 con `insufficient_user_authentication` llega tal cual al componente.
- Si funcionara, `StepUpService.start()` guarda en `sessionStorage` el método, la URL y el **cuerpo** de la petición (que puede llevar secretos: contraseñas, `secretOauth`…). Al volver, `resumeIfPending()` repite la petición con `.subscribe()` y **descarta el resultado**: el usuario no ve si la operación se completó.

**Qué cambiar**
1. Convertirlo en interceptor funcional y registrarlo de forma explícita:
   ```ts
   export const stepUpInterceptor: HttpInterceptorFn = (req, next) => {
     const stepUp = inject(StepUpService);
     return next(req).pipe(catchError((err: HttpErrorResponse) => { … }));
   };
   provideHttpClient(withInterceptors([stepUpInterceptor]))
   ```
2. No guardar el cuerpo: guardar solo `{ method, url, returnUrl }`, avisar al usuario ("Se requiere verificación adicional") con un diálogo de confirmación **antes** de redirigir y, al volver, dejarle en la misma pantalla para que repita la acción. Si hay que reanudar, notificar el resultado con `NotifyService`.

**Qué aporta**
La autenticación reforzada funciona, no quedan secretos en el almacenamiento y el usuario sabe qué ha pasado.

**Cómo enfocarlo**
Cambiar a la vez `app.config.ts`, `oidc-login.module.ts` (→ `provideOidcIdentity()`) y el interceptor. Añadir un test de integración con `HttpTestingController` que devuelva el 401 con la cabecera `WWW-Authenticate`.

---

## `context/identity/oidc-identity/oidc-identity-provider.service.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- **Diálogos nativos bloqueantes y sin traducir**:
  - `confirm('Error with the profile. Remove credentials')`
  - `alert('Wrong response')`
  - `confirm('UNABLE TO LOAD OIDC. Remove credentials')`
- `showDebugInformation: true` está fijado, así que la librería escribe en consola los detalles del flujo (claims, estado). Como `InstrumentationService` **intercepta `console.log`**, esa información **se envía al colector de logs**.
- `console.log('EVENTO OIDC', e)` en cada evento sin manejar, que también se exporta.
- `disablePKCE: false, // setup['pkce']`: la opción `pkce` de `phylax-config.json` (hoy `false`) **se ignora**. Es correcto que PKCE esté activo, pero la configuración engaña.
- `scope: setup['scope'] + ' offline_access'` lo fuerza siempre.
- Refresh duplicado: en `token_expires` hace `setTimeout(() => refreshToken(), 1000)` a mano, y además está `timeoutFactor: 0.75`. Puede producir refrescos concurrentes.
- `persistent: true` → tokens en `localStorage` (cualquier XSS puede leerlos).
- `autenticateInHttp()` no se usa en ningún sitio.
- Los roles salen de `info.info.groups || ['guest']`: el claim está fijado en el código.

**Qué cambiar**
- Sustituir `alert` y `confirm` por un `IdentityUiPort` (interfaz inyectable) cuya implementación por defecto use `MatDialog` y `transloco`: `identity.errors.profile`, `identity.errors.discovery`…
- `showDebugInformation: isDevMode() && setup['debug'] === true`.
- Quitar `console.log('EVENTO OIDC')` o pasarlo a `logger.debug`.
- Quitar `pkce` de la configuración (PKCE siempre activo) o respetarlo con un *warning*.
- `scope` completo desde la configuración, sin concatenar.
- Usar `setupAutomaticSilentRefresh()` o el refresh token de la librería, y quitar el `setTimeout` manual.
- `persistent` por defecto a `false` (`sessionStorage`) y documentar el riesgo.
- Claim de roles configurable: `"roles-claim": "groups"`.
- Borrar `autenticateInHttp`.

**Qué aporta**
- Seguridad: ningún token ni claim acaba en los logs y los tokens no persisten por defecto.
- Usabilidad: errores comprensibles y traducidos, sin diálogos del navegador.
- Adaptabilidad: los claims y scopes se ajustan por configuración para otros IdP (Keycloak, Entra ID, Auth0…).

**Cómo enfocarlo**
Plantilla. Empezar por quitar los `console.log` y `showDebugInformation` (cambio de una línea con impacto en seguridad).

---

## `context/identity/identity.service.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- `private map = {} as any`.
- `bootstrap(name)` hace `this.map[name].bootstrap()`. Si no hay handler (tipo mal escrito en la configuración, o configuración que aún no ha llegado), lanza `TypeError` dentro del **guard** y de `AppComponent`, y la app se queda en "Loading...".
- Mensajes de error en español fijados: `'Hay más de un manager para …'`.
- La suscripción a `appConfig['identity']` nunca se cancela y vuelve a crear handlers en cada emisión.

**Qué cambiar**
```ts
private readonly handlers = new Map<string, IdentityHandler>();
bootstrap(name: string): Observable<void> {
  const h = this.handlers.get(name);
  return h ? h.bootstrap() : throwError(() => new IdentityNotConfiguredError(name));
}
```
- Usar `take(1)` en la configuración, o comparar y reconfigurar solo si cambia.
- Mensajes en inglés técnico (son logs) a través del `Logger`.

**Qué aporta**
Errores de configuración claros, en lugar de una pantalla de carga infinita.

**Cómo enfocarlo**
Plantilla. Va junto con el *timeout* de bootstrap en `AppComponent` (doc 04).

---

## `context/authorization-access/guards/is-authenticated.guards.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- Se tipa como `CanActivateChildFn`, pero se usa en `canActivate`.
- `const parentUrl = …` se calcula y no se usa.
- Redirige a `/unauthorized` **sin `returnUrl`**, aunque `UnauthorizedComponent` lee `queryParamMap.get('returnUrl')`. La vuelta depende de `AuthorizationAccessService`, que guarda en `localStorage` la última URL.
- Solo hay un guard (`isAuthenticated`). No hay guard por **rol o permiso**, aunque `UserInfo.roles` y el ACL por entidad existen.

**Qué cambiar**
```ts
export const isAuthenticated: CanActivateFn = (_r, state) => authGuard(state, (u) => !!u.authenticated);
export const hasPermission = (perm: string): CanActivateFn => (_r, state) =>
  authGuard(state, (u) => inject(PermissionService).has(perm));
function authGuard(state, check) {
  … map((u) => check(u) ? true : router.createUrlTree(['/unauthorized'], { queryParams: { returnUrl: state.url } }));
}
```

**Qué aporta**
Se vuelve a la página pedida tras iniciar sesión, se puede controlar el acceso por permiso y los tipos son correctos.

**Cómo enfocarlo**
El registro de features (doc 04) declara `permission` y la ruta aplica `hasPermission(f.permission)`.

---

## `context/authorization-access/unauthorized.component.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
`template: '<h1>unauthorized</h1>'`. El usuario no tiene ningún botón para **iniciar sesión** ni explicación. La página solo redirige si el usuario ya está autenticado.

**Qué cambiar**
Página con `ErrorPageComponent` (`error-401.png` ya existe), texto traducido, botón "Iniciar sesión" (`identity.login('main')`) y, si está autenticado pero sin permiso (403), "Volver al inicio" y "Cambiar de cuenta".

**Qué aporta**
El usuario siempre sabe cómo salir de la página. Hoy es una pantalla sin salida.

**Cómo enfocarlo**
Distinguir 401 (sin sesión) y 403 (sin permiso) con un query param `reason`.

---

## `context/authorization-access/authorization-access.service.ts` / `.component.ts` / `.provider.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- El servicio escribe en `localStorage` en **cuatro eventos** por navegación (`ResolveStart`, `ResolveEnd`, `NavigationEnd`, `NavigationCancel`).
- La ruta por defecto `['en-EN', 'main']` está fijada (ver la incoherencia de idiomas en doc 04).
- El componente de `/login-redirect` pinta `'<h1>Home</h1>'` mientras procesa el código.
- La suscripción a `bootstrap` del componente no se cancela.
- `provider.ts` usa `importProvidersFrom(RouterModule.forChild(routes))` para añadir rutas, y `provideAppInitializer` solo para instanciar el servicio.

**Qué cambiar**
- Guardar solo en `NavigationEnd` (y usar `sessionStorage`: la última ruta es por pestaña).
- Leer los valores por defecto de `DefaultsService`.
- Plantilla con spinner y texto `auth.redirecting`.
- `takeUntilDestroyed()`.
- Registrar las rutas `login-redirect` y `unauthorized` mediante el mismo `ROUTES` multi que el resto.

**Qué aporta**
Menos escrituras, la última ruta no se mezcla entre pestañas y la transición de login queda más limpia.

**Cómo enfocarlo**
Plantilla.

---

## `context/config/app-config.service.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- `AppConfigService` es un `Proxy` con índice `string → Observable<any>`: `appconfig['identity.main.profile']`, `appConfig['meta.title']`. **No hay tipos ni autocompletado**, y una errata devuelve `undefined` sin avisar.
- Usa `APP_INITIALIZER`, que está deprecado (sustituido por `provideAppInitializer`).
- `$$_loadConfig` hace `fetch` **sin control de errores**: si el JSON no existe o está mal formado, la app se rompe sin mensaje.
- `deepMerge(env, config)` **muta** el objeto `environment` importado.
- Nombres internos poco claros: `_$$_AppConfigService`, `$$_loadConfig`, `window._remove_mfa_config_url` (probablemente quería decir "remote").
- `value()` emite `null` antes de cargar. Algunos consumidores (`IdentityService` con `Object.entries`) fallarían si se suscribieran antes.

**Qué cambiar**
1. Esquema tipado y validado:
   ```ts
   export interface AppConfig {
     meta: { title: string };
     api: Record<string, { url: string; identity?: string; headers?: Record<string,string> }>;
     i18n: { 'default-lang'?: string; 'available-langs': string[] };
     identity: Record<string, OidcIdentityConfig>;
     telemetry?: TelemetryConfig;
     theme?: ThemeConfig;     // doc 02
     layout?: LayoutConfig;   // footer, nav por defecto…
   }
   export const APP_CONFIG = new InjectionToken<Signal<AppConfig>>('APP_CONFIG');
   ```
   - Lectura tipada: `config().identity['main'].issuer`, o helper `configValue('identity.main.issuer')` con tipos de ruta (template literal types).
2. `provideAppInitializer(async () => { try { … } catch (e) { renderFatalConfigError(e); throw e; } })`, que muestra un mensaje legible ("No se pudo cargar config/phylax-config.json").
3. `structuredClone(environment)` antes de mezclar.
4. Mover la lógica de MFE a `mfe-config.adapter.ts` (solo si el proyecto es MFE, doc 01).
5. Publicar un `phylax-config.schema.json` (JSON Schema) para validar en CI y tener autocompletado en el IDE al editar la configuración.

**Qué aporta**
- Quien despliega sabe qué claves existen (schema), quien desarrolla tiene autocompletado y los errores de configuración se ven al arrancar.
- Base para añadir `theme` y `layout` de forma segura.

**Cómo enfocarlo**
1. Mantener temporalmente el `Proxy` como fachada *deprecated* sobre el nuevo servicio tipado.
2. Que el generador emita el esquema a partir de sus metadatos (APIs, identidades).

---

## `context/config/i18n-loader.service.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- `prodMode: false` fijado.
- Valor por defecto `'en'` cuando la configuración no trae `default-lang`, pero `available-langs` (`es, pt, fr, de`) no incluye `en`. El código lo añade **mutando** el array de la configuración.
- Si falta una clave, Transloco devuelve la **clave literal** (`access.oauth-client.list.filter.button`), así que las pantallas generadas con traducciones incompletas muestran claves técnicas.
- El `url()` de MFE usa de nuevo `window._remove_mfa_config_url`.
- No se cachean las traducciones entre cambios de idioma de ida y vuelta (Transloco ya cachea, pero `forkJoin` de varios ficheros por prefijo multiplica las peticiones).

**Qué cambiar**
- `prodMode: !isDevMode()`.
- No mutar la configuración (`[...availables, baseLang]`).
- Añadir un `TranslocoMissingHandler` que, en producción, **humanice** la última parte de la clave (`allow-all-scopes.title` → "Allow all scopes") y en desarrollo la marque visualmente (`⟦key⟧`) y la registre una sola vez.
- Opcional: `fallbackLang` configurable.

**Qué aporta**
Aunque falten traducciones, la UI sigue siendo legible, y en desarrollo se detecta enseguida qué falta.

**Cómo enfocarlo**
Plantilla. El *missing handler* es muy útil en una base generada, donde las traducciones suelen ir por detrás.

---

## `context/observability/error.service.ts` · 🔴 Crítico · 🧩 Plantilla

**Estado actual**
- `GlobalErrorHandler` está definido, pero **no está registrado** en ningún provider (`grep ErrorHandler` no encuentra `provide: ErrorHandler`). Los errores no controlados solo van a la consola por defecto.
- `storeError()` hace `this.appConfig['name'].subscribe(...)` **sin `take(1)`**: cada error deja una suscripción viva, y si la configuración vuelve a emitir (MFE), **todos los errores anteriores se reenvían** como spans nuevos.
- Deja `console.log('HAS TRACER')` en cada error (y se exporta a los logs).
- Mensaje fijado en español: `'Ha ocurrido un error, la lista de datos enviados es incorrecta'`.
- El mecanismo de "error diferido" (`initialiceError` con `setTimeout(2000)` + `cancelError`) permite que un componente gestione el error antes de que salga el diálogo. Es útil, pero no está documentado y usa propiedades que se añaden al objeto error (`error.timeout`, `error.hidden`).
- `displayedError` no se usa.

**Qué cambiar**
- Registrar `{ provide: ErrorHandler, useClass: GlobalErrorHandler }` en `app.config.ts`.
- `storeError`: llamar directamente a `this.provider.startSpan(...)` (el nombre del servicio ya está en el `Resource` de OpenTelemetry) sin suscribirse a la configuración.
- Quitar el `console.log`.
- Pasar los mensajes por `transloco` (`errors.422`, `errors.generic`).
- Formalizar el patrón diferido con una API explícita:
  ```ts
  this.repo.update(item).pipe(handledErrors([422]))   // operador que marca el error como gestionado
  ```
  y usar un `WeakMap<object, Timeout>` en lugar de mutar el error.

**Qué aporta**
Los errores llegan a la telemetría, se eliminan una fuga de memoria y un reenvío duplicado, y los mensajes se traducen.

**Cómo enfocarlo**
Registrar el handler y añadir `take(1)` ya. Formalizar la API después.

---

## `context/observability/instrumentation.service.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- **Reemplaza `console.log` y `console.error` globalmente** para enviar todo al colector OTLP, sin niveles, filtros ni anonimización. Cualquier `console.log` de cualquier librería (incluida la depuración de OIDC con claims) sale del navegador.
- `JSON.stringify(args, safeReplacer(), 2)` en **cada** log (con indentación).
- El token se llama `APP_INSTRUMETATION` (errata) y `buildInstrumentation` envuelve la configuración sin aportar nada.
- `// TODO: ¿podemos añadir usuario, device...?`: no hay atributos de sesión, tenant ni versión.
- Todo OpenTelemetry se importa de forma estática (ver doc 03).

**Qué cambiar**
- Un `Logger` propio (`debug/info/warn/error`) con nivel mínimo configurable (`telemetry.logger.level`), una lista de campos a redactar (`token`, `password`, `secret`, `authorization`) y muestreo.
- Interceptar `console` solo si `telemetry.logger.capture-console: true` (por defecto `false`).
- Atributos de recurso: `service.version`, `deployment.environment`, `app.tenant` (dinámico como atributo de span) y `session.id` (aleatorio por pestaña). **Nunca** email ni nombre.
- Carga diferida (doc 03).

**Qué aporta**
Telemetría útil y conforme al RGPD, sin filtrar secretos y con menos coste por log.

**Cómo enfocarlo**
Plantilla. El generador añade el `Logger` aunque la telemetría esté desactivada (con implementación de consola). Así los componentes generados usan `logger.debug` en lugar de `console.log` (hay 32 ficheros con `console.log`).

---

## `context/state/app-state.service.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- `buildWritableSignal` crea un `BehaviorSubject` con `.set` añadido mediante `as any`. No es un signal de Angular, aunque se llame así.
- `ArrayOfSignals` es un `Proxy` que crea entradas al leer cualquier propiedad (`appState.context['loquesea']` crea y persiste una clave nueva). Es difícil de tipar y de depurar.
- A nivel de módulo hace `window.addEventListener('state-item', …)`: un efecto secundario al importar, para sincronizar entre micro-frontends.
- Cada `set` compara con `JSON.stringify`.
- `language` por defecto `'es'` fijado (cuarto valor por defecto distinto, ver doc 04).
- `currentContext()` no se usa.

**Qué cambiar**
- Estado con signals reales y claves tipadas:
  ```ts
  readonly language = persistedSignal('selected-language', defaults.language);
  readonly tenant = persistedSignal('selected-tenant', defaults.tenant);
  readonly user = signal<Record<string, UserInfo>>({});
  readonly context = signal<Record<ContextKey, ContextValue | null>>({});
  ```
  con `toObservable()` para quien siga en RxJS.
- La sincronización entre MFE y **entre pestañas** con `BroadcastChannel('app-state')` o el evento `storage`. Así, cerrar sesión o cambiar de tenant en una pestaña se refleja en las demás, una mejora de usabilidad que hoy no existe.
- Quitar el listener a nivel de módulo (moverlo al constructor del servicio).
- Borrar `currentContext()`.

**Qué aporta**
Estado predecible y tipado, compatible con `OnPush` y zoneless (doc 03), y las pestañas quedan coherentes.

**Cómo enfocarlo**
Migración gradual: primero `language` y `tenant`, después `userInfo` y por último `context`. Mantener los métodos antiguos como fachada durante una versión.

---

## `context/identity/user-info.model.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
`class UserInfo` con todos los campos `readonly` y opcionales, que nunca se instancia como clase (se usa `{}`). Incluye `token` (el access token está en el estado global y es accesible para cualquier componente).

**Qué cambiar**
`interface UserInfo` con `authenticated: boolean` obligatorio, `roles: string[]` y `permissions?: string[]`. Sacar `token` del modelo de UI: el header `Authorization` lo pone un interceptor que pide el token al `IdentityHandler`.

**Qué aporta**
Menos exposición del token y tipos más estrictos.

**Cómo enfocarlo**
Va junto con la refactorización de `ClientService.prepareWithConf` (doc 06).
