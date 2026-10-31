# 08 · Features generadas (`src/app/features/**`)

[← Índice](README.md)

Hay 26 entidades en 4 dominios (`access`, `identity`, `notification`, `template`), con unos 1.300 ficheros. Cada entidad sigue el mismo patrón (ejemplo: `access/oauth-client`, 60 ficheros):

```
model/<e>.model.ts                       ← interfaz, filtro, proyección, conversor
repository/<e>-repository.service.ts     ← fachada sobre RepositoryService + ApiProvider
components/<e>-view-list/                 ← lista + filtros + acciones
components/<e>-view-search/               ← formulario de búsqueda
components/<e>-view-form-group/           ← formulario de edición (ControlValueAccessor)
components/<e>-view-detail/               ← detalle
components/<e>-view-standar-actions/      ← registro de acciones
actions/<e>-view-{create,edit,detail,delete,delete-selection,enable,…}-action/  ← 6–9 acciones × 4 ficheros
routes/<e>-view-list-route/               ← página + NgModule de ruta
```
Cada componente lleva su `NgModule` (344 módulos y 344 componentes `standalone: false`).

**Todas las recomendaciones de este documento se aplican en la plantilla del generador** 🧩. Los nombres de fichero indican el **tipo de artefacto** (vale para las 26 entidades).

---

## `components/*-view-form-group/*.component.html` (`editable-choose`) · 🔴 Crítico

**Estado actual**
En las **21** apariciones de `<editable-choose>`, el generador emite las opciones en **MAYÚSCULAS**, mientras que el modelo, los valores por defecto del `FormGroup` y las claves i18n están en minúsculas:

| Artefacto | Valor |
|---|---|
| `oauth-client.model.ts` | `tokenEndpointAuthMethod: 'client-secret-basic' \| 'client-secret-post' \| …` |
| `oauth-client-view-form-group.component.ts` | `new FormControl<any>('client-secret-basic', …)` |
| `oauth-client-view-form-group.component.html` | `[options]="['CLIENT-SECRET-BASIC', 'CLIENT-SECRET-POST', 'PRIVATE-KEY-JWT', 'NONE']"` |
| `public/i18n/access/oauth-client/en.json` | `"options": { "client-secret-basic": "client_secret_basic", … }` |

Consecuencias:
- al crear, el valor por defecto (`client-secret-basic`) **no coincide con ninguna opción**, así que el select aparece vacío aunque el control tenga valor;
- al editar un registro existente pasa lo mismo: **no se ve el valor guardado**;
- si el usuario elige una opción, se envía `'CLIENT-SECRET-BASIC'` al backend, que espera minúsculas, y puede fallar la validación o guardarse un valor no canónico;
- la etiqueta busca la clave `…options.CLIENT-SECRET-BASIC`, que no existe, así que se muestra la clave técnica.

Afecta también a los selectores de orden (`'CODE-ASC'`, `'NAME-DESC'`…), a `GOOGLE/GITHUB/…` (tenant-login-provider), `OPEN/TOKEN-REQUIRED/DISABLED`, `MARKETING/ANALYTICS/…`, `MAIL/SMS/HTML`, etc.

**Qué cambiar**
Que el generador emita los **mismos literales que el modelo** (minúsculas, kebab-case):
```html
<editable-choose formControlName="tokenEndpointAuthMethod" … [options]="tokenEndpointAuthMethodOptions" />
```
```ts
// model/oauth-client.model.ts
export const TOKEN_ENDPOINT_AUTH_METHODS = ['client-secret-basic', 'client-secret-post', 'private-key-jwt', 'none'] as const;
export type TokenEndpointAuthMethod = typeof TOKEN_ENDPOINT_AUTH_METHODS[number];
```
Así el tipo, las opciones y la validación salen de **una única constante**.

**Qué aporta**
Los formularios muestran y guardan valores correctos, y las etiquetas se traducen.

**Cómo enfocarlo**
1. Corregir la plantilla del generador (seguramente aplica `toUpperCase()` a los literales del enum) y regenerar.
2. Añadir un test generado por entidad: `expect(OPTIONS).toContain(form.value.campo)`.
3. Si el backend acepta ambas formas, normalizar también en el repositorio por seguridad.

---

## `components/*-view-list/*.component.html` (columnas) · 🔴 Crítico

