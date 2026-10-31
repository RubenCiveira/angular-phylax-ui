---
id: STY-08
titulo: "Iconos autoalojados (Material Symbols o sprite SVG)"
area: estilos-y-theming
epica: EP-STY-2
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 02-estilos-y-theming.md
---

# STY-08 · Iconos autoalojados (Material Symbols o sprite SVG)

**Épica:** [EP-STY-2 · index.html, fuentes e iconos](README.md) — paso 1 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`mat.css` declara la familia antigua `Material Icons` y descarga el `woff2` de `fonts.gstatic.com` en runtime: no funciona sin Internet y envía la IP del usuario a Google.

## Tareas

- [ ] Hacer inventario de iconos usados (`<mat-icon>`, `icon:` en menú e i18n de acciones).
- [ ] Opción A: paquete `material-symbols` importado en `main.scss` + `MatIconRegistry.setDefaultFontSetClass('material-symbols-outlined')`.
- [ ] Opción B: sprite SVG con solo los iconos usados, registrado con `addSvgIcon`; el generador mantiene `icons.ts`.
- [ ] Borrar `public/assets/mat.css`.

## Criterios de aceptación

- [ ] La app muestra los iconos con la red externa bloqueada.
- [ ] No hay peticiones a `fonts.gstatic.com`.

## Ficheros afectados

- `public/assets/mat.css`
- `src/index.html`
- `src/app/app.config.ts`

## Relacionado

**Desbloquea:**
- [STY-07](STY-07-index-html.md) — index.html: idioma dinámico, theme-color y splash

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *public/assets/mat.css*
