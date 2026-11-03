---
id: SHELL-12
titulo: "Skip link y botón de menú accesible"
area: shell-y-layout
epica: EP-SHELL-3
paso: 3
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-05]
origen: 04-shell-y-layout.md
---

# SHELL-12 · Skip link y botón de menú accesible

**Épica:** [EP-SHELL-3 · AppComponent](README.md) — paso 3 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay enlace "Saltar al contenido", el botón de menú no tiene `aria-label`, `aria-expanded` ni `aria-controls`, y `aria-label="Main menu"` no se traduce.

## Tareas

- [ ] `<a class="skip-link" href="#main">` y `<main id="main" tabindex="-1">`.
- [ ] Botón con `aria-label`, `aria-expanded` y `aria-controls="app-nav"`.
- [ ] Claves `shell.*` en el i18n global.

## Criterios de aceptación

- [ ] El primer tabulador muestra "Saltar al contenido".
- [ ] El lector de pantalla anuncia el estado del menú.

## Ficheros afectados

- `src/app/app.component.html`
- `src/app/bootstrap/layout/toolbar/toolbar.component.html`

## Relacionado

**Depende de:**
- [STY-05](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-05-base-accesible.md) — Estilos base de accesibilidad (foco y movimiento reducido) *(épica [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *src/app/app.component.html*
