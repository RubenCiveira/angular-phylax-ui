---
id: STY-16
titulo: "Colores del modal de error con tokens y contraste AA"
area: estilos-y-theming
epica: EP-STY-5
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-16 · Colores del modal de error con tokens y contraste AA

**Épica:** [EP-STY-5 · Formularios y componentes del toolkit](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`.success { background: #087f23; color: white }` y `.error { background: #f44336; color: black }` (poco contraste). Es uno de los dos ficheros `.css` del toolkit.

## Tareas

- [ ] Renombrar a `.scss`.
- [ ] Usar `--mat-sys-error-container` / `--mat-sys-on-error-container` y `--app-color-success` / `--app-color-on-success`.
- [ ] Hacer lo mismo con `error-page.component.css`.

## Criterios de aceptación

- [ ] Contraste ≥ 4,5:1 en ambos mensajes.

## Ficheros afectados

- `src/app/shared/toolkit/error-modal/error-modal.component.css`
- `src/app/shared/toolkit/error-page/error-page.component.css`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *error-modal.component.css*
