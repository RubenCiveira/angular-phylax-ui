---
id: STY-15
titulo: "Editables: tokens M3 en lugar de --mdc-* y hex"
area: estilos-y-theming
epica: EP-STY-5
paso: 2
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-15 · Editables: tokens M3 en lugar de --mdc-* y hex

**Épica:** [EP-STY-5 · Formularios y componentes del toolkit](README.md) — paso 2 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`editable-rrule`, `-cron`, `-rating`, `-pin`, `-phone`, `-date-range`, `-upload` y `-credit-card` usan `var(--mdc-outlined-text-field-focus-outline-color, #1976d2)` y similares. Como `--mdc-*` ya no existe, siempre se usan el azul y el rojo de Material 2.

## Tareas

- [ ] Foco → `--mat-sys-primary`; error → `--mat-sys-error`; texto → `--mat-sys-on-surface(-variant)`.
- [ ] Degradado de `editable-credit-card` con `--mat-sys-primary` y `--mat-sys-tertiary`.
- [ ] Solo en los editables que se mantengan (ver UI-01).

## Criterios de aceptación

- [ ] `grep -rn -- "--mdc-" src/app/shared/toolkit` no devuelve nada.

## Ficheros afectados

- `src/app/shared/toolkit/editable/*/*.scss`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *SCSS de editables del toolkit*
