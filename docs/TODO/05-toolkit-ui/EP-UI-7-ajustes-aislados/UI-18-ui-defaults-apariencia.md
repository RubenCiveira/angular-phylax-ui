---
id: UI-18
titulo: "Apariencia de los campos desde provideUiDefaults"
area: toolkit-ui
epica: EP-UI-7
paso: 1
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-18 · Apariencia de los campos desde provideUiDefaults

**Épica:** [EP-UI-7 · Ajustes aislados](README.md) — paso 1 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`MAT_FORM_FIELD_DEFAULT_OPTIONS: { appearance: 'outline' }` está fijado dentro de `form-layout`.

## Tareas

- [ ] Crear `provideUiDefaults({ formFieldAppearance, subscriptSizing })` y registrarlo en `app.config.ts`.
- [ ] Quitar el provider de `form-layout` y permitir override por formulario con un `input()`.

## Criterios de aceptación

- [ ] Cambiar a `fill` en `app.config.ts` cambia todos los formularios.

## Ficheros afectados

- `src/app/shared/toolkit/form-layout/form-layout.component.ts`
- `src/app/app.config.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *form-layout/form-layout.component.ts*
