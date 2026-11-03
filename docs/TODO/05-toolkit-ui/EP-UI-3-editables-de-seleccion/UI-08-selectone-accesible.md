---
id: UI-08
titulo: "editable-selectone accesible y con feedback"
area: toolkit-ui
epica: EP-UI-3
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [DATA-16]
origen: 07-toolkit-ui.md
---

# UI-08 · editable-selectone accesible y con feedback

**Épica:** [EP-UI-3 · Editables de selección](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El botón de desplegar es un `<mat-icon (click)>` (no se enfoca ni se activa con teclado), el `debounceTime(700)` es fijo y no hay estado "sin resultados" ni de error.

## Tareas

- [x] `<button mat-icon-button matSuffix type="button" [attr.aria-label]=…>`.
- [x] `debounce = input(250)`.
- [x] Opción deshabilitada "Sin resultados" y `<mat-error>` cuando `provider.error()`.
- [x] Quitar el estilo inline del sufijo.

## Criterios de aceptación

- [x] Se puede abrir el desplegable con teclado.
- [x] Se ve "Sin resultados" cuando la búsqueda no devuelve nada.

## Ficheros afectados

- `src/app/shared/toolkit/editable/editable-selectone/editable-selectone.component.ts`
- `src/app/shared/toolkit/editable/search-editable.ts`

## Relacionado

**Depende de:**
- [DATA-16](../../02-capa-de-datos/EP-DATA-4-seleccion-y-selectores/DATA-16-selector-provider-error.md) — selectorProvider: exponer error y no relanzarlo *(épica [EP-DATA-4](../../02-capa-de-datos/EP-DATA-4-seleccion-y-selectores/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *editable-selectone + search-editable.ts*
