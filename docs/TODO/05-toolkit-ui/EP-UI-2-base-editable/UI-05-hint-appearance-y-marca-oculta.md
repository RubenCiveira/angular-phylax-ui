---
id: UI-05
titulo: "BaseEditable: hint, apariencia por campo y marca de oculto accesible"
area: toolkit-ui
epica: EP-UI-2
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-05 · BaseEditable: hint, apariencia por campo y marca de oculto accesible

**Épica:** [EP-UI-2 · BaseEditable y envoltorio de campo](README.md) — paso 3 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay soporte para texto de ayuda ni `aria-describedby`. Si un campo está oculto por permisos se pinta `----` sin explicación. Las clases del host se añaden con `Renderer2`.

## Tareas

- [x] Inputs `hint` y `appearance`.
- [x] `<mat-hint>` con `label + '.hint'` si existe.
- [x] Sustituir `----` por `<editable-hidden-mark>` con `aria-label` traducido ("Campo oculto por permisos").
- [x] `host: { class: 'editable' }` en lugar de `Renderer2`.

## Criterios de aceptación

- [x] Un campo puede mostrar ayuda.
- [x] Un lector de pantalla anuncia los campos ocultos.

## Notas de implementación

`hint` es una clave de traducción explícita; sin ella se usa `<label>.hint` si existe. La marca es `<editable-hidden-mark>` (`role="img"` + `aria-label` "<label>: Campo oculto por permisos", clave `common.hiddenField`) y sustituye a `----` en todos los editables. Hint y apariencia se pintan a través del envoltorio de UI-06.

## Ficheros afectados

- `src/app/shared/toolkit/editable/base-editable.ts`

## Relacionado

**Desbloquea:**
- [UI-06](UI-06-envoltorio-editable-field.md) — Componente envoltorio <editable-field>

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *editable/base-editable.ts*
