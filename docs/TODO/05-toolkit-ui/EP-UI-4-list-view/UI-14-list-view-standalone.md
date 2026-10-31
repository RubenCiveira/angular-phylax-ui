---
id: UI-14
titulo: "Directivas de list-view standalone"
area: toolkit-ui
epica: EP-UI-4
paso: 6
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-14 · Directivas de list-view standalone

**Épica:** [EP-UI-4 · list-view](README.md) — paso 6 de 6

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Las directivas son `standalone: false`, y `ListViewIconDirective` aparece dos veces en `declarations` y `exports` del módulo.

## Tareas

- [ ] Hacer standalone las directivas.
- [ ] Exportar `LIST_VIEW = [...] as const`.
- [ ] Mantener `ListViewModule` como fachada y quitar duplicados.

## Criterios de aceptación

- [ ] Un componente standalone puede importar `LIST_VIEW`.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.directives.ts`
- `src/app/shared/toolkit/list-view/list-view.module.ts`

## Relacionado

**Desbloquea:**
- [FEAT-14](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-14-standalone-onpush.md) — Generar componentes standalone con OnPush y rutas sin NgModule *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *list-view.directives.ts / list-view.module.ts*
