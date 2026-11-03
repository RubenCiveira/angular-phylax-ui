---
id: CFG-11
titulo: "Migrar los tests de Karma a Vitest (o Jest)"
area: configuracion-y-build
epica: EP-CFG-3
paso: 4
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-11 · Migrar los tests de Karma a Vitest (o Jest)

**Épica:** [EP-CFG-3 · angular.json, build y tests](README.md) — paso 4 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`karma.config.js` no es un módulo válido y `angular.json` no lo referencia. Karma está deprecado. Hay specs duplicados (`route-accesible.service.spec.ts`).

## Tareas

- [ ] Configurar Vitest (`@angular/build:unit-test`) o Jest con reporter `lcov`.
- [ ] Ejecutar ambos en paralelo hasta que todo pase y después quitar Karma y Jasmine.
- [ ] Borrar `karma.config.js`.

## Criterios de aceptación

- [ ] `pnpm test` corre en modo headless sin Chrome y genera `coverage/lcov.info`.

## Ficheros afectados

- `karma.config.js`
- `angular.json`
- `package.json`
- `tsconfig.spec.json`

## Relacionado

**Desbloquea:**
- [CFG-03](../EP-CFG-1-secretos-y-artefactos/CFG-03-sonar-exclusiones-y-cobertura.md) — Sonar: excluir código de terceros y cobertura real *(épica [EP-CFG-1](../EP-CFG-1-secretos-y-artefactos/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../recomendaciones/01-configuracion-y-build.md) → *karma.config.js*
