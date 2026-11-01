---
id: CTX-21
titulo: "Logger propio con niveles y redacción; no interceptar console por defecto"
area: contexto-compartido
epica: EP-CTX-5
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-21 · Logger propio con niveles y redacción; no interceptar console por defecto

**Épica:** [EP-CTX-5 · Logger y telemetría](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`registerLogger` reemplaza `console.log` y `console.error` globalmente para enviar todo al colector OTLP, sin niveles, filtros ni anonimización, y hace `JSON.stringify(args, …, 2)` en cada llamada. Cualquier log de cualquier librería sale del navegador. Hay 32 ficheros con `console.log`.

## Tareas

- [x] Crear `Logger` inyectable (`debug/info/warn/error`) con nivel mínimo `telemetry.logger.level`. *Por defecto `info`. `rootLogger` comparte nivel y destino para funciones sin contexto de inyección.*
- [x] Redactar campos sensibles (`token`, `password`, `secret`, `authorization`, `apiKey`). *También `Bearer …` dentro de textos. Se redacta lo que va al colector; la consola local recibe los objetos originales para no perder trazas navegables.*
- [x] Interceptar `console` solo si `telemetry.logger.capture-console: true` (por defecto `false`).
- [x] Implementación de consola cuando la telemetría está desactivada.
- [x] Sustituir los `console.log` del código compartido por el logger (las features, en FEAT). *Y del shell. Se quitan los logs de depuración sueltos (`BLURR`, `HAS TRACER`, `EL TENANT`…).*

## Criterios de aceptación

- [x] Con la configuración por defecto, `console.log` no se envía al colector.
- [x] Un log con `{ password: "x" }` llega como `[REDACTED]`.

## Ficheros afectados

- `src/app/shared/context/observability/instrumentation.service.ts`
- `src/app/shared/context/observability/logger.service.ts`

## Relacionado

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/observability/instrumentation.service.ts*
