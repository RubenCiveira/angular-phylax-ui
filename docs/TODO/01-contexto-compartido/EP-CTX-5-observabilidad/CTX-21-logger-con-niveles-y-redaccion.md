---
id: CTX-21
titulo: "Logger propio con niveles y redacción; no interceptar console por defecto"
area: contexto-compartido
epica: EP-CTX-5
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-21 · Logger propio con niveles y redacción; no interceptar console por defecto

**Épica:** [EP-CTX-5 · Logger y telemetría](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`registerLogger` reemplaza `console.log` y `console.error` globalmente para enviar todo al colector OTLP, sin niveles, filtros ni anonimización, y hace `JSON.stringify(args, …, 2)` en cada llamada. Cualquier log de cualquier librería sale del navegador. Hay 32 ficheros con `console.log`.

## Tareas

- [ ] Crear `Logger` inyectable (`debug/info/warn/error`) con nivel mínimo `telemetry.logger.level`.
- [ ] Redactar campos sensibles (`token`, `password`, `secret`, `authorization`, `apiKey`).
- [ ] Interceptar `console` solo si `telemetry.logger.capture-console: true` (por defecto `false`).
- [ ] Implementación de consola cuando la telemetría está desactivada.
- [ ] Sustituir los `console.log` del código compartido por el logger (las features, en FEAT).

## Criterios de aceptación

- [ ] Con la configuración por defecto, `console.log` no se envía al colector.
- [ ] Un log con `{ password: "x" }` llega como `[REDACTED]`.

## Ficheros afectados

- `src/app/shared/context/observability/instrumentation.service.ts`
- `src/app/shared/context/observability/logger.service.ts`

## Relacionado

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/observability/instrumentation.service.ts*
