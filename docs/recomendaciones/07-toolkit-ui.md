# 07 · Toolkit de UI (`src/app/shared/toolkit`)

[← Índice](README.md)

El toolkit es el **punto de palanca** de la base generada: si se arregla un componente aquí, se arreglan las 26 entidades a la vez. Tiene 133 ficheros (~9.800 líneas) y en él se deciden la accesibilidad, la personalización de estilos y la dependencia de Angular Material.

## Uso real de los componentes (búsqueda en `src/app/features`)

| Componente | Usos en features | Recomendación |
|---|---|---|
| `list-view`, `action-container`, `form-layout`, `editable-text/check/choose/selectone/repeat/textarea/integer/password` | Todas las entidades | **Núcleo**: invertir aquí |
| `long-task-view` | 56 | Núcleo |
| `editable-datetime` | 14 | Núcleo |
| `editable-upload` | 10 | Núcleo |
| `calendar-view`, `gantt-view`, `kanban-view`, `map-view`, `speed-dial` | **0** | Sacar a un paquete opcional |
| `editable-markdown`, `editable-sourcecode`, `editable-signature`, `editable-credit-card`, `editable-rrule`, `editable-cron`, `editable-phone`, `editable-address`, `editable-pin`, `editable-rating`, `editable-money`, `editable-color`, `editable-date-range` | **0** | Sacar a un paquete opcional |

---

## Componentes sin uso (`calendar-view/`, `gantt-view/`, `kanban-view/`, `map-view/`, `speed-dial/` y los 13 editables sin uso) · 🟠 Alto · 🧩 Plantilla

**Estado actual**
Se generan y se mantienen en **todos** los proyectos. Suman unas 4.000 líneas, sus SCSS tienen colores fijos (doc 02) y `editable-markdown`/`editable-sourcecode` arrastran 21,6 MB de assets (doc 03). Al no tener usos, el tree-shaking los quita del bundle, pero siguen costando mantenimiento, tiempo de test, ruido en Sonar y *upgrades* de Angular.

**Qué cambiar**
- Que el generador **solo copie los componentes que usan los metadatos** del proyecto (si ningún campo es `rrule`, no se copia `editable-rrule`).
- O publicarlos como librería opcional (`@phylax/toolkit-extras`), versionada aparte.

**Qué aporta**
Proyectos más pequeños, `ng update` más rápido y menos superficie que mantener al día con Material.

**Cómo enfocarlo**
Inventario por tipo de campo en el generador (`fieldType → componente`). Copia condicional.

---

## `editable/base-editable.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- `writeValue` y `setDisabledState` aplican el valor dentro de `setTimeout`: hay un parpadeo (el campo se pinta vacío o habilitado y cambia un *tick* después) y condiciones de carrera con `patchValue` seguidos.
- El "required" se detecta así: `validators({} as any)['required']`. Se llama al validador con un objeto falso, lo que puede **lanzar** con validadores propios y no detecta `Validators.required` compuesto con otros. Angular ya ofrece `control.hasValidator(Validators.required)`.
- Los mensajes de error solo son **claves** (`errorMessages = Object.keys(errors)`) y se traducen como `label + '.error.' + key`. **No se usan los parámetros** del error (`minlength.requiredLength`, `max.max`), así que no se puede decir "mínimo 8 caracteres".
- No hay soporte de **hint** (texto de ayuda) ni de `aria-describedby`.
- Si `visible()` es `false` y `showHiddenMark()` es `true`, pinta `----` literal (sin explicación ni accesibilidad).
- Añade clases al host con `Renderer2` en lugar de `host: { class: … }`.

**Qué cambiar**
```ts
@Directive({ host: { class: 'editable' } })
export abstract class BaseEditable<T> {
  label = input<string>();
  hint = input<string | undefined>();                 // nuevo
  appearance = input<MatFormFieldAppearance | undefined>(); // permite override por campo
  …
  writeValue(v: T) { this.value.set(v); }             // sin setTimeout
  setDisabledState(d: boolean) { this.disabled.set(d); }
  ngOnInit() { … this.required.set(this.control.hasValidator(Validators.required)); }
  protected errorList = computed(() => Object.entries(this.errors() ?? {}).map(([key, params]) => ({ key, params })));
}
```
- En las plantillas: `{{ label() + '.error.' + e.key | transloco: e.params }}` y `<mat-hint>{{ label() + '.hint' | transloco }}</mat-hint>` (si existe).
- Sustituir `----` por un componente `<editable-hidden-mark>` con `aria-label` traducido ("Campo oculto por permisos").
- Extraer la plantilla común (`mat-form-field` + label + errores + hint) a un **componente envoltorio** `<editable-field>` para no repetirla en 25 editables.

