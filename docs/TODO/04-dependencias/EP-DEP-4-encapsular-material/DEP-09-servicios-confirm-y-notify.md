---
id: DEP-09
titulo: "Crear ConfirmDialogService y NotifyService en el toolkit"
area: dependencias
epica: EP-DEP-4
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 03-dependencias.md
---

# DEP-09 · Crear ConfirmDialogService y NotifyService en el toolkit

**Épica:** [EP-DEP-4 · Encapsular Angular Material](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Las ~230 acciones generadas inyectan `MatDialog` y `MatSnackBar` directamente y repiten el mismo patrón de confirmación y aviso. Además, varios issues (CTX-02, CTX-07) necesitan diálogos y avisos traducidos.

## Tareas

- [x] `ConfirmDialogService.confirm({ titleKey, messageKey, okKey, cancelKey, params }): Observable<boolean>`.
- [x] `NotifyService.success/info/error(key, params, action?)` sobre `MatSnackBar`.
- [x] Textos por defecto en `common.*` del i18n global.
- [x] Tests unitarios.

## Criterios de aceptación

- [x] Los servicios están disponibles en `shared/toolkit` y documentados con un ejemplo.

## Ficheros afectados

- `src/app/shared/toolkit/dialog/confirm-dialog.service.ts`
- `src/app/shared/toolkit/notify/notify.service.ts`

## Relacionado

**Desbloquea:**
- [CTX-02](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-02-step-up-sin-body-y-con-feedback.md) — Step-up: no guardar el cuerpo de la petición y avisar al usuario *(épica [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md))*
- [CTX-07](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-07-oidc-sin-alert-confirm.md) — OIDC: sustituir alert/confirm por diálogos traducidos *(épica [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md))*
- [UI-15](../../05-toolkit-ui/EP-UI-5-acciones/UI-15-base-action-y-confirm-action.md) — Clases base BaseAction y ConfirmAction *(épica [EP-UI-5](../../05-toolkit-ui/EP-UI-5-acciones/README.md))*

**Recomendación de origen:** [03 · Dependencias](../../recomendaciones/03-dependencias.md) → *Angular Material / CDK (uso directo desde las features)*
