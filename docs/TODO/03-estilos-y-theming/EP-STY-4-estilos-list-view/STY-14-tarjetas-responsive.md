---
id: STY-14
titulo: "Rejilla de tarjetas adaptable"
area: estilos-y-theming
epica: EP-STY-4
paso: 3
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 02-estilos-y-theming.md
---

# STY-14 · Rejilla de tarjetas adaptable

**Épica:** [EP-STY-4 · Estilos de list-view](README.md) — paso 3 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`.card-grid { grid-template-columns: repeat(3, 1fr) }`: siempre 3 columnas, demasiado estrechas en tablet y demasiado grandes en monitores anchos.

## Tareas

- [ ] `grid-template-columns: repeat(auto-fill, minmax(var(--list-view-card-min, 280px), 1fr))`.
- [ ] Márgenes y gap con tokens.

## Criterios de aceptación

- [ ] A 700 px se ven 2 columnas; a 1900 px, 5–6.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.grid.component.scss`

## Relacionado

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *list-view.grid.component.scss*
