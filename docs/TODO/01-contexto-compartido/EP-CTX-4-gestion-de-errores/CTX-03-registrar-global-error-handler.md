---
id: CTX-03
titulo: "Registrar GlobalErrorHandler"
area: contexto-compartido
epica: EP-CTX-4
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-03 · Registrar GlobalErrorHandler

**Épica:** [EP-CTX-4 · Gestión de errores](README.md) — paso 1 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`GlobalErrorHandler` está definido en `error.service.ts`, pero ningún provider lo registra (no hay `provide: ErrorHandler`). Los errores no controlados solo van a la consola por defecto de Angular y no llegan a la telemetría.

## Tareas

- [ ] Añadir `{ provide: ErrorHandler, useClass: GlobalErrorHandler }` en `app.config.ts`.
- [ ] Que `GlobalErrorHandler.handleError` siga llamando a `console.error` (o al `Logger` de CTX-21) además de `storeError`.
- [ ] Test: lanzar un error en un componente de prueba → `ErrorService.storeError` recibe la llamada.

## Criterios de aceptación

- [ ] Un `throw` no capturado en un componente genera un span de error en el colector (o una llamada a `storeError` en el test).

## Ficheros afectados

- `src/app/app.config.ts`
- `src/app/shared/context/observability/error.service.ts`

## Relacionado

**Desbloquea:**
- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/observability/error.service.ts*
