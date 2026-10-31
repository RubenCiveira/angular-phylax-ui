# 02 · Estilos, theming y personalización visual

[← Índice](README.md)

## Diagnóstico general

Hoy personalizar el aspecto de la aplicación obliga a tocar **muchos ficheros generados**:

- **No hay una capa de design tokens propia.** Cada componente decide sus colores, radios, espaciados y tipografía.
- Se mezclan tres generaciones de variables CSS:
  - `--mat-sys-*`: tokens de sistema de Material 3. Son los correctos.
  - `--mdc-*`: tokens de MDC que **Angular Material dejó de emitir en la v19** (se renombraron a `--mat-*`). Hoy solo funcionan por el valor de reserva.
  - `--md-sys-color-*`: el prefijo de Material Web, que Angular Material no define.
- Hay **colores fijos en hex** (`#333`, `#666`, `#f5f5f5`, `#e0e0e0`, `#1976d2`, `#f44336`…), en **167 sitios** del toolkit. Muchos rompen el **modo oscuro**: en la lista móvil, el texto `#333` aparece sobre `--mat-sys-surface-container-lowest`, que en modo oscuro es casi negro.
- Hay **estilos inline** en las plantillas: 77 HTML de features con `style="…"`, además de `menu.component.html`, `toolbar.component.html` y `list-view.component.html`.
- **Cada entidad repite los mismos estilos**: 125 SCSS de componentes de feature casi idénticos.
- La paleta está **fijada en compilación** (`mat.$blue-palette`) y no se puede cambiar por despliegue o por tenant.

### Arquitectura objetivo (aplica a todo el documento)

```
src/styles/
├── main.scss              ← único punto de entrada (angular.json → styles)
├── _config.scss           ← variables Sass con !default (paleta, densidad, fuente, radios, breakpoints)
├── _tokens.scss           ← CSS custom properties --app-* (marca, superficie, espaciado, radios, sombras)
├── _material-theme.scss   ← mat.theme(...) + mat.theme-overrides / mat.<comp>-overrides que leen --app-*
├── _base.scss             ← reset, html/body, tipografía base, focus-visible, reduced-motion
├── _layout.scss           ← variables del shell (anchura nav, alto header, breakpoints)
├── _utilities.scss        ← rejilla (grid-utils) generada UNA vez + utilidades mínimas
└── components/            ← estilos compartidos de patrones (entity-list, toolbar-actions, page…)
public/config/theme.css    ← (opcional) override en runtime por despliegue o tenant, sin recompilar
```

Hay **tres niveles de personalización**, de menos a más intrusivo:

1. **Runtime / despliegue:** `public/config/theme.css` (o `theme` en `phylax-config.json`) sobrescribe `--app-*` y `--mat-sys-*`. No hace falta compilar.
2. **Compilación / proyecto:** `@use 'config' with ($primary: mat.$violet-palette, $radius: 4px, $density: -1)`.
3. **Componente:** cada componente del toolkit expone sus propias variables (`--list-view-row-height`, `--app-nav-width`…) con valores por defecto que vienen de `--app-*`.

---

## `src/styles.scss` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
```scss
html {
  color-scheme: light dark;
  @include mat.theme((color: mat.$blue-palette, typography: Roboto, density: 0));
}
html, body { display: flex; flex-direction: column; height: 100svh; … }
@media (prefers-color-scheme: dark) {
  .mat-mdc-dialog-surface {
    background-color: var(--mat-sys-surface-container-high) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6) !important;
  }
}
```
- La paleta, la tipografía y la densidad están fijadas.
- Para cambiar el diálogo se usan `!important` y la clase interna `.mat-mdc-dialog-surface`, en lugar de la API de overrides.
- El modo oscuro solo sigue al sistema operativo. El usuario no puede forzar claro u oscuro.
- No se usa `mat.theme-overrides` ni `mat.dialog-overrides`.
- Todo está en un único fichero, sin separar tokens, tema y base.

