---
id: CTX-03
titulo: "Registrar GlobalErrorHandler"
area: contexto-compartido
epica: EP-CTX-4
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-03 · Registrar GlobalErrorHandler

**Épica:** [EP-CTX-4 · Gestión de errores](README.md) — paso 1 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`GlobalErrorHandler` está definido en `error.service.ts`, pero ningún provider lo registra (no hay `provide: ErrorHandler`). Los errores no controlados solo van a la consola por defecto de Angular y no llegan a la telemetría.

## Tareas

- [x] Añadir `{ provide: ErrorHandler, useClass: GlobalErrorHandler }` en `app.config.ts`.
- [x] Que `GlobalErrorHandler.handleError` siga llamando a `console.error` (o al `Logger` de CTX-21) además de `storeError`. *`storeError` escribe con `Logger.error`; si no se puede registrar, el handler cae a `console.error`.*
- [x] Test: lanzar un error en un componente de prueba → `ErrorService.storeError` recibe la llamada.

## Criterios de aceptación

- [x] Un `throw` no capturado en un componente genera un span de error en el colector (o una llamada a `storeError` en el test).

## Notas

- `storeError` es idempotente por error (`WeakSet`): un error HTTP que nadie captura llega a la vez al aviso diferido de `ClientService` y al `GlobalErrorHandler`, y solo genera un span.

## Ficheros afectados

- `src/app/app.config.ts`
- `src/app/shared/context/observability/error.service.ts`

## Relacionado

**Desbloquea:**
- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *context/observability/error.service.ts*
