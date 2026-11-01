# Estilos globales

`main.scss` es el único punto de entrada (`angular.json → styles`). `src/styles` está en `includePaths`, así que cualquier componente puede hacer `@use 'tokens'` o `@use 'config'` sin ruta relativa.

| Fichero                | Contenido                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `_config.scss`         | Variables Sass `!default` de compilación: paleta, densidad, tipografía, iconos     |
| `_fonts.scss`          | Fuentes e iconos autoalojados                                                      |
| `_tokens.scss`         | CSS custom properties `--app-*` (esta tabla)                                       |
| `_material-theme.scss` | `mat.theme(...)`, overrides de componentes y modo claro/oscuro forzado             |
| `_base.scss`           | `html`/`body`, foco visible, movimiento reducido, `.visually-hidden`, `.skip-link` |
| `_layout.scss`         | Estilos globales del shell                                                         |
| `_utilities.scss`      | Utilidades globales mínimas y la rejilla `.form-layout-*` (generada una sola vez)  |
| `_grid-utils.scss`     | Mixin de la rejilla responsive (`@use 'grid-utils' as grid`)                       |
| `components/`          | Estilos compartidos de patrones                                                    |

## Niveles de personalización

1. **Compilación:** editar `_config.scss` o `@use 'config' with ($primary-palette: mat.$violet-palette, $density: -1)`.
2. **Tokens:** sobrescribir `--app-*` (o `--mat-sys-*`) en un selector más específico o en runtime.
3. **Componente:** cada componente expone sus variables, con valores por defecto que vienen de `--app-*`.

## Modo claro / oscuro

Por defecto se sigue al sistema (`color-scheme: light dark`). `ThemeModeService` (`auto | light | dark`) pone `theme-light` o `theme-dark` en `<html>` y lo guarda en `localStorage`. Para colores que dependen del modo, usar tokens o `light-dark()`, nunca `@media (prefers-color-scheme)`: no respeta el modo forzado.

## Tokens

### Color

| Token                    | Uso                                                 | Valor por defecto                   |
| ------------------------ | --------------------------------------------------- | ----------------------------------- |
| `--app-color-primary`    | Color de marca: acciones principales, foco, enlaces | `var(--mat-sys-primary)`            |
| `--app-color-on-primary` | Texto e iconos sobre `primary`                      | `var(--mat-sys-on-primary)`         |
| `--app-color-surface`    | Fondo de paneles, tarjetas y filas                  | `var(--mat-sys-surface)`            |
| `--app-color-border`     | Bordes y separadores                                | `var(--mat-sys-outline-variant)`    |
| `--app-color-text`       | Texto principal                                     | `var(--mat-sys-on-surface)`         |
| `--app-color-text-muted` | Texto secundario, ayudas, metadatos                 | `var(--mat-sys-on-surface-variant)` |
| `--app-color-error`      | Errores y acciones destructivas                     | `var(--mat-sys-error)`              |
| `--app-color-on-error`   | Texto e iconos sobre `error`                        | `var(--mat-sys-on-error)`           |
| `--app-color-success`    | Estados correctos, confirmaciones                   | `light-dark(#2e7d32, #81c784)`      |
| `--app-color-on-success` | Texto e iconos sobre `success`                      | `light-dark(#ffffff, #0d3b10)`      |

### Forma

| Token             | Uso                            | Valor por defecto |
| ----------------- | ------------------------------ | ----------------- |
| `--app-radius-sm` | Chips, badges, campos pequeños | `4px`             |
| `--app-radius-md` | Tarjetas, menús                | `8px`             |
| `--app-radius-lg` | Paneles, diálogos propios      | `12px`            |

### Espaciado

| Token           | Uso                                     | Valor por defecto |
| --------------- | --------------------------------------- | ----------------- |
| `--app-space-1` | Separación mínima (icono–texto)         | `4px`             |
| `--app-space-2` | Separación entre elementos relacionados | `8px`             |
| `--app-space-3` | Relleno interior compacto               | `12px`            |
| `--app-space-4` | Relleno estándar, hueco de rejilla      | `16px`            |
| `--app-space-6` | Separación entre secciones              | `24px`            |
| `--app-space-8` | Márgenes de página                      | `32px`            |

### Layout

