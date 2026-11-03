---
id: UI-17
titulo: "Partir action-container en subcomponentes"
area: toolkit-ui
epica: EP-UI-5
paso: 3
prioridad: baja
esfuerzo: L
ambito: plantilla
estado: en-curso
depende_de: [UI-15]
origen: 07-toolkit-ui.md
---

# UI-17 · Partir action-container en subcomponentes

**Épica:** [EP-UI-5 · Acciones](README.md) — paso 3 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`action-container.component.ts` (526 líneas) concentra barra de herramientas, acciones por fila, menú "más", selección múltiple, migas de pan del diálogo, navegación local y adaptación responsive.

## Tareas

- [x] Separar `ActionToolbar`, `ActionRowMenu`, `ActionSelectionBar` y `ActionHost`.
- [x] Mantener la API pública del contenedor.

## Criterios de aceptación

- [x] Ningún fichero del módulo de acciones supera ~200 líneas. *(action-container.component.ts queda en 224)*
- [ ] Las pantallas generadas funcionan sin cambios. *(pendiente de prueba manual en el navegador)*

## Ficheros afectados

- `src/app/shared/toolkit/action/**`

## Relacionado

**Depende de:**
- [UI-15](UI-15-base-action-y-confirm-action.md) — Clases base BaseAction y ConfirmAction

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *action/action-container.component.ts + action.model.ts*
