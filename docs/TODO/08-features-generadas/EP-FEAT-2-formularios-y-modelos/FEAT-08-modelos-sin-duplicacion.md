---
id: FEAT-08
titulo: "Modelos: proyección y conversión genéricas"
area: features-generadas
epica: EP-FEAT-2
paso: 2
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 08-features-generadas.md
---

# FEAT-08 · Modelos: proyección y conversión genéricas

**Épica:** [EP-FEAT-2 · Formularios y modelos](README.md) — paso 2 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Cada modelo declara tres veces los mismos campos (`Entity`, `EntityProjection` y `entityProjectionToValue()` copiando campo a campo), sin formato.

## Tareas

- [ ] Tipos `Projected<T, K, R>` y función `projectionToValue<T>(refs)` en `shared/data`.
- [ ] Constantes de enums `as const`.
- [ ] Regenerar y formatear.

## Criterios de aceptación

- [ ] Añadir un campo a una entidad exige tocar un único sitio del modelo.

## Ficheros afectados

- `src/app/features/**/model/*.model.ts`
- `src/app/shared/data/projection.ts`

## Relacionado

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *model/*.model.ts*
