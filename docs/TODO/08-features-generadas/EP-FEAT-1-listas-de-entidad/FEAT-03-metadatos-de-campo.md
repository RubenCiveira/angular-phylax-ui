---
id: FEAT-03
titulo: "Metadatos de campo en el generador (sensitive, list, group…)"
area: features-generadas
epica: EP-FEAT-1
paso: 2
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [FEAT-02, DATA-15]
origen: 08-features-generadas.md
---

# FEAT-03 · Metadatos de campo en el generador (sensitive, list, group…)

**Épica:** [EP-FEAT-1 · Listas de entidad](README.md) — paso 2 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El generador crea una columna por cada campo del modelo (hasta 47) sin distinguir sensibles, relevantes o técnicos.

## Tareas

- [ ] Añadir a los metadatos de campo: `sensitive`, `list.visible`, `list.priority`, `list.render`, `group`, `display`.
- [ ] `sensitive`: sin columna, sin valor en detalle y "••••• [Cambiar]" en formulario.
- [ ] Solo 4–6 columnas con `list.visible` por defecto.
- [ ] Emitir los metadatos en el repositorio (`EntityMetadata`).

## Criterios de aceptación

- [ ] Regenerar no vuelve a crear columnas sensibles.
- [ ] Cada lista arranca con ≤ 6 columnas visibles.

## Ficheros afectados

- `(generador) metadatos de entidad`
- `src/app/features/**/components/*-view-list/*.component.html`

## Relacionado

**Depende de:**
- [FEAT-02](FEAT-02-quitar-columnas-sensibles-ya.md) — Quitar ya las columnas con secretos de las listas
- [DATA-15](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-15-entity-metadata-activo.md) — Activar EntityMetadata y borrar APIs comentadas *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*

**Desbloquea:**
- [FEAT-04](FEAT-04-renderizadores-por-tipo.md) — Renderizado de valores por tipo en listas y detalle
- [FEAT-13](../EP-FEAT-2-formularios-y-modelos/FEAT-13-formularios-por-secciones.md) — Formularios agrupados por secciones y con tipos semánticos *(épica [EP-FEAT-2](../EP-FEAT-2-formularios-y-modelos/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *components/*-view-list/*.component.html (columnas)*
