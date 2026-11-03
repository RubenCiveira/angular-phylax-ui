---
id: FEAT-04
titulo: "Renderizado de valores por tipo en listas y detalle"
area: features-generadas
epica: EP-FEAT-1
paso: 3
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [FEAT-03, DATA-10]
origen: 08-features-generadas.md
---

# FEAT-04 · Renderizado de valores por tipo en listas y detalle

**Épica:** [EP-FEAT-1 · Listas de entidad](README.md) — paso 3 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Los valores se pintan en crudo: `true`/`false`, fechas ISO, enums técnicos y JSON en una celda.

## Tareas

- [ ] `boolean` → icono `check`/`close` con `aria-label` o chip.
- [ ] `datetime`/`date` → pipe `date` con el locale activo.
- [ ] `enum` → etiqueta traducida.
- [ ] `$ref` → `display()` de la entidad referenciada.
- [ ] Crear los renderizadores como componentes o pipes del toolkit.

## Criterios de aceptación

- [ ] Ninguna lista muestra `true`, `false` ni fechas ISO.

## Ficheros afectados

- `src/app/features/**/components/*-view-list/*.component.html`
- `src/app/features/**/components/*-view-detail/*.component.html`

## Relacionado

**Depende de:**
- [FEAT-03](FEAT-03-metadatos-de-campo.md) — Metadatos de campo en el generador (sensitive, list, group…)
- [DATA-10](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-10-proyecciones-conservan-fechas.md) — Las proyecciones no deben convertir las fechas en strings *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *components/*-view-list/*.component.html (columnas)*
