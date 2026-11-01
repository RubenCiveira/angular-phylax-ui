---
id: DATA-17
titulo: "SelectionModel: toggle inmutable"
area: capa-de-datos
epica: EP-DATA-4
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-17 · SelectionModel: toggle inmutable

**Épica:** [EP-DATA-4 · Selección y selectores](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`toogle` (errata) muta el array del signal con `push`/`splice` y vuelve a hacer `set` con la misma referencia: los `computed` que dependen de `selected()` no se recalculan.

## Tareas

- [x] Implementar `toggle` con `update(items => …)` creando arrays nuevos.
- [x] Mantener `toogle` como alias `@deprecated`.
- [x] Comparar con el mapper de forma que funcione con objetos (`equals`).
- [x] Test con un `computed` sobre `selected()`.

## Criterios de aceptación

- [x] La barra de selección múltiple aparece y desaparece al marcar y desmarcar.

## Ficheros afectados

- `src/app/shared/data/selection-model.ts`

## Relacionado

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/selection-model.ts*
