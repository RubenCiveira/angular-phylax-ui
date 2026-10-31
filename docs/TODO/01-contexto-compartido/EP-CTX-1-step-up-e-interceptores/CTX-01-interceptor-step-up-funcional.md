---
id: CTX-01
titulo: "Hacer que el interceptor de step-up se ejecute"
area: contexto-compartido
epica: EP-CTX-1
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-01 · Hacer que el interceptor de step-up se ejecute

**Épica:** [EP-CTX-1 · Step-up e interceptores HTTP](README.md) — paso 1 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`StepUpInterceptor` se registra como clase con `HTTP_INTERCEPTORS` en `OidcLoginModule`, pero `app.config.ts` llama a `provideHttpClient()` **sin** `withInterceptorsFromDi()`. Angular ignora los interceptores de clase en ese caso, así que un `401` con `WWW-Authenticate: … insufficient_user_authentication` nunca dispara la autenticación reforzada y llega tal cual al componente.

## Tareas

- [ ] Convertir `StepUpInterceptor` en `stepUpInterceptor: HttpInterceptorFn` (usa `inject(StepUpService)`).
- [ ] Registrarlo en `app.config.ts` con `provideHttpClient(withInterceptors([stepUpInterceptor]))`.
- [ ] Quitar el registro `HTTP_INTERCEPTORS` de `oidc-login.module.ts`.
- [ ] Comprobar si el interceptor por defecto de `angular-oauth2-oidc` hace falta (hoy tampoco se ejecuta); si no, documentarlo.
- [ ] Test con `HttpTestingController`: respuesta 401 con la cabecera `WWW-Authenticate` → se llama a `StepUpService.start` con `acr_values` y `max_age`.

## Criterios de aceptación

- [ ] Un 401 con `insufficient_user_authentication` inicia el flujo OIDC con `acr_values`.
- [ ] Otros errores HTTP siguen llegando a quien hizo la petición.
- [ ] El test de integración pasa.

## Ficheros afectados

- `src/app/shared/context/identity/oidc-identity/step-up.interceptor.ts`
- `src/app/shared/context/identity/oidc-identity/oidc-login.module.ts`
- `src/app/app.config.ts`

## Relacionado

**Desbloquea:**
- [CTX-02](CTX-02-step-up-sin-body-y-con-feedback.md) — Step-up: no guardar el cuerpo de la petición y avisar al usuario
- [CTX-10](CTX-10-provide-oidc-identity.md) — Sustituir OidcLoginModule por provideOidcIdentity()
- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *step-up.interceptor.ts + step-up.service.ts*