**Qué cambiar**
1. Partirlo en la estructura `src/styles/` descrita arriba.
2. Parametrizar el tema con variables `!default`:
   ```scss
   // _config.scss
   @use '@angular/material' as mat;
   $primary-palette: mat.$azure-palette !default;
   $tertiary-palette: mat.$blue-palette !default;
   $font-family: 'Roboto, system-ui, sans-serif' !default;
   $density: 0 !default;
   ```
   ```scss
   // _material-theme.scss
   @use 'config' as c;
   html {
     @include mat.theme((
       color: (primary: c.$primary-palette, tertiary: c.$tertiary-palette, theme-type: color-scheme),
       typography: c.$font-family,
       density: c.$density,
     ));
     @include mat.dialog-overrides((
       container-color: var(--app-dialog-bg, var(--mat-sys-surface-container-high)),
       container-shape: var(--app-radius-lg, 28px),
     ));
   }
   html.theme-light { color-scheme: light; }
   html.theme-dark  { color-scheme: dark; }
   ```
3. Definir tokens propios en `_tokens.scss` que, por defecto, apuntan a los de Material:
   ```scss
   :root {
     --app-color-primary: var(--mat-sys-primary);
     --app-color-surface: var(--mat-sys-surface);
     --app-color-border: var(--mat-sys-outline-variant);
     --app-color-text: var(--mat-sys-on-surface);
     --app-color-text-muted: var(--mat-sys-on-surface-variant);
     --app-radius-sm: 4px;  --app-radius-md: 8px;  --app-radius-lg: 12px;
     --app-space-1: 4px; --app-space-2: 8px; --app-space-3: 12px; --app-space-4: 16px; --app-space-6: 24px;
     --app-nav-width: 260px; --app-nav-width-mini: 72px;
     --app-row-height: 52px;
     --app-transition-fast: 150ms ease;
   }
   ```
4. Añadir a la base reglas de accesibilidad:
   ```scss
   :focus-visible { outline: 2px solid var(--app-color-primary); outline-offset: 2px; }
   @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition: none !important; animation: none !important; } }
   ```

**Qué aporta**
- Se cambia la marca entera tocando **un fichero** (`_config.scss`) o, en runtime, un CSS.
- El usuario puede forzar modo claro u oscuro, y se quitan los `!important` que se rompen al actualizar Material.
- La accesibilidad (foco visible, movimiento reducido) se aplica de forma global.

**Cómo enfocarlo**
1. Crear `src/styles/` en la plantilla y apuntar `angular.json → styles` a `main.scss`, con `stylePreprocessorOptions.includePaths: ["src/styles"]`.
2. Migrar el contenido actual tal cual (paso sin cambios visuales).
3. Introducir los tokens y sustituir valores fijos componente a componente (ver más abajo).
4. Exponer `$primary-palette` y el resto como parámetros del generador.

---

## `public/config/theme.css` (nuevo) · 🟠 Alto · 🧩 Plantilla

**Estado actual**
No existe. La configuración en runtime (`phylax-config.json`) ya resuelve API, identidad, i18n y telemetría, pero no estilos.

**Qué cambiar**
- Crear un `theme.css` opcional que se carga **después** de los estilos compilados:
  ```html
  <link rel="stylesheet" href="config/theme.css" onerror="this.remove()">
  ```
- O, mejor, añadir una sección `theme` a `phylax-config.json` y aplicarla con `document.documentElement.style.setProperty(...)` en el `APP_INITIALIZER` de configuración:
  ```json
  "theme": {
    "mode": "auto",
    "tokens": { "--mat-sys-primary": "#6750a4", "--app-radius-lg": "4px" },
    "logo": "assets/img/logo.png",
    "product-name": "PHYLAX"
  }
  ```
- Para soporte multi-tenant: `theme.tenants.<tenant>.tokens`, aplicado cuando cambia `AppStateService.tenant`.

**Qué aporta**
- Rebranding por cliente, entorno o tenant **sin recompilar** la imagen Docker: basta con montar un volumen distinto en `/usr/share/nginx/html/config`.
- Encaja con el modelo que ya existe de configuración externa.

**Cómo enfocarlo**
Empezar por `tokens` (CSS variables) y `logo`/`product-name`, que es lo que más se pide. La paleta completa de M3 en runtime necesita las ~40 variables `--mat-sys-*`. Se puede generar con el schematic `ng generate @angular/material:theme-color` y publicar como CSS.

