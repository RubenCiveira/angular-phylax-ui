---
id: EP-STY-3
titulo: "Marca configurable y estilos del shell"
area: estilos-y-theming
prioridad: alta
estado: pendiente
issues: [STY-06, STY-10, STY-17, STY-18]
---

# EP-STY-3 · Marca configurable y estilos del shell

**Prioridad máxima:** 🟠 Alta · **Issues:** 4 · **Esfuerzo estimado:** ~3 días

## Objetivo

Rebranding en runtime y layout, menú y toolbar sobre tokens.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [STY-06](STY-06-theming-en-runtime.md) | Theming en runtime desde la configuración (por despliegue y tenant) | 🟠 | M | 🧩 |
| 2 | [STY-10](STY-10-layout-raiz-con-tokens.md) | Layout raíz con tokens (corrige el nav móvil en modo oscuro) | 🟠 | S | 🧩 |
| 3 | [STY-17](STY-17-marca-del-menu-configurable.md) | Logo y nombre del producto configurables en el menú | 🟠 | S | 🧩 |
| 4 | [STY-18](STY-18-toolbar-con-overrides.md) | Toolbar personalizable desde el tema | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `public/config/phylax-config.json` | STY-06 |
| `src/app/shared/context/config/app-config.service.ts` | STY-06 |
| `src/index.html` | STY-06 |
| `src/app/app.component.scss` | STY-10 |
| `src/app/app.component.ts` | STY-10 |
| `src/app/bootstrap/layout/menu/menu.component.html` | STY-17 |
| `src/app/bootstrap/layout/menu/menu.component.scss` | STY-17 |
| `src/app/bootstrap/layout/toolbar/toolbar.component.html` | STY-18 |
| `src/app/bootstrap/layout/toolbar/toolbar.component.scss` | STY-18 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*
- [STY-02](../EP-STY-1-fundamentos-de-estilos/STY-02-tema-material-parametrizable.md) — Tema de Material parametrizable y overrides sin !important *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md) — Proveedor OIDC: `public/config/phylax-config.json`
- [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md) — Configuración en runtime: `public/config/phylax-config.json`, `src/app/shared/context/config/app-config.service.ts`
- [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md) — ApiService y ApiProvider: `public/config/phylax-config.json`
- [EP-STY-2](../EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/index.html`
- [EP-SHELL-1](../../07-shell-y-layout/EP-SHELL-1-menu-y-registro/README.md) — Registro de features y menú: `src/app/bootstrap/layout/menu/menu.component.html`
- [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md) — AppComponent: `src/app/app.component.ts`, `src/app/bootstrap/layout/toolbar/toolbar.component.html`
- [EP-SHELL-4](../../07-shell-y-layout/EP-SHELL-4-toolbar/README.md) — Toolbar: `src/app/bootstrap/layout/toolbar/toolbar.component.html`
- [EP-SHELL-6](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md) — Ficheros de bootstrap: `src/app/shared/context/config/app-config.service.ts`
- [EP-I18N-2](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/README.md) — phylax-config.json: `public/config/phylax-config.json`
- [EP-I18N-3](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/README.md) — Caché del servidor y assets: `src/index.html`

## Desbloquea

- [SHELL-10](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-10-app-component-signals.md) — AppComponent: estado del nav con signals y persistido *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*
- [I18N-10](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/I18N-10-imagenes-svg-y-favicon.md) — Ilustraciones y logo en SVG adaptables al tema *(épica [EP-I18N-3](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/README.md))*

## Checklist de la épica

- [ ] STY-06 — Theming en runtime desde la configuración (por despliegue y tenant)
- [ ] STY-10 — Layout raíz con tokens (corrige el nav móvil en modo oscuro)
- [ ] STY-17 — Logo y nombre del producto configurables en el menú
- [ ] STY-18 — Toolbar personalizable desde el tema
