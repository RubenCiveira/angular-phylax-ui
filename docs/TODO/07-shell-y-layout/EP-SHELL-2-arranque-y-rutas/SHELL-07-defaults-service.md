---
id: SHELL-07
titulo: "Idioma y tenant por defecto en un único sitio"
area: shell-y-layout
epica: EP-SHELL-2
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [CTX-15]
origen: 04-shell-y-layout.md
---

# SHELL-07 · Idioma y tenant por defecto en un único sitio

**Épica:** [EP-SHELL-2 · Arranque, rutas raíz y valores por defecto](README.md) — paso 1 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Hay cuatro idiomas por defecto distintos: `'en-EN'` en `HomeComponent` y `AuthorizationAccessService`, `'es'` en `AppStateService` y `ContainerComponent`, y `available-langs` de la configuración no incluye `en`.

## Tareas

- [x] Crear `DefaultsService` con `language` y `tenant` leídos de `i18n.default-lang` y `tenant.default`. *En `src/app/shared/context/config/defaults.service.ts`, no en `bootstrap/`: lo usan `AppStateService` y `AuthorizationAccessService`, y `shared` no debe depender de `bootstrap`. Lo usa también `I18nLoaderService` para el idioma base de Transloco. `phylax-config.json` declara `default-lang: es`, `tenant.default: main` y añade `en` a `available-langs`.*
- [x] Usarlo en Home, Container, AuthorizationAccess y AppState. *`AppStateService` toma de él sus valores iniciales y los adopta si la configuración llega después, mientras el usuario no haya elegido. Home y AuthorizationAccess navegan al idioma y tenant del estado, que vienen de `DefaultsService` salvo que el usuario haya elegido otros.*

## Criterios de aceptación

- [x] `grep -rn "'en-EN'\|'es'" src/app` solo encuentra la configuración por defecto del servicio.

## Ficheros afectados

- `src/app/shared/context/config/defaults.service.ts`
- `src/app/bootstrap/layout/pages/home/home.component.ts`
- `src/app/bootstrap/layout/pages/container/container.component.ts`

## Relacionado

**Depende de:**
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Desbloquea:**
- [CTX-14](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-14-authorization-access-limpieza.md) — AuthorizationAccess: menos escrituras y pantalla de redirección *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*
- [CTX-23](../../01-contexto-compartido/EP-CTX-8-estado-global/CTX-23-app-state-con-signals.md) — AppStateService con signals reales y claves tipadas *(épica [EP-CTX-8](../../01-contexto-compartido/EP-CTX-8-estado-global/README.md))*
- [SHELL-08](SHELL-08-rutas-raiz-y-titulos.md) — Redirección inicial, títulos de pestaña y opciones del router
- [SHELL-20](SHELL-20-container-simplificado.md) — ContainerComponent: inputs de ruta y valores por defecto

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *src/app/bootstrap/app.routes.ts*