---

## `src/index.html` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
```html
<html lang="en">
<title>phylax</title>
<link href="assets/roboto.css" rel="stylesheet">
<link href="assets/mat.css" rel="stylesheet">
<body class="mat-theme mat-typography">
```
- `lang="en"` está fijado aunque el idioma por defecto del estado es `es` y cambia en runtime.
- La clase `mat-theme` no la define ningún estilo.
- Las fuentes se cargan con dos `<link>` que bloquean el render. Esos ficheros, a su vez, piden los `woff2` a `fonts.gstatic.com` (ver `mat.css` y `roboto.css`).
- No hay `<meta name="theme-color">`, `<noscript>` ni marcador de carga inicial (la pantalla se queda en blanco hasta que arranca Angular).

**Qué cambiar**
- Actualizar `document.documentElement.lang` cuando cambie `AppStateService.language` (en `app.component.ts`).
- Quitar `mat-theme` y mover fuentes e iconos a `styles/main.scss` (autoalojados, ver más abajo).
- Añadir:
  ```html
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)">
  <noscript>Esta aplicación necesita JavaScript.</noscript>
  <app-root><div class="app-splash" aria-busy="true"></div></app-root>
  ```

**Qué aporta**
Lectores de pantalla y traductores automáticos usan el idioma correcto, la carga percibida es mejor y no hay pantalla en blanco.

**Cómo enfocarlo**
Plantilla. El `lang` dinámico es una línea en el `subscribe` de `appState.language` que ya existe.

---

## `public/assets/mat.css` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
Declara `@font-face 'Material Icons'` con `src: url(https://fonts.gstatic.com/s/materialicons/v143/…woff2)` y la clase `.material-icons`. Es la familia **antigua** de iconos y se descarga de Google en runtime.

**Qué cambiar**
Elegir una de estas opciones:
- **A) Autoalojar** con el paquete `material-symbols` (variable font, una sola familia, ejes de peso, relleno y grado configurables por CSS) e importarlo desde `styles/main.scss`. Registrar con `MatIconRegistry.setDefaultFontSetClass('material-symbols-outlined')`.
- **B) SVG a demanda** con `MatIconRegistry.addSvgIcon(...)` solo para los ~25 iconos que se usan (`menu`, `delete`, `refresh`, `filter_list`, `more_vert`, `account_circle`, `lock`, `badge`, `group`, `domain`, `keyboard_arrow_up`…). Se generan en build a un sprite.

**Qué aporta**
- Funciona **sin Internet** (intranets, entornos aislados) y sin enviar la IP de los usuarios a Google (RGPD).
- Con la opción B, el peso de iconos baja de unos 300 KB a menos de 10 KB.
- Material Symbols permite personalizar el estilo de icono (outlined/rounded/sharp, peso) desde los tokens.

**Cómo enfocarlo**
1. Hacer inventario automático de iconos: `grep -rhoE "<mat-icon>[a-z_]+</mat-icon>|icon: '[a-z_]+'"` más las claves `icon` de i18n.
2. Con la opción B, el generador mantiene un `icons.ts` con la lista y lo amplía al generar.

---

## `public/assets/roboto.css` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
17,6 KB de `@font-face` (cyrillic, greek, vietnamese, latin-ext…) con pesos 300/400/500, todos desde `fonts.gstatic.com`.

**Qué cambiar**
- Autoalojar con `@fontsource-variable/roboto` (un solo fichero variable, subset `latin` y `latin-ext`), o
- usar la **pila de fuentes del sistema** como valor por defecto (`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`) y dejar Roboto como opción del tema.

**Qué aporta**
Ninguna petición a terceros, menos CSS bloqueante y la tipografía se cambia desde `$font-family`.

**Cómo enfocarlo**
Pasar la familia a `_config.scss` y convertir la carga de la fuente en un `@use` condicional.

---

