---
id: SHELL-09
titulo: "Ordenar app.config.ts: una sola configuración de i18n"
area: shell-y-layout
epica: EP-SHELL-2
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CTX-01, CTX-03, CTX-10, CTX-19]
origen: 04-shell-y-layout.md
---

# SHELL-09 · Ordenar app.config.ts: una sola configuración de i18n

**Épica:** [EP-SHELL-2 · Arranque, rutas raíz y valores por defecto](README.md) — paso 3 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`provideTransloco({ config: { availableLangs: ['en','es'], prodMode: false } })` se sustituye después con `provideI18nConfiguration()`: hay dos configuraciones y gana la segunda.

## Tareas

- [ ] Crear `provideAppTransloco()` con una única fuente (`STATIC_CONF` + `isDevMode()`).
- [ ] Revisar el resultado final de `app.config.ts` tras CTX-01, CTX-03 y CTX-10.

## Criterios de aceptación

- [ ] Solo hay una configuración de Transloco.

## Ficheros afectados

- `src/app/app.config.ts`
- `src/app/shared/context/config/i18n-loader.service.ts`

## Relacionado

**Depende de:**
- [CTX-01](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-01-interceptor-step-up-funcional.md) — Hacer que el interceptor de step-up se ejecute *(épica [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md))*
- [CTX-03](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/CTX-03-registrar-global-error-handler.md) — Registrar GlobalErrorHandler *(épica [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md))*
- [CTX-10](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-10-provide-oidc-identity.md) — Sustituir OidcLoginModule por provideOidcIdentity() *(épica [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md))*
- [CTX-19](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/CTX-19-i18n-loader-tolerante.md) — i18n loader: tolerar ficheros ausentes y prodMode real *(épica [EP-CTX-7](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *src/app/app.config.ts*
