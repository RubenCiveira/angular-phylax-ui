---
id: EP-FEAT-3
titulo: "Repositorios generados"
area: features-generadas
prioridad: media
estado: pendiente
issues: [FEAT-09]
---

# EP-FEAT-3 · Repositorios generados

**Prioridad máxima:** 🟡 Media · **Issues:** 1 · **Esfuerzo estimado:** ~0.5 días

## Objetivo

Repositorios sin efectos secundarios y con host centralizado.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [FEAT-09](FEAT-09-repositorios-generados.md) | Repositorios: sin mutar filtros y con host centralizado | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/features/**/repository/*-repository.service.ts` | FEAT-09 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md) — RepositoryService y metadatos: `src/app/features/**/repository/*-repository.service.ts`

## Checklist de la épica

- [ ] FEAT-09 — Repositorios: sin mutar filtros y con host centralizado
