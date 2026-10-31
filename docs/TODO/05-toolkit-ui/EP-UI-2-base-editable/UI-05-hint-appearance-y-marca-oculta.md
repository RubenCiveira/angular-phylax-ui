---
id: UI-05
titulo: "BaseEditable: hint, apariencia por campo y marca de oculto accesible"
area: toolkit-ui
epica: EP-UI-2
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-05 · BaseEditable: hint, apariencia por campo y marca de oculto accesible

**Épica:** [EP-UI-2 · BaseEditable y envoltorio de campo](README.md) — paso 3 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay soporte para texto de ayuda ni `aria-describedby`. Si un campo está oculto por permisos se pinta `----` sin explicación. Las clases del host se añaden con `Renderer2`.

## Tareas

- [ ] Inputs `hint` y `appearance`.
- [ ] `<mat-hint>` con `label + '.hint'` si existe.
- [ ] Sustituir `----` por `<editable-hidden-mark>` con `aria-label` traducido ("Campo oculto por permisos").
- [ ] `host: { class: 'editable' }` en lugar de `Renderer2`.

## Criterios de aceptación

- [ ] Un campo puede mostrar ayuda.
- [ ] Un lector de pantalla anuncia los campos ocultos.

## Ficheros afectados

- `src/app/shared/toolkit/editable/base-editable.ts`

## Relacionado

**Desbloquea:**
- [UI-06](UI-06-envoltorio-editable-field.md) — Componente envoltorio <editable-field>

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *editable/base-editable.ts*
