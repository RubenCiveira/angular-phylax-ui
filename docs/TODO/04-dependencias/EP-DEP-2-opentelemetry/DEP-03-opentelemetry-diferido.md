---
id: DEP-03
titulo: "Cargar OpenTelemetry bajo demanda"
area: dependencias
epica: EP-DEP-2
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 03-dependencias.md
---

# DEP-03 · Cargar OpenTelemetry bajo demanda

**Épica:** [EP-DEP-2 · OpenTelemetry](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`instrumentation.service.ts` importa de forma estática los SDK, exportadores, auto-instrumentaciones y `ZoneContextManager`. Como el servicio se inyecta en `AppComponent`, todo OpenTelemetry (~150–250 KB) va en el bundle inicial aunque `telemetry.name` no esté configurado.

## Tareas

- [x] Mover los imports de `sdk-*`, `exporter-*`, `instrumentation*` y `context-zone` a `otel-bootstrap.ts`. *También `resources` y `semantic-conventions`, y el parcheo de `console` del logger.*
- [x] `activate()` hace `await import('./otel-bootstrap')` solo si hay `telemetry.name`. *`activate()` pasa a devolver `Promise<void>`; si el chunk no carga, se registra el error y la app sigue.*
- [x] Mantener solo `@opentelemetry/api` en el bundle principal.
- [x] Sustituir `getWebAutoInstrumentations` por `instrumentation-fetch`, `-xml-http-request` y `-document-load`. *Se deja de instrumentar `user-interaction`.*
- [x] Medir el bundle inicial antes y después (`ng build --stats-json`). *Inicial (main + polyfills + chunks de arranque): 1.193.414 B → 990.486 B (−203 KB). OpenTelemetry en el inicial: 191.020 B → 25.329 B (solo `@opentelemetry/api`). Chunk diferido `otel-bootstrap`: 200 KB (≈50 KB comprimido).*

## Criterios de aceptación

- [x] Sin `telemetry` en la configuración, el chunk de OpenTelemetry no se descarga.
- [x] El bundle inicial baja al menos 100 KB.

## Ficheros afectados

- `src/app/shared/context/observability/instrumentation.service.ts`
- `src/app/shared/context/observability/otel-bootstrap.ts`
- `package.json`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../../recomendaciones/03-dependencias.md) → *instrumentation.service.ts (OpenTelemetry)*
