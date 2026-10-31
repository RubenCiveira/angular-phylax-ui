---
id: STY-07
titulo: "index.html: idioma dinámico, theme-color y splash"
area: estilos-y-theming
epica: EP-STY-2
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-08, STY-09]
origen: 02-estilos-y-theming.md
---

# STY-07 · index.html: idioma dinámico, theme-color y splash

**Épica:** [EP-STY-2 · index.html, fuentes e iconos](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`<html lang="en">` está fijado, la clase `mat-theme` no la define nadie, las fuentes se cargan con `<link>` bloqueantes desde `assets/` y no hay `theme-color`, `<noscript>` ni marcador de carga (pantalla en blanco hasta que arranca Angular).

## Tareas

- [ ] Actualizar `document.documentElement.lang` al cambiar de idioma (en `AppComponent`, ver SHELL-10).
- [ ] Quitar `mat-theme` y los `<link>` de fuentes (pasan a `main.scss`).
- [ ] Añadir `<meta name="theme-color">` para claro y oscuro, `<noscript>` y un splash mínimo dentro de `<app-root>`.

## Criterios de aceptación

- [ ] `lang` cambia al cambiar de idioma.
- [ ] No se ve pantalla en blanco al cargar.

## Ficheros afectados

- `src/index.html`

## Relacionado

**Depende de:**
- [STY-08](STY-08-iconos-autoalojados.md) — Iconos autoalojados (Material Symbols o sprite SVG)
- [STY-09](STY-09-tipografia-autoalojada.md) — Tipografía autoalojada o pila del sistema

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *src/index.html*
