---
id: EP-STY-1
titulo: "Fundamentos: src/styles, tokens y tema"
area: estilos-y-theming
prioridad: alta
estado: hecho
issues: [STY-01, STY-03, STY-02, STY-05, STY-04, STY-20]
---

# EP-STY-1 · Fundamentos: src/styles, tokens y tema

**Prioridad máxima:** 🟠 Alta · **Issues:** 6 · **Esfuerzo estimado:** ~4 días

## Objetivo

Estructura de estilos, design tokens, tema parametrizable, base accesible y lint que lo proteja.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [STY-01](STY-01-estructura-src-styles.md) | Crear la estructura src/styles/ sin cambios visuales | 🟠 | S | 🧩 |
| 2 | [STY-03](STY-03-design-tokens-app.md) | Definir los design tokens --app-* | 🟠 | S | 🧩 |
| 3 | [STY-02](STY-02-tema-material-parametrizable.md) | Tema de Material parametrizable y overrides sin !important | 🟠 | M | 🧩 |
| 4 | [STY-05](STY-05-base-accesible.md) | Estilos base de accesibilidad (foco y movimiento reducido) | 🟡 | S | 🧩 |
| 5 | [STY-04](STY-04-modo-claro-oscuro-forzable.md) | Permitir forzar modo claro u oscuro | 🟡 | S | 🧩 |
| 6 | [STY-20](STY-20-stylelint.md) | Añadir stylelint para proteger los tokens | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/styles.scss` | STY-01 |
| `src/styles/**` | STY-01 |
| `angular.json` | STY-01 |
| `src/app/shared/toolkit/grid-utils.scss` | STY-01 |
| `src/styles/_tokens.scss` | STY-03 |
| `src/styles/README.md` | STY-03 |
| `src/styles/_config.scss` | STY-02 |
| `src/styles/_material-theme.scss` | STY-02, STY-04 |
| `src/styles/_base.scss` | STY-05 |
| `src/app/shared/context/theme/theme-mode.service.ts` | STY-04 |
| `.stylelintrc.json` | STY-20 |
| `package.json` | STY-20 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-STY-2](../EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/styles/_config.scss`
- [EP-DEP-1](../../04-dependencias/EP-DEP-1-editores-vendorizados/README.md) — Editores vendorizados: `angular.json`
- [EP-DEP-2](../../04-dependencias/EP-DEP-2-opentelemetry/README.md) — OpenTelemetry: `package.json`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `package.json`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `angular.json`
- [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `angular.json`, `package.json`
- [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md) — angular.json, build y tests: `angular.json`, `package.json`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `package.json`

## Desbloquea

- [STY-09](../EP-STY-2-index-fuentes-e-iconos/STY-09-tipografia-autoalojada.md) — Tipografía autoalojada o pila del sistema *(épica [EP-STY-2](../EP-STY-2-index-fuentes-e-iconos/README.md))*
- [STY-06](../EP-STY-3-marca-y-shell/STY-06-theming-en-runtime.md) — Theming en runtime desde la configuración (por despliegue y tenant) *(épica [EP-STY-3](../EP-STY-3-marca-y-shell/README.md))*
- [STY-10](../EP-STY-3-marca-y-shell/STY-10-layout-raiz-con-tokens.md) — Layout raíz con tokens (corrige el nav móvil en modo oscuro) *(épica [EP-STY-3](../EP-STY-3-marca-y-shell/README.md))*
- [STY-18](../EP-STY-3-marca-y-shell/STY-18-toolbar-con-overrides.md) — Toolbar personalizable desde el tema *(épica [EP-STY-3](../EP-STY-3-marca-y-shell/README.md))*
- [STY-12](../EP-STY-4-estilos-list-view/STY-12-lista-movil-modo-oscuro.md) — Lista móvil legible en modo oscuro *(épica [EP-STY-4](../EP-STY-4-estilos-list-view/README.md))*
- [STY-13](../EP-STY-4-estilos-list-view/STY-13-tabla-variables-de-componente.md) — Tabla de list-view con variables de componente *(épica [EP-STY-4](../EP-STY-4-estilos-list-view/README.md))*
- [STY-11](../EP-STY-5-estilos-formularios-y-toolkit/STY-11-rejilla-global-unica.md) — Generar la rejilla una sola vez y simplificar form-layout *(épica [EP-STY-5](../EP-STY-5-estilos-formularios-y-toolkit/README.md))*
- [STY-15](../EP-STY-5-estilos-formularios-y-toolkit/STY-15-editables-sin-mdc-ni-hex.md) — Editables: tokens M3 en lugar de --mdc-* y hex *(épica [EP-STY-5](../EP-STY-5-estilos-formularios-y-toolkit/README.md))*
- [STY-16](../EP-STY-5-estilos-formularios-y-toolkit/STY-16-error-modal-tokens.md) — Colores del modal de error con tokens y contraste AA *(épica [EP-STY-5](../EP-STY-5-estilos-formularios-y-toolkit/README.md))*
- [STY-19](../EP-STY-6-estilos-de-features/STY-19-estilos-comunes-de-entidad.md) — Clases globales de pantalla de entidad y fin de los estilos inline *(épica [EP-STY-6](../EP-STY-6-estilos-de-features/README.md))*
- [SHELL-12](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-12-skip-link-y-aria.md) — Skip link y botón de menú accesible *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*
- [SHELL-14](../../07-shell-y-layout/EP-SHELL-4-toolbar/SHELL-14-menu-de-usuario-preferencias.md) — Menú de usuario con idioma, tenant y tema *(épica [EP-SHELL-4](../../07-shell-y-layout/EP-SHELL-4-toolbar/README.md))*

## Checklist de la épica

- [x] STY-01 — Crear la estructura src/styles/ sin cambios visuales
- [x] STY-03 — Definir los design tokens --app-*
- [x] STY-02 — Tema de Material parametrizable y overrides sin !important
- [x] STY-05 — Estilos base de accesibilidad (foco y movimiento reducido)
- [x] STY-04 — Permitir forzar modo claro u oscuro
- [x] STY-20 — Añadir stylelint para proteger los tokens
