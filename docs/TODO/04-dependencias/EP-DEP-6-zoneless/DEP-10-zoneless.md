---
id: DEP-10
titulo: "Pasar a detección de cambios zoneless"
area: dependencias
epica: EP-DEP-6
paso: 1
prioridad: media
esfuerzo: L
ambito: plantilla
estado: pendiente
depende_de: [FEAT-14, DATA-13, CTX-23]
origen: 03-dependencias.md
---

# DEP-10 · Pasar a detección de cambios zoneless

**Épica:** [EP-DEP-6 · Zoneless](README.md) — paso 1 de 1

**Prioridad:** 🟡 Media · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La app depende de `zone.js` y usa muchos `setTimeout(() => signal.set(...))` para evitar `ExpressionChanged…`, además de estado mutable fuera de signals. Ningún componente usa `OnPush`.

## Tareas

- [ ] Con todo en signals y `OnPush` (FEAT-14, CTX-23, DATA-13), activar `provideZonelessChangeDetection()`.
- [ ] Quitar `zone.js` de los polyfills (build y test).
- [ ] Cambiar `ZoneContextManager` de OpenTelemetry por `StackContextManager`.
- [ ] Medir con el profiler de Angular DevTools antes y después.

## Criterios de aceptación

- [ ] La app funciona sin `zone.js`.
- [ ] Los tests pasan con `provideZonelessChangeDetection()`.

## Ficheros afectados

- `angular.json`
- `src/app/app.config.ts`
- `src/app/shared/context/observability/otel-bootstrap.ts`

## Relacionado

**Depende de:**
- [FEAT-14](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-14-standalone-onpush.md) — Generar componentes standalone con OnPush y rutas sin NgModule *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*
- [DATA-13](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-13-tick-shift-sobre-resource.md) — Reimplementar Tick/Shift sobre resource()/rxResource() *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*
- [CTX-23](../../01-contexto-compartido/EP-CTX-8-estado-global/CTX-23-app-state-con-signals.md) — AppStateService con signals reales y claves tipadas *(épica [EP-CTX-8](../../01-contexto-compartido/EP-CTX-8-estado-global/README.md))*

**Recomendación de origen:** [03 · Dependencias](../../recomendaciones/03-dependencias.md) → *zone.js*
