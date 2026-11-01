---
id: UI-09
titulo: "list-view: semántica ARIA y uso con teclado"
area: toolkit-ui
epica: EP-UI-4
paso: 1
prioridad: critica
esfuerzo: M
ambito: plantilla
estado: en-curso
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-09 · list-view: semántica ARIA y uso con teclado

**Épica:** [EP-UI-4 · list-view](README.md) — paso 1 de 6

**Prioridad:** 🔴 Crítica · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La tabla es un conjunto de `div`/`span` sin `role`; las filas solo se activan con clic en un `span` y no se pueden enfocar. Lo mismo ocurre en la lista móvil (`<li (click)>`) y en las tarjetas. Las 26 pantallas de mantenimiento no se pueden usar con teclado ni con lector de pantalla.

## Tareas

- [x] `role="table"`, `row`, `columnheader`, `cell` y `aria-rowcount`.
- [x] Filas con `tabindex="0"`, `aria-selected`, `(keydown.enter)` activa y `(keydown.space)` selecciona.
- [x] Navegación con flechas mediante `FocusKeyManager` de `@angular/cdk/a11y`.
- [x] Equivalente en lista móvil y tarjetas.
- [ ] Verificar con axe DevTools y con VoiceOver/NVDA. *axe cubierto por test automático; falta la prueba manual con VoiceOver/NVDA.*

## Criterios de aceptación

- [x] Se puede recorrer y activar cualquier fila solo con teclado.
- [x] axe no reporta errores de roles en la lista. *Test `axe` en `list-view.component.spec.ts` sobre tabla, lista y tarjetas (con `axe-core` como devDependency; el contraste se comprueba en otro test).*

## Notas

- Tabla: `role="table"` en `.table-inner` (el botón "Columnas" queda fuera para que axe no lo vea como hijo no permitido), cabecera `role="row"` con `aria-rowindex="1"`, cuerpo `rowgroup` y filas con `aria-rowindex` absoluto (el virtual scroll solo pinta una ventana).
- Lista móvil y tarjetas: `role="list"`/`listitem` (el `<ul>`/`<li>` no era válido con el `cdk-virtual-scroll-viewport` en medio); la lista usa `aria-setsize`/`aria-posinset`. `aria-selected` solo en filas de tabla, que es donde ARIA lo permite.
- Enter activa, espacio selecciona (en selección múltiple alterna) y las flechas mueven el foco con `FocusKeyManager` (en tarjetas también las laterales). Las teclas dentro de controles de la fila no se interceptan.
- axe encontró que el botón "Columnas" tenía un `aria-label` distinto de su texto visible (la ligadura del icono, WCAG 2.5.3): ahora el icono es `aria-hidden` y el nombre va como texto `cdk-visually-hidden`.
- Pendiente: prueba manual con VoiceOver/NVDA.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.component.html`
- `src/app/shared/toolkit/list-view/list-view.component.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *list-view/list-view.component.html / .ts*
