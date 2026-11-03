---
id: UI-10
titulo: "list-view: selector de columnas y columnas visibles por defecto"
area: toolkit-ui
epica: EP-UI-4
paso: 3
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-10 · list-view: selector de columnas y columnas visibles por defecto

**Épica:** [EP-UI-4 · list-view](README.md) — paso 3 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`calculateTableColumns()` oculta columnas según la anchura disponible sin avisar. Con hasta 47 columnas por entidad, el usuario solo ve 6–8 elegidas por el algoritmo y no puede cambiarlas.

## Tareas

- [x] Input `defaultVisible` en `ListViewColumnDirective` y clave estable por columna.
- [x] Menú "Columnas" con checkboxes en la cabecera.
- [x] Persistir la elección por entidad en `localStorage`.
- [x] El algoritmo de anchura solo actúa sobre las columnas elegidas (con scroll horizontal si no caben).

## Criterios de aceptación

- [x] El usuario elige qué columnas ver y la elección se mantiene al recargar.

## Notas

- `key` en `ListViewColumnDirective` (si falta se usa la posición, `#n`) e input `storageKey` en `list-view`; la elección se guarda en `localStorage` con la clave `list-view-columns-<storageKey>`. Sin `storageKey` la elección solo vive en memoria.
- Las 25 features pasan `storageKey="<módulo>.<entidad>"` y `key` sacado de la clave de traducción de cada columna.
- Las columnas sin título (iconos o acciones) siempre se muestran. No se puede ocultar la última columna con título.
- El hueco que sobra se reparte entre las columnas con título según `factor`; si no caben, mantienen su anchura y la tabla hace scroll horizontal.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.component.ts`
- `src/app/shared/toolkit/list-view/list-view.directives.ts`

## Relacionado

**Desbloquea:**
- [FEAT-06](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-06-entity-list-layout.md) — Componente <entity-list-layout> en el toolkit *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *list-view/list-view.component.html / .ts*
