---
id: DATA-03
titulo: "Convertir fechas según los metadatos de la entidad"
area: capa-de-datos
epica: EP-DATA-3
paso: 6
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [DATA-15]
origen: 06-capa-de-datos.md
---

# DATA-03 · Convertir fechas según los metadatos de la entidad

**Épica:** [EP-DATA-3 · RepositoryService y metadatos](README.md) — paso 6 de 7

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Hoy se convierte a `Date` **cualquier** string con forma de fecha (también textos libres) y no se convierten las fechas sin hora (`LocalDate`). El generador sabe qué campos son `date`/`datetime`.

## Tareas

- [ ] Que el generador emita `dates`/`datetimes` en los metadatos del repositorio de cada entidad.
- [ ] Convertir en `RepositoryService.mapItem` usando esa lista (y en sentido inverso al enviar, si el backend lo necesita).
- [ ] Desactivar la conversión global por regex en `ClientService` (dejarla opcional).

## Criterios de aceptación

- [ ] Un campo de texto con forma de fecha sigue siendo `string`.
- [ ] Los campos `date` llegan como `Date`.

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`
- `src/app/shared/data/api/client.service.ts`
- `src/app/features/**/repository/*-repository.service.ts`

## Relacionado

**Depende de:**
- [DATA-15](DATA-15-entity-metadata-activo.md) — Activar EntityMetadata y borrar APIs comentadas

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/api/client.service.ts*
