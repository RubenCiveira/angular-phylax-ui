---
id: UI-15
titulo: "Clases base BaseAction y ConfirmAction"
area: toolkit-ui
epica: EP-UI-5
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [DEP-09]
origen: 07-toolkit-ui.md
---

# UI-15 · Clases base BaseAction y ConfirmAction

**Épica:** [EP-UI-5 · Acciones](README.md) — paso 1 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La interfaz `Action` obliga a cada acción generada a implementar 12 miembros, por eso cada una tiene unas 90 líneas casi idénticas (textos, ACL, diálogo, snackbar, suscripciones).

## Tareas

- [ ] `abstract class BaseAction<T> implements Action`: textos de `action.<name>.*` con fallback a `common.action.<name>.*`, ACL (`allowed(name)`), `visible`/`enabled` por defecto, limpieza con `DestroyRef`.
- [ ] `abstract class ConfirmAction<T> extends BaseAction<T>`: diálogo con `ConfirmDialogService`, ejecución de `execute(items)`, aviso con `NotifyService`, cierre del contenedor.
- [ ] Migrar una entidad de prueba (delete de oauth-client) para validar.

## Criterios de aceptación

- [ ] La acción delete de prueba tiene ≤ 20 líneas y se comporta igual.

## Ficheros afectados

- `src/app/shared/toolkit/action/base-action.ts`
- `src/app/shared/toolkit/action/confirm-action.ts`
- `src/app/shared/toolkit/action/action.model.ts`

## Relacionado

**Depende de:**
- [DEP-09](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) — Crear ConfirmDialogService y NotifyService en el toolkit *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*

**Desbloquea:**
- [UI-17](UI-17-partir-action-container.md) — Partir action-container en subcomponentes
- [FEAT-10](../../08-features-generadas/EP-FEAT-4-acciones-generadas/FEAT-10-acciones-sobre-clases-base.md) — Acciones generadas sobre BaseAction/ConfirmAction *(épica [EP-FEAT-4](../../08-features-generadas/EP-FEAT-4-acciones-generadas/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *action/action-container.component.ts + action.model.ts*
