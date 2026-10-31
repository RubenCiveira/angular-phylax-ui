---
id: SHELL-13
titulo: "Toolbar: sin console.log, con título de página y textos traducidos"
area: shell-y-layout
epica: EP-SHELL-4
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 04-shell-y-layout.md
---

# SHELL-13 · Toolbar: sin console.log, con título de página y textos traducidos

**Épica:** [EP-SHELL-4 · Toolbar](README.md) — paso 1 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`account()` tiene `console.log('EL TENANT ', tenant)` (se envía al colector si la telemetría intercepta la consola). La toolbar muestra el nombre del usuario donde iría el título, y `account`/`login`/`logout` no se traducen.

## Tareas

- [ ] Quitar el `console.log`.
- [ ] Mostrar el título de la página activa (del `title` de la ruta).
- [ ] Usuario en un botón de avatar (`computeAvatarSpec`).
- [ ] Traducir los textos.

## Criterios de aceptación

- [ ] Sin `console.log` en la toolbar.
- [ ] La cabecera muestra el nombre de la pantalla.

## Ficheros afectados

- `src/app/bootstrap/layout/toolbar/toolbar.component.ts`
- `src/app/bootstrap/layout/toolbar/toolbar.component.html`

## Relacionado

**Desbloquea:**
- [SHELL-14](SHELL-14-menu-de-usuario-preferencias.md) — Menú de usuario con idioma, tenant y tema

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *toolbar.component.ts / .html*
