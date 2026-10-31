---
id: EP-DEP-4
titulo: "Encapsular Angular Material"
area: dependencias
prioridad: alta
estado: pendiente
issues: [DEP-09, DEP-08]
---

# EP-DEP-4 · Encapsular Angular Material

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~2 días

## Objetivo

Servicios de diálogo y aviso propios y regla de lint que limite Material al toolkit.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DEP-09](DEP-09-servicios-confirm-y-notify.md) | Crear ConfirmDialogService y NotifyService en el toolkit | 🟠 | M | 🧩 |
| 2 | [DEP-08](DEP-08-eslint-material-solo-en-toolkit.md) | Regla de lint: Material solo desde el toolkit y el shell | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/dialog/confirm-dialog.service.ts` | DEP-09 |
| `src/app/shared/toolkit/notify/notify.service.ts` | DEP-09 |
| `eslint.config.js` | DEP-08 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CFG-06](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-06-eslint.md) — Añadir ESLint con reglas para el código generado *(épica [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `eslint.config.js`

## Desbloquea

- [CTX-02](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-02-step-up-sin-body-y-con-feedback.md) — Step-up: no guardar el cuerpo de la petición y avisar al usuario *(épica [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md))*
- [CTX-07](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-07-oidc-sin-alert-confirm.md) — OIDC: sustituir alert/confirm por diálogos traducidos *(épica [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md))*
- [UI-15](../../05-toolkit-ui/EP-UI-5-acciones/UI-15-base-action-y-confirm-action.md) — Clases base BaseAction y ConfirmAction *(épica [EP-UI-5](../../05-toolkit-ui/EP-UI-5-acciones/README.md))*

## Checklist de la épica

- [ ] DEP-09 — Crear ConfirmDialogService y NotifyService en el toolkit
- [ ] DEP-08 — Regla de lint: Material solo desde el toolkit y el shell
