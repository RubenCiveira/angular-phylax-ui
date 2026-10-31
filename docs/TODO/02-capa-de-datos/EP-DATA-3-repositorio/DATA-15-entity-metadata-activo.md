---
id: DATA-15
titulo: "Activar EntityMetadata y borrar APIs comentadas"
area: capa-de-datos
epica: EP-DATA-3
paso: 5
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-15 · Activar EntityMetadata y borrar APIs comentadas

**Épica:** [EP-DATA-3 · RepositoryService y metadatos](README.md) — paso 5 de 7

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`repository-provider.interface.ts` y `repository.model.ts` tienen grandes bloques comentados (count, statistical, export…). `EntityMetadata` existe pero no se usa. `LongTask*` repite los literales de estado.

## Tareas

- [ ] Borrar los bloques comentados (llevar las ideas a un ADR o issue).
- [ ] Ampliar `EntityMetadata` con `dates`, `datetimes`, `sensitive`, `display` y añadirla a `RepositoryMetadata`.
- [ ] Crear `type TaskStatus` y reutilizarlo en `long-task.model.ts`.

## Criterios de aceptación

- [ ] `RepositoryMetadata.entity` disponible para DATA-03 y FEAT-03.

## Ficheros afectados

- `src/app/shared/data/repository/provider/repository-provider.interface.ts`
- `src/app/shared/data/repository/repository.model.ts`
- `src/app/shared/data/long-task.model.ts`

## Relacionado

**Desbloquea:**
- [DATA-03](DATA-03-fechas-por-metadatos.md) — Convertir fechas según los metadatos de la entidad
- [FEAT-03](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-03-metadatos-de-campo.md) — Metadatos de campo en el generador (sensitive, list, group…) *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *repository-provider.interface.ts y repository.model.ts*
