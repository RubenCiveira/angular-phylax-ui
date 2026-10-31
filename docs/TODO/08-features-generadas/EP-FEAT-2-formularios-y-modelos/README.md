---
id: EP-FEAT-2
titulo: "Formularios y modelos"
area: features-generadas
prioridad: critica
estado: pendiente
issues: [FEAT-01, FEAT-08, FEAT-13]
---

# EP-FEAT-2 · Formularios y modelos

**Prioridad máxima:** 🔴 Crítica · **Issues:** 3 · **Esfuerzo estimado:** ~3.5 días

## Objetivo

Opciones que coinciden con el modelo, modelos sin duplicación y formularios agrupados.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [FEAT-01](FEAT-01-opciones-choose-coinciden-con-modelo.md) | Opciones de editable-choose con los mismos valores que el modelo | 🔴 | S | 🧩 |
| 2 | [FEAT-08](FEAT-08-modelos-sin-duplicacion.md) | Modelos: proyección y conversión genéricas | 🟡 | M | 🧩 |
| 3 | [FEAT-13](FEAT-13-formularios-por-secciones.md) | Formularios agrupados por secciones y con tipos semánticos | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/features/**/components/*-view-form-group/*.component.html` | FEAT-01 |
| `src/app/features/**/components/*-view-search/*.component.html` | FEAT-01 |
| `src/app/features/**/model/*.model.ts` | FEAT-01, FEAT-08 |
| `src/app/shared/data/projection.ts` | FEAT-08 |
| `src/app/features/**/components/*-view-form-group/*` | FEAT-13 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [FEAT-03](../EP-FEAT-1-listas-de-entidad/FEAT-03-metadatos-de-campo.md) — Metadatos de campo en el generador (sensitive, list, group…) *(épica [EP-FEAT-1](../EP-FEAT-1-listas-de-entidad/README.md))*

## Checklist de la épica

- [ ] FEAT-01 — Opciones de editable-choose con los mismos valores que el modelo
- [ ] FEAT-08 — Modelos: proyección y conversión genéricas
- [ ] FEAT-13 — Formularios agrupados por secciones y con tipos semánticos