## `src/app/app.component.scss` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- Medidas fijas: `grid-template-columns: 260px 1fr`, `72px` (mini) y breakpoint `900px` repetido aquí y en `app.component.ts` (`matchMedia('(max-width:900px)')`).
- `border-right: solid silver 1px` y `border-bottom: solid silver 1px`, que no se adaptan al tema.
- `background: var(--md-sys-color-surface, #fff)` en el nav móvil. El prefijo `--md-sys-*` no existe en Angular Material, así que **siempre** se usa `#fff`, también en modo oscuro.
- Backdrop `rgba(0,0,0,.35)` y sombra fija.

**Qué cambiar**
```scss
:host {
  grid-template-columns: var(--app-nav-width) 1fr;
}
:host(.nav-mini) { grid-template-columns: var(--app-nav-width-mini) 1fr; }
header { border-bottom: 1px solid var(--app-color-border); }
nav    { border-right: 1px solid var(--app-color-border); background: var(--mat-sys-surface-container-low); }
@media (max-width: 899.98px) {
  nav { background: var(--mat-sys-surface-container); box-shadow: var(--mat-sys-level3); }
  .nav-backdrop { background: var(--mat-sys-scrim); opacity: 0; }
  :host(.nav-overlay-open) .nav-backdrop { opacity: .32; }
}
```
- Compartir el breakpoint: `BreakpointObserver` de CDK en TS y una variable Sass en SCSS, ambos desde la misma constante.

**Qué aporta**
El modo oscuro funciona en móvil, la anchura del menú se cambia con una variable y el breakpoint se define en un solo sitio.

**Cómo enfocarlo**
Plantilla del shell. Es un cambio aislado y visible, buen candidato para validar la capa de tokens.

---

## `src/app/shared/toolkit/grid-utils.scss` + `form-layout/form-layout.component.scss` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- `grid-utils.scss` es un mixin bien diseñado (variables `!default` y CSS variables por breakpoint). Pero `form-layout.component.scss` lo **incluye dentro de un componente** con `ViewEncapsulation.None`, lo que genera cientos de clases (`.form-layout-col-*`, `-start-*`, `-row-*`, `-row-start-1..40`, `-order--10..20`, × 5 breakpoints). Ese CSS:
  - cuenta para el presupuesto `anyComponentStyle` de 4 kB;
  - se vuelve global igualmente (encapsulación `None`), sin ninguna de las ventajas de estar en un componente.
- `.form-layout-grid { margin: 2rem; }`: el margen está fijado, así que no se puede usar el form-layout dentro de diálogos o tarjetas sin que sobre espacio.
- Las plantillas generadas añaden `class="u-grid"` al `<form-layout>`, pero el prefijo configurado es `form-layout`, así que **`u-grid` no hace nada**.
- `form-layout.component.ts` provee `MAT_FORM_FIELD_DEFAULT_OPTIONS: { appearance: 'outline' }` en el componente. La apariencia de los campos solo se puede cambiar editando el toolkit.

**Qué cambiar**
1. Generar la rejilla **una sola vez** en `styles/_utilities.scss`:
   ```scss
   @use 'grid-utils' as grid with ($grid-prefix: 'form-layout');
   @include grid.generate-grid-utils($max-row-start: 12, $order-min: -2, $order-max: 6);
   ```
   (Bajar `max-row-start` de 40 y el rango de `order` reduce mucho el CSS.)
2. Dejar `form-layout.component.scss` con lo mínimo: `:host { display: grid; margin: var(--form-layout-margin, 0); gap: var(--form-layout-gap, var(--app-space-4)); }`.
3. Quitar `class="u-grid"` de la plantilla del generador.
4. Mover `MAT_FORM_FIELD_DEFAULT_OPTIONS` a `app.config.ts` y leerlo de un token `APP_UI_DEFAULTS` (apariencia `outline` o `fill`, `subscriptSizing: 'dynamic'`).

**Qué aporta**
Menos CSS duplicado, presupuestos que se cumplen, márgenes que se pueden controlar y la apariencia de todos los campos se elige desde un solo punto.

**Cómo enfocarlo**
Cambio en dos plantillas (`form-layout` y `form-group`) y en `styles/`. El riesgo visual es bajo si se mantiene el mismo prefijo.

---

## `src/app/shared/toolkit/list-view/list-view.list.component.scss` · 🔴 Crítico (modo oscuro) · 🧩 Plantilla

