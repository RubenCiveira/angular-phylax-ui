---
id: EP-CTX-2
titulo: "Proveedor OIDC"
area: contexto-compartido
prioridad: critica
estado: hecho
issues: [CTX-06, CTX-08, CTX-09, CTX-07]
---

# EP-CTX-2 · Proveedor OIDC

**Prioridad máxima:** 🔴 Crítica · **Issues:** 4 · **Esfuerzo estimado:** ~3 días

## Objetivo

Dejar `oidc-identity-provider.service.ts` seguro, configurable y sin diálogos nativos, en una sola pasada sobre el fichero.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-06](CTX-06-oidc-sin-debug-ni-logs.md) | OIDC: no volcar información de depuración ni eventos a los logs | 🔴 | S | 🧩 |
| 2 | [CTX-08](CTX-08-oidc-configuracion-coherente.md) | OIDC: configuración coherente (pkce, scope, roles, persistencia) | 🟠 | S | 🧩📄 |
| 3 | [CTX-09](CTX-09-oidc-refresco-unico.md) | OIDC: un único mecanismo de refresco de token | 🟡 | S | 🧩 |
| 4 | [CTX-07](CTX-07-oidc-sin-alert-confirm.md) | OIDC: sustituir alert/confirm por diálogos traducidos | 🟠 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts` | CTX-06, CTX-07, CTX-08, CTX-09 |
| `public/config/phylax-config.json` | CTX-08 |
| `src/app/shared/context/identity/identity-provider.interface.ts` | CTX-07 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [DEP-09](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) — Crear ConfirmDialogService y NotifyService en el toolkit *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-6](../EP-CTX-6-configuracion-en-runtime/README.md) — Configuración en runtime: `public/config/phylax-config.json`
- [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md) — ApiService y ApiProvider: `public/config/phylax-config.json`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `public/config/phylax-config.json`
- [EP-SHELL-4](../../07-shell-y-layout/EP-SHELL-4-toolbar/README.md) — Toolbar: `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts`
- [EP-I18N-2](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/README.md) — phylax-config.json: `public/config/phylax-config.json`

## Desbloquea

- [I18N-09](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/I18N-09-quitar-silent-refresh.md) — Quitar silent-refresh.html *(épica [EP-I18N-3](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/README.md))*

## Checklist de la épica

- [x] CTX-06 — OIDC: no volcar información de depuración ni eventos a los logs
- [x] CTX-08 — OIDC: configuración coherente (pkce, scope, roles, persistencia)
- [x] CTX-09 — OIDC: un único mecanismo de refresco de token
- [x] CTX-07 — OIDC: sustituir alert/confirm por diálogos traducidos