**Qué aporta**
- Sin parpadeos, `required` fiable y errores con contexto ("Debe tener al menos 8 caracteres").
- Campos con ayuda y accesibles.
- Cambiar el aspecto de todos los campos se hace en **un** envoltorio.

**Cómo enfocarlo**
1. Quitar los `setTimeout` (comprobar que no reaparece `ExpressionChangedAfterItHasBeenChecked`; si aparece, el origen está en otro sitio y conviene arreglarlo allí).
2. Introducir `<editable-field>` y migrar los editables núcleo primero.

---

## `editable/editable-choose/editable-choose.component.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
Recibe `options: string[]` y usa el **mismo string** como valor y como sufijo de la clave i18n (`label + '.options.' + op`). El generador le pasa valores en MAYÚSCULAS que no coinciden con el modelo (ver doc 08, crítico).

**Qué cambiar**
Aceptar `options = input.required<ReadonlyArray<string | { value: string; labelKey?: string }>>()` y, para la clave i18n, normalizar (`toLowerCase()`, sin espacios) sin tocar el `value`. Si hay más de 5 opciones, `mat-select`; si son pocas, `mat-button-toggle-group` o `mat-radio-group`, según un input `display`.

**Qué aporta**
El valor enviado al API queda separado de la etiqueta mostrada, y la representación se adapta (radio para 2–4 opciones es más rápido de usar).

**Cómo enfocarlo**
Va junto con la corrección del generador (doc 08).

---

## `editable/editable-selectone/editable-selectone.component.ts` + `search-editable.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- El botón de desplegar es un `<mat-icon (click)>`, **no un botón**: no se puede enfocar ni activar con teclado y no tiene nombre accesible.
- `debounceTime(700)` fijo: casi un segundo de espera percibida al escribir.
- No muestra el error del proveedor (que además no existe, doc 06) ni un estado "sin resultados".
- Estilo inline `style="display: flex"` en el sufijo.

**Qué cambiar**
```html
<button mat-icon-button matSuffix type="button" [attr.aria-label]="'common.showOptions' | transloco" (click)="searchOptions()">
  <mat-icon>arrow_drop_down</mat-icon>
</button>
…
@if (!provider().searching() && options()?.length === 0) { <mat-option disabled>{{ 'common.noResults' | transloco }}</mat-option> }
@if (provider().error()) { <mat-error>{{ 'common.searchError' | transloco }}</mat-error> }
```
- `debounce = input(250)`.

**Qué aporta**
Accesible con teclado, más rápido de usar y con feedback cuando no hay resultados o hay un error.

**Cómo enfocarlo**
Plantilla. Las claves `common.*` van al i18n global.

---

## `list-view/list-view.component.html` / `.ts` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- **Accesibilidad de la tabla:** es un `div` con clases `.thead/.tbody/.tr/.th/.td`, sin `role="table"`, `row`, `columnheader` ni `cell`. Las filas se activan con `(click)` sobre `span`, **no se pueden enfocar ni activar con teclado** y no hay `aria-selected`. Lo mismo pasa con la lista móvil (`<li (click)>`) y con las tarjetas.
- **Columnas ocultas sin aviso:** `calculateTableColumns()` oculta columnas por anchura disponible. El usuario no sabe que existen ni puede elegir cuáles ver. Las entidades generadas pasan **hasta 47 columnas**, así que en un portátil solo se ven 6–8, elegidas por el algoritmo.
- `ListViewColumnDirective.tooltip` se recibe, pero **no se pinta** (la cabecera solo muestra `title`).
- No hay **ordenación** por columna, aunque los filtros de las entidades aceptan `order`.
- La columna de checkbox no tiene "seleccionar todo".
- El output `prev` existe, pero nunca se emite (las features responden con `console.log('PREV')`).
- `mode` por defecto es `'list'`, pero la plantilla solo distingue `mobile`, `'card'` y "lo demás" (tabla): el valor `'list'` acaba mostrando la tabla.
- La altura de fila (`itemHeight = 52`) está fijada y duplicada con el SCSS.
- `ResizeObserver` **y** `window.resize` hacen lo mismo. `BreakpointObserver` se observa dos veces con resultados que se pisan (`rowIcons.set(1)` y luego `rowIcons.set(result + 1)`).
- El skeleton usa `[].constructor(20)`.

