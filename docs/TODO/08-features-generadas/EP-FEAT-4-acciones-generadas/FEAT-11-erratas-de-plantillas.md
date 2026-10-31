---
id: FEAT-11
titulo: "Corregir erratas que se propagan a cientos de ficheros"
area: features-generadas
epica: EP-FEAT-4
paso: 1
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 08-features-generadas.md
---

# FEAT-11 · Corregir erratas que se propagan a cientos de ficheros

**Épica:** [EP-FEAT-4 · Acciones generadas](README.md) — paso 1 de 2

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`dialgoRef`, `snakeBar`, `standar-actions` y `susbcription` se repiten en todas las entidades.

## Tareas

- [ ] Corregir en las plantillas (`dialogRef`, `snackBar`, `standard-actions`, `subscription`).
- [ ] Renombrar carpetas `*-view-standar-actions` y actualizar imports.

## Criterios de aceptación

- [ ] `grep -rn "dialgo\|snakeBar\|standar-" src` no devuelve nada.

## Ficheros afectados

- `src/app/features/**`

## Relacionado

**Desbloquea:**
- [FEAT-10](FEAT-10-acciones-sobre-clases-base.md) — Acciones generadas sobre BaseAction/ConfirmAction

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *actions/*-action/*.component.ts*
