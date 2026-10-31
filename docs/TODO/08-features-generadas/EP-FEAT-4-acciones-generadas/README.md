---
id: EP-FEAT-4
titulo: "Acciones generadas"
area: features-generadas
prioridad: alta
estado: pendiente
issues: [FEAT-11, FEAT-10]
---

# EP-FEAT-4 · Acciones generadas

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~4.5 días

## Objetivo

Acciones cortas sobre clases base y sin erratas.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [FEAT-11](FEAT-11-erratas-de-plantillas.md) | Corregir erratas que se propagan a cientos de ficheros | ⚪ | S | 🧩 |
| 2 | [FEAT-10](FEAT-10-acciones-sobre-clases-base.md) | Acciones generadas sobre BaseAction/ConfirmAction | 🟠 | L | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/features/**` | FEAT-11 |
| `src/app/features/**/actions/**` | FEAT-10 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [UI-15](../../05-toolkit-ui/EP-UI-5-acciones/UI-15-base-action-y-confirm-action.md) — Clases base BaseAction y ConfirmAction *(épica [EP-UI-5](../../05-toolkit-ui/EP-UI-5-acciones/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-FEAT-7](../EP-FEAT-7-contrato-del-generador/README.md) — Contrato del generador: `src/app/features/**`

## Checklist de la épica

- [ ] FEAT-11 — Corregir erratas que se propagan a cientos de ficheros
- [ ] FEAT-10 — Acciones generadas sobre BaseAction/ConfirmAction
