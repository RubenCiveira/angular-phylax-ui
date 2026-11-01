---
id: CTX-12
titulo: "Guards: returnUrl y guard por permiso"
area: contexto-compartido
epica: EP-CTX-3
paso: 2
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-12 · Guards: returnUrl y guard por permiso

**Épica:** [EP-CTX-3 · Identidad y autorización](README.md) — paso 2 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`isAuthenticated` se tipa como `CanActivateChildFn` pero se usa en `canActivate`, calcula un `parentUrl` que no usa y redirige a `/unauthorized` **sin `returnUrl`** (aunque `UnauthorizedComponent` lo lee). No existe ningún guard por rol o permiso.

## Tareas

- [x] Tipar como `CanActivateFn` y quitar `parentUrl`.
- [x] Redirigir con `router.createUrlTree(['/unauthorized'], { queryParams: { returnUrl: state.url, reason: '401' } })`.
- [x] Crear `PermissionService.has(perm)` a partir de `UserInfo.roles`/permisos. *En `authorization-access/permission.service.ts`; `has()` devuelve `Observable<boolean>` y la regla pura `grants(user, perm)` la comparte con el guard.*
- [x] Crear la factoría `hasPermission(perm): CanActivateFn` (redirige con `reason=403`). *Sin sesión redirige con `reason=401`.*
- [x] Tests de ambos guards.

## Criterios de aceptación

- [x] Tras iniciar sesión desde `/unauthorized`, el usuario vuelve a la página que pidió. *El botón guarda `returnUrl` como última ruta antes de `login()`, porque el guard cancela la navegación y no llega a guardarse.*
- [x] `hasPermission` bloquea y redirige con `reason=403`.

## Ficheros afectados

- `src/app/shared/context/authorization-access/guards/is-authenticated.guards.ts`

## Relacionado

**Desbloquea:**
- [CTX-13](CTX-13-pagina-unauthorized-con-salida.md) — Página de acceso denegado con acciones (401/403)
- [SHELL-04](../../07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-04-visibilidad-por-permisos.md) — Visibilidad del menú por permiso, calculada una vez *(épica [EP-SHELL-1](../../07-shell-y-layout/EP-SHELL-1-menu-y-registro/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *guards/is-authenticated.guards.ts*
