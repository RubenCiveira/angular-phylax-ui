---
id: UI-23
titulo: "Modelo de conflicto y fusión a tres bandas"
area: toolkit-ui
epica: EP-UI-8
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: peticion
---

# UI-23 · Modelo de conflicto y fusión a tres bandas

**Épica:** [EP-UI-8 · Resolución de conflictos de edición (412)](README.md) — paso 1 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Para resolver un 412 hay que comparar tres versiones de la misma entidad (original, enviada y actual) y decidir, campo a campo, qué se puede fusionar solo y qué necesita al usuario. Esa lógica es pura y debe vivir fuera de cualquier componente para poder probarla sin Angular.

## Tareas

- [ ] Crear `edit-conflict.model.ts` con:
  - `EditConflict<T> { original: T; sent: T; current: T }`.
  - `FieldMergeState = 'unchanged' | 'mine' | 'theirs' | 'same' | 'conflict'`.
  - `FieldMerge { field: string; original; sent; current; state; resolved }`, donde `resolved` es el valor elegido (por defecto: `sent` en `mine`, `current` en `theirs`/`same`/`unchanged`, sin valor en `conflict`).
- [ ] Crear `threeWayMerge<T>(conflict, options?)` en `three-way-merge.ts` que devuelva `FieldMerge[]` para cada campo de primer nivel:
  - `sent == original && current == original` → `unchanged`
  - `sent != original && current == original` → `mine`
  - `sent == original && current != original` → `theirs`
  - `sent != original && current != original && sent == current` → `same`
  - resto → `conflict`
- [ ] Igualdad estructural tolerante al formato del cable: referencias `{ $ref }` por su `$ref`, arrays por contenido, fechas por instante, `null`/`undefined`/`''` equivalentes.
- [ ] `options.ignore` con `['version']` por defecto (la `version` siempre se toma de `current`) y campos técnicos (`uid`).
- [ ] `applyMerge(conflict, merges)` que construya el valor final: `resolved` de cada campo + `version` de `current`. Lanza si queda algún `conflict` sin resolver.

## Criterios de aceptación

- [ ] Tests unitarios para los cinco estados, para `$ref`, arrays y fechas, y para `applyMerge` con y sin conflictos pendientes.
- [ ] Sin dependencias de Angular ni de Material en estos dos ficheros.

## Ficheros afectados

- `src/app/shared/toolkit/edit-conflict/edit-conflict.model.ts` *(nuevo)*
- `src/app/shared/toolkit/edit-conflict/three-way-merge.ts` *(nuevo)*
- `src/app/shared/toolkit/edit-conflict/three-way-merge.spec.ts` *(nuevo)*

## Relacionado

**Origen:** petición directa (no procede de `docs/recomendaciones`).
