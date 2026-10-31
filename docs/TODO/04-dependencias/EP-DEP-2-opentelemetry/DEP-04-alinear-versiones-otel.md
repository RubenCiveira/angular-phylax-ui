---
id: DEP-04
titulo: "Alinear versiones de los paquetes de OpenTelemetry"
area: dependencias
epica: EP-DEP-2
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 03-dependencias.md
---

# DEP-04 · Alinear versiones de los paquetes de OpenTelemetry

**Épica:** [EP-DEP-2 · OpenTelemetry](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Hay versiones mezcladas: `sdk-logs@0.208` con `exporter-logs-otlp-http@0.202`, `resources@2.2` con `sdk-trace-web@2.0`. En OpenTelemetry JS los paquetes `0.x` se publican juntos y mezclarlos puede romper tipos o runtime.

## Tareas

- [ ] Actualizar todos los `0.x` a la misma versión y todos los `2.x` a la misma versión.
- [ ] Agruparlos en Renovate/Dependabot (`groupName: opentelemetry`).
- [ ] Quitar los paquetes que dejen de usarse tras DEP-03.

## Criterios de aceptación

- [ ] `pnpm ls @opentelemetry/*` muestra versiones coherentes.
- [ ] La telemetría sigue exportando trazas y logs.

## Ficheros afectados

- `package.json`
- `pnpm-lock.yaml`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../../recomendaciones/03-dependencias.md) → *instrumentation.service.ts (OpenTelemetry)*
