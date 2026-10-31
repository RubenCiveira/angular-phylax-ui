---
id: STY-13
titulo: "Tabla de list-view con variables de componente"
area: estilos-y-theming
epica: EP-STY-4
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-13 · Tabla de list-view con variables de componente

**Épica:** [EP-STY-4 · Estilos de list-view](README.md) — paso 2 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La tabla usa `solid black`/`silver`, toma la tipografía de tokens de **botón** (`--mdc-protected-button-label-text-*`, que ya no existen) y fija `12px`, `12px 15px` y `52px`.

## Tareas

- [ ] Declarar en `:host` `--list-view-radius`, `--list-view-row-height`, `--list-view-header-bg`, `--list-view-header-fg`, `--list-view-cell-padding`.
- [ ] Usar `font: var(--mat-sys-label-large)` en cabecera y `--mat-sys-body-medium` en celdas.
- [ ] Aplicar el mismo patrón a `list-view.component.scss` (skeleton).

## Criterios de aceptación

- [ ] Cambiar `--list-view-row-height` cambia la altura de fila.
- [ ] No hay `--mdc-` en los SCSS de list-view.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.table.component.scss`
- `src/app/shared/toolkit/list-view/list-view.component.scss`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Desbloquea:**
- [UI-12](../../05-toolkit-ui/EP-UI-4-list-view/UI-12-list-view-limpieza.md) — list-view: seleccionar todo y limpieza interna *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *list-view.table.component.scss*
