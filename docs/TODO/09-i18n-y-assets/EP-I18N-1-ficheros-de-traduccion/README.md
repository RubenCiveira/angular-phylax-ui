---
id: EP-I18N-1
titulo: "Ficheros de traducción"
area: i18n-y-assets
prioridad: critica
estado: pendiente
issues: [I18N-01, I18N-05, I18N-03, I18N-06, I18N-04]
---

# EP-I18N-1 · Ficheros de traducción

**Prioridad máxima:** 🔴 Crítica · **Issues:** 5 · **Esfuerzo estimado:** ~5.5 días

## Objetivo

Todos los scopes en todos los idiomas, i18n global completo, calidad revisada y validación en CI.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [I18N-01](I18N-01-recolocar-traducciones-en.md) | Mover los en.json a sus carpetas actuales y borrar las huérfanas | 🔴 | S | 📄 |
| 2 | [I18N-05](I18N-05-i18n-global.md) | Traducciones globales del shell, toolkit y errores | 🟠 | M | 🧩 |
| 3 | [I18N-03](I18N-03-validacion-i18n-en-ci.md) | Validar en CI scopes, carpetas y claves entre idiomas | 🟠 | S | 🧩 |
| 4 | [I18N-06](I18N-06-calidad-de-traducciones.md) | Revisar la calidad de las traducciones generadas | 🟡 | M | 🧩📄 |
| 5 | [I18N-04](I18N-04-generador-mueve-traducciones.md) | El generador mueve las traducciones al renombrar y crea todos los idiomas | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `public/i18n/access/**` | I18N-01 |
| `public/i18n/identity/**` | I18N-01 |
| `public/i18n/document/**` | I18N-01 |
| `public/i18n/template/**` | I18N-01 |
| `public/i18n/templating/**` | I18N-01 |
| `public/i18n/es.json` | I18N-05 |
| `public/i18n/en.json` | I18N-05 |
| `scripts/check-i18n.mjs` | I18N-03 |
| `package.json` | I18N-03 |
| `public/i18n/**` | I18N-06 |
| `(generador)` | I18N-04 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `public/i18n/en.json`, `public/i18n/es.json`
- [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `package.json`
- [EP-DEP-2](../../04-dependencias/EP-DEP-2-opentelemetry/README.md) — OpenTelemetry: `package.json`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `package.json`
- [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `package.json`
- [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md) — angular.json, build y tests: `package.json`
- [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md) — Contrato del generador: `(generador)`

## Desbloquea

- [UI-04](../../05-toolkit-ui/EP-UI-2-base-editable/UI-04-mensajes-de-error-con-parametros.md) — Mensajes de validación con parámetros y fallback común *(épica [EP-UI-2](../../05-toolkit-ui/EP-UI-2-base-editable/README.md))*
- [UI-13](../../05-toolkit-ui/EP-UI-4-list-view/UI-13-list-view-estado-vacio-y-error.md) — list-view: estados vacío y de error integrados *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*
- [UI-19](../../05-toolkit-ui/EP-UI-6-paginas-de-error/UI-19-error-page-traducida.md) — Página de error traducida y útil *(épica [EP-UI-6](../../05-toolkit-ui/EP-UI-6-paginas-de-error/README.md))*
- [I18N-02](../EP-I18N-2-configuracion-publica/I18N-02-idiomas-disponibles-reales.md) — available-langs solo con idiomas que existen *(épica [EP-I18N-2](../EP-I18N-2-configuracion-publica/README.md))*

## Checklist de la épica

- [ ] I18N-01 — Mover los en.json a sus carpetas actuales y borrar las huérfanas
- [ ] I18N-05 — Traducciones globales del shell, toolkit y errores
- [ ] I18N-03 — Validar en CI scopes, carpetas y claves entre idiomas
- [ ] I18N-06 — Revisar la calidad de las traducciones generadas
- [ ] I18N-04 — El generador mueve las traducciones al renombrar y crea todos los idiomas
