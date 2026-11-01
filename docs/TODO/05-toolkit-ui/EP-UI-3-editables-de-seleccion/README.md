---
id: EP-UI-3
titulo: "Editables de selección"
area: toolkit-ui
prioridad: alta
estado: hecho
issues: [UI-07, UI-08]
---

# EP-UI-3 · Editables de selección

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~1 días

## Objetivo

Valores y etiquetas separados y selectores accesibles.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-07](UI-07-editable-choose-valor-y-etiqueta.md) | editable-choose: separar valor y etiqueta, y elegir representación | 🟠 | S | 🧩 |
| 2 | [UI-08](UI-08-selectone-accesible.md) | editable-selectone accesible y con feedback | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/editable/editable-choose/editable-choose.component.ts` | UI-07 |
| `src/app/shared/toolkit/editable/editable-selectone/editable-selectone.component.ts` | UI-08 |
| `src/app/shared/toolkit/editable/search-editable.ts` | UI-08 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [DATA-16](../../02-capa-de-datos/EP-DATA-4-seleccion-y-selectores/DATA-16-selector-provider-error.md) — selectorProvider: exponer error y no relanzarlo *(épica [EP-DATA-4](../../02-capa-de-datos/EP-DATA-4-seleccion-y-selectores/README.md))*

## Checklist de la épica

- [x] UI-07 — editable-choose: separar valor y etiqueta, y elegir representación
- [x] UI-08 — editable-selectone accesible y con feedback
