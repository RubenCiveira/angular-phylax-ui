---
id: EP-UI-1
titulo: "Poda del toolkit"
area: toolkit-ui
prioridad: alta
estado: pendiente
issues: [UI-01]
---

# EP-UI-1 · Poda del toolkit

**Prioridad máxima:** 🟠 Alta · **Issues:** 1 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Quitar los componentes sin uso antes de invertir en los demás.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-01](UI-01-componentes-sin-uso-opcionales.md) | Copiar solo los componentes del toolkit que se usan | 🟠 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/calendar-view/**` | UI-01 |
| `src/app/shared/toolkit/gantt-view/**` | UI-01 |
| `src/app/shared/toolkit/kanban-view/**` | UI-01 |
| `src/app/shared/toolkit/map-view/**` | UI-01 |
| `src/app/shared/toolkit/speed-dial/**` | UI-01 |
| `src/app/shared/toolkit/editable/editable-*/**` | UI-01 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Checklist de la épica

- [ ] UI-01 — Copiar solo los componentes del toolkit que se usan
