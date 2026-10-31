---
id: SHELL-03
titulo: "Menú con enlaces reales, iconos y modo mini usable"
area: shell-y-layout
epica: EP-SHELL-1
paso: 6
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [SHELL-01, SHELL-06]
origen: 04-shell-y-layout.md
---

# SHELL-03 · Menú con enlaces reales, iconos y modo mini usable

**Épica:** [EP-SHELL-1 · Registro de features y menú](README.md) — paso 6 de 7

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Los ítems son `<a mat-list-item (click)>` sin `href` (no se enfocan con tabulador ni se pueden abrir en otra pestaña), el `icon` no se pinta (el modo mini solo muestra texto cortado), `run()` hace `alert('No route')` y hay métodos sin uso (`idioma`, `tenant`, `login`, `logout`, `title`).

## Tareas

- [ ] `routerLink` + `routerLinkActive` + `aria-current="page"`.
- [ ] `<mat-icon matListItemIcon>` y, en modo mini, solo icono con `matTooltip`.
- [ ] Etiquetas con `| transloco`.
- [ ] Quitar `alert`, los métodos muertos y la copia mutable del árbol.

## Criterios de aceptación

- [ ] El menú se recorre y se activa con teclado.
- [ ] En modo mini se ven iconos con tooltip.
- [ ] Clic central abre en pestaña nueva.

## Ficheros afectados

- `src/app/bootstrap/layout/menu/menu.component.html`
- `src/app/bootstrap/layout/menu/menu.component.ts`

## Relacionado

**Depende de:**
- [SHELL-01](SHELL-01-registro-de-features.md) — Registro único de features: todas las entidades en rutas y menú
- [SHELL-06](SHELL-06-modelo-menu-item.md) — Ampliar el modelo MenuItem

**Desbloquea:**
- [SHELL-04](SHELL-04-visibilidad-por-permisos.md) — Visibilidad del menú por permiso, calculada una vez

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *menu.component.html / .ts*
