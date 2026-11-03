---
id: UI-18
titulo: "Apariencia de los campos desde provideUiDefaults"
area: toolkit-ui
epica: EP-UI-7
paso: 1
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-18 · Apariencia de los campos desde provideUiDefaults

**Épica:** [EP-UI-7 · Ajustes aislados](README.md) — paso 1 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`MAT_FORM_FIELD_DEFAULT_OPTIONS: { appearance: 'outline' }` está fijado dentro de `form-layout`.

## Tareas

- [x] Crear `provideUiDefaults({ formFieldAppearance, subscriptSizing })` y registrarlo en `app.config.ts`. *En `shared/toolkit/ui-defaults.provider.ts`; por defecto `outline` / `fixed`.*
- [x] Quitar el provider de `form-layout` y permitir override por formulario con un `input()`. *Con atributos estáticos (`<form-layout appearance="fill" subscriptSizing="dynamic">`) y no `input()`: mat-form-field lee los defaults solo en su constructor y Angular crea los campos antes de asignar los inputs enlazados, así que un binding nunca llegaría. También se quita `appearance="outline"` fijo de los editables compuestos (rrule, cron, credit-card, date-range, password), que ahora usan `[appearance]="appearance()!"`, y `[appearance]="'outline'"` de las acciones generadas `security-domain-view-scopes` y `security-domain-view-attributes`.*

## Criterios de aceptación

- [x] Cambiar a `fill` en `app.config.ts` cambia todos los formularios.

## Ficheros afectados

- `src/app/shared/toolkit/form-layout/form-layout.component.ts`
- `src/app/app.config.ts`
- `src/app/shared/toolkit/ui-defaults.provider.ts`
- `src/app/shared/toolkit/editable/editable-{rrule,cron,credit-card,date-range,password}/*`
- `src/app/features/access/security-domain/actions/security-domain-view-{scopes,attributes}/*.component.html`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *form-layout/form-layout.component.ts*
