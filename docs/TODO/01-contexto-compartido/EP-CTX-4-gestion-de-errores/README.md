---
id: EP-CTX-4
titulo: "Gestión de errores"
area: contexto-compartido
prioridad: critica
estado: pendiente
issues: [CTX-03, CTX-04, CTX-05]
---

# EP-CTX-4 · Gestión de errores

**Prioridad máxima:** 🔴 Crítica · **Issues:** 3 · **Esfuerzo estimado:** ~2.5 días

## Objetivo

Que todos los errores lleguen a la telemetría una sola vez y se muestren traducidos.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-03](CTX-03-registrar-global-error-handler.md) | Registrar GlobalErrorHandler | 🔴 | S | 🧩 |
| 2 | [CTX-04](CTX-04-error-service-fuga-suscripcion.md) | ErrorService: eliminar la suscripción que se acumula por error | 🔴 | S | 🧩 |
| 3 | [CTX-05](CTX-05-error-service-api-errores-gestionados.md) | ErrorService: traducir mensajes y formalizar los errores gestionados | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/app.config.ts` | CTX-03 |
| `src/app/shared/context/observability/error.service.ts` | CTX-03, CTX-04, CTX-05 |
| `src/app/shared/data/api/client.service.ts` | CTX-05 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-1](../EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `src/app/app.config.ts`
- [EP-CTX-3](../EP-CTX-3-identidad-y-autorizacion/README.md) — Identidad y autorización: `src/app/shared/data/api/client.service.ts`
- [EP-DATA-1](../../02-capa-de-datos/EP-DATA-1-cliente-http/README.md) — Cliente HTTP (ClientService): `src/app/shared/data/api/client.service.ts`
- [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md) — RepositoryService y metadatos: `src/app/shared/data/api/client.service.ts`
- [EP-STY-2](../../03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/app/app.config.ts`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/app.config.ts`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `src/app/app.config.ts`
- [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md) — Ajustes aislados: `src/app/app.config.ts`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/app.config.ts`

## Desbloquea

- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

## Checklist de la épica

- [ ] CTX-03 — Registrar GlobalErrorHandler
- [ ] CTX-04 — ErrorService: eliminar la suscripción que se acumula por error
- [ ] CTX-05 — ErrorService: traducir mensajes y formalizar los errores gestionados
