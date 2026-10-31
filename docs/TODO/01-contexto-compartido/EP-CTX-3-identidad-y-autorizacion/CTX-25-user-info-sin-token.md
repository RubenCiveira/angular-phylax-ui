---
id: CTX-25
titulo: "UserInfo como interfaz y sin token en el estado de UI"
area: contexto-compartido
epica: EP-CTX-3
paso: 5
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [DATA-01]
origen: 05-contexto-compartido.md
---

# CTX-25 · UserInfo como interfaz y sin token en el estado de UI

**Épica:** [EP-CTX-3 · Identidad y autorización](README.md) — paso 5 de 5

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`UserInfo` es una clase que nunca se instancia y lleva `token`: el access token está en el estado global, accesible desde cualquier componente.

## Tareas

- [ ] Convertir en `interface UserInfo` con `authenticated: boolean` obligatorio, `roles: string[]` y `permissions?: string[]`.
- [ ] Sacar `token`: `ClientService` pide el token al `IdentityHandler` (`token$()`).

## Criterios de aceptación

- [ ] `grep -rn "\.token" src/app` solo encuentra usos dentro de `identity/` y `client.service.ts`.

## Ficheros afectados

- `src/app/shared/context/identity/user-info.model.ts`
- `src/app/shared/data/api/client.service.ts`

## Relacionado

**Depende de:**
- [DATA-01](../../02-capa-de-datos/EP-DATA-1-cliente-http/DATA-01-token-con-timeout.md) — Peticiones sin sesión: error 401 en lugar de esperar para siempre *(épica [EP-DATA-1](../../02-capa-de-datos/EP-DATA-1-cliente-http/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/identity/user-info.model.ts*
