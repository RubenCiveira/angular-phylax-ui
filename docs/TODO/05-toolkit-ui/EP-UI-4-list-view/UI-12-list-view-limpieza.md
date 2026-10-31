---
id: UI-12
titulo: "list-view: seleccionar todo y limpieza interna"
area: toolkit-ui
epica: EP-UI-4
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-13]
origen: 07-toolkit-ui.md
---

# UI-12 · list-view: seleccionar todo y limpieza interna

**Épica:** [EP-UI-4 · list-view](README.md) — paso 2 de 6

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay "seleccionar todo"; el output `prev` nunca se emite; `mode='list'` acaba mostrando la tabla; `itemHeight = 52` está duplicado con el SCSS; hay `ResizeObserver` y `window.resize` a la vez y dos suscripciones a `BreakpointObserver` que se pisan; el skeleton usa `[].constructor(20)`.

## Tareas

- [ ] Checkbox "seleccionar todo" en la cabecera.
- [ ] Quitar `prev` (o implementarlo).
- [ ] `mode: 'auto' | 'table' | 'card' | 'list'` explícito.
- [ ] `rowHeight = input(52)` sincronizado con `--list-view-row-height`.
- [ ] Un solo `ResizeObserver` y un solo `BreakpointObserver`.

## Criterios de aceptación

- [ ] Sin listeners de `window.resize` en list-view.
- [ ] Seleccionar todo marca las filas visibles.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.component.ts`
- `src/app/shared/toolkit/list-view/list-view.component.html`

## Relacionado

**Depende de:**
- [STY-13](../../03-estilos-y-theming/EP-STY-4-estilos-list-view/STY-13-tabla-variables-de-componente.md) — Tabla de list-view con variables de componente *(épica [EP-STY-4](../../03-estilos-y-theming/EP-STY-4-estilos-list-view/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *list-view/list-view.component.html / .ts*
