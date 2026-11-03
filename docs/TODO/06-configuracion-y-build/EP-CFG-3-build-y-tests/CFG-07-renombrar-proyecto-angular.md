---
id: CFG-07
titulo: "Renombrar el proyecto de angular.json (lughauth → phylax-ui)"
area: configuracion-y-build
epica: EP-CFG-3
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-07 · Renombrar el proyecto de angular.json (lughauth → phylax-ui)

**Épica:** [EP-CFG-3 · angular.json, build y tests](README.md) — paso 1 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El proyecto se llama `lughauth` y el output es `dist/lughauth`, restos de otra plantilla. Los Dockerfiles esperan rutas distintas.

## Tareas

- [ ] Renombrar proyecto, `buildTarget` y `outputPath` a `phylax-ui`.
- [ ] Actualizar los Dockerfiles en el mismo commit (CFG-12).

## Criterios de aceptación

- [ ] `ng build` deja el resultado en `dist/phylax-ui/browser`.

## Ficheros afectados

- `angular.json`

## Relacionado

**Desbloquea:**
- [CFG-08](CFG-08-builder-y-assets.md) — Migrar a @angular/build y filtrar assets
- [CFG-12](../EP-CFG-4-docker-y-despliegue/CFG-12-dockerfile-unico.md) — Un único Dockerfile que funcione *(épica [EP-CFG-4](../EP-CFG-4-docker-y-despliegue/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../recomendaciones/01-configuracion-y-build.md) → *angular.json*
