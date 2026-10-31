---
id: UI-06
titulo: "Componente envoltorio <editable-field>"
area: toolkit-ui
epica: EP-UI-2
paso: 5
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [UI-04, UI-05]
origen: 07-toolkit-ui.md
---

# UI-06 · Componente envoltorio <editable-field>

**Épica:** [EP-UI-2 · BaseEditable y envoltorio de campo](README.md) — paso 5 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Los 25 editables repiten la misma estructura (`mat-form-field` + label + errores + marca de oculto). Cambiar el aspecto de todos los campos exige tocar 25 plantillas.

## Tareas

- [ ] Crear `<editable-field [editable]="this">` que pinte label, hint, errores y marca de oculto, y proyecte el control.
- [ ] Migrar primero los editables núcleo (`text`, `textarea`, `integer`, `password`, `check`, `choose`, `selectone`, `datetime`, `upload`, `repeat`).

## Criterios de aceptación

- [ ] Los editables núcleo usan el envoltorio.
- [ ] Un cambio visual en el envoltorio afecta a todos.

## Ficheros afectados

- `src/app/shared/toolkit/editable/editable-field/**`
- `src/app/shared/toolkit/editable/*/*.component.ts`

## Relacionado

**Depende de:**
- [UI-04](UI-04-mensajes-de-error-con-parametros.md) — Mensajes de validación con parámetros y fallback común
- [UI-05](UI-05-hint-appearance-y-marca-oculta.md) — BaseEditable: hint, apariencia por campo y marca de oculto accesible

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *editable/base-editable.ts*
