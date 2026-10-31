---
id: FEAT-10
titulo: "Acciones generadas sobre BaseAction/ConfirmAction"
area: features-generadas
epica: EP-FEAT-4
paso: 2
prioridad: alta
esfuerzo: L
ambito: plantilla
estado: pendiente
depende_de: [UI-15, FEAT-11]
origen: 08-features-generadas.md
---

# FEAT-10 · Acciones generadas sobre BaseAction/ConfirmAction

**Épica:** [EP-FEAT-4 · Acciones generadas](README.md) — paso 2 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

~230 acciones con ~90 líneas casi idénticas: textos por defecto mezclados (`'Borrando el item'`, `'Delete'`), suscripciones sin cancelar (`selectTranslateObject`, `acl.fetch`), `MatDialog`/`MatSnackBar` directos y todo el decorador en una línea.

## Tareas

- [ ] Cambiar las plantillas de acciones para heredar de `ConfirmAction` (`delete`, `enable`, `disable` y variantes de selección) o `BaseAction`.
- [ ] Textos genéricos en `common.action.*` con interpolación `{{entity}}`.
- [ ] Regenerar todas las entidades.

## Criterios de aceptación

- [ ] Ninguna acción generada inyecta `MatDialog` ni `MatSnackBar`.
- [ ] Las acciones funcionan igual en 3 entidades probadas.

## Ficheros afectados

- `src/app/features/**/actions/**`

## Relacionado

**Depende de:**
- [UI-15](../../05-toolkit-ui/EP-UI-5-acciones/UI-15-base-action-y-confirm-action.md) — Clases base BaseAction y ConfirmAction *(épica [EP-UI-5](../../05-toolkit-ui/EP-UI-5-acciones/README.md))*
- [FEAT-11](FEAT-11-erratas-de-plantillas.md) — Corregir erratas que se propagan a cientos de ficheros

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *actions/*-action/*.component.ts*
