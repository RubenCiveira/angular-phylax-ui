---
id: UI-13
titulo: "list-view: estados vacío y de error integrados"
area: toolkit-ui
epica: EP-UI-4
paso: 5
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [I18N-05]
origen: 07-toolkit-ui.md
---

# UI-13 · list-view: estados vacío y de error integrados

**Épica:** [EP-UI-4 · list-view](README.md) — paso 5 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El estado vacío lo pinta cada feature con `<h1>No content</h1>` literal (25 ficheros) y no hay estado de error.

## Tareas

- [ ] Plantillas proyectables `listViewEmpty` y `listViewError` con un contenido por defecto traducido (`common.empty`, `common.loadError` + "Reintentar").
- [ ] Input `error` y output `retry`.

## Criterios de aceptación

- [ ] Una lista sin datos muestra un mensaje traducido sin código en la feature.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.component.html`
- `src/app/shared/toolkit/list-view/list-view.directives.ts`

## Relacionado

**Depende de:**
- [I18N-05](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-05-i18n-global.md) — Traducciones globales del shell, toolkit y errores *(épica [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md))*

**Desbloquea:**
- [FEAT-05](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-05-pantalla-de-lista-usable.md) — Pantalla de lista: textos, estado vacío y filtros visibles *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *list-view/list-view.component.html / .ts*
