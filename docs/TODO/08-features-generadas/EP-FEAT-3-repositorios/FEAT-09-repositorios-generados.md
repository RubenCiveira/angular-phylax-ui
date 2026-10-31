---
id: FEAT-09
titulo: "Repositorios: sin mutar filtros y con host centralizado"
area: features-generadas
epica: EP-FEAT-3
paso: 1
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 08-features-generadas.md
---

# FEAT-09 · Repositorios: sin mutar filtros y con host centralizado

**Épica:** [EP-FEAT-3 · Repositorios generados](README.md) — paso 1 de 1

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

- `selectorProvider(filter?)` muta el objeto del signal (`filterValue.search = text`).
- El host lógico `'http://net-civeira-phylax'` se repite como literal.
- `displayProvider()` siempre devuelve `item.code!`.
- `publicQueryFilter` convierte campo a campo en una línea de ~600 caracteres.

## Tareas

- [ ] `const filterValue = { ...(filter?.() ?? { limit: 10 }), search: text }`.
- [ ] Constante `API_HOST_PHYLAX` en `bootstrap/api-hosts.ts` (generado).
- [ ] `display` desde metadatos.
- [ ] `toQueryParams(filter, QUERY_MAP)` genérico.

## Criterios de aceptación

- [ ] El selector no modifica el input del componente padre.
- [ ] El host aparece en un único fichero.

## Ficheros afectados

- `src/app/features/**/repository/*-repository.service.ts`

## Relacionado

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *repository/*-repository.service.ts*
