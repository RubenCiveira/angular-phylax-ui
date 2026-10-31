---
id: UI-09
titulo: "list-view: semántica ARIA y uso con teclado"
area: toolkit-ui
epica: EP-UI-4
paso: 1
prioridad: critica
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-09 · list-view: semántica ARIA y uso con teclado

**Épica:** [EP-UI-4 · list-view](README.md) — paso 1 de 6

**Prioridad:** 🔴 Crítica · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La tabla es un conjunto de `div`/`span` sin `role`; las filas solo se activan con clic en un `span` y no se pueden enfocar. Lo mismo ocurre en la lista móvil (`<li (click)>`) y en las tarjetas. Las 26 pantallas de mantenimiento no se pueden usar con teclado ni con lector de pantalla.

## Tareas

- [ ] `role="table"`, `row`, `columnheader`, `cell` y `aria-rowcount`.
- [ ] Filas con `tabindex="0"`, `aria-selected`, `(keydown.enter)` activa y `(keydown.space)` selecciona.
- [ ] Navegación con flechas mediante `FocusKeyManager` de `@angular/cdk/a11y`.
- [ ] Equivalente en lista móvil y tarjetas.
- [ ] Verificar con axe DevTools y con VoiceOver/NVDA.

## Criterios de aceptación

- [ ] Se puede recorrer y activar cualquier fila solo con teclado.
- [ ] axe no reporta errores de roles en la lista.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.component.html`
- `src/app/shared/toolkit/list-view/list-view.component.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *list-view/list-view.component.html / .ts*
