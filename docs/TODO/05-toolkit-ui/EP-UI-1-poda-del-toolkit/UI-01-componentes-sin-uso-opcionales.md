---
id: UI-01
titulo: "Copiar solo los componentes del toolkit que se usan"
area: toolkit-ui
epica: EP-UI-1
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-01 · Copiar solo los componentes del toolkit que se usan

**Épica:** [EP-UI-1 · Poda del toolkit](README.md) — paso 1 de 1

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`calendar-view`, `gantt-view`, `kanban-view`, `map-view`, `speed-dial` y 13 editables (`markdown`, `sourcecode`, `signature`, `credit-card`, `rrule`, `cron`, `phone`, `address`, `pin`, `rating`, `money`, `color`, `date-range`) tienen **0 usos** en las features. Suman unas 4.000 líneas que hay que mantener en cada actualización de Angular.

## Tareas

- [ ] En el generador, mapear `tipo de campo → componente` y copiar solo los necesarios.
- [ ] O publicarlos como paquete opcional `@phylax/toolkit-extras`.
- [ ] Borrar de este proyecto los que no se usan.

## Criterios de aceptación

- [ ] `src/app/shared/toolkit` solo contiene componentes con al menos un uso.
- [ ] Build y tests pasan.

## Ficheros afectados

- `src/app/shared/toolkit/calendar-view/**`
- `src/app/shared/toolkit/gantt-view/**`
- `src/app/shared/toolkit/kanban-view/**`
- `src/app/shared/toolkit/map-view/**`
- `src/app/shared/toolkit/speed-dial/**`
- `src/app/shared/toolkit/editable/editable-*/**`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *Componentes sin uso*