**Estado actual**
- **Muestra secretos en la tabla.** El generador crea una columna por cada campo del modelo, incluidos los sensibles:
  - `oauth-client`: `row.secretOauth`, `row.registrationAccessToken`
  - `user`: `row.password`, `row.temporalPassword`
  - `smtp-outbound-config`: `row.password`
  - `resource-server`: `row.apiKey`

  Aunque el algoritmo de anchura oculte algunas columnas, el **valor llega al DOM** y se ve en monitores anchos, al imprimir o con el inspector.
- **Hasta 47 columnas** por entidad (oauth-client), todas con el mismo peso. El algoritmo de `list-view` decide cuáles se ven según la anchura.
- Los valores se pintan en crudo: booleanos como `true`/`false`, fechas como ISO, enums como `client-secret-basic`, JSON en una celda (`grantTypesJson`, `jwksJson`).

**Qué cambiar**
1. Metadatos de campo en el generador:
   ```yaml
   secretOauth:      { type: password, sensitive: true }       # nunca en lista/detalle; solo "cambiar"
   code:             { type: text, list: { visible: true, priority: 1 } }
   enabled:          { type: boolean, list: { visible: true, render: chip } }
   grantTypesJson:   { type: json, list: false }
   registeredAt:     { type: datetime, list: { visible: false, render: relative-date } }
   ```
2. `sensitive: true` hace que **no se genere** columna, ni valor en el detalle, ni se pida en el GET (si el backend lo permite), y que en el formulario se muestre como "••••• [Cambiar]".
3. Solo las columnas con `list.visible` (4–6) aparecen por defecto. El resto están disponibles en el selector de columnas (doc 07).
4. Renderizadores por tipo: `boolean` → icono `check`/`close` con `aria-label` (o chip "Activo/Inactivo"); `datetime` → `| date: 'short'` con el locale activo; `enum` → la etiqueta traducida `…options.<valor>`; `$ref` → `display()` de la entidad referenciada.

**Qué aporta**
- Seguridad: los secretos no se exponen en la UI.
- Usabilidad: listas legibles con la información relevante primero.

**Cómo enfocarlo**
1. **Ya:** quitar a mano de las 4 plantillas generadas las columnas sensibles. Es urgente y está acotado.
2. Después: añadir `sensitive` y `list` a los metadatos del generador y regenerar.

---

## `components/*-view-list/*.component.html` (resto de la plantilla) · 🟠 Alto

**Estado actual**
- `<h1>No content</h1>` literal (25 ficheros). No se traduce y no explica cómo seguir.
- Etiquetas accesibles erróneas: `showSearchLabel = signal("Refresh")` y `hideSearchLabel = signal("Refresh")`, así que el botón de mostrar u ocultar filtros se anuncia como **"Refresh"** (60 apariciones). `refreshDataLabel` tampoco se traduce.
- Estilos inline (`style="display: flex; …"`, `<div style="flex: 1">`) (doc 02).
- Indentación y saltos de línea irregulares: el HTML generado no se formatea (`</button>    </div>`, `</list-view-row>        <list-view-table>`).
- `[mode]="'card'"` fijo en todas las entidades, aunque `list-view` ya tiene modo tabla.
- El panel de filtros es un `mat-expansion-panel` que **siempre** ocupa una franja, aunque esté cerrado.

**Qué cambiar**
- Estado vacío traducido con acción: "No hay clientes OAuth. [Crear el primero]" (si la acción `create` está permitida) o "Ningún resultado con estos filtros. [Limpiar filtros]".
- Etiquetas desde i18n: `'common.showFilters' | transloco`, `'common.hideFilters'`, `'common.refresh'`.
- Clases de `_entity-list.scss` en lugar de inline (doc 02).
- Modo inicial desde los metadatos (`list.mode: table | card`) y un conmutador tabla/tarjetas en la toolbar, persistido.
- Mostrar los **filtros activos como chips** (con "x" para quitarlos) cuando el panel está cerrado: el usuario sabe que la lista está filtrada.
- Ejecutar Prettier tras generar (doc 01).

**Qué aporta**
Pantallas comprensibles, accesibles y consistentes, y el usuario ve siempre qué filtros tiene puestos.

**Cómo enfocarlo**
Mejor todavía: un componente de toolkit `<entity-list-layout>` que incluya toolbar, filtros, chips, estado vacío y lista. La plantilla generada solo declara columnas y acciones, y pasa de ~190 a ~40 líneas.

---

## `components/*-view-list/*.component.ts` · 🟡 Medio

