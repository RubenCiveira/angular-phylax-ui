---
id: UI-26
titulo: "La acción de edición generada resuelve conflictos"
area: toolkit-ui
epica: EP-UI-8
paso: 4
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [UI-24, UI-25]
origen: peticion
---

# UI-26 · La acción de edición generada resuelve conflictos

**Épica:** [EP-UI-8 · Resolución de conflictos de edición (412)](README.md) — paso 4 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Las acciones `*-view-edit-action` cargan el elemento con `form.patchValue(selection[0])` en `run()` y guardan con `repository.update(form.value)`, pero no conservan el valor original ni tratan el error: hoy un 412 deja el formulario abierto tras el modal genérico y el usuario solo puede cerrar y repetir a mano.

## Tareas

- [ ] En `run()`, guardar una copia inmutable del valor original (`original = xxxProjectionToValue(selection[0])`) además de cargar el formulario.
- [ ] En `save()`, llamar a `repository.update(value, { original })` y, ante `isEditConflict(err)`:
  - Abrir `EditConflictService.resolve(err.conflict, fields)`.
  - Si el usuario aplica: `form.patchValue(merged)` (con la nueva `version`), actualizar `original = err.conflict.current`, mantener el formulario `dirty` y reintentar el guardado. Un nuevo 412 repite el ciclo.
  - Si cancela: dejar el formulario como estaba para que el usuario siga editando o cierre.
- [ ] Generar en cada `*-view-form-group` la lista `conflictFields` (nombre, clave de etiqueta y `display`) a partir de los mismos metadatos que pintan los editables, para no duplicar etiquetas.
- [ ] Mientras el guardado está en curso, deshabilitar el botón para evitar dobles envíos que provoquen 412 propios.
- [ ] Si [UI-15](../EP-UI-5-acciones/UI-15-base-action-y-confirm-action.md) ya está hecho, implementarlo una vez en una `BaseEditAction` y que las acciones generadas solo declaren repositorio, conversor y campos.
- [ ] Actualizar la plantilla del generador y regenerar las features.

## Criterios de aceptación

- [ ] Con dos pestañas editando el mismo rol, guardar en la segunda abre el diálogo con las tres versiones; tras resolver, se guarda sin error y la lista refleja el valor fusionado.
- [ ] Cancelar el diálogo conserva lo escrito en el formulario.
- [ ] Ninguna acción de edición generada muestra el modal genérico ante un 412.

## Ficheros afectados

- `src/app/features/**/actions/*-view-edit-action/*.component.ts`
- `src/app/features/**/actions/*-view-edit-action/*.component.html`
- `src/app/features/**/actions/*-view-edit-action/*.module.ts`
- `src/app/features/**/components/*-view-form-group/*.component.ts`
- *(generador)* plantillas de acción de edición y de form-group

## Relacionado

**Origen:** petición directa (no procede de `docs/recomendaciones`).
