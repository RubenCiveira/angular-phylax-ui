---
id: FEAT-06
titulo: "Componente <entity-list-layout> en el toolkit"
area: features-generadas
epica: EP-FEAT-1
paso: 6
prioridad: media
esfuerzo: L
ambito: plantilla
estado: pendiente
depende_de: [FEAT-05, UI-10]
origen: 08-features-generadas.md
---

# FEAT-06 · Componente <entity-list-layout> en el toolkit

**Épica:** [EP-FEAT-1 · Listas de entidad](README.md) — paso 6 de 6

**Prioridad:** 🟡 Media · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Cada lista generada (~190 líneas) repite toolbar, panel de filtros, estado vacío y lista.

## Tareas

- [ ] Crear `<entity-list-layout>` con slots para acciones, búsqueda, columnas y contenido de fila.
- [ ] Cambiar la plantilla del generador para usarlo.

## Criterios de aceptación

- [ ] La plantilla de lista generada baja a ~40 líneas.

## Ficheros afectados

- `src/app/shared/toolkit/entity-list-layout/**`
- `src/app/features/**/components/*-view-list/*.component.html`

## Relacionado

**Depende de:**
- [FEAT-05](FEAT-05-pantalla-de-lista-usable.md) — Pantalla de lista: textos, estado vacío y filtros visibles
- [UI-10](../../05-toolkit-ui/EP-UI-4-list-view/UI-10-list-view-selector-de-columnas.md) — list-view: selector de columnas y columnas visibles por defecto *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *components/*-view-list/*.component.html (resto de la plantilla)*
