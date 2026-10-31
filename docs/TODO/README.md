# TODO — épicas e issues de mejora de phylax-ui

Issues derivados de [docs/recomendaciones](../recomendaciones/README.md), agrupados en **épicas**: conjuntos de issues que tocan los mismos ficheros y conviene hacer juntos, en una misma rama o PR.

## Estructura

```
docs/TODO/<nn>-<área>/<EP-ID>-<épica>/README.md        ← objetivo, orden, ficheros compartidos, coincidencias
docs/TODO/<nn>-<área>/<EP-ID>-<épica>/<ID>-<issue>.md    ← issue individual
```

## Convenciones

- **Frontmatter YAML** en épicas e issues (`id`, `epica`, `paso`, `prioridad`, `esfuerzo`, `ambito`, `estado`, `depende_de`).
- **Estado:** cambiar `estado: pendiente` por `en-curso` o `hecho`.
- **Ámbito:** 🧩 plantilla del generador y regenerar; 📄 cambio local.
- **Esfuerzo:** S < 0,5 día · M 0,5–2 días · L > 2 días (estimación orientativa; el de la épica es la suma).
- Cada épica lista las **coincidencias de ficheros** con otras épicas para evitar conflictos de merge.

## Resumen

| Prioridad | Issues |
|---|---|
| 🔴 Crítica | 18 |
| 🟠 Alta | 55 |
| 🟡 Media | 63 |
| ⚪ Baja | 28 |
| **Total** | **164** issues en **53** épicas |

## Épicas con issues críticos

