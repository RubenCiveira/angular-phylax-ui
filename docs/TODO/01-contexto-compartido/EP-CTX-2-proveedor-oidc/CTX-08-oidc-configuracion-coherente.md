---
id: CTX-08
titulo: "OIDC: configuración coherente (pkce, scope, roles, persistencia)"
area: contexto-compartido
epica: EP-CTX-2
paso: 2
prioridad: alta
esfuerzo: S
ambito: ambos
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-08 · OIDC: configuración coherente (pkce, scope, roles, persistencia)

**Épica:** [EP-CTX-2 · Proveedor OIDC](README.md) — paso 2 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

- `disablePKCE: false, // setup['pkce']`: la opción `pkce` de la configuración se ignora.
- `scope: setup['scope'] + ' offline_access'` fuerza el scope.
- Los roles salen de `info.info.groups || ['guest']` (claim fijado en el código).
- `persistent: true` guarda los tokens en `localStorage`.

## Tareas

- [ ] Eliminar `pkce` de la configuración (PKCE siempre activo) y avisar por log si aparece.
- [ ] Leer `scope` completo de la configuración y añadir `offline_access` al `phylax-config.json` de ejemplo.
- [ ] Claim de roles configurable: `roles-claim` (por defecto `groups`).
- [ ] Cambiar el valor por defecto de `persistent` a `false` y documentar el riesgo de `localStorage` frente a XSS.

## Criterios de aceptación

- [ ] Cambiar `roles-claim` en la configuración cambia los roles del usuario sin recompilar.
- [ ] Sin `persistent`, los tokens se guardan en `sessionStorage`.

## Ficheros afectados

- `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts`
- `public/config/phylax-config.json`

## Relacionado

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *oidc-identity-provider.service.ts*