**Estado actual**
- `makeSearch()` copia el filtro campo a campo con `if` (dos veces: filtros externos y del formulario), ~30 líneas por entidad.
- `effect(() => { setTimeout(() => this.makeSearch()) })`: un effect sin dependencias de signal (solo lee `this.filters()` dentro del `setTimeout`, fuera del contexto reactivo), así que **no se vuelve a ejecutar si cambia el input `filters`**.
- `limit: 10` fijo (en pantallas altas, 10 filas no llenan la tabla y se dispara la paginación varias veces seguidas).
- `prev() { console.log('PREV'); }`.
- `search = new FormControl<any>(undefined)`.
- El estado de los filtros **no se refleja en la URL**: al recargar o compartir el enlace se pierden.

**Qué cambiar**
```ts
readonly query = computed(() => buildQuery(this.filters(), this.searchValue()));   // helper genérico por metadatos
constructor() { effect(() => this.list.fetch(this.query())); }
```
- `buildQuery` genérico en el toolkit, con un mapa de campos generado (`{ tenant: 'ref', tenants: 'ref[]', code: 'text' }`).
- `pageSize = input(DEFAULT_PAGE_SIZE)`, con valor por defecto desde la configuración (`data.page-size`, p. ej. 25).
- Sincronizar los filtros con query params mediante `LocalRouteStateService.bind([...])`, que ya existe.
- Quitar `prev`.

**Qué aporta**
Menos código por entidad, los filtros externos reaccionan, los enlaces filtrados se pueden compartir y la paginación es más razonable.

**Cómo enfocarlo**
Plantilla y helper de toolkit.

---

## `model/*.model.ts` · 🟡 Medio

**Estado actual**
- Se declaran **tres veces** los mismos campos: `OauthClient`, `OauthClientProjection` (idéntica salvo las referencias, que pasan a `Signal`) y `oauthClientProjectionToValue()`, que copia campo a campo (~50 líneas).
- Sin formato (sin sangría, `'rs256' | 'es256' | 'eddsa' | null` con espacios irregulares).
- Los enums son literales sueltos, no hay constantes reutilizables (ver `editable-choose`).

**Qué cambiar**
```ts
export const OAUTH_CLIENT_REFS = ['tenant'] as const;
export type OauthClientProjection = Projected<OauthClient, typeof OAUTH_CLIENT_REFS[number], { tenant: TenantProjection }>;
export const oauthClientProjectionToValue = projectionToValue<OauthClient>(OAUTH_CLIENT_REFS);
```
con `Projected<>` y `projectionToValue()` genéricos en `shared/data`. Constantes `as const` para cada enum.

**Qué aporta**
Si se añade un campo, se toca **un** sitio. Modelos más cortos y legibles.

**Cómo enfocarlo**
Plantilla y utilidades de tipos en `shared/data/projection.ts`.

---

## `repository/*-repository.service.ts` · 🟡 Medio

**Estado actual**
- Formato roto (`}    update(item…`, `publicQueryFilter` en una sola línea de ~600 caracteres).
- `selectorProvider(filter?)` **muta** el objeto del signal: `const filterValue = filter ? filter() : { limit: 10 }; filterValue.search = text;`. Si `filter` es un `input()`, se modifica el valor del input del componente padre.
- Host lógico `'http://net-civeira-phylax'` repetido como literal en cada repositorio.
- `displayProvider()` devuelve `item.code!`, el mismo campo para listas, selectores y avatares, sin opción de personalizar.
- `publicQueryFilter` convierte camelCase a kebab-case campo a campo, a mano.

**Qué cambiar**
- `const filterValue = { ...(filter?.() ?? { limit: 10 }), search: text };`.
- Constante `API_HOST_PHYLAX = 'http://net-civeira-phylax'` en un fichero generado `bootstrap/api-hosts.ts`.
- `display` configurable en los metadatos (`display: '{{clientName}} ({{code}})'`).
- `publicQueryFilter` genérico: `toQueryParams(filter, QUERY_MAP)` con el mapa generado.

**Qué aporta**
Se elimina un efecto secundario, y es más fácil cambiar el host del API o el texto que identifica cada entidad.

**Cómo enfocarlo**
Plantilla.

---

## `actions/*-action/*.component.ts` (≈ 9 por entidad, ~230 en total) · 🟠 Alto