**Estado actual**
```scss
.material-list-item { border-bottom: 1px solid #e0e0e0; }
.material-list-item:hover { background-color: #f5f5f5; }
.material-list-item-title { font-size: 16px; color: #333; }
.material-list-item-subtitle { font-size: 14px; color: #666; }
… color: #777; … color: #2196f3;
```
El contenedor usa `var(--mat-sys-surface-container-lowest)` (casi negro en modo oscuro), pero el texto es `#333`. En **móvil con modo oscuro, la lista no se puede leer**.

**Qué cambiar**
```scss
.material-list-item { border-bottom: 1px solid var(--app-color-border); min-height: var(--list-view-row-height, var(--app-row-height)); }
.material-list-item:hover { background-color: color-mix(in srgb, var(--mat-sys-on-surface) 8%, transparent); }
.material-list-item-title { font: var(--mat-sys-title-medium); color: var(--app-color-text); }
.material-list-item-subtitle { font: var(--mat-sys-body-medium); color: var(--app-color-text-muted); }
```

**Qué aporta**
Contraste correcto en ambos modos y una lista que sigue al tema automáticamente.

**Cómo enfocarlo**
Es lo primero que conviene migrar. Se comprueba rápido con DevTools → *Emulate prefers-color-scheme: dark*.

---

## `src/app/shared/toolkit/list-view/list-view.table.component.scss` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- `border-bottom: solid black 1px` en la cabecera y `solid silver 1px` en las filas.
- La cabecera toma su tipografía de **tokens de botón**: `var(--mdc-protected-button-label-text-font, …)`, `--mdc-protected-button-label-text-color`… Esos tokens `--mdc-*` ya no existen, así que se usa la reserva. Aunque existieran, ligar una tabla a los tokens de botón no tiene sentido semántico.
- `border-radius: 12px`, `padding: 12px 15px` y `height: 52px` están fijados (y `52` también en TS: `itemHeight = 52`).

**Qué cambiar**
```scss
:host {
  --list-view-radius: var(--app-radius-lg);
  --list-view-row-height: var(--app-row-height);
  --list-view-header-bg: var(--mat-sys-secondary-container);
  --list-view-header-fg: var(--mat-sys-on-secondary-container);
  --list-view-cell-padding: var(--app-space-3) var(--app-space-4);
}
.material-table { border-radius: var(--list-view-radius); border: 1px solid var(--app-color-border); }
.material-table .thead { background: var(--list-view-header-bg); color: var(--list-view-header-fg); font: var(--mat-sys-label-large); border-bottom: 1px solid var(--app-color-border); }
.material-table .td { font: var(--mat-sys-body-medium); padding: var(--list-view-cell-padding); }
```
Y en TS, leer la altura con `getComputedStyle(host).getPropertyValue('--list-view-row-height')` o recibirla como `input()`, en lugar del `52` fijo.

**Qué aporta**
Tablas compactas o amplias con una sola variable (útil con densidad `-2`), coherentes con el tema y sin depender de tokens de otros componentes.

**Cómo enfocarlo**
Mismo patrón para `list-view.component.scss` (el skeleton ya usa `--mat-sys-*`, solo falta parametrizar) y `list-view.grid.component.scss`.

---

## `src/app/shared/toolkit/list-view/list-view.grid.component.scss` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
```scss
.card-grid { margin: 0 20px; grid-template-columns: repeat(3, 1fr); gap: 16px; }
```
Siempre hay **3 columnas**, sea cual sea el ancho. Entre 600 y 900 px (tablet) las tarjetas quedan muy estrechas, y en monitores anchos, demasiado grandes.

**Qué cambiar**
```scss
.card-grid {
  margin: 0 var(--app-space-5, 20px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--list-view-card-min, 280px), 1fr));
  gap: var(--app-space-4);
}
```

**Qué aporta**
Rejilla adaptable sin media queries y anchura mínima de tarjeta configurable.

**Cómo enfocarlo**
Cambio de una línea en la plantilla, sin riesgo.

---

## SCSS de editables del toolkit (`editable-rrule`, `editable-cron`, `editable-rating`, `editable-pin`, `editable-phone`, `editable-date-range`, `editable-upload`, `editable-credit-card`) · 🟡 Medio · 🧩 Plantilla

