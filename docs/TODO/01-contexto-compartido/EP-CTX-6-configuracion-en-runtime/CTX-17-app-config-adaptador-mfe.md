---
id: CTX-17
titulo: "Aislar la lógica de micro-frontend de configuración e i18n"
area: contexto-compartido
epica: EP-CTX-6
paso: 4
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [CFG-10]
origen: 05-contexto-compartido.md
---

# CTX-17 · Aislar la lógica de micro-frontend de configuración e i18n

**Épica:** [EP-CTX-6 · Configuración en runtime](README.md) — paso 4 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`AppConfigService.registerRemote`/`mfeLoad` e `I18nLoaderService.url` leen `window._remove_mfa_config_url` (probablemente "remote"). Es lógica de module federation, que hoy no está operativa (ver CFG-10).

## Tareas

- [ ] Mover la lógica a `mfe-config.adapter.ts` (configuración e i18n).
- [ ] Si la decisión de CFG-10 es "sin MFE", eliminarla; si es "con MFE", mantenerla detrás del adaptador y corregir el nombre de la variable global.

## Criterios de aceptación

- [ ] `app-config.service.ts` e `i18n-loader.service.ts` no acceden a `window` directamente.

## Ficheros afectados

- `src/app/shared/context/config/app-config.service.ts`
- `src/app/shared/context/config/i18n-loader.service.ts`

## Relacionado

**Depende de:**
- [CFG-10](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-10-decidir-microfrontend.md) — Decidir sobre micro-frontends (borrar webpack o Native Federation) *(épica [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/config/app-config.service.ts*
