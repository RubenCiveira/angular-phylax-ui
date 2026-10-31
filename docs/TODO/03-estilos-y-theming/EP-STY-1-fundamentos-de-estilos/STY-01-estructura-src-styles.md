---
id: STY-01
titulo: "Crear la estructura src/styles/ sin cambios visuales"
area: estilos-y-theming
epica: EP-STY-1
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 02-estilos-y-theming.md
---

# STY-01 · Crear la estructura src/styles/ sin cambios visuales

**Épica:** [EP-STY-1 · Fundamentos: src/styles, tokens y tema](README.md) — paso 1 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Todo el estilo global está en `src/styles.scss` y los parciales se importan con rutas relativas (`@use '../grid-utils'`). Hace falta una estructura sobre la que construir los tokens.

## Tareas

- [ ] Crear `src/styles/{main,_config,_tokens,_material-theme,_base,_layout,_utilities}.scss` y `src/styles/components/`.
- [ ] Mover el contenido actual de `styles.scss` a los parciales correspondientes, sin cambiarlo.
- [ ] `angular.json`: `styles: ["src/styles/main.scss"]` y `stylePreprocessorOptions.includePaths: ["src/styles"]` (build y test).
- [ ] Mover `grid-utils.scss` a `src/styles/`.

## Criterios de aceptación

- [ ] Capturas antes y después idénticas en 3 pantallas (lista, formulario, menú).
- [ ] Un componente puede hacer `@use 'tokens'` sin ruta relativa.

## Ficheros afectados

- `src/styles.scss`
- `src/styles/**`
- `angular.json`
- `src/app/shared/toolkit/grid-utils.scss`

## Relacionado

**Desbloquea:**
- [STY-02](STY-02-tema-material-parametrizable.md) — Tema de Material parametrizable y overrides sin !important
- [STY-03](STY-03-design-tokens-app.md) — Definir los design tokens --app-*
- [STY-05](STY-05-base-accesible.md) — Estilos base de accesibilidad (foco y movimiento reducido)
- [STY-11](../EP-STY-5-estilos-formularios-y-toolkit/STY-11-rejilla-global-unica.md) — Generar la rejilla una sola vez y simplificar form-layout *(épica [EP-STY-5](../EP-STY-5-estilos-formularios-y-toolkit/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *src/styles.scss*
