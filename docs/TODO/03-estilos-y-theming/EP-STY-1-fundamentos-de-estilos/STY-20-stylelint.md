---
id: STY-20
titulo: "Añadir stylelint para proteger los tokens"
area: estilos-y-theming
epica: EP-STY-1
paso: 6
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-20 · Añadir stylelint para proteger los tokens

**Épica:** [EP-STY-1 · Fundamentos: src/styles, tokens y tema](README.md) — paso 6 de 6

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay linter de estilos: nada impide que vuelvan los hex, los tokens `--mdc-*` o los selectores internos `.mat-mdc-*`.

## Tareas

- [x] Instalar `stylelint` + `stylelint-config-standard-scss`.
- [x] Reglas: `color-no-hex` (warning), prohibir `--mdc-`/`--md-sys-`, `.mat-mdc-*`/`.mdc-*` y `!important`.
- [x] Ignorar `_tokens.scss` y `public/**`.
- [x] Script `lint:styles` y paso en CI.
- [ ] Pasar las reglas de protección de `warning` a `error` cuando termine la migración (STY-13, STY-15, STY-16…).

## Criterios de aceptación

- [x] `npm run lint:styles` se ejecuta en CI.

## Ficheros afectados

- `.stylelintrc.json`
- `package.json`

## Relacionado

**Depende de:**
- [STY-03](STY-03-design-tokens-app.md) — Definir los design tokens --app-*

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *Lint de estilos*