- [EP-CTX-2](01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md) — Proveedor OIDC (CTX-06)
- [EP-CTX-4](01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores (CTX-03, CTX-04)
- [EP-CTX-7](01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md) — Cargador de traducciones (CTX-19)
- [EP-DATA-1](02-capa-de-datos/EP-DATA-1-cliente-http/README.md) — Cliente HTTP (ClientService) (DATA-02, DATA-01)
- [EP-DATA-2](02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md) — ApiService y ApiProvider (DATA-05)
- [EP-DATA-3](02-capa-de-datos/EP-DATA-3-repositorio/README.md) — RepositoryService y metadatos (DATA-10)
- [EP-STY-4](03-estilos-y-theming/EP-STY-4-estilos-list-view/README.md) — Estilos de list-view (STY-12)
- [EP-UI-4](05-toolkit-ui/EP-UI-4-list-view/README.md) — list-view (UI-09)
- [EP-UI-6](05-toolkit-ui/EP-UI-6-paginas-de-error/README.md) — Páginas y modal de error (UI-19)
- [EP-CFG-1](06-configuracion-y-build/EP-CFG-1-secretos-y-artefactos/README.md) — Secretos y artefactos del repositorio (CFG-01)
- [EP-SHELL-1](07-shell-y-layout/EP-SHELL-1-menu-y-registro/README.md) — Registro de features y menú (SHELL-01)
- [EP-FEAT-1](08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md) — Listas de entidad (FEAT-02)
- [EP-FEAT-2](08-features-generadas/EP-FEAT-2-formularios-y-modelos/README.md) — Formularios y modelos (FEAT-01)
- [EP-FEAT-5](08-features-generadas/EP-FEAT-5-i18n-de-features/README.md) — i18n de las features (FEAT-12)
- [EP-I18N-1](09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción (I18N-01)

## 1. Contexto compartido

Origen: [05 · Contexto compartido](../recomendaciones/05-contexto-compartido.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-CTX-1 · Step-up e interceptores HTTP](01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) | 🔴 | 3 | ~2.5 d | [CTX-01](01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-01-interceptor-step-up-funcional.md) → [CTX-10](01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-10-provide-oidc-identity.md) → [CTX-02](01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/CTX-02-step-up-sin-body-y-con-feedback.md) |
| [EP-CTX-2 · Proveedor OIDC](01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md) | 🔴 | 4 | ~3 d | [CTX-06](01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-06-oidc-sin-debug-ni-logs.md) → [CTX-08](01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-08-oidc-configuracion-coherente.md) → [CTX-09](01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-09-oidc-refresco-unico.md) → [CTX-07](01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-07-oidc-sin-alert-confirm.md) |
| [EP-CTX-3 · Identidad y autorización](01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md) | 🟠 | 5 | ~3.5 d | [CTX-11](01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-11-identity-service-robusto.md) → [CTX-12](01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-12-guards-return-url-y-permisos.md) → [CTX-13](01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-13-pagina-unauthorized-con-salida.md) → [CTX-14](01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-14-authorization-access-limpieza.md) → [CTX-25](01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-25-user-info-sin-token.md) |
| [EP-CTX-4 · Gestión de errores](01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) | 🔴 | 3 | ~2.5 d | [CTX-03](01-contexto-compartido/EP-CTX-4-gestion-de-errores/CTX-03-registrar-global-error-handler.md) → [CTX-04](01-contexto-compartido/EP-CTX-4-gestion-de-errores/CTX-04-error-service-fuga-suscripcion.md) → [CTX-05](01-contexto-compartido/EP-CTX-4-gestion-de-errores/CTX-05-error-service-api-errores-gestionados.md) |
| [EP-CTX-5 · Logger y telemetría](01-contexto-compartido/EP-CTX-5-observabilidad/README.md) | 🟠 | 2 | ~2 d | [CTX-21](01-contexto-compartido/EP-CTX-5-observabilidad/CTX-21-logger-con-niveles-y-redaccion.md) → [CTX-22](01-contexto-compartido/EP-CTX-5-observabilidad/CTX-22-telemetria-atributos-de-recurso.md) |
| [EP-CTX-6 · Configuración en runtime](01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md) | 🟠 | 4 | ~4 d | [CTX-15](01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) → [CTX-16](01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-16-app-config-carga-robusta.md) → [CTX-18](01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-18-json-schema-configuracion.md) → [CTX-17](01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-17-app-config-adaptador-mfe.md) |
| [EP-CTX-7 · Cargador de traducciones](01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md) | 🔴 | 2 | ~1 d | [CTX-19](01-contexto-compartido/EP-CTX-7-cargador-i18n/CTX-19-i18n-loader-tolerante.md) → [CTX-20](01-contexto-compartido/EP-CTX-7-cargador-i18n/CTX-20-transloco-missing-handler.md) |
| [EP-CTX-8 · Estado global](01-contexto-compartido/EP-CTX-8-estado-global/README.md) | 🟡 | 2 | ~4.5 d | [CTX-23](01-contexto-compartido/EP-CTX-8-estado-global/CTX-23-app-state-con-signals.md) → [CTX-24](01-contexto-compartido/EP-CTX-8-estado-global/CTX-24-sincronizar-estado-entre-pestanas.md) |

## 2. Capa de datos e interacción

Origen: [06 · Capa de datos](../recomendaciones/06-capa-de-datos.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-DATA-1 · Cliente HTTP (ClientService)](02-capa-de-datos/EP-DATA-1-cliente-http/README.md) | 🔴 | 3 | ~1.5 d | [DATA-02](02-capa-de-datos/EP-DATA-1-cliente-http/DATA-02-regex-fechas-offset.md) → [DATA-01](02-capa-de-datos/EP-DATA-1-cliente-http/DATA-01-token-con-timeout.md) → [DATA-04](02-capa-de-datos/EP-DATA-1-cliente-http/DATA-04-client-service-limpieza.md) |
| [EP-DATA-2 · ApiService y ApiProvider](02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md) | 🔴 | 5 | ~3.5 d | [DATA-05](02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-05-api-query-vs-command.md) → [DATA-06](02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-06-host-logico-exacto.md) → [DATA-07](02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-07-contexto-fijo-opcional.md) → [DATA-08](02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-08-poll-until-con-backoff.md) → [DATA-09](02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-09-api-provider-encoding-y-tipos.md) |
| [EP-DATA-3 · RepositoryService y metadatos](02-capa-de-datos/EP-DATA-3-repositorio/README.md) | 🔴 | 7 | ~9 d | [DATA-10](02-capa-de-datos/EP-DATA-3-repositorio/DATA-10-proyecciones-conservan-fechas.md) → [DATA-14](02-capa-de-datos/EP-DATA-3-repositorio/DATA-14-repository-restos.md) → [DATA-11](02-capa-de-datos/EP-DATA-3-repositorio/DATA-11-ttl-cache-configurable.md) → [DATA-12](02-capa-de-datos/EP-DATA-3-repositorio/DATA-12-store-inyectable-y-clear-logout.md) → [DATA-15](02-capa-de-datos/EP-DATA-3-repositorio/DATA-15-entity-metadata-activo.md) → [DATA-03](02-capa-de-datos/EP-DATA-3-repositorio/DATA-03-fechas-por-metadatos.md) → [DATA-13](02-capa-de-datos/EP-DATA-3-repositorio/DATA-13-tick-shift-sobre-resource.md) |
| [EP-DATA-4 · Selección y selectores](02-capa-de-datos/EP-DATA-4-seleccion-y-selectores/README.md) | 🟠 | 2 | ~1 d | [DATA-16](02-capa-de-datos/EP-DATA-4-seleccion-y-selectores/DATA-16-selector-provider-error.md) → [DATA-17](02-capa-de-datos/EP-DATA-4-seleccion-y-selectores/DATA-17-selection-model-inmutable.md) |
| [EP-DATA-5 · Rutas locales](02-capa-de-datos/EP-DATA-5-rutas-locales/README.md) | 🟡 | 2 | ~2 d | [DATA-18](02-capa-de-datos/EP-DATA-5-rutas-locales/DATA-18-local-route-state-sin-navegaciones-fantasma.md) → [DATA-19](02-capa-de-datos/EP-DATA-5-rutas-locales/DATA-19-local-route-tipado.md) |

## 3. Estilos y theming

Origen: [02 · Estilos y theming](../recomendaciones/02-estilos-y-theming.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-STY-1 · Fundamentos: src/styles, tokens y tema](03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) | 🟠 | 6 | ~4 d | [STY-01](03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-01-estructura-src-styles.md) → [STY-03](03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) → [STY-02](03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-02-tema-material-parametrizable.md) → [STY-05](03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-05-base-accesible.md) → [STY-04](03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-04-modo-claro-oscuro-forzable.md) → [STY-20](03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-20-stylelint.md) |
| [EP-STY-2 · index.html, fuentes e iconos](03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) | 🟠 | 3 | ~2.5 d | [STY-08](03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/STY-08-iconos-autoalojados.md) → [STY-09](03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/STY-09-tipografia-autoalojada.md) → [STY-07](03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/STY-07-index-html.md) |
| [EP-STY-3 · Marca configurable y estilos del shell](03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) | 🟠 | 4 | ~3 d | [STY-06](03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-06-theming-en-runtime.md) → [STY-10](03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-10-layout-raiz-con-tokens.md) → [STY-17](03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-17-marca-del-menu-configurable.md) → [STY-18](03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-18-toolbar-con-overrides.md) |
| [EP-STY-4 · Estilos de list-view](03-estilos-y-theming/EP-STY-4-estilos-list-view/README.md) | 🔴 | 3 | ~1.5 d | [STY-12](03-estilos-y-theming/EP-STY-4-estilos-list-view/STY-12-lista-movil-modo-oscuro.md) → [STY-13](03-estilos-y-theming/EP-STY-4-estilos-list-view/STY-13-tabla-variables-de-componente.md) → [STY-14](03-estilos-y-theming/EP-STY-4-estilos-list-view/STY-14-tarjetas-responsive.md) |
| [EP-STY-5 · Formularios y componentes del toolkit](03-estilos-y-theming/EP-STY-5-estilos-formularios-y-toolkit/README.md) | 🟠 | 3 | ~2.5 d | [STY-11](03-estilos-y-theming/EP-STY-5-estilos-formularios-y-toolkit/STY-11-rejilla-global-unica.md) → [STY-15](03-estilos-y-theming/EP-STY-5-estilos-formularios-y-toolkit/STY-15-editables-sin-mdc-ni-hex.md) → [STY-16](03-estilos-y-theming/EP-STY-5-estilos-formularios-y-toolkit/STY-16-error-modal-tokens.md) |
| [EP-STY-6 · Estilos de las features generadas](03-estilos-y-theming/EP-STY-6-estilos-de-features/README.md) | 🟠 | 1 | ~1.5 d | [STY-19](03-estilos-y-theming/EP-STY-6-estilos-de-features/STY-19-estilos-comunes-de-entidad.md) |

## 4. Reducción de dependencias

Origen: [03 · Dependencias](../recomendaciones/03-dependencias.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-DEP-1 · Editores vendorizados](04-dependencias/EP-DEP-1-editores-vendorizados/README.md) | 🟠 | 2 | ~2 d | [DEP-01](04-dependencias/EP-DEP-1-editores-vendorizados/DEP-01-sacar-monaco.md) → [DEP-02](04-dependencias/EP-DEP-1-editores-vendorizados/DEP-02-sacar-editorjs.md) |
| [EP-DEP-2 · OpenTelemetry](04-dependencias/EP-DEP-2-opentelemetry/README.md) | 🟠 | 2 | ~2 d | [DEP-03](04-dependencias/EP-DEP-2-opentelemetry/DEP-03-opentelemetry-diferido.md) → [DEP-04](04-dependencias/EP-DEP-2-opentelemetry/DEP-04-alinear-versiones-otel.md) |
| [EP-DEP-3 · Dependencias sobrantes](04-dependencias/EP-DEP-3-limpieza-package-json/README.md) | 🟡 | 3 | ~1.5 d | [DEP-05](04-dependencias/EP-DEP-3-limpieza-package-json/DEP-05-uuid-por-crypto.md) → [DEP-06](04-dependencias/EP-DEP-3-limpieza-package-json/DEP-06-animaciones-async.md) → [DEP-07](04-dependencias/EP-DEP-3-limpieza-package-json/DEP-07-quitar-platform-browser-dynamic.md) |
| [EP-DEP-4 · Encapsular Angular Material](04-dependencias/EP-DEP-4-encapsular-material/README.md) | 🟠 | 2 | ~2 d | [DEP-09](04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) → [DEP-08](04-dependencias/EP-DEP-4-encapsular-material/DEP-08-eslint-material-solo-en-toolkit.md) |
| [EP-DEP-5 · Generador modular](04-dependencias/EP-DEP-5-generador-modular/README.md) | 🟡 | 1 | ~1.5 d | [DEP-11](04-dependencias/EP-DEP-5-generador-modular/DEP-11-modulos-opcionales-del-generador.md) |
| [EP-DEP-6 · Zoneless](04-dependencias/EP-DEP-6-zoneless/README.md) | 🟡 | 1 | ~4 d | [DEP-10](04-dependencias/EP-DEP-6-zoneless/DEP-10-zoneless.md) |

## 5. Toolkit de UI

Origen: [07 · Toolkit de UI](../recomendaciones/07-toolkit-ui.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-UI-1 · Poda del toolkit](05-toolkit-ui/EP-UI-1-poda-del-toolkit/README.md) | 🟠 | 1 | ~1.5 d | [UI-01](05-toolkit-ui/EP-UI-1-poda-del-toolkit/UI-01-componentes-sin-uso-opcionales.md) |
| [EP-UI-2 · BaseEditable y envoltorio de campo](05-toolkit-ui/EP-UI-2-base-editable/README.md) | 🟠 | 5 | ~4.5 d | [UI-02](05-toolkit-ui/EP-UI-2-base-editable/UI-02-base-editable-sin-settimeout.md) → [UI-03](05-toolkit-ui/EP-UI-2-base-editable/UI-03-base-editable-required.md) → [UI-05](05-toolkit-ui/EP-UI-2-base-editable/UI-05-hint-appearance-y-marca-oculta.md) → [UI-04](05-toolkit-ui/EP-UI-2-base-editable/UI-04-mensajes-de-error-con-parametros.md) → [UI-06](05-toolkit-ui/EP-UI-2-base-editable/UI-06-envoltorio-editable-field.md) |
| [EP-UI-3 · Editables de selección](05-toolkit-ui/EP-UI-3-editables-de-seleccion/README.md) | 🟠 | 2 | ~1 d | [UI-07](05-toolkit-ui/EP-UI-3-editables-de-seleccion/UI-07-editable-choose-valor-y-etiqueta.md) → [UI-08](05-toolkit-ui/EP-UI-3-editables-de-seleccion/UI-08-selectone-accesible.md) |
| [EP-UI-4 · list-view](05-toolkit-ui/EP-UI-4-list-view/README.md) | 🔴 | 6 | ~6 d | [UI-09](05-toolkit-ui/EP-UI-4-list-view/UI-09-list-view-aria-y-teclado.md) → [UI-12](05-toolkit-ui/EP-UI-4-list-view/UI-12-list-view-limpieza.md) → [UI-10](05-toolkit-ui/EP-UI-4-list-view/UI-10-list-view-selector-de-columnas.md) → [UI-11](05-toolkit-ui/EP-UI-4-list-view/UI-11-list-view-tooltip-y-ordenacion.md) → [UI-13](05-toolkit-ui/EP-UI-4-list-view/UI-13-list-view-estado-vacio-y-error.md) → [UI-14](05-toolkit-ui/EP-UI-4-list-view/UI-14-list-view-standalone.md) |
| [EP-UI-5 · Acciones](05-toolkit-ui/EP-UI-5-acciones/README.md) | 🟠 | 3 | ~6 d | [UI-15](05-toolkit-ui/EP-UI-5-acciones/UI-15-base-action-y-confirm-action.md) → [UI-16](05-toolkit-ui/EP-UI-5-acciones/UI-16-action-container-tooltips-y-textos.md) → [UI-17](05-toolkit-ui/EP-UI-5-acciones/UI-17-partir-action-container.md) |
| [EP-UI-6 · Páginas y modal de error](05-toolkit-ui/EP-UI-6-paginas-de-error/README.md) | 🔴 | 2 | ~1 d | [UI-19](05-toolkit-ui/EP-UI-6-paginas-de-error/UI-19-error-page-traducida.md) → [UI-20](05-toolkit-ui/EP-UI-6-paginas-de-error/UI-20-error-modal-acciones.md) |
| [EP-UI-7 · Ajustes aislados](05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md) | 🟡 | 3 | ~1.5 d | [UI-18](05-toolkit-ui/EP-UI-7-ajustes-aislados/UI-18-ui-defaults-apariencia.md) → [UI-21](05-toolkit-ui/EP-UI-7-ajustes-aislados/UI-21-long-task-view-accesible.md) → [UI-22](05-toolkit-ui/EP-UI-7-ajustes-aislados/UI-22-avatares-con-contraste.md) |

## 6. Configuración, build y tooling

Origen: [01 · Configuración y build](../recomendaciones/01-configuracion-y-build.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-CFG-1 · Secretos y artefactos del repositorio](06-configuracion-y-build/EP-CFG-1-secretos-y-artefactos/README.md) | 🔴 | 3 | ~1.5 d | [CFG-01](06-configuracion-y-build/EP-CFG-1-secretos-y-artefactos/CFG-01-revocar-token-sonar.md) → [CFG-04](06-configuracion-y-build/EP-CFG-1-secretos-y-artefactos/CFG-04-gitignore-y-scannerwork.md) → [CFG-03](06-configuracion-y-build/EP-CFG-1-secretos-y-artefactos/CFG-03-sonar-exclusiones-y-cobertura.md) |
| [EP-CFG-2 · package.json y calidad de código](06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) | 🟠 | 5 | ~3.5 d | [CFG-05](06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-05-package-json-scripts.md) → [CFG-14](06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-14-prettier-lf.md) → [CFG-06](06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-06-eslint.md) → [CFG-09](06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-09-tsconfig-alias.md) → [CFG-15](06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-15-hooks-de-git.md) |
| [EP-CFG-3 · angular.json, build y tests](06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md) | 🟠 | 4 | ~4 d | [CFG-07](06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-07-renombrar-proyecto-angular.md) → [CFG-10](06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-10-decidir-microfrontend.md) → [CFG-08](06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-08-builder-y-assets.md) → [CFG-11](06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-11-tests-vitest.md) |
| [EP-CFG-4 · Docker y despliegue](06-configuracion-y-build/EP-CFG-4-docker-y-despliegue/README.md) | 🟠 | 3 | ~2.5 d | [CFG-12](06-configuracion-y-build/EP-CFG-4-docker-y-despliegue/CFG-12-dockerfile-unico.md) → [CFG-13](06-configuracion-y-build/EP-CFG-4-docker-y-despliegue/CFG-13-nginx-conf-y-cache.md) → [CFG-02](06-configuracion-y-build/EP-CFG-4-docker-y-despliegue/CFG-02-makefile-coherente.md) |
| [EP-CFG-5 · Documentación del proyecto](06-configuracion-y-build/EP-CFG-5-documentacion/README.md) | 🟡 | 1 | ~0.5 d | [CFG-16](06-configuracion-y-build/EP-CFG-5-documentacion/CFG-16-readme.md) |

## 7. Shell, rutas y layout

Origen: [04 · Shell y layout](../recomendaciones/04-shell-y-layout.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-SHELL-1 · Registro de features y menú](07-shell-y-layout/EP-SHELL-1-menu-y-registro/README.md) | 🔴 | 7 | ~5.5 d | [SHELL-06](07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-06-modelo-menu-item.md) → [SHELL-21](07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-21-layout-state-signal.md) → [SHELL-05](07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-05-route-access-service-unico.md) → [SHELL-01](07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-01-registro-de-features.md) → [SHELL-02](07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-02-overrides-de-menu.md) → [SHELL-03](07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-03-menu-accesible-con-router-link.md) → [SHELL-04](07-shell-y-layout/EP-SHELL-1-menu-y-registro/SHELL-04-visibilidad-por-permisos.md) |
| [EP-SHELL-2 · Arranque, rutas raíz y valores por defecto](07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) | 🟠 | 5 | ~3.5 d | [SHELL-07](07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-07-defaults-service.md) → [SHELL-08](07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-08-rutas-raiz-y-titulos.md) → [SHELL-09](07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) → [SHELL-20](07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-20-container-simplificado.md) → [SHELL-19](07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-19-home-redirect-y-dashboard.md) |
| [EP-SHELL-3 · AppComponent](07-shell-y-layout/EP-SHELL-3-app-component/README.md) | 🟠 | 4 | ~2 d | [SHELL-10](07-shell-y-layout/EP-SHELL-3-app-component/SHELL-10-app-component-signals.md) → [SHELL-11](07-shell-y-layout/EP-SHELL-3-app-component/SHELL-11-bootstrap-identidad-con-timeout.md) → [SHELL-12](07-shell-y-layout/EP-SHELL-3-app-component/SHELL-12-skip-link-y-aria.md) → [SHELL-16](07-shell-y-layout/EP-SHELL-3-app-component/SHELL-16-footer-configurable.md) |
| [EP-SHELL-4 · Toolbar](07-shell-y-layout/EP-SHELL-4-toolbar/README.md) | 🟠 | 3 | ~2.5 d | [SHELL-13](07-shell-y-layout/EP-SHELL-4-toolbar/SHELL-13-toolbar-limpia.md) → [SHELL-15](07-shell-y-layout/EP-SHELL-4-toolbar/SHELL-15-resolve-template-tenant.md) → [SHELL-14](07-shell-y-layout/EP-SHELL-4-toolbar/SHELL-14-menu-de-usuario-preferencias.md) |
| [EP-SHELL-5 · Páginas de carga y 404](07-shell-y-layout/EP-SHELL-5-paginas-del-layout/README.md) | 🟡 | 2 | ~1 d | [SHELL-17](07-shell-y-layout/EP-SHELL-5-paginas-del-layout/SHELL-17-pantalla-de-carga.md) → [SHELL-18](07-shell-y-layout/EP-SHELL-5-paginas-del-layout/SHELL-18-pagina-404.md) |
| [EP-SHELL-6 · Ficheros de bootstrap](07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md) | ⚪ | 2 | ~1 d | [SHELL-23](07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/SHELL-23-environment-con-version.md) → [SHELL-22](07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/SHELL-22-context-config-documentado.md) |

## 8. Features generadas

Origen: [08 · Features generadas](../recomendaciones/08-features-generadas.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-FEAT-1 · Listas de entidad](08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md) | 🔴 | 6 | ~10.5 d | [FEAT-02](08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-02-quitar-columnas-sensibles-ya.md) → [FEAT-03](08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-03-metadatos-de-campo.md) → [FEAT-04](08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-04-renderizadores-por-tipo.md) → [FEAT-05](08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-05-pantalla-de-lista-usable.md) → [FEAT-07](08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-07-lista-busqueda-reactiva-y-url.md) → [FEAT-06](08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-06-entity-list-layout.md) |
| [EP-FEAT-2 · Formularios y modelos](08-features-generadas/EP-FEAT-2-formularios-y-modelos/README.md) | 🔴 | 3 | ~3.5 d | [FEAT-01](08-features-generadas/EP-FEAT-2-formularios-y-modelos/FEAT-01-opciones-choose-coinciden-con-modelo.md) → [FEAT-08](08-features-generadas/EP-FEAT-2-formularios-y-modelos/FEAT-08-modelos-sin-duplicacion.md) → [FEAT-13](08-features-generadas/EP-FEAT-2-formularios-y-modelos/FEAT-13-formularios-por-secciones.md) |
| [EP-FEAT-3 · Repositorios generados](08-features-generadas/EP-FEAT-3-repositorios/README.md) | 🟡 | 1 | ~0.5 d | [FEAT-09](08-features-generadas/EP-FEAT-3-repositorios/FEAT-09-repositorios-generados.md) |
| [EP-FEAT-4 · Acciones generadas](08-features-generadas/EP-FEAT-4-acciones-generadas/README.md) | 🟠 | 2 | ~4.5 d | [FEAT-11](08-features-generadas/EP-FEAT-4-acciones-generadas/FEAT-11-erratas-de-plantillas.md) → [FEAT-10](08-features-generadas/EP-FEAT-4-acciones-generadas/FEAT-10-acciones-sobre-clases-base.md) |
| [EP-FEAT-5 · i18n de las features](08-features-generadas/EP-FEAT-5-i18n-de-features/README.md) | 🔴 | 2 | ~2 d | [FEAT-12](08-features-generadas/EP-FEAT-5-i18n-de-features/FEAT-12-convencion-unica-claves-i18n.md) → [FEAT-16](08-features-generadas/EP-FEAT-5-i18n-de-features/FEAT-16-i18n-security-domain.md) |
| [EP-FEAT-6 · Standalone, OnPush y páginas de ruta](08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md) | 🟡 | 2 | ~4.5 d | [FEAT-14](08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-14-standalone-onpush.md) → [FEAT-15](08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-15-paginas-de-ruta.md) |
| [EP-FEAT-7 · Contrato del generador](08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md) | 🟠 | 2 | ~4.5 d | [FEAT-17](08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-17-marcas-de-generacion-y-extension.md) → [FEAT-18](08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-18-formatear-al-generar.md) |

## 9. i18n y assets públicos

Origen: [09 · i18n y assets públicos](../recomendaciones/09-i18n-y-assets-publicos.md)

| Épica | Prioridad | Issues | Esfuerzo | Orden |
|---|---|---|---|---|
| [EP-I18N-1 · Ficheros de traducción](09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) | 🔴 | 5 | ~5.5 d | [I18N-01](09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-01-recolocar-traducciones-en.md) → [I18N-05](09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-05-i18n-global.md) → [I18N-03](09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-03-validacion-i18n-en-ci.md) → [I18N-06](09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-06-calidad-de-traducciones.md) → [I18N-04](09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-04-generador-mueve-traducciones.md) |
| [EP-I18N-2 · phylax-config.json](09-i18n-y-assets/EP-I18N-2-configuracion-publica/README.md) | 🟠 | 2 | ~1 d | [I18N-02](09-i18n-y-assets/EP-I18N-2-configuracion-publica/I18N-02-idiomas-disponibles-reales.md) → [I18N-07](09-i18n-y-assets/EP-I18N-2-configuracion-publica/I18N-07-phylax-config-limpio.md) |
| [EP-I18N-3 · Caché del servidor y assets](09-i18n-y-assets/EP-I18N-3-servidor-y-assets/README.md) | 🟠 | 3 | ~2.5 d | [I18N-08](09-i18n-y-assets/EP-I18N-3-servidor-y-assets/I18N-08-htaccess-cache.md) → [I18N-09](09-i18n-y-assets/EP-I18N-3-servidor-y-assets/I18N-09-quitar-silent-refresh.md) → [I18N-10](09-i18n-y-assets/EP-I18N-3-servidor-y-assets/I18N-10-imagenes-svg-y-favicon.md) |
