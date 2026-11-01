---
id: STY-13
titulo: "Tabla de list-view con variables de componente"
area: estilos-y-theming
epica: EP-STY-4
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: en-curso
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-13 · Tabla de list-view con variables de componente

**Épica:** [EP-STY-4 · Estilos de list-view](README.md) — paso 2 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La tabla usa `solid black`/`silver`, toma la tipografía de tokens de **botón** (`--mdc-protected-button-label-text-*`, que ya no existen) y fija `12px`, `12px 15px` y `52px`.

## Tareas

- [x] Declarar en `:host` `--list-view-radius`, `--list-view-row-height`, `--list-view-header-bg`, `--list-view-header-fg`, `--list-view-cell-padding`. *Declaradas una sola vez en el `:host` de `list-view.component.scss` (junto a `--list-view-border-color`, `--list-view-hover-bg`, `--list-view-transition` y `--list-view-card-min`), compartidas por tabla, lista, tarjetas y skeleton.* *Como STY-03 aún no está hecho, se usa `var(--app-…, <reserva>)` con la reserva en `--mat-sys-*`/valor anterior: adopta los tokens en cuanto existan.*
- [x] Usar `font: var(--mat-sys-label-large)` en cabecera y `--mat-sys-body-medium` en celdas.
- [x] Aplicar el mismo patrón a `list-view.component.scss` (skeleton).

## Criterios de aceptación

- [x] Cambiar `--list-view-row-height` cambia la altura de fila. *Cubierto por test (`itemHeight` pasa a 40 con `--list-view-row-height: 40px`).* *Las celdas y el skeleton usan la variable en CSS (sin `height` inline) y `ListViewComponent` la lee en `ngOnInit` para el `itemSize` del virtual scroll.*
- [x] No hay `--mdc-` en los SCSS de list-view. *Solo queda el selector de clase `.mat-mdc-card-actions`, que no es un token.*

## Notas

- Además de las cinco variables pedidas, `:host` declara `--list-view-border-color`, `--list-view-hover-bg`, `--list-view-transition` y `--list-view-card-min`.
- Para que `--list-view-row-height` cambie realmente la altura: se quitó el `height` inline de `th`/`td` y del skeleton, y `ListViewComponent.ngOnInit` lee la variable con `getComputedStyle` para el `itemSize` del virtual scroll (si no es un valor en px usa 52).
- Para poder ejecutar los tests, el builder de Karma pasa a `"builderMode": "application"` (esbuild, como el build): con webpack, `css-loader` no resolvía las `url('@fontsource-variable/…')` de `src/styles/_fonts.scss`.
- Con encapsulación emulada, `:host` gana a un selector de elemento: para sobrescribir desde fuera hace falta más especificidad (`.compact list-view { --list-view-row-height: 40px; }`).

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.table.component.scss`
- `src/app/shared/toolkit/list-view/list-view.component.scss`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Desbloquea:**
- [UI-12](../../05-toolkit-ui/EP-UI-4-list-view/UI-12-list-view-limpieza.md) — list-view: seleccionar todo y limpieza interna *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *list-view.table.component.scss*
