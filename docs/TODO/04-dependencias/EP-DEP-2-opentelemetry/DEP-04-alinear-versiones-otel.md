---
id: DEP-04
titulo: "Alinear versiones de los paquetes de OpenTelemetry"
area: dependencias
epica: EP-DEP-2
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: en-curso
depende_de: []
origen: 03-dependencias.md
---

# DEP-04 · Alinear versiones de los paquetes de OpenTelemetry

**Épica:** [EP-DEP-2 · OpenTelemetry](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Hay versiones mezcladas: `sdk-logs@0.208` con `exporter-logs-otlp-http@0.202`, `resources@2.2` con `sdk-trace-web@2.0`. En OpenTelemetry JS los paquetes `0.x` se publican juntos y mezclarlos puede romper tipos o runtime.

## Tareas

- [x] Actualizar todos los `0.x` a la misma versión y todos los `2.x` a la misma versión. *`0.223.0` y `2.12.0` (última línea 2.x; `instrumentation-document-load@0.68.0` es la que casa con ella). El salto a 3.x / 0.300 queda pendiente: `sdk-trace-web` está deprecado en favor de `sdk-trace`, pero las instrumentaciones 0.223 aún dependen de él.*
- [x] Agruparlos en Renovate/Dependabot (`groupName: opentelemetry`). *Grupo `opentelemetry` en `.github/dependabot.yml`.*
- [x] Quitar los paquetes que dejen de usarse tras DEP-03. *Fuera `auto-instrumentations-web`.*

## Criterios de aceptación

- [x] `pnpm ls @opentelemetry/*` muestra versiones coherentes.
- [ ] La telemetría sigue exportando trazas y logs. *Pendiente de comprobar contra un colector OTLP real.*

## Ficheros afectados

- `package.json`
- `pnpm-lock.yaml`
- `.github/dependabot.yml`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../../recomendaciones/03-dependencias.md) → *instrumentation.service.ts (OpenTelemetry)*
