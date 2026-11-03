---
id: FEAT-13
titulo: "Formularios agrupados por secciones y con tipos semánticos"
area: features-generadas
epica: EP-FEAT-2
paso: 3
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [FEAT-03]
origen: 08-features-generadas.md
---

# FEAT-13 · Formularios agrupados por secciones y con tipos semánticos

**Épica:** [EP-FEAT-2 · Formularios y modelos](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Los formularios grandes (oauth-client: más de 45 campos) se pintan todos seguidos. `editable-repeat` usa `label="access.oauth-client-view.edit."` (clave incompleta) y valores como `grantTypesJson` se editan como JSON en un `textarea`.

## Tareas

- [ ] Agrupar por `group` de los metadatos en `mat-expansion-panel` o pestañas; avanzadas plegadas.
- [ ] Corregir la etiqueta de `editable-repeat`.
- [ ] Tipos semánticos: `json-string-array` → chips, `url` → validador URL, `duration-seconds` → entero con sufijo.
- [ ] Formatear el constructor generado.

## Criterios de aceptación

- [ ] El formulario de oauth-client muestra primero los campos esenciales.
- [ ] Nadie edita JSON a mano para los tipos de concesión.

## Ficheros afectados

- `src/app/features/**/components/*-view-form-group/*`

## Relacionado

**Depende de:**
- [FEAT-03](../EP-FEAT-1-listas-de-entidad/FEAT-03-metadatos-de-campo.md) — Metadatos de campo en el generador (sensitive, list, group…) *(épica [EP-FEAT-1](../EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *components/*-view-form-group/*.component.ts / .html*
