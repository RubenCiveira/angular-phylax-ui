---
id: EP-CTX-3
titulo: "Identidad y autorización"
area: contexto-compartido
prioridad: alta
estado: hecho
issues: [CTX-11, CTX-12, CTX-13, CTX-14, CTX-25]
---

# EP-CTX-3 · Identidad y autorización

**Prioridad máxima:** 🟠 Alta · **Issues:** 5 · **Esfuerzo estimado:** ~3.5 días

## Objetivo

Errores de identidad explícitos, guards con returnUrl y permisos, y páginas de acceso con salida.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-11](CTX-11-identity-service-robusto.md) | IdentityService: tipado y error explícito si falta el handler | 🟡 | S | 🧩 |
| 2 | [CTX-12](CTX-12-guards-return-url-y-permisos.md) | Guards: returnUrl y guard por permiso | 🟠 | M | 🧩 |
| 3 | [CTX-13](CTX-13-pagina-unauthorized-con-salida.md) | Página de acceso denegado con acciones (401/403) | 🟠 | S | 🧩 |
| 4 | [CTX-14](CTX-14-authorization-access-limpieza.md) | AuthorizationAccess: menos escrituras y pantalla de redirección | 🟡 | S | 🧩 |
| 5 | [CTX-25](CTX-25-user-info-sin-token.md) | UserInfo como interfaz y sin token en el estado de UI | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/identity/identity.service.ts` | CTX-11 |
| `src/app/shared/context/authorization-access/guards/is-authenticated.guards.ts` | CTX-12 |
| `src/app/shared/context/authorization-access/unauthorized.component.ts` | CTX-13 |
| `src/app/shared/context/authorization-access/authorization-access.service.ts` | CTX-14 |
| `src/app/shared/context/authorization-access/authorization-access.component.ts` | CTX-14 |
| `src/app/shared/context/authorization-access/authorization-access.provider.ts` | CTX-14 |
| `src/app/shared/context/identity/user-info.model.ts` | CTX-25 |
| `src/app/shared/data/api/client.service.ts` | CTX-25 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [DATA-01](../../02-capa-de-datos/EP-DATA-1-cliente-http/DATA-01-token-con-timeout.md) — Peticiones sin sesión: error 401 en lugar de esperar para siempre *(épica [EP-DATA-1](../../02-capa-de-datos/EP-DATA-1-cliente-http/README.md))*
- [UI-19](../../05-toolkit-ui/EP-UI-6-paginas-de-error/UI-19-error-page-traducida.md) — Página de error traducida y útil *(épica [EP-UI-6](../../05-toolkit-ui/EP-UI-6-paginas-de-error/README.md))*
- [SHELL-07](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-4](../EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/shared/data/api/client.service.ts`
- [EP-DATA-1](../../02-capa-de-datos/EP-DATA-1-cliente-http/README.md) — Cliente HTTP (ClientService): `src/app/shared/data/api/client.service.ts`
- [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md) — RepositoryService y metadatos: `src/app/shared/data/api/client.service.ts`

## Desbloquea

- [SHELL-04](../../07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-04-visibilidad-por-permisos.md) — Visibilidad del menú por permiso, calculada una vez *(épica [EP-SHELL-1](../../07-shell-y-layout/EP-SHELL-1-menu-y-registro/README.md))*
- [SHELL-11](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-11-bootstrap-identidad-con-timeout.md) — Arranque con timeout y reintento si la identidad no responde *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*

## Checklist de la épica

- [x] CTX-11 — IdentityService: tipado y error explícito si falta el handler
- [x] CTX-12 — Guards: returnUrl y guard por permiso
- [x] CTX-13 — Página de acceso denegado con acciones (401/403)
- [x] CTX-14 — AuthorizationAccess: menos escrituras y pantalla de redirección
- [x] CTX-25 — UserInfo como interfaz y sin token en el estado de UI
