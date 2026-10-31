---
id: STY-20
titulo: "Añadir stylelint para proteger los tokens"
area: estilos-y-theming
epica: EP-STY-1
paso: 6
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-20 · Añadir stylelint para proteger los tokens

**Épica:** [EP-STY-1 · Fundamentos: src/styles, tokens y tema](README.md) — paso 6 de 6

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay linter de estilos: nada impide que vuelvan los hex, los tokens `--mdc-*` o los selectores internos `.mat-mdc-*`.

## Tareas

- [ ] Instalar `stylelint` + `stylelint-config-standard-scss`.
- [ ] Reglas: `color-no-hex` (warning), prohibir `--mdc-`/`--md-sys-`, `.mat-mdc-*`/`.mdc-*` y `!important`.
- [ ] Ignorar `_tokens.scss` y `public/**`.
- [ ] Script `lint:styles` y paso en CI; pasar a `error` cuando la migración termine.

## Criterios de aceptación

- [ ] `npm run lint:styles` se ejecuta en CI.

## Ficheros afectados

- `.stylelintrc.json`
- `package.json`

## Relacionado

**Depende de:**
- [STY-03](STY-03-design-tokens-app.md) — Definir los design tokens --app-*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *Lint de estilos*
