---
id: CTX-09
titulo: "OIDC: un único mecanismo de refresco de token"
area: contexto-compartido
epica: EP-CTX-2
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-09 · OIDC: un único mecanismo de refresco de token

**Épica:** [EP-CTX-2 · Proveedor OIDC](README.md) — paso 3 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

En `token_expires` se hace `setTimeout(() => refreshToken(), 1000)` a mano, además de `timeoutFactor: 0.75`, lo que puede producir refrescos concurrentes. `autenticateInHttp()` no se usa en ningún sitio.

## Tareas

- [ ] Usar `setupAutomaticSilentRefresh()` (con refresh token) y quitar el `setTimeout` manual.
- [ ] Borrar `autenticateInHttp()` y el método `accept()` que no se usa en `OidcIdentityHandlerService`.
- [ ] Probar con un access token de vida corta (1–2 min) que la sesión se mantiene.

## Criterios de aceptación

- [ ] Solo hay una petición de refresco por expiración (pestaña Network).

## Ficheros afectados

- `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts`

## Relacionado

**Desbloquea:**
- [I18N-09](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/I18N-09-quitar-silent-refresh.md) — Quitar silent-refresh.html *(épica [EP-I18N-3](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *oidc-identity-provider.service.ts*