**Estado actual**
Cada acción tiene ~90 líneas casi idénticas:
- textos por defecto **fijados** y mezclados de idioma (`title = signal('Borrando el item')`, `label = signal('Delete')`, `tooltip = signal('Borra el elemento seleccionado')`, `dismiss = 'Close'`, `report = 'Deleted...'`);
- `transloco.selectTranslateObject(...).subscribe(...)` y `this.acl.fetch(null).subscribe(...)` **sin cancelar** (se acumulan si el componente se crea y destruye varias veces);
- erratas que se propagan a cientos de ficheros: `dialgoRef`, `snakeBar`, `standar-actions`;
- todo en una línea: `@Component({  selector: …,  standalone: false, …})export class …`;
- `MatDialog` y `MatSnackBar` se inyectan directamente (doc 03).

Los textos i18n de las acciones tienen **errores de traducción automática**: `en.json → action.delete.title: "Ticket passed"`, `report: " has been cleared."`; y `es.json` está a medio traducir (`"label": "Delete oauth client"`, `"createButton": "Create"`).

**Qué cambiar**
- Heredar de `BaseAction` (doc 07):
  ```ts
  @Component({ selector: 'oauth-client-delete-action', template: CONFIRM_ACTION_TEMPLATE, changeDetection: OnPush })
  export class OauthClientDeleteAction extends ConfirmAction<OauthClient> {
    readonly name = 'delete';
    protected execute([item]: OauthClient[]) { return this.repo.deleteByKey(item.uid); }
  }
  ```
  `ConfirmAction` gestiona diálogo, ACL, textos (`action.<name>.*` con *fallback* a `common.action.<name>.*`), snackbar, cierre y limpieza (`DestroyRef`).
- Textos **genéricos** en el i18n global (`common.action.delete.title: "Eliminar {{entity}}"`) y textos por entidad solo cuando hagan falta.
- Corregir las erratas en la plantilla (`dialogRef`, `snackBar`, `standard-actions`).
- Revisar las traducciones (doc 09).

**Qué aporta**
- ~20.000 líneas generadas menos.
- Cambiar el comportamiento de todas las acciones (por ejemplo, "deshacer" en el snackbar en lugar de confirmación previa) se hace en un sitio.
- Textos coherentes y bien traducidos, sin fugas de suscripciones.

**Cómo enfocarlo**
Empezar por las acciones de confirmación (`delete`, `enable`, `disable` y sus variantes de selección), que son 6 de las 9 y casi idénticas entre sí.

---

## i18n de las plantillas generadas (claves) · 🔴 Crítico (a verificar en navegador)

**Estado actual**
En una misma entidad conviven **dos convenciones de clave**:
- `'access.oauth-client.list.filter.button'` y `label="access.oauth-client.form-group.code"` (95 usos en oauth-client): con punto;
- `'access/oauth-client.action.delete.title'` (26 usos): con barra, que es el **alias** declarado en `provideTranslocoScope({ scope: 'access/oauth-client', alias: 'access/oauth-client' })`.

Transloco aplana las traducciones de un scope con el prefijo `<alias>.` (ver `getMappedScope`/`scopeMapping` en `@jsverse/transloco`), así que **solo la forma con barra** debería resolver contra `public/i18n/access/oauth-client/*.json`. La forma con punto apuntaría al i18n global (`public/i18n/es.json` = `{"info":"Module"}`) y mostraría la clave.

**Qué cambiar**
1. **Comprobarlo en el navegador** (pantalla de lista y formulario de oauth-client en `es`).
2. Unificar en una convención. Recomendada: alias **sin barras** (`alias: 'oauthClient'`) o `scopes.keepCasing` + alias `access.oauth-client` (Transloco admite puntos en el alias), y que el generador use **siempre** `<alias>.<sección>.<clave>`.
3. Añadir `transloco-keys-manager` (`find --emit-error-on-extra-keys`) en CI para detectar claves que faltan o sobran.

**Qué aporta**
Todas las etiquetas se traducen y se detecta en CI cualquier clave rota.

**Cómo enfocarlo**
Verificar primero. Si se confirma, es la corrección de mayor impacto visual del proyecto.

---

## `components/*-view-form-group/*.component.ts` / `.html` · 🟡 Medio

**Estado actual**
- Constructor de ~80 líneas en una sola línea lógica (`acl: Tick<…>;    uid = computed(…);    tenantProvider: …;`).
- Los formularios con muchos campos (oauth-client: más de 45) se pintan **todos seguidos** en una rejilla de 3 columnas, sin agrupar (seguridad, logout, tokens, metadatos…).
- `editable-repeat` usa como etiqueta `label="access.oauth-client-view.edit."` (clave incompleta y con punto final).
- Los valores por defecto técnicos (`grantTypesJson: '["authorization_code","refresh_token"]'`) se editan en un `textarea` como JSON.

