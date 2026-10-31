---
id: UI-10
titulo: "list-view: selector de columnas y columnas visibles por defecto"
area: toolkit-ui
epica: EP-UI-4
paso: 3
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-10 · list-view: selector de columnas y columnas visibles por defecto

**Épica:** [EP-UI-4 · list-view](README.md) — paso 3 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`calculateTableColumns()` oculta columnas según la anchura disponible sin avisar. Con hasta 47 columnas por entidad, el usuario solo ve 6–8 elegidas por el algoritmo y no puede cambiarlas.

## Tareas

- [ ] Input `defaultVisible` en `ListViewColumnDirective` y clave estable por columna.
- [ ] Menú "Columnas" con checkboxes en la cabecera.
- [ ] Persistir la elección por entidad en `localStorage`.
- [ ] El algoritmo de anchura solo actúa sobre las columnas elegidas (con scroll horizontal si no caben).

## Criterios de aceptación

- [ ] El usuario elige qué columnas ver y la elección se mantiene al recargar.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.component.ts`
- `src/app/shared/toolkit/list-view/list-view.directives.ts`

## Relacionado

**Desbloquea:**
- [FEAT-06](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-06-entity-list-layout.md) — Componente <entity-list-layout> en el toolkit *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *list-view/list-view.component.html / .ts*
