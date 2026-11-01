---
id: UI-25
titulo: "Diálogo de resolución de conflictos"
area: toolkit-ui
epica: EP-UI-8
paso: 3
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [UI-23, DEP-09]
origen: peticion
---

# UI-25 · Diálogo de resolución de conflictos

**Épica:** [EP-UI-8 · Resolución de conflictos de edición (412)](README.md) — paso 3 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Con el resultado de `threeWayMerge` hace falta una pantalla en la que el usuario vea qué ha cambiado otra persona mientras editaba y elija, en cada campo en conflicto, con qué valor quedarse.

## Tareas

- [ ] Crear `EditConflictDialogComponent` (standalone) y `EditConflictService.resolve(conflict, fields)` que lo abra con `disableClose: true` y devuelva `Observable<T | null>` (valor fusionado o `null` si cancela), al estilo de `ConfirmDialogService`.
- [ ] `fields`: descripción de los campos a mostrar `{ name, label, display?: (value) => string }`; `label` es una clave de traducción (las de `form-group.*` de cada feature) y `display` permite pintar referencias `$ref`, enums o fechas de forma legible (reutilizar `DisplayProvider` / `SelectorProvider` cuando exista).
- [ ] Tabla con una fila por campo y columnas **Campo · Original · Enviado · Actual**:
  - Filas en `conflict` destacadas y con un grupo de radio (`Enviado` / `Actual`) sin valor preseleccionado.
  - Filas `mine`/`theirs`/`same` con el valor elegido automáticamente y la opción de cambiarlo.
  - Filas `unchanged` ocultas tras un conmutador «Mostrar campos sin cambios».
- [ ] Acciones globales: «Quedarme con todos mis cambios», «Usar todo lo del servidor», «Cancelar» y «Aplicar» (deshabilitado mientras haya conflictos sin resolver).
- [ ] Texto de cabecera con cuántos campos están en conflicto y cuántos se han fusionado solos.
- [ ] Claves de traducción comunes en `public/i18n/es.json` y `en.json` bajo `editConflict.*`.
- [ ] Accesibilidad: cada grupo de radio con `aria-labelledby` al nombre del campo, foco inicial en el primer conflicto, navegable solo con teclado, y el estado no comunicado únicamente por color.

## Criterios de aceptación

- [ ] Con un conflicto en `name` y un cambio solo del servidor en `resourceServer`, el diálogo muestra `name` sin elegir, `resourceServer` con el valor del servidor, y «Aplicar» solo se habilita al elegir `name`.
- [ ] «Aplicar» devuelve el valor de `applyMerge` con la `version` actual; «Cancelar» devuelve `null`.
- [ ] Las referencias se muestran por su etiqueta, no como `{ "$ref": "…" }`.
- [ ] Tests del componente para selección, acciones globales y estado del botón «Aplicar».

## Ficheros afectados

- `src/app/shared/toolkit/edit-conflict/edit-conflict-dialog.component.ts` *(nuevo)*
- `src/app/shared/toolkit/edit-conflict/edit-conflict-dialog.component.html` *(nuevo)*
- `src/app/shared/toolkit/edit-conflict/edit-conflict-dialog.component.scss` *(nuevo)*
- `src/app/shared/toolkit/edit-conflict/edit-conflict.service.ts` *(nuevo)*
- `public/i18n/es.json`
- `public/i18n/en.json`

## Relacionado

**Origen:** petición directa (no procede de `docs/recomendaciones`).
