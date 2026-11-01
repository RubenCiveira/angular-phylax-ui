---
id: DATA-10
titulo: "Las proyecciones no deben convertir las fechas en strings"
area: capa-de-datos
epica: EP-DATA-3
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-10 · Las proyecciones no deben convertir las fechas en strings

**Épica:** [EP-DATA-3 · RepositoryService y metadatos](README.md) — paso 1 de 7

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`buildProjection` clona cada ítem con `JSON.parse(JSON.stringify(item))`, así que los `Date` vuelven a ser strings ISO. En las listas se ve `2025-10-30T10:00:00.000Z` en crudo.

## Tareas

- [x] Sustituir por `structuredClone(item)` (o `{ ...item }`, ya que solo se reemplazan las propiedades `include`). *Copia superficial `{ ...item }`; las referencias se sustituyen por un `Signal` que se carga una sola vez por `$ref`.*
- [x] Test: un ítem con `Date` sigue teniendo `Date` tras la proyección. *También para `projection()`.*

## Criterios de aceptación

- [x] `row.registeredAt instanceof Date` en la lista de oauth-client.

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`

## Relacionado

**Desbloquea:**
- [DATA-13](DATA-13-tick-shift-sobre-resource.md) — Reimplementar Tick/Shift sobre resource()/rxResource()
- [FEAT-04](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-04-renderizadores-por-tipo.md) — Renderizado de valores por tipo en listas y detalle *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/repository/repository.service.ts*
