---
id: UI-21
titulo: "long-task-view: progreso accesible"
area: toolkit-ui
epica: EP-UI-7
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [DATA-08]
origen: 07-toolkit-ui.md
---

# UI-21 · long-task-view: progreso accesible

**Épica:** [EP-UI-7 · Ajustes aislados](README.md) — paso 2 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Se usa mucho (56 referencias) para el progreso de operaciones masivas.

## Tareas

- [ ] `role="progressbar"` con `aria-valuenow`/`aria-valuemax`.
- [ ] Resumen final con `aria-live="polite"`.
- [ ] Mostrar el estado `TIMEOUT` de DATA-08.

## Criterios de aceptación

- [ ] Un lector de pantalla anuncia el progreso y el resultado.

## Ficheros afectados

- `src/app/shared/toolkit/long-task-view/**`

## Relacionado

**Depende de:**
- [DATA-08](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-08-poll-until-con-backoff.md) — Sondeo de operaciones masivas con backoff y límite *(épica [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *long-task-view/**
