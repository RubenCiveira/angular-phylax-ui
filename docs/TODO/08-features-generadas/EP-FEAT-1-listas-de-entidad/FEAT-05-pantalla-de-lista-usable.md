---
id: FEAT-05
titulo: "Pantalla de lista: textos, estado vacío y filtros visibles"
area: features-generadas
epica: EP-FEAT-1
paso: 4
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [UI-13, STY-19]
origen: 08-features-generadas.md
---

# FEAT-05 · Pantalla de lista: textos, estado vacío y filtros visibles

**Épica:** [EP-FEAT-1 · Listas de entidad](README.md) — paso 4 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

- `<h1>No content</h1>` literal en 25 ficheros.
- `showSearchLabel` y `hideSearchLabel` valen `"Refresh"` (60 apariciones): el botón de filtros se anuncia como "Refresh".
- `[mode]="'card'"` fijo en todas las entidades.
- Con el panel de filtros cerrado no se sabe si hay filtros activos.

## Tareas

- [ ] Estado vacío de UI-13 con acción ("Crear el primero" o "Limpiar filtros").
- [ ] Etiquetas `common.showFilters`, `common.hideFilters`, `common.refresh`.
- [ ] Modo inicial desde metadatos y conmutador tabla/tarjetas persistido.
- [ ] Chips con los filtros activos y "x" para quitarlos.

## Criterios de aceptación

- [ ] No queda "No content" ni `signal("Refresh")` en las features.
- [ ] Los filtros activos se ven con el panel cerrado.

## Ficheros afectados

- `src/app/features/**/components/*-view-list/*.component.html`
- `src/app/features/**/components/*-view-list/*.component.ts`

## Relacionado

**Depende de:**
- [UI-13](../../05-toolkit-ui/EP-UI-4-list-view/UI-13-list-view-estado-vacio-y-error.md) — list-view: estados vacío y de error integrados *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*
- [STY-19](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/STY-19-estilos-comunes-de-entidad.md) — Clases globales de pantalla de entidad y fin de los estilos inline *(épica [EP-STY-6](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/README.md))*

**Desbloquea:**
- [FEAT-06](FEAT-06-entity-list-layout.md) — Componente <entity-list-layout> en el toolkit

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *components/*-view-list/*.component.html (resto de la plantilla)*
