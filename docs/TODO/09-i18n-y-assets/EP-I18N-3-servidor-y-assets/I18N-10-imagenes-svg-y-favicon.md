---
id: I18N-10
titulo: "Ilustraciones y logo en SVG adaptables al tema"
area: i18n-y-assets
epica: EP-I18N-3
paso: 3
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [STY-06]
origen: 09-i18n-y-assets-publicos.md
---

# I18N-10 · Ilustraciones y logo en SVG adaptables al tema

**Épica:** [EP-I18N-3 · Caché del servidor y assets](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

15 ilustraciones PNG (600 KB) con colores fijos, `logo.png` de 128 KB y `favicon.ico` sin variante SVG ni manifest.

## Tareas

- [ ] Pasar las ilustraciones a SVG con `currentColor` o variables CSS.
- [ ] Logo en SVG, configurable (`theme.logo`, `theme.logo-dark`).
- [ ] `favicon.svg` + `.ico` de reserva; opcional `manifest.webmanifest`.

## Criterios de aceptación

- [ ] Las ilustraciones cambian de color con el tema y el modo oscuro.
- [ ] Las imágenes pesan menos de 100 KB en total.

## Ficheros afectados

- `public/assets/img/**`
- `public/favicon.ico`
- `src/index.html`

## Relacionado

**Depende de:**
- [STY-06](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-06-theming-en-runtime.md) — Theming en runtime desde la configuración (por despliegue y tenant) *(épica [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md))*

**Recomendación de origen:** [09 · i18n y assets públicos](../../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/assets/img/error/*.png y logo*.png*
