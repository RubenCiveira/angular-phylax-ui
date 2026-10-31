---
id: CTX-10
titulo: "Sustituir OidcLoginModule por provideOidcIdentity()"
area: contexto-compartido
epica: EP-CTX-1
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [CTX-01]
origen: 05-contexto-compartido.md
---

# CTX-10 · Sustituir OidcLoginModule por provideOidcIdentity()

**Épica:** [EP-CTX-1 · Step-up e interceptores HTTP](README.md) — paso 2 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La identidad OIDC se registra con `importProvidersFrom(OidcLoginModule)`, un `NgModule` que siempre se incluye aunque la configuración use otro tipo de identidad.

## Tareas

- [x] Crear `provideOidcIdentity(): EnvironmentProviders` con `makeEnvironmentProviders` (OAuth, `IDENTITY_PROVIDER`, `StepUpService.listen`).
- [x] Usarlo en `app.config.ts` y borrar `oidc-login.module.ts`.
- [x] En el generador, incluirlo solo si el proyecto declara identidad OIDC (junto con `withInterceptors([stepUpInterceptor])`). *Fuera del alcance de este repositorio; aquí se registra el provider OIDC de forma standalone.*

## Criterios de aceptación

- [x] No queda `OidcLoginModule`.
- [x] El login funciona igual que antes. *Se conserva la configuración OAuth existente y la inicialización del listener de step-up.*

## Ficheros afectados

- `src/app/shared/context/identity/oidc-identity/oidc-login.module.ts`
- `src/app/app.config.ts`

## Relacionado

**Depende de:**
- [CTX-01](CTX-01-interceptor-step-up-funcional.md) — Hacer que el interceptor de step-up se ejecute

**Desbloquea:**
- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/identity/oidc-identity/* (angular-oauth2-oidc)*
