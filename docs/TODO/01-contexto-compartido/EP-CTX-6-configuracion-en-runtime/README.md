---
id: EP-CTX-6
titulo: "Configuración en runtime"
area: contexto-compartido
prioridad: alta
estado: pendiente
issues: [CTX-15, CTX-16, CTX-18, CTX-17]
---

# EP-CTX-6 · Configuración en runtime

**Prioridad máxima:** 🟠 Alta · **Issues:** 4 · **Esfuerzo estimado:** ~4 días

## Objetivo

Configuración tipada, validada y con errores visibles; lógica de MFE aislada.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-15](CTX-15-app-config-tipado.md) | Configuración en runtime tipada (APP_CONFIG) | 🟠 | M | 🧩 |
| 2 | [CTX-16](CTX-16-app-config-carga-robusta.md) | Carga de configuración con error visible | 🟠 | S | 🧩 |
| 3 | [CTX-18](CTX-18-json-schema-configuracion.md) | Publicar phylax-config.schema.json | 🟡 | S | 🧩 |
| 4 | [CTX-17](CTX-17-app-config-adaptador-mfe.md) | Aislar la lógica de micro-frontend de configuración e i18n | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/config/app-config.service.ts` | CTX-15, CTX-16, CTX-17 |
| `public/config/phylax-config.json` | CTX-18 |
| `public/config/phylax-config.schema.json` | CTX-18 |
| `src/app/shared/context/config/i18n-loader.service.ts` | CTX-17 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CFG-10](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-10-decidir-microfrontend.md) — Decidir sobre micro-frontends (borrar webpack o Native Federation) *(épica [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-2](../EP-CTX-2-proveedor-oidc/README.md) — Proveedor OIDC: `public/config/phylax-config.json`
- [EP-CTX-7](../EP-CTX-7-cargador-i18n/README.md) — Cargador de traducciones: `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md) — ApiService y ApiProvider: `public/config/phylax-config.json`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `public/config/phylax-config.json`, `src/app/shared/context/config/app-config.service.ts`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-SHELL-6](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md) — Ficheros de bootstrap: `src/app/shared/context/config/app-config.service.ts`, `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-I18N-2](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/README.md) — phylax-config.json: `public/config/phylax-config.json`

## Desbloquea

- [DATA-07](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-07-contexto-fijo-opcional.md) — Inyección de contexto fijo en el body, opcional por API *(épica [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md))*
- [DATA-11](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-11-ttl-cache-configurable.md) — TTL de caché configurable *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*
- [STY-06](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-06-theming-en-runtime.md) — Theming en runtime desde la configuración (por despliegue y tenant) *(épica [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md))*
- [SHELL-07](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*
- [SHELL-16](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-16-footer-configurable.md) — Pie de página configurable u oculto *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*
- [FEAT-07](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-07-lista-busqueda-reactiva-y-url.md) — Lista: búsqueda reactiva, tamaño de página y filtros en la URL *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*
- [I18N-07](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/I18N-07-phylax-config-limpio.md) — Limpiar phylax-config.json y publicar un ejemplo de producción *(épica [EP-I18N-2](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/README.md))*

## Checklist de la épica

- [ ] CTX-15 — Configuración en runtime tipada (APP_CONFIG)
- [ ] CTX-16 — Carga de configuración con error visible
- [ ] CTX-18 — Publicar phylax-config.schema.json
- [ ] CTX-17 — Aislar la lógica de micro-frontend de configuración e i18n
