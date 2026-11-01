---
id: UI-02
titulo: "BaseEditable: aplicar valor y estado sin setTimeout"
area: toolkit-ui
epica: EP-UI-2
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-02 · BaseEditable: aplicar valor y estado sin setTimeout

**Épica:** [EP-UI-2 · BaseEditable y envoltorio de campo](README.md) — paso 1 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`writeValue` y `setDisabledState` aplican el cambio dentro de `setTimeout`: el campo parpadea (vacío o habilitado durante un tick) y hay carreras con `patchValue` consecutivos.

## Tareas

- [x] Asignar directamente `this.value.set(v)` y `this.disabled.set(d)`.
- [x] Si aparece `ExpressionChangedAfterItHasBeenChecked`, localizar y corregir su origen en lugar de volver al `setTimeout`.
- [x] Test: `patchValue` seguido de lectura inmediata.

## Criterios de aceptación

- [x] Abrir un formulario de edición no muestra campos vacíos que luego se rellenan.

## Notas de implementación

No ha aparecido `ExpressionChangedAfterItHasBeenChecked`. Test en `base-editable.spec.ts`. `refresh()` conserva su `setTimeout` (fuera del alcance de este issue).

## Ficheros afectados

- `src/app/shared/toolkit/editable/base-editable.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *editable/base-editable.ts*