**Qué cambiar**
1. ARIA y teclado:
   ```html
   <div class="material-table" role="table" [attr.aria-rowcount]="data()?.length">
     <div class="thead" role="row"> <span role="columnheader" [attr.aria-sort]="sortState(col)">…</span>
     <div class="tr" role="row" tabindex="0" [attr.aria-selected]="isSelected(item)"
          (click)="selectAndActivate(item)" (keydown.enter)="selectAndActivate(item)" (keydown.space)="check(item); $event.preventDefault()">
       <span role="cell">…
   ```
   Con navegación por flechas mediante `FocusKeyManager` de CDK (`@angular/cdk/a11y`).
2. **Selector de columnas** (menú "Columnas" con checkboxes) persistido por entidad en `localStorage`, y un input `defaultVisible` en cada columna (doc 08: el generador marca 4–6 columnas como visibles por defecto).
3. Pintar `tooltip` en la cabecera (`matTooltip`).
4. Ordenación: `sortable` en la columna + output `sortChange`, que la feature traduce a `order`.
5. "Seleccionar todo" en la cabecera.
6. Quitar `prev` o implementarlo. Dejar `mode: 'table' | 'card' | 'list'` explícito, con `'auto'` como valor por defecto.
7. `rowHeight = input(52)` y la variable CSS `--list-view-row-height` (doc 02).
8. Un solo `ResizeObserver` y un solo `BreakpointObserver`.
9. **Estado vacío y de error** dentro del componente (`<ng-template listViewEmpty>` con un valor por defecto traducido), para que las features no tengan que repetir el "No content".

**Qué aporta**
- Las listas se pueden usar con teclado y lector de pantalla (WCAG 2.1.1 y 4.1.2).
- El usuario decide qué columnas ver y puede ordenar.
- Toda la experiencia de listado mejora en las 26 entidades con un solo cambio.

**Cómo enfocarlo**
Es el cambio de toolkit con más impacto. Hacerlo en fases: (a) ARIA + teclado, (b) selector de columnas + `defaultVisible`, (c) ordenación, (d) estados vacío y error. Cada fase es compatible hacia atrás con las plantillas generadas.

---

## `list-view/list-view.directives.ts` / `list-view.module.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Las directivas son `standalone: false` y se declaran en un `NgModule`. En el módulo, `ListViewIconDirective` aparece **dos veces** en `declarations` y otras dos en `exports`.

**Qué cambiar**
Hacer standalone las directivas y exportar una constante `LIST_VIEW = [ListViewComponent, ListViewColumnDirective, …] as const` para importarla en componentes standalone. Mantener `ListViewModule` como fachada mientras haya features con NgModule.

**Qué aporta**
Preparado para la migración a standalone del generador (doc 08).

**Cómo enfocarlo**
Plantilla.

---

## `action/action-container.component.ts` (526 líneas) + `action.model.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- Concentra en un solo componente: barra de herramientas, acciones contextuales por fila, menú "más", selección múltiple, migas de pan del diálogo activo, navegación local y adaptación responsive (`BreakpointObserver`, `maxIcons = signal(2)`).
- `moreOptionsLabel = signal('More actions')` está fijado en inglés.
- La interfaz `Action` obliga a cada acción generada a implementar 12 miembros (`label`, `icon`, `tooltip`, `title` como signals, `visible(items)`, `enabled(items)` que **devuelven** signals, `container`, `selection`, `render`…). Por eso cada acción generada tiene unas 90 líneas casi idénticas (doc 08).
- El `tooltip` de las acciones no se pinta en los botones (solo `aria-label` con el `label`).

**Qué cambiar**
- Partir el componente en `ActionToolbar`, `ActionRowMenu`, `ActionSelectionBar` y `ActionHost` (gestiona el diálogo o la vista activa).
- Una clase base `abstract class BaseAction implements Action` que haga lo común: carga de textos desde i18n (`action.<name>.*`), ACL (`allowed(name)`), `visible`/`enabled` por defecto, cierre del diálogo y limpieza de suscripciones. Las acciones generadas solo declaran `name`, `contextual`, `multiple` y `execute(items)`.
- Pintar `matTooltip` con `action.tooltip()`.
- `maxIcons` como `input()` con valor por defecto según el breakpoint.

**Qué aporta**
- Las acciones generadas pasan de ~90 a ~15 líneas.
- Cambiar el comportamiento de todas las acciones (por ejemplo, confirmar antes de borrar con un patrón distinto) se hace en un solo sitio.
- Tooltips visibles y textos traducidos.

**Cómo enfocarlo**
1. Crear `BaseAction` sin romper la interfaz.
2. Cambiar las plantillas de acciones del generador para que hereden.
3. Partir el contenedor más adelante.

