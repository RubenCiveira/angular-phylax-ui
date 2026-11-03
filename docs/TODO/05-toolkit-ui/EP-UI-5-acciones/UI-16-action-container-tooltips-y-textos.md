---
id: UI-16
titulo: "action-container: tooltips visibles y textos traducidos"
area: toolkit-ui
epica: EP-UI-5
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: en-curso
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-16 · action-container: tooltips visibles y textos traducidos

**Épica:** [EP-UI-5 · Acciones](README.md) — paso 2 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`moreOptionsLabel = signal('More actions')` está fijado en inglés y el `tooltip` de las acciones no se pinta (solo `aria-label`). `maxIcons = signal(2)` no se puede configurar.

## Tareas

- [x] `matTooltip` con `action.tooltip()`.
- [x] Etiqueta "Más acciones" desde `common.moreActions`.
- [x] `maxIcons` como `input()`.

## Criterios de aceptación

- [ ] Al pasar el ratón por un botón de acción se ve su tooltip. *(pendiente de prueba manual)*

## Ficheros afectados

- `src/app/shared/toolkit/action/action-container.component.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *action/action-container.component.ts + action.model.ts*
