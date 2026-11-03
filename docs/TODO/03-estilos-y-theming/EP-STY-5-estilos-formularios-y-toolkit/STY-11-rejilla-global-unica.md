---
id: STY-11
titulo: "Generar la rejilla una sola vez y simplificar form-layout"
area: estilos-y-theming
epica: EP-STY-5
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [STY-01]
origen: 02-estilos-y-theming.md
---

# STY-11 · Generar la rejilla una sola vez y simplificar form-layout

**Épica:** [EP-STY-5 · Formularios y componentes del toolkit](README.md) — paso 1 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`form-layout.component.scss` incluye el mixin de rejilla dentro del componente con `ViewEncapsulation.None`: cientos de clases que cuentan para el presupuesto de 4 kB y se vuelven globales igualmente. `margin: 2rem` está fijado y las plantillas añaden `class="u-grid"`, que no hace nada (el prefijo es `form-layout`).

## Tareas

- [x] Incluir `generate-grid-utils(...)` una vez en `_utilities.scss`, con `$max-row-start: 12`, `$order-min: -2`, `$order-max: 6`.
- [x] Dejar `form-layout.component.scss` con `:host { display: grid; margin: var(--form-layout-margin, 0); gap: var(--form-layout-gap, var(--app-space-4)); }`. *El margen por defecto es `var(--app-space-8)` (32px = el `2rem` anterior) en lugar de `0`, para que los formularios se vean igual. El componente deja `ViewEncapsulation.None` y añade `form-layout-grid` con `host: { class }` en lugar de `Renderer2`.*
- [x] Quitar `class="u-grid"` de las plantillas del generador. *50 plantillas de features y la del toolbar.*

## Criterios de aceptación

- [x] `ng build` no avisa del presupuesto `anyComponentStyle` en form-layout.
- [x] Los formularios se ven igual.

## Ficheros afectados

- `src/app/shared/toolkit/form-layout/form-layout.component.scss`
- `src/styles/_utilities.scss`
- `src/app/features/**/*-form-group.component.html`

## Relacionado

**Depende de:**
- [STY-01](../EP-STY-1-fundamentos-de-estilos/STY-01-estructura-src-styles.md) — Crear la estructura src/styles/ sin cambios visuales *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *grid-utils.scss + form-layout.component.scss*
