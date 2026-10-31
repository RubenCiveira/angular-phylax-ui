---
id: EP-UI-5
titulo: "Acciones"
area: toolkit-ui
prioridad: alta
estado: pendiente
issues: [UI-15, UI-16, UI-17]
---

# EP-UI-5 · Acciones

**Prioridad máxima:** 🟠 Alta · **Issues:** 3 · **Esfuerzo estimado:** ~6 días

## Objetivo

Clases base para las acciones y contenedor más pequeño y traducido.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-15](UI-15-base-action-y-confirm-action.md) | Clases base BaseAction y ConfirmAction | 🟠 | M | 🧩 |
| 2 | [UI-16](UI-16-action-container-tooltips-y-textos.md) | action-container: tooltips visibles y textos traducidos | 🟡 | S | 🧩 |
| 3 | [UI-17](UI-17-partir-action-container.md) | Partir action-container en subcomponentes | ⚪ | L | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/action/base-action.ts` | UI-15 |
| `src/app/shared/toolkit/action/confirm-action.ts` | UI-15 |
| `src/app/shared/toolkit/action/action.model.ts` | UI-15 |
| `src/app/shared/toolkit/action/action-container.component.ts` | UI-16 |
| `src/app/shared/toolkit/action/**` | UI-17 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [DEP-09](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) — Crear ConfirmDialogService y NotifyService en el toolkit *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*

## Desbloquea

- [FEAT-10](../../08-features-generadas/EP-FEAT-4-acciones-generadas/FEAT-10-acciones-sobre-clases-base.md) — Acciones generadas sobre BaseAction/ConfirmAction *(épica [EP-FEAT-4](../../08-features-generadas/EP-FEAT-4-acciones-generadas/README.md))*

## Checklist de la épica

- [ ] UI-15 — Clases base BaseAction y ConfirmAction
- [ ] UI-16 — action-container: tooltips visibles y textos traducidos
- [ ] UI-17 — Partir action-container en subcomponentes