---

## `form-layout/form-layout.component.ts` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
`MAT_FORM_FIELD_DEFAULT_OPTIONS: { appearance: 'outline' }` está fijado en el componente y la rejilla se genera dentro del propio componente (ver doc 02).

**Qué cambiar**
Leer la apariencia de un token global (`provideUiDefaults`), con `input()` para sobrescribir por formulario. Mover la rejilla a los estilos globales.

**Qué aporta**
Se cambia la apariencia de todos los formularios desde la configuración del proyecto.

**Cómo enfocarlo**
Ver doc 02.

---

## `error-page/error-page.component.ts` / `.html` · 🔴 Crítico (UX) · 🧩 Plantilla

**Estado actual**
- La plantilla **no usa el pipe `transloco`**: pinta literalmente `{{ 'app.layout.errorpage.error_404.title' }}`. El usuario ve **la clave técnica** en lugar del mensaje.
- Las imágenes se piden por código: `error-{status}.png`. `isUnknown()` envía todo lo que no sea `0/401/402/403/404/409/422` al caso genérico. Un **500, 502, 503 o 504** (los más habituales) se muestra como "error desconocido", sin distinguir "servicio no disponible, reintenta" de un fallo real.
- En ese caso genérico, `responseMessage()` muestra al usuario `JSON.stringify(error.error)` (detalles internos del backend) o `'No message'`.
- `smallScreen` nunca se actualiza.
- El botón de inicio usa `href="/"` (recarga completa y no respeta `base href` ni idioma/tenant).
- No hay claves `app.layout.errorpage.*` en `public/i18n/{es,en}.json` (el global solo tiene `{"info": "Module"}`).

**Qué cambiar**
- Importar `TranslocoModule` y usar `| transloco` en todos los textos.
- Mapear el status a una imagen y una clave con *fallback*: `const known = [0,401,403,404,409,422]; const key = known.includes(s) ? s : s >= 500 ? '5xx' : 'unknown'`.
- Mostrar el detalle técnico solo en `isDevMode()` o dentro de un `<details>` "Detalles técnicos" plegado, con un **ID de traza** (el `traceId` del span de OpenTelemetry) que el usuario pueda copiar para soporte.
- `routerLink` al home calculado.
- Añadir las claves al i18n global (es/en) para todos los estados.
- Sustituir los PNG por SVG que usen `currentColor` o tokens: se adaptan al tema y al modo oscuro.

**Qué aporta**
Los errores se entienden, los 5xx tienen un mensaje propio ("el servicio no responde, inténtalo en unos minutos") y soporte puede correlacionar incidencias por `traceId`.

**Cómo enfocarlo**
Cambio de plantilla pequeño y muy visible. Es de lo primero que conviene hacer.

---

## `error-modal/error-modal.component.ts` / `.html` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- Textos sin traducir (`{{ 'controls.errorhandler.retrySuccess' }}`).
- `retryError` y `retrySuccess` nunca se asignan (el bloque de reintento no se usa).
- No hay botón de cerrar visible: solo se cierra con Escape o clic fuera.
- `isLogged` y `loading` no se usan.

**Qué cambiar**
`mat-dialog-title`, `mat-dialog-content` con `app-page-error` y `mat-dialog-actions` con "Cerrar" y, si es 401, "Iniciar sesión". Quitar el código muerto y traducir.

**Qué aporta**
Un diálogo de error estándar, con salida clara.

**Cómo enfocarlo**
Va junto con `error-page`.

---

## `long-task-view/*` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Se usa mucho (56 referencias), para el progreso de operaciones masivas.

**Qué cambiar**
Comprobar que anuncia el progreso con `role="progressbar"` + `aria-valuenow` y un resumen final con `aria-live="polite"`. Reutilizar la utilidad `pollUntil` (doc 06) para el sondeo.

**Qué aporta**
Accesibilidad en operaciones largas.

**Cómo enfocarlo**
Revisión puntual.

---

## `avatar-text.service.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Calcula iniciales y colores de avatar (`fg`/`bg`) por hash, con colores calculados en JS.

**Qué cambiar**
Comprobar que el contraste `fg`/`bg` cumple AA (4,5:1) y generar los colores a partir del tema (por ejemplo, `color-mix(in oklch, var(--mat-sys-primary) X%, …)` con un tono variable por hash), en lugar de una paleta fija.

**Qué aporta**
Avatares coherentes con la marca y legibles.

**Cómo enfocarlo**
Opcional.
