---
id: EP-SHELL-2
titulo: "Arranque, rutas raíz y valores por defecto"
area: shell-y-layout
prioridad: alta
estado: pendiente
issues: [SHELL-07, SHELL-08, SHELL-09, SHELL-20, SHELL-19]
---

# EP-SHELL-2 · Arranque, rutas raíz y valores por defecto

**Prioridad máxima:** 🟠 Alta · **Issues:** 5 · **Esfuerzo estimado:** ~3.5 días

## Objetivo

Idioma y tenant por defecto únicos, redirección sin parpadeo, títulos y app.config ordenado.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [SHELL-07](SHELL-07-defaults-service.md) | Idioma y tenant por defecto en un único sitio | 🟠 | S | 🧩 |
| 2 | [SHELL-08](SHELL-08-rutas-raiz-y-titulos.md) | Redirección inicial, títulos de pestaña y opciones del router | 🟡 | S | 🧩 |
| 3 | [SHELL-09](SHELL-09-app-config-providers.md) | Ordenar app.config.ts: una sola configuración de i18n | 🟡 | S | 🧩 |
| 4 | [SHELL-20](SHELL-20-container-simplificado.md) | ContainerComponent: inputs de ruta y valores por defecto | ⚪ | S | 🧩 |
| 5 | [SHELL-19](SHELL-19-home-redirect-y-dashboard.md) | Portada: redirección sin parpadeo y dashboard opcional | ⚪ | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/bootstrap/defaults.service.ts` | SHELL-07 |
| `src/app/bootstrap/layout/pages/home/home.component.ts` | SHELL-07, SHELL-19 |
| `src/app/bootstrap/layout/pages/container/container.component.ts` | SHELL-07, SHELL-20 |
| `src/app/bootstrap/app.routes.ts` | SHELL-08 |
| `src/app/app.config.ts` | SHELL-08, SHELL-09 |
| `src/app/shared/context/config/i18n-loader.service.ts` | SHELL-09 |
| `src/app/bootstrap/layout/pages/container/container.component.scss` | SHELL-20 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-01](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-01-interceptor-step-up-funcional.md) — Hacer que el interceptor de step-up se ejecute *(épica [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md))*
- [CTX-10](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-10-provide-oidc-identity.md) — Sustituir OidcLoginModule por provideOidcIdentity() *(épica [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md))*
- [CTX-03](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/CTX-03-registrar-global-error-handler.md) — Registrar GlobalErrorHandler *(épica [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md))*
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*
- [CTX-19](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/CTX-19-i18n-loader-tolerante.md) — i18n loader: tolerar ficheros ausentes y prodMode real *(épica [EP-CTX-7](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md))*
- [SHELL-01](../EP-SHELL-1-menu-y-registro/SHELL-01-registro-de-features.md) — Registro único de features: todas las entidades en rutas y menú *(épica [EP-SHELL-1](../EP-SHELL-1-menu-y-registro/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `src/app/app.config.ts`
- [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/app.config.ts`
- [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md) — Configuración en runtime: `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-CTX-7](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md) — Cargador de traducciones: `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-STY-2](../../03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/app/app.config.ts`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/app.config.ts`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `src/app/app.config.ts`
- [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md) — Ajustes aislados: `src/app/app.config.ts`
- [EP-SHELL-1](../EP-SHELL-1-menu-y-registro/README.md) — Registro de features y menú: `src/app/bootstrap/app.routes.ts`
- [EP-SHELL-6](../EP-SHELL-6-ficheros-de-bootstrap/README.md) — Ficheros de bootstrap: `src/app/shared/context/config/i18n-loader.service.ts`

## Desbloquea

- [CTX-14](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-14-authorization-access-limpieza.md) — AuthorizationAccess: menos escrituras y pantalla de redirección *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*
- [CTX-23](../../01-contexto-compartido/EP-CTX-8-estado-global/CTX-23-app-state-con-signals.md) — AppStateService con signals reales y claves tipadas *(épica [EP-CTX-8](../../01-contexto-compartido/EP-CTX-8-estado-global/README.md))*
- [FEAT-15](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-15-paginas-de-ruta.md) — Páginas de ruta con clase global y título *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*

## Checklist de la épica

- [ ] SHELL-07 — Idioma y tenant por defecto en un único sitio
- [ ] SHELL-08 — Redirección inicial, títulos de pestaña y opciones del router
- [ ] SHELL-09 — Ordenar app.config.ts: una sola configuración de i18n
- [ ] SHELL-20 — ContainerComponent: inputs de ruta y valores por defecto
- [ ] SHELL-19 — Portada: redirección sin parpadeo y dashboard opcional
