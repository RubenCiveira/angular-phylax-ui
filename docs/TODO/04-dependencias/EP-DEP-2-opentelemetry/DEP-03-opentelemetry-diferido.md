---
id: DEP-03
titulo: "Cargar OpenTelemetry bajo demanda"
area: dependencias
epica: EP-DEP-2
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 03-dependencias.md
---

# DEP-03 · Cargar OpenTelemetry bajo demanda

**Épica:** [EP-DEP-2 · OpenTelemetry](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`instrumentation.service.ts` importa de forma estática los SDK, exportadores, auto-instrumentaciones y `ZoneContextManager`. Como el servicio se inyecta en `AppComponent`, todo OpenTelemetry (~150–250 KB) va en el bundle inicial aunque `telemetry.name` no esté configurado.

## Tareas

- [ ] Mover los imports de `sdk-*`, `exporter-*`, `instrumentation*` y `context-zone` a `otel-bootstrap.ts`.
- [ ] `activate()` hace `await import('./otel-bootstrap')` solo si hay `telemetry.name`.
- [ ] Mantener solo `@opentelemetry/api` en el bundle principal.
- [ ] Sustituir `getWebAutoInstrumentations` por `instrumentation-fetch`, `-xml-http-request` y `-document-load`.
- [ ] Medir el bundle inicial antes y después (`ng build --stats-json`).

## Criterios de aceptación

- [ ] Sin `telemetry` en la configuración, el chunk de OpenTelemetry no se descarga.
- [ ] El bundle inicial baja al menos 100 KB.

## Ficheros afectados

- `src/app/shared/context/observability/instrumentation.service.ts`
- `src/app/shared/context/observability/otel-bootstrap.ts`
- `package.json`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../../recomendaciones/03-dependencias.md) → *instrumentation.service.ts (OpenTelemetry)*
