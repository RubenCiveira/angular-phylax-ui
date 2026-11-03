---
id: STY-08
titulo: "Iconos autoalojados (Material Symbols o sprite SVG)"
area: estilos-y-theming
epica: EP-STY-2
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 02-estilos-y-theming.md
---

# STY-08 · Iconos autoalojados (Material Symbols o sprite SVG)

**Épica:** [EP-STY-2 · index.html, fuentes e iconos](README.md) — paso 1 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`mat.css` declara la familia antigua `Material Icons` y descarga el `woff2` de `fonts.gstatic.com` en runtime: no funciona sin Internet y envía la IP del usuario a Google.

## Tareas

- [x] Hacer inventario de iconos usados (`<mat-icon>`, `icon:` en menú e i18n de acciones). *Los iconos del menú y de las acciones llegan como datos, así que un sprite cerrado obligaría a mantener la lista en el generador.*
- [x] Opción A: paquete `material-symbols` importado en `main.scss` + `MatIconRegistry.setDefaultFontSetClass('material-symbols-outlined')`. *Elegida. Se carga en `src/styles/_fonts.scss` según `$icon-style` de `_config.scss` y se registra con `MAT_ICON_DEFAULT_OPTIONS` (`fontSet: 'material-symbols-outlined'`) en `app.config.ts`.*
- Opción B (descartada): sprite SVG con solo los iconos usados, registrado con `addSvgIcon`; el generador mantiene `icons.ts`.
- [x] Borrar `public/assets/mat.css`.

## Criterios de aceptación

- [x] La app muestra los iconos con la red externa bloqueada. *El `woff2` se emite en el build (`media/material-symbols-outlined-*.woff2`).*
- [x] No hay peticiones a `fonts.gstatic.com`.

## Ficheros afectados

- `public/assets/mat.css`
- `src/index.html`
- `src/app/app.config.ts`

## Relacionado

**Desbloquea:**
- [STY-07](STY-07-index-html.md) — index.html: idioma dinámico, theme-color y splash

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *public/assets/mat.css*
