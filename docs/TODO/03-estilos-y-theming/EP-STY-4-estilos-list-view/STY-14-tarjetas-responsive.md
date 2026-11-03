---
id: STY-14
titulo: "Rejilla de tarjetas adaptable"
area: estilos-y-theming
epica: EP-STY-4
paso: 3
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: en-curso
depende_de: []
origen: 02-estilos-y-theming.md
---

# STY-14 · Rejilla de tarjetas adaptable

**Épica:** [EP-STY-4 · Estilos de list-view](README.md) — paso 3 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`.card-grid { grid-template-columns: repeat(3, 1fr) }`: siempre 3 columnas, demasiado estrechas en tablet y demasiado grandes en monitores anchos.

## Tareas

- [x] `grid-template-columns: repeat(auto-fill, minmax(var(--list-view-card-min, 280px), 1fr))`. *Con `min(var(--list-view-card-min), 100%)` para que no desborde por debajo de 280 px.*
- [x] Márgenes y gap con tokens.

## Criterios de aceptación

- [x] A 700 px se ven 2 columnas; a 1900 px, 5–6. *Cubierto por test: con el componente a 700 px y a 1900 px de ancho, `grid-template-columns` resuelve a 2 y 6 columnas. Con el menú lateral de 260 px abierto salen 5 (por cálculo, sin test).*

## Notas

- `minmax(min(var(--list-view-card-min), 100%), 1fr)` evita desbordamiento cuando el contenedor es más estrecho que 280 px.
- Márgenes y gap con `--app-space-4`; hueco entre acciones con `--app-space-1`.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.grid.component.scss`

## Relacionado

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *list-view.grid.component.scss*
