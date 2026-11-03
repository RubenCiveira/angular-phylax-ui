---
id: UI-11
titulo: "list-view: tooltip en cabecera y ordenación"
area: toolkit-ui
epica: EP-UI-4
paso: 4
prioridad: media
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-11 · list-view: tooltip en cabecera y ordenación

**Épica:** [EP-UI-4 · list-view](README.md) — paso 4 de 6

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`ListViewColumnDirective.tooltip` se recibe pero no se pinta, y no hay ordenación aunque los filtros de las entidades aceptan `order`.

## Tareas

- [x] `matTooltip` en la cabecera con `tooltip()`.
- [x] Input `sortable` en la columna, `aria-sort` y output `sortChange`.
- [ ] Las features traducen `sortChange` a `order` (ver FEAT-07).

## Criterios de aceptación

- [x] Pulsar una cabecera ordenable cambia el orden y lo anuncia `aria-sort`.

## Notas

- `sort = model<ListViewSort | null>()`: genera el output `sortChange` y admite `[(sort)]`. Al pulsar se pasa de sin orden a `asc`, a `desc` y otra vez a sin orden (`null`).
- La cabecera ordenable es un `<button>` dentro del `columnheader`, así que funciona con teclado.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.component.html`
- `src/app/shared/toolkit/list-view/list-view.directives.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *list-view/list-view.component.html / .ts*
