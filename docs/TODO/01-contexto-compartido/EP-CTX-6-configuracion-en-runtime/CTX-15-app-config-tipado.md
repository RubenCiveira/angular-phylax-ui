---
id: CTX-15
titulo: "Configuración en runtime tipada (APP_CONFIG)"
area: contexto-compartido
epica: EP-CTX-6
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-15 · Configuración en runtime tipada (APP_CONFIG)

**Épica:** [EP-CTX-6 · Configuración en runtime](README.md) — paso 1 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`AppConfigService` es un `Proxy` con índice `string → Observable<any>` (`appconfig['identity.main.profile']`). No hay tipos ni autocompletado y una errata devuelve `undefined` sin avisar.

## Tareas

- [x] Definir `interface AppConfig` (meta, api, i18n, identity, telemetry, theme, layout, data). *En `app-config.model.ts`, con `tenant` y `name` además. Antes de cargarse, cada sección existe vacía.*
- [x] Exponer `APP_CONFIG: InjectionToken<Signal<AppConfig>>` y un helper `configValue(path)` con tipos de ruta. *Más `RuntimeConfigService` con `value(path)` (signal) y `value$(path)` (observable que solo emite con la configuración cargada), para servicios y tests.*
- [x] Mantener el `Proxy` como fachada `@deprecated` sobre el nuevo servicio.
- [x] Migrar los usos del shell (`toolbar`, `menu`, `identity`, `instrumentation`, `api`). *También `client`, `error`, el proveedor OIDC y las rutas (`app.routes`, `menu.config`). Se elimina `APP_INSTRUMETATION`/`provideInstrumentation()`. Un microfront sin remoto registrado ya no hace `fetch('')`.*

## Criterios de aceptación

- [x] `config().identity['main'].issuer` compila con autocompletado. *Una ruta con errata (`'meta.titel'`) no compila.*
- [x] Los usos migrados no usan el `Proxy`.

## Ficheros afectados

- `src/app/shared/context/config/app-config.service.ts`

## Relacionado

**Desbloquea:**
- [CTX-18](CTX-18-json-schema-configuracion.md) — Publicar phylax-config.schema.json
- [DATA-07](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-07-contexto-fijo-opcional.md) — Inyección de contexto fijo en el body, opcional por API *(épica [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md))*
- [DATA-11](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-11-ttl-cache-configurable.md) — TTL de caché configurable *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*
- [STY-06](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-06-theming-en-runtime.md) — Theming en runtime desde la configuración (por despliegue y tenant) *(épica [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md))*
- [SHELL-07](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*
- [SHELL-16](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-16-footer-configurable.md) — Pie de página configurable u oculto *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*
- [FEAT-07](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-07-lista-busqueda-reactiva-y-url.md) — Lista: búsqueda reactiva, tamaño de página y filtros en la URL *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *context/config/app-config.service.ts*