| Token                   | Uso                                   | Valor por defecto |
| ----------------------- | ------------------------------------- | ----------------- |
| `--app-nav-width`       | Anchura del menú lateral desplegado   | `260px`           |
| `--app-nav-width-mini`  | Anchura del menú lateral en modo mini | `72px`            |
| `--app-row-height`      | Alto de fila de tablas y listas       | `52px`            |
| `--app-brand-logo-size` | Lado del logo del menú                | `48px`            |
| `--app-toolbar-bg`      | Fondo de la barra superior            | `transparent`     |

### Movimiento

| Token                     | Uso                                     | Valor por defecto |
| ------------------------- | --------------------------------------- | ----------------- |
| `--app-transition-fast`   | Hover, foco, pequeños cambios de estado | `150ms ease`      |
| `--app-transition-medium` | Paneles, desplegables                   | `250ms ease`      |

Con `prefers-reduced-motion: reduce` todas las transiciones y animaciones se anulan en `_base.scss`.

### Componentes de Material

| Token                 | Uso                    | Valor por defecto                                                           |
| --------------------- | ---------------------- | --------------------------------------------------------------------------- |
| `--app-dialog-bg`     | Fondo de `mat-dialog`  | `light-dark(var(--mat-sys-surface), var(--mat-sys-surface-container-high))` |
| `--app-dialog-shadow` | Sombra de `mat-dialog` | `0 8px 32px light-dark(transparent, rgb(0 0 0 / 60%))`                      |

## Breakpoint del shell

`_breakpoints.scss` define `$layout-mobile-max` (900px) y los mixins `bp.mobile` / `bp.desktop` (`@use 'breakpoints' as bp`). En TypeScript, `LAYOUT_MOBILE_QUERY` (`src/app/bootstrap/layout/layout.constants.ts`); si se cambia uno hay que cambiar el otro.

## Marca en runtime

La marca se cambia sin recompilar desde la sección `theme` de `config/<env>-config.json` (la aplica `RuntimeThemeService`):

```json
"theme": {
  "mode": "auto",
  "product-name": "Phylax",
  "logo": "assets/img/logo.svg",
  "logo-dark": "assets/img/logo-dark.svg",
  "tokens": { "--mat-sys-primary": "light-dark(#6750a4, #d0bcff)", "--app-nav-width": "280px" },
  "tenants": {
    "acme": { "product-name": "Acme", "logo": "assets/img/acme.svg", "tokens": { "--mat-sys-primary": "#b3261e" } }
  }
}
```

- `mode`: modo por defecto (`auto | light | dark`) mientras el usuario no elige otro.
- `tokens`: custom properties que se fijan en `<html>` (estilo inline, ganan a todo). Para que sigan el modo claro/oscuro, usar `light-dark(claro, oscuro)`.
- `tenants.<tenant>`: logo, nombre y tokens del tenant activo; se aplican encima de los generales al cambiar de tenant.
- `logo` / `product-name`: marca del menú. Sin `product-name` se usa `meta.title`; sin `logo-dark`, `logo`.

**Alternativa sin JS:** `config/theme.css` se carga después de los estilos de la app (`index.html`, `onerror` lo quita si no existe). Usar `:root { ... }` para ganar a los tokens. Útil para montar una hoja completa en Docker junto al JSON.

**Paleta M3 completa:** cambiar solo `--mat-sys-primary` no recalcula los tonos derivados (`primary-container`, `on-primary`…). Para una marca completa:

1. `ng generate @angular/material:theme-color` con el color de marca (primario y, opcionalmente, secundario, terciario y neutro). Genera un `_theme-colors.scss` con las paletas.
2. En compilación: `@use 'config' with ($primary-palette: theme-colors.$primary-palette, $tertiary-palette: theme-colors.$tertiary-palette)`.
3. En runtime: compilar una vez con esa paleta, copiar los `--mat-sys-*` de color que emite `html { ... }` en el CSS generado y pegarlos en `theme.tokens` o en `config/theme.css`.

## Lint

`pnpm run lint:styles` (stylelint) avisa de colores hex y prohíbe `--mdc-*`, `--md-sys-*`, los selectores internos `.mat-mdc-*`/`.mdc-*` y `!important`. `_tokens.scss` es el único sitio donde se admiten valores fijos.
