---
id: FEAT-01
titulo: "Opciones de editable-choose con los mismos valores que el modelo"
area: features-generadas
epica: EP-FEAT-2
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 08-features-generadas.md
---

# FEAT-01 · Opciones de editable-choose con los mismos valores que el modelo

**Épica:** [EP-FEAT-2 · Formularios y modelos](README.md) — paso 1 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

En las 21 apariciones de `<editable-choose>` el generador emite las opciones en MAYÚSCULAS (`'CLIENT-SECRET-BASIC'`), mientras el modelo, el valor por defecto del `FormGroup` y las claves i18n usan minúsculas (`'client-secret-basic'`). El valor guardado no aparece seleccionado, las etiquetas no se traducen y se envía al backend un valor no canónico. Afecta también a los selectores de orden (`'CODE-ASC'`…).

## Tareas

- [ ] Localizar en el generador dónde se pasa a mayúsculas y emitir los literales del modelo.
- [ ] Generar en el modelo constantes `as const` por enum y usarlas como opciones y como tipo.
- [ ] Revisar los valores de orden (`code-asc`…) contra lo que espera el backend.
- [ ] Test generado por entidad: el valor por defecto está entre las opciones.
- [ ] Regenerar.

## Criterios de aceptación

- [ ] Editar un oauth-client existente muestra su método de autenticación seleccionado.
- [ ] El body enviado usa minúsculas.
- [ ] Las 21 apariciones están corregidas.

## Ficheros afectados

- `src/app/features/**/components/*-view-form-group/*.component.html`
- `src/app/features/**/components/*-view-search/*.component.html`
- `src/app/features/**/model/*.model.ts`

## Relacionado

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *components/*-view-form-group/*.component.html (editable-choose)*
