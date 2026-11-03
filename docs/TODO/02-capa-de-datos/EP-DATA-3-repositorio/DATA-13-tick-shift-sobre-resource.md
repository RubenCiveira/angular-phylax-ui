---
id: DATA-13
titulo: "Reimplementar Tick/Shift sobre resource()/rxResource()"
area: capa-de-datos
epica: EP-DATA-3
paso: 7
prioridad: media
esfuerzo: L
ambito: plantilla
estado: hecho
depende_de: [DATA-10, DATA-12]
origen: 06-capa-de-datos.md
---

# DATA-13 · Reimplementar Tick/Shift sobre resource()/rxResource()

**Épica:** [EP-DATA-3 · RepositoryService y metadatos](README.md) — paso 7 de 7

**Prioridad:** 🟡 Media · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`Tick` y `Shift` se construyen añadiendo propiedades a un `computed` con `as any` y muchos `setTimeout(() => searching.set(...))`. Angular ya ofrece `resource()`, `rxResource()` y `linkedSignal`.

## Tareas

- [x] Reimplementar internamente con `rxResource` manteniendo la fachada (`fetch`, `next`, `reset`, `searching`, `subscribe`). *`projection()`/`acl()` sobre un `rxResource` con la clave como parámetro; `projections()` con un `rxResource` por página. Al cambiar de consulta se conservan las filas anteriores hasta que llega la primera página. Facade: `subscribe` emite el valor actual y cada cambio (un `effect`).*
- [x] Eliminar los `setTimeout` de sincronización.
- [x] Hacerlo en rama aparte con `repository.service.spec.ts` como red de seguridad. *Hecho en la misma rama de la épica; el spec se amplió antes de dar por buena la reescritura.*

## Criterios de aceptación

- [x] Los specs existentes pasan.
- [x] No hay `as any` ni `setTimeout` en la implementación.

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`
- `src/app/shared/data/repository/repository.model.ts`

## Relacionado

**Depende de:**
- [DATA-10](DATA-10-proyecciones-conservan-fechas.md) — Las proyecciones no deben convertir las fechas en strings
- [DATA-12](DATA-12-store-inyectable-y-clear-logout.md) — Store de repositorios inyectable y vaciado al cerrar sesión

**Desbloquea:**
- [DEP-10](../../04-dependencias/EP-DEP-6-zoneless/DEP-10-zoneless.md) — Pasar a detección de cambios zoneless *(épica [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../recomendaciones/06-capa-de-datos.md) → *data/repository/repository.service.ts*
