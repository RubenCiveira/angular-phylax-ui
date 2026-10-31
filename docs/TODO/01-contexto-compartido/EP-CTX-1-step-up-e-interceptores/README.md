---
id: EP-CTX-1
titulo: "Step-up e interceptores HTTP"
area: contexto-compartido
prioridad: critica
estado: en-curso
issues: [CTX-01, CTX-10, CTX-02]
---

# EP-CTX-1 · Step-up e interceptores HTTP

**Prioridad máxima:** 🔴 Crítica · **Issues:** 3 · **Esfuerzo estimado:** ~2.5 días

## Objetivo

Hacer funcionar la autenticación reforzada y registrar la identidad OIDC con funciones standalone.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-01](CTX-01-interceptor-step-up-funcional.md) | Hacer que el interceptor de step-up se ejecute | 🔴 | S | 🧩 |
| 2 | [CTX-10](CTX-10-provide-oidc-identity.md) | Sustituir OidcLoginModule por provideOidcIdentity() | 🟡 | S | 🧩 |
| 3 | [CTX-02](CTX-02-step-up-sin-body-y-con-feedback.md) | Step-up: no guardar el cuerpo de la petición y avisar al usuario | 🟠 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/identity/oidc-identity/step-up.interceptor.ts` | CTX-01 |
| `src/app/shared/context/identity/oidc-identity/oidc-login.module.ts` | CTX-01, CTX-10 |
| `src/app/app.config.ts` | CTX-01, CTX-10 |
| `src/app/shared/context/identity/oidc-identity/step-up.service.ts` | CTX-02 |
| `public/i18n/es.json` | CTX-02 |
| `public/i18n/en.json` | CTX-02 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [DEP-09](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) — Crear ConfirmDialogService y NotifyService en el toolkit *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-4](../EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/app.config.ts`
- [EP-STY-2](../../03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/app/app.config.ts`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/app.config.ts`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `src/app/app.config.ts`
- [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md) — Ajustes aislados: `src/app/app.config.ts`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/app.config.ts`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `public/i18n/en.json`, `public/i18n/es.json`

## Desbloquea

- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

## Checklist de la épica

- [x] CTX-01 — Hacer que el interceptor de step-up se ejecute
- [ ] CTX-10 — Sustituir OidcLoginModule por provideOidcIdentity()
- [ ] CTX-02 — Step-up: no guardar el cuerpo de la petición y avisar al usuario