**Qué cambiar**
- **Agrupación por secciones** en los metadatos (`group: 'security' | 'logout' | 'tokens' | 'metadata'`), que se pinta con `mat-expansion-panel` o pestañas, con las secciones avanzadas plegadas por defecto.
- Etiqueta correcta para los `editable-repeat` (`<scope>.form-group.<campo>`).
- Tipos de campo semánticos: `json-string-array` → `editable-chips`, `url` → `editable-text` con validador URL, `duration-seconds` → entero con sufijo "s".

**Qué aporta**
Formularios grandes que se pueden usar: el usuario ve primero lo esencial y no edita JSON a mano.

**Cómo enfocarlo**
Metadatos del generador. Encaja con `form-layout`, que ya soporta rejilla por breakpoint.

---

## `**/*.module.ts` y `standalone: false` (344 + 344) · 🟡 Medio

**Estado actual**
Cada componente, acción y página tiene su `NgModule`. Los componentes son `standalone: false`. Ninguno usa `ChangeDetectionStrategy.OnPush`.

**Qué cambiar**
- Generar componentes **standalone** (el valor por defecto desde Angular 19) con `imports` directos, y quitar los módulos.
- `changeDetection: ChangeDetectionStrategy.OnPush` en todas las plantillas (el estado ya está casi todo en signals).
- Rutas como `export const ROUTES: Routes = [...]` en lugar de `RouterModule.forChild` + NgModule.
- `provideTranslocoScope` en el `providers` de la ruta, no en cada módulo (hoy se repite en ~14 módulos por entidad).

**Qué aporta**
- ~344 ficheros menos y lazy loading más fino.
- Mejor rendimiento (OnPush) y camino abierto a zoneless (doc 03).
- Un único sitio para el scope de traducción por entidad.

**Cómo enfocarlo**
1. Probar en una entidad con el schematic oficial `ng g @angular/core:standalone`.
2. Llevar el resultado a las plantillas del generador.
3. Regenerar todo.

---

## `routes/*-view-list-route/*-page.component.ts` · ⚪ Bajo

**Estado actual**
`styles: [':host { flex: 1; display: flex; flex-direction: column; overflow: hidden; margin: 15px; }']`: estilos inline en el decorador, con margen fijo. No define `title`.

**Qué cambiar**
Usar la clase global `.entity-page` (doc 02) y definir `title` en la ruta (doc 04).

**Qué aporta**
Coherencia visual y títulos de pestaña.

**Cómo enfocarlo**
Plantilla.

---

## `access/security-domain/**` · 🟡 Medio

**Estado actual**
Feature parcial (solo `actions/security-domain-view-attributes` y `security-domain-view-scopes`), con scope `access/security-domain` **sin ficheros i18n** en `public/i18n`.

**Qué cambiar**
Generar `public/i18n/access/security-domain/{es,en}.json` o reutilizar las claves de la entidad padre.

**Qué aporta**
Las acciones de atributos y scopes se ven traducidas.

**Cómo enfocarlo**
Generador: emitir siempre el i18n de cada scope declarado.

---

## Cabecera `@autogenerated` (todos los ficheros) · 🟡 Medio

**Estado actual**
Casi todos los ficheros llevan `/* @autogenerated */`, pero no se distinguen ficheros "regenerables siempre" de ficheros "generados una vez y luego propios" (como `context.config.ts` o `menu.config.ts`). No hay mecanismo de *regiones protegidas*.

**Qué cambiar**
Tres marcas:
- `@generated` → se sobrescribe siempre;
- `@generated-once` → solo se crea si no existe;
- `@generated` + regiones `// <custom:imports> … // </custom:imports>` que el generador conserva al regenerar.

Y patrones de extensión sin editar lo generado: `*.custom.ts` al lado del generado, que exporta *hooks* (`extraColumns`, `extraActions`, `formOverrides`) que la plantilla importa si existen.

**Qué aporta**
Se puede **personalizar sin perder los cambios** al regenerar. Es la base de la adaptabilidad a largo plazo.

**Cómo enfocarlo**
Definir el contrato en el generador y documentarlo en el README (doc 01).
