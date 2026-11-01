---
id: STY-18
titulo: "Toolbar personalizable desde el tema"
area: estilos-y-theming
epica: EP-STY-3
paso: 4
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [STY-02]
origen: 02-estilos-y-theming.md
---

# STY-18 · Toolbar personalizable desde el tema

**Épica:** [EP-STY-3 · Marca configurable y estilos del shell](README.md) — paso 4 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Variables de rejilla inline en la plantilla, `mat-toolbar { background-color: inherit; }` para anular el token y un `<hr>` dentro de `mat-menu`.

## Tareas

- [x] Pasar las variables inline a una clase `.toolbar-context`.
- [x] `mat.toolbar-overrides((container-background-color: var(--app-toolbar-bg, transparent)))`.
- [x] `<mat-divider>` en lugar de `<hr>`.

## Criterios de aceptación

- [x] Sin `style=` en la toolbar.
- [x] El fondo se cambia con `--app-toolbar-bg`.

## Ficheros afectados

- `src/app/bootstrap/layout/toolbar/toolbar.component.html`
- `src/app/bootstrap/layout/toolbar/toolbar.component.scss`

## Relacionado

**Depende de:**
- [STY-02](../EP-STY-1-fundamentos-de-estilos/STY-02-tema-material-parametrizable.md) — Tema de Material parametrizable y overrides sin !important *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *toolbar.component.html / .scss*
