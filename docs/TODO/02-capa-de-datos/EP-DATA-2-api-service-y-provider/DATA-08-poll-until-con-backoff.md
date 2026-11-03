---
id: DATA-08
titulo: "Sondeo de operaciones masivas con backoff y límite"
area: capa-de-datos
epica: EP-DATA-2
paso: 4
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [DATA-05]
origen: 06-capa-de-datos.md
---

# DATA-08 · Sondeo de operaciones masivas con backoff y límite

**Épica:** [EP-DATA-2 · ApiService y ApiProvider](README.md) — paso 4 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Las operaciones masivas sondean con `timer(1000, 4000)` (el comentario dice "cada 3 segundos") sin límite ni backoff: si el backend nunca devuelve `FINISHED`/`FAILED`, se sondea indefinidamente.

## Tareas

- [x] Crear `pollUntil(request$, isDone, { initial: 1000, max: 10_000, factor: 1.5, timeout: 5 * 60_000 })` en `shared/data`. *Opción `onTimeout(last)` para emitir un valor final; sin ella, termina con `PollTimeoutError`.*
- [x] Usarlo en `deleteAllForQuery` y `patchAllForQuery`.
- [x] Al vencer el timeout, emitir un estado `TIMEOUT` que `long-task-view` muestre. *`LongTask.detailStatus` admite `'TIMEOUT'`; el texto está sin traducir, como el resto de la vista (UI-21).*

## Criterios de aceptación

- [x] El sondeo se detiene tras el timeout con un mensaje visible.

## Ficheros afectados

- `src/app/shared/data/repository/provider/impl/api.provider.ts`
- `src/app/shared/data/poll-until.ts`

## Relacionado

**Depende de:**
- [DATA-05](DATA-05-api-query-vs-command.md) — Las mutaciones no deben repetirse al cambiar el contexto

**Desbloquea:**
- [UI-21](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/UI-21-long-task-view-accesible.md) — long-task-view: progreso accesible *(épica [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../recomendaciones/06-capa-de-datos.md) → *data/repository/provider/impl/api.provider.ts*
