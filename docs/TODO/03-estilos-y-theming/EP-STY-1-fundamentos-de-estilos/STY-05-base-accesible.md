---
id: STY-05
titulo: "Estilos base de accesibilidad (foco y movimiento reducido)"
area: estilos-y-theming
epica: EP-STY-1
paso: 4
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [STY-01]
origen: 02-estilos-y-theming.md
---

# STY-05 · Estilos base de accesibilidad (foco y movimiento reducido)

**Épica:** [EP-STY-1 · Fundamentos: src/styles, tokens y tema](README.md) — paso 4 de 6

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay estilos globales de foco visible ni respeto a `prefers-reduced-motion`.

## Tareas

- [x] `:focus-visible { outline: 2px solid var(--app-color-primary); outline-offset: 2px; }`.
- [x] Regla `@media (prefers-reduced-motion: reduce)` que anula transiciones y animaciones.
- [x] Clase utilitaria `.visually-hidden` y estilos de `.skip-link`.

## Criterios de aceptación

- [x] Navegando con tabulador siempre se ve el foco.
- [x] Con movimiento reducido no hay transiciones.

## Ficheros afectados

- `src/styles/_base.scss`

## Relacionado

**Depende de:**
- [STY-01](STY-01-estructura-src-styles.md) — Crear la estructura src/styles/ sin cambios visuales

**Desbloquea:**
- [SHELL-12](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-12-skip-link-y-aria.md) — Skip link y botón de menú accesible *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *src/styles.scss*
