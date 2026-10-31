---
id: CFG-03
titulo: "Sonar: excluir código de terceros y cobertura real"
area: configuracion-y-build
epica: EP-CFG-1
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-11]
origen: 01-configuracion-y-build.md
---

# CFG-03 · Sonar: excluir código de terceros y cobertura real

**Épica:** [EP-CFG-1 · Secretos y artefactos del repositorio](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Sonar analiza `public/assets/monaco/**` y `editorjs/**`, y lee `coverage/lcov.info`, que el runner de tests no genera.

## Tareas

- [ ] Añadir exclusiones para `public/assets/**`.
- [ ] Generar `lcov` en el runner de tests (CFG-11).

## Criterios de aceptación

- [ ] El análisis de Sonar solo incluye `src/` y muestra cobertura.

## Ficheros afectados

- `sonar-project.properties`

## Relacionado

**Depende de:**
- [CFG-11](../EP-CFG-3-build-y-tests/CFG-11-tests-vitest.md) — Migrar los tests de Karma a Vitest (o Jest) *(épica [EP-CFG-3](../EP-CFG-3-build-y-tests/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *sonar-project.properties*