**Estado actual**
Usan valores de reserva en hex sobre tokens que ya no existen:
```scss
var(--mdc-outlined-text-field-focus-outline-color, #1976d2)
var(--mdc-outlined-text-field-error-label-text-color, #f44336)
var(--mat-sys-secondary, #f57c00)
```
En la práctica, el color de foco y de error es **siempre** el azul y el rojo de Material 2, sin relación con el tema. `editable-credit-card` tiene un degradado fijo `#1a237e → #7986cb` y texto `#333`.

**Qué cambiar**
Sustituir por tokens de sistema M3:
- foco → `var(--mat-sys-primary)`;
- error → `var(--mat-sys-error)`;
- texto → `var(--mat-sys-on-surface)` / `--mat-sys-on-surface-variant`;
- tarjeta de crédito → `linear-gradient(135deg, var(--mat-sys-primary), var(--mat-sys-tertiary))`.

**Qué aporta**
Todos los controles siguen la paleta elegida.

**Cómo enfocarlo**
Búsqueda y sustitución guiada con `grep -rn -- "--mdc-" src/app/shared/toolkit` más un *stylelint* que lo prohíba (ver abajo).

---

## `src/app/shared/toolkit/gantt-view/*.scss`, `kanban-view/*.scss`, `calendar-view/*.scss`, `speed-dial/*.scss`, `map-view/*.scss` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Tienen el mismo patrón de reservas en hex (`#1976d2`, `#c62828`, `#fff`), pero **ninguna feature usa estos componentes** (ver doc 07).

**Qué cambiar**
Tokenizarlos solo si se mantienen. Si no, sacarlos del proyecto base (doc 07).

**Qué aporta**
No se dedica esfuerzo a código muerto.

**Cómo enfocarlo**
Decidir primero si se quedan (doc 07).

---

## `src/app/shared/toolkit/error-modal/error-modal.component.css` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
`.success { background-color: #087f23; color: white }` y `.error { background-color: #f44336; color: black }`. El texto negro sobre rojo tiene poco contraste y es el único `.css` (no `.scss`) junto con `error-page`.

**Qué cambiar**
Renombrar a `.scss` y usar `--mat-sys-error-container` / `--mat-sys-on-error-container`, y para éxito un token propio `--app-color-success` (Material 3 no trae color de éxito).

**Qué aporta**
Contraste AA y coherencia con el tema.

**Cómo enfocarlo**
Añadir `--app-color-success` y `--app-color-on-success` en `_tokens.scss`.

---

## `src/app/bootstrap/layout/menu/menu.component.html` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
```html
<div style="display: flex; flex-direction: row; align-items: center">
  <img src="./assets/img/logo-75x75.png" style="width: 75px; height: 75px" alt="Phylax" /> PHYLAX
</div>
```
El logo, el nombre del producto y el layout de la cabecera del menú están fijados en la plantilla, con estilos inline. En modo `mini` (72 px) el logo de 75 px desborda.

**Qué cambiar**
```html
<a class="brand" [routerLink]="homeLink()">
  <img class="brand-logo" [src]="logo()" [alt]="productName()" />
  @if (mode() === 'full') { <span class="brand-name">{{ productName() }}</span> }
</a>
```
```scss
.brand { display: flex; align-items: center; gap: var(--app-space-3); padding: var(--app-space-3); }
.brand-logo { inline-size: var(--app-brand-logo-size, 48px); block-size: auto; }
```
`logo` y `productName` se leen de `appConfig['theme.logo']` / `appConfig['meta.title']` (este último ya se inyecta como `title`, pero no se usa).

**Qué aporta**
Rebranding desde la configuración, el modo mini funciona y no hay estilos inline.

**Cómo enfocarlo**
Va junto con la sección `theme` de `phylax-config.json`.

---

## `src/app/bootstrap/layout/toolbar/toolbar.component.html` / `.scss` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- Estilos inline: `style="--form-layout-def-xs: 12; --form-layout-def-md: 6; --form-layout-def-lg: 4"`.
- `mat-toolbar { background-color: inherit; }` anula el token de la toolbar con una regla CSS, en lugar de `mat.toolbar-overrides`.
- `<hr />` dentro de `mat-menu` en lugar de `<mat-divider>`.

