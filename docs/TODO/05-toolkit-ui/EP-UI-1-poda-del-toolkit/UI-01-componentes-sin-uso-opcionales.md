---
id: UI-01
titulo: "Copiar solo los componentes del toolkit que se usan"
area: toolkit-ui
epica: EP-UI-1
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: en-curso
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-01 · Copiar solo los componentes del toolkit que se usan

**Épica:** [EP-UI-1 · Poda del toolkit](README.md) — paso 1 de 1

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`calendar-view`, `gantt-view`, `kanban-view`, `map-view`, `speed-dial` y 13 editables (`markdown`, `sourcecode`, `signature`, `credit-card`, `rrule`, `cron`, `phone`, `address`, `pin`, `rating`, `money`, `color`, `date-range`) tienen **0 usos** en las features. Suman unas 4.000 líneas que hay que mantener en cada actualización de Angular.

**Decisión:** los editables y `speed-dial` **se conservan**. Son de gran utilidad para el generador y no pesan en el build: al no importarlos ninguna feature, el tree-shaking los deja fuera del bundle. Solo tres usan librerías externas (`editable-rrule` → `rrule`, `editable-cron` → `cron-parser`, `editable-phone` → `libphonenumber-js`), y esas tres dependencias se mantienen en `package.json` como coste asumido. `speed-dial` se conserva por ser un elemento muy reutilizable. La poda se limita a las vistas.

## Tareas

- [ ] En el generador, mapear `tipo de campo → componente` y copiar solo las vistas necesarias (los editables se copian siempre).
- [ ] O publicar las vistas como paquete opcional `@phylax/toolkit-extras`.
- [x] Borrar de este proyecto las vistas que no se usan. *Borrados `calendar-view`, `gantt-view`, `kanban-view` y `map-view` (y sus dependencias `frappe-gantt` y `leaflet`). Los editables y `speed-dial` se conservan (ver Decisión).*

## Criterios de aceptación

- [ ] `src/app/shared/toolkit` solo contiene componentes con al menos un uso, salvo los editables y `speed-dial`, que se conservan a propósito.
- [ ] Build y tests pasan.

## Ficheros afectados

- `src/app/shared/toolkit/calendar-view/**`
- `src/app/shared/toolkit/gantt-view/**`
- `src/app/shared/toolkit/kanban-view/**`
- `src/app/shared/toolkit/map-view/**`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *Componentes sin uso*
