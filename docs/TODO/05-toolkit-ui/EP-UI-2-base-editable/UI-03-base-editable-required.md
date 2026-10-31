---
id: UI-03
titulo: "BaseEditable: detectar required con hasValidator"
area: toolkit-ui
epica: EP-UI-2
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-03 · BaseEditable: detectar required con hasValidator

**Épica:** [EP-UI-2 · BaseEditable y envoltorio de campo](README.md) — paso 2 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El "required" se detecta llamando al validador con un control falso (`validators({} as any)['required']`), lo que puede lanzar con validadores propios y falla con validadores compuestos.

## Tareas

- [ ] Usar `this.control.hasValidator(Validators.required)`.
- [ ] Recalcular si cambian los validadores (`registerOnValidatorChange`).

## Criterios de aceptación

- [ ] El asterisco de obligatorio aparece en todos los campos con `Validators.required`.

## Ficheros afectados

- `src/app/shared/toolkit/editable/base-editable.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *editable/base-editable.ts*
