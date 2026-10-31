---
id: SHELL-11
titulo: "Arranque con timeout y reintento si la identidad no responde"
area: shell-y-layout
epica: EP-SHELL-3
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CTX-11]
origen: 04-shell-y-layout.md
---

# SHELL-11 · Arranque con timeout y reintento si la identidad no responde

**Épica:** [EP-SHELL-3 · AppComponent](README.md) — paso 2 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La app espera a `identity.bootstrap('main')` antes de mostrar el router. Si el discovery OIDC no responde, se queda para siempre en "Loading...".

## Tareas

- [ ] `timeout(10_000)` + `catchError` en el bootstrap.
- [ ] Pantalla de error traducida con "Reintentar".

## Criterios de aceptación

- [ ] Con el IdP caído, en 10 s se ve un error con botón de reintentar.

## Ficheros afectados

- `src/app/app.component.ts`
- `src/app/app.component.html`

## Relacionado

**Depende de:**
- [CTX-11](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-11-identity-service-robusto.md) — IdentityService: tipado y error explícito si falta el handler *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *src/app/app.component.ts*