**Qué cambiar**
- Pasar las variables a una clase `.toolbar-context`.
- Usar `@include mat.toolbar-overrides((container-background-color: var(--app-toolbar-bg, transparent)))` en el tema.
- Cambiar `<hr>` por `<mat-divider>`.

**Qué aporta**
La toolbar se puede personalizar desde el tema.

**Cómo enfocarlo**
Plantilla del shell.

---

## SCSS e inline styles de las features generadas (`*-view-list.component.scss`/`.html`, 125 SCSS y 77 HTML con `style=`) · 🟠 Alto · 🧩 Plantilla

**Estado actual**
Cada una de las 26 entidades repite:
```scss
:host { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.page { padding: 10px 50px; }
.search-form { background-color: var(--mat-sys-surface-container-lowest); border-radius: 12px; margin: 10px; }
```
y en el HTML:
```html
<div style="display: flex; flex-direction: row; padding: 10px 10px 0 10px; align-items: center">
<div style="flex: 1"></div>
```
Las páginas de ruta añaden `styles: [':host { …; margin: 15px; }']` inline en el decorador. Cambiar el espaciado de las listas implica editar 26 × 3 sitios.

**Qué cambiar**
- Crear `styles/components/_entity-list.scss` con clases semánticas: `.entity-page`, `.entity-list`, `.entity-list__toolbar`, `.entity-list__spacer`, `.entity-list__search`, `.entity-list__empty`. Todas usan tokens.
- Las plantillas del generador emiten **solo** clases y dejan los `.scss` por entidad vacíos, o no los crean (`styleUrl` es opcional).
- Si se crea un componente `<entity-list-layout>` en el toolkit (doc 07), el layout se define una vez y las features solo proyectan contenido.

**Qué aporta**
Un único punto para ajustar el aspecto de todas las pantallas de mantenimiento: menos ficheros generados y más fáciles de leer.

**Cómo enfocarlo**
1. Crear las clases globales.
2. Cambiar las plantillas y regenerar.
3. Comprobar con un diff visual (capturas de Playwright) en 2 o 3 entidades.

---

## `src/app/shared/toolkit/editable/editable-markdown/editable-markdown.component.ts` (plantilla) · 🟡 Medio · 🧩 Plantilla

**Estado actual**
Reproduce **a mano el DOM interno de `mat-form-field`** (`mdc-notched-outline`, `mat-mdc-form-field-infix`, `mdc-floating-label--float-above`…), con `style="width:100%;height:500px;…"` inline y la etiqueta fijada a "Contenido" (no usa `label()`).

**Qué cambiar**
Implementar un `MatFormFieldControl` real o envolver el editor en un contenedor propio con tokens (`border: 1px solid var(--mat-sys-outline); border-radius: var(--mat-sys-corner-extra-small)`) y la etiqueta con `label() + '.label' | transloco`.

**Qué aporta**
No se rompe al actualizar Material (las clases internas cambian sin aviso), la altura es configurable y la etiqueta se traduce.

**Cómo enfocarlo**
Solo si se mantiene el componente (hoy no tiene usos, ver docs 03 y 07).

---

## Lint de estilos (nuevo: `.stylelintrc.json`) · 🟡 Medio · 🧩 Plantilla

**Estado actual**
No hay linter de estilos, así que nada evita que vuelvan los hex o los tokens obsoletos.

**Qué cambiar**
Añadir `stylelint` + `stylelint-config-standard-scss` con estas reglas:
```json
{
  "rules": {
    "color-no-hex": [true, { "severity": "warning" }],
    "declaration-property-value-disallowed-list": { "/.*/": ["/--mdc-/", "/--md-sys-/"] },
    "selector-disallowed-list": ["/\\.mat-mdc-/", "/\\.mdc-/"],
    "declaration-no-important": true
  },
  "ignoreFiles": ["src/styles/_tokens.scss", "public/**"]
}
```

**Qué aporta**
Protege la capa de tokens y las regresiones del generador se detectan en CI.

**Cómo enfocarlo**
Empezar con severidad `warning`, migrar y luego pasar a `error`.
