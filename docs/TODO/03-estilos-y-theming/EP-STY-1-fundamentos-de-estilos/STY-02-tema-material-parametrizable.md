---
id: STY-02
titulo: "Tema de Material parametrizable y overrides sin !important"
area: estilos-y-theming
epica: EP-STY-1
paso: 3
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: [STY-01]
origen: 02-estilos-y-theming.md
---

# STY-02 · Tema de Material parametrizable y overrides sin !important

**Épica:** [EP-STY-1 · Fundamentos: src/styles, tokens y tema](README.md) — paso 3 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`mat.theme((color: mat.$blue-palette, typography: Roboto, density: 0))` está fijado, y el diálogo se modifica con `!important` sobre la clase interna `.mat-mdc-dialog-surface`.

## Tareas

- [x] `_config.scss` con `$primary-palette`, `$tertiary-palette`, `$font-family`, `$density` como `!default`.
- [x] `_material-theme.scss`: `mat.theme(...)` con esos valores y `theme-type: color-scheme`.
- [x] Sustituir la regla del diálogo por `mat.dialog-overrides((container-color: …))`.
- [ ] Exponer las variables como parámetros del generador (pendiente en el generador).

## Criterios de aceptación

- [x] Cambiar `$primary-palette` en un fichero recolorea toda la app.
- [x] No hay `!important` ni `.mat-mdc-*` en los estilos globales.

## Ficheros afectados

- `src/styles/_config.scss`
- `src/styles/_material-theme.scss`

## Relacionado

**Depende de:**
- [STY-01](STY-01-estructura-src-styles.md) — Crear la estructura src/styles/ sin cambios visuales

**Desbloquea:**
- [STY-04](STY-04-modo-claro-oscuro-forzable.md) — Permitir forzar modo claro u oscuro
- [STY-09](../EP-STY-2-index-fuentes-e-iconos/STY-09-tipografia-autoalojada.md) — Tipografía autoalojada o pila del sistema *(épica [EP-STY-2](../EP-STY-2-index-fuentes-e-iconos/README.md))*
- [STY-18](../EP-STY-3-marca-y-shell/STY-18-toolbar-con-overrides.md) — Toolbar personalizable desde el tema *(épica [EP-STY-3](../EP-STY-3-marca-y-shell/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *src/styles.scss*
