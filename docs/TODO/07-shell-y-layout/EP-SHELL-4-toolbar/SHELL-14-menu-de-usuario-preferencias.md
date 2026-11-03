---
id: SHELL-14
titulo: "Menú de usuario con idioma, tenant y tema"
area: shell-y-layout
epica: EP-SHELL-4
paso: 3
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [SHELL-13, STY-04]
origen: 04-shell-y-layout.md
---

# SHELL-14 · Menú de usuario con idioma, tenant y tema

**Épica:** [EP-SHELL-4 · Toolbar](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El estado y la URL soportan idioma y tenant, pero no hay forma de cambiarlos desde la UI, ni de elegir modo claro u oscuro.

## Tareas

- [ ] Selector de idioma con `i18n.available-langs`.
- [ ] Selector de tenant si hay más de uno.
- [ ] Selector de tema (auto/claro/oscuro) con `ThemeModeService`.

## Criterios de aceptación

- [ ] El usuario cambia idioma, tenant y tema desde la toolbar y se mantienen al recargar.

## Ficheros afectados

- `src/app/bootstrap/layout/toolbar/toolbar.component.ts`
- `src/app/bootstrap/layout/toolbar/toolbar.component.html`

## Relacionado

**Depende de:**
- [SHELL-13](SHELL-13-toolbar-limpia.md) — Toolbar: sin console.log, con título de página y textos traducidos
- [STY-04](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-04-modo-claro-oscuro-forzable.md) — Permitir forzar modo claro u oscuro *(épica [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *toolbar.component.ts / .html*
