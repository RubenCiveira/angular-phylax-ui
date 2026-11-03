---
id: UI-20
titulo: "Modal de error con acciones y sin código muerto"
area: toolkit-ui
epica: EP-UI-6
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [UI-19]
origen: 07-toolkit-ui.md
---

# UI-20 · Modal de error con acciones y sin código muerto

**Épica:** [EP-UI-6 · Páginas y modal de error](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Textos sin traducir (`{{ 'controls.errorhandler.retrySuccess' }}`), `retryError`/`retrySuccess`/`isLogged`/`loading` nunca se usan y no hay botón de cerrar visible.

## Tareas

- [x] Estructura `mat-dialog-title` / `content` / `actions` con "Cerrar" y, si es 401, "Iniciar sesión". *El título del diálogo es el de la página de error (que se pinta con `showTitle=false`); "Inicio" pasa a las acciones para que cierre el diálogo al navegar.*
- [x] Quitar el código muerto. *Bloque de reintento, `loading`/`isLogged`/`showBody`, `close()`/`redirect()`, sus estilos (`.css` y `.scss`) y las claves `errors.modal.*`.*

## Criterios de aceptación

- [x] El modal se puede cerrar con un botón visible.

## Ficheros afectados

- `src/app/shared/toolkit/error-modal/error-modal.component.ts`
- `src/app/shared/toolkit/error-modal/error-modal.component.html`

## Relacionado

**Depende de:**
- [UI-19](UI-19-error-page-traducida.md) — Página de error traducida y útil

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *error-modal/error-modal.component.ts / .html*
