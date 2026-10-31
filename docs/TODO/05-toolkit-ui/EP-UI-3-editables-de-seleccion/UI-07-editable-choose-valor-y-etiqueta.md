---
id: UI-07
titulo: "editable-choose: separar valor y etiqueta, y elegir representación"
area: toolkit-ui
epica: EP-UI-3
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-07 · editable-choose: separar valor y etiqueta, y elegir representación

**Épica:** [EP-UI-3 · Editables de selección](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Recibe `options: string[]` y usa el mismo string como valor y como sufijo de la clave i18n, lo que facilitó el desajuste de mayúsculas del generador (FEAT-01).

## Tareas

- [ ] Aceptar `ReadonlyArray<string | { value: string; labelKey?: string }>`.
- [ ] Normalizar la clave i18n sin tocar el `value`.
- [ ] Input `display: 'auto' | 'select' | 'radio' | 'toggle'` (auto: radio si hay ≤ 4 opciones).

## Criterios de aceptación

- [ ] El valor enviado no cambia aunque cambie la etiqueta.
- [ ] Los enums de 2–4 valores se muestran como radio.

## Ficheros afectados

- `src/app/shared/toolkit/editable/editable-choose/editable-choose.component.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *editable/editable-choose/editable-choose.component.ts*
