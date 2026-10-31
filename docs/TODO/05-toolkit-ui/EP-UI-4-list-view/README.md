---
id: EP-UI-4
titulo: "list-view"
area: toolkit-ui
prioridad: critica
estado: pendiente
issues: [UI-09, UI-12, UI-10, UI-11, UI-13, UI-14]
---

# EP-UI-4 · list-view

**Prioridad máxima:** 🔴 Crítica · **Issues:** 6 · **Esfuerzo estimado:** ~6 días

## Objetivo

Lista accesible con teclado, columnas elegibles, ordenación y estados vacío y error.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-09](UI-09-list-view-aria-y-teclado.md) | list-view: semántica ARIA y uso con teclado | 🔴 | M | 🧩 |
| 2 | [UI-12](UI-12-list-view-limpieza.md) | list-view: seleccionar todo y limpieza interna | ⚪ | S | 🧩 |
| 3 | [UI-10](UI-10-list-view-selector-de-columnas.md) | list-view: selector de columnas y columnas visibles por defecto | 🟠 | M | 🧩 |
| 4 | [UI-11](UI-11-list-view-tooltip-y-ordenacion.md) | list-view: tooltip en cabecera y ordenación | 🟡 | M | 🧩 |
| 5 | [UI-13](UI-13-list-view-estado-vacio-y-error.md) | list-view: estados vacío y de error integrados | 🟠 | S | 🧩 |
| 6 | [UI-14](UI-14-list-view-standalone.md) | Directivas de list-view standalone | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/list-view/list-view.component.html` | UI-09, UI-11, UI-12, UI-13 |
| `src/app/shared/toolkit/list-view/list-view.component.ts` | UI-09, UI-10, UI-12 |
| `src/app/shared/toolkit/list-view/list-view.directives.ts` | UI-10, UI-11, UI-13, UI-14 |
| `src/app/shared/toolkit/list-view/list-view.module.ts` | UI-14 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [STY-13](../../03-estilos-y-theming/EP-STY-4-estilos-list-view/STY-13-tabla-variables-de-componente.md) — Tabla de list-view con variables de componente *(épica [EP-STY-4](../../03-estilos-y-theming/EP-STY-4-estilos-list-view/README.md))*
- [I18N-05](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-05-i18n-global.md) — Traducciones globales del shell, toolkit y errores *(épica [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md))*

## Desbloquea

- [FEAT-05](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-05-pantalla-de-lista-usable.md) — Pantalla de lista: textos, estado vacío y filtros visibles *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*
- [FEAT-06](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-06-entity-list-layout.md) — Componente <entity-list-layout> en el toolkit *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*
- [FEAT-14](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-14-standalone-onpush.md) — Generar componentes standalone con OnPush y rutas sin NgModule *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*

## Checklist de la épica

- [ ] UI-09 — list-view: semántica ARIA y uso con teclado
- [ ] UI-12 — list-view: seleccionar todo y limpieza interna
- [ ] UI-10 — list-view: selector de columnas y columnas visibles por defecto
- [ ] UI-11 — list-view: tooltip en cabecera y ordenación
- [ ] UI-13 — list-view: estados vacío y de error integrados
- [ ] UI-14 — Directivas de list-view standalone
