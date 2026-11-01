---
id: EP-DATA-4
titulo: "Selección y selectores"
area: capa-de-datos
prioridad: alta
estado: hecho
issues: [DATA-16, DATA-17]
---

# EP-DATA-4 · Selección y selectores

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~1 días

## Objetivo

Selectores con error visible y selección múltiple reactiva.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DATA-16](DATA-16-selector-provider-error.md) | selectorProvider: exponer error y no relanzarlo | 🟠 | S | 🧩 |
| 2 | [DATA-17](DATA-17-selection-model-inmutable.md) | SelectionModel: toggle inmutable | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/data/selector-provider.ts` | DATA-16 |
| `src/app/shared/data/selection-model.ts` | DATA-17 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Desbloquea

- [UI-08](../../05-toolkit-ui/EP-UI-3-editables-de-seleccion/UI-08-selectone-accesible.md) — editable-selectone accesible y con feedback *(épica [EP-UI-3](../../05-toolkit-ui/EP-UI-3-editables-de-seleccion/README.md))*

## Checklist de la épica

- [x] DATA-16 — selectorProvider: exponer error y no relanzarlo
- [x] DATA-17 — SelectionModel: toggle inmutable
