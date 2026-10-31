---
id: EP-CFG-2
titulo: "package.json y calidad de código"
area: configuracion-y-build
prioridad: alta
estado: pendiente
issues: [CFG-05, CFG-14, CFG-06, CFG-09, CFG-15]
---

# EP-CFG-2 · package.json y calidad de código

**Prioridad máxima:** 🟠 Alta · **Issues:** 5 · **Esfuerzo estimado:** ~3.5 días

## Objetivo

Scripts útiles, formato estable, lint y hooks.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CFG-05](CFG-05-package-json-scripts.md) | package.json: nombre, engines y scripts útiles | 🟠 | S | 🧩 |
| 2 | [CFG-14](CFG-14-prettier-lf.md) | Prettier con finales de línea LF | 🟡 | S | 🧩 |
| 3 | [CFG-06](CFG-06-eslint.md) | Añadir ESLint con reglas para el código generado | 🟠 | M | 🧩 |
| 4 | [CFG-09](CFG-09-tsconfig-alias.md) | tsconfig: alias coherentes y sin experimentalDecorators | 🟡 | S | 🧩 |
| 5 | [CFG-15](CFG-15-hooks-de-git.md) | Hooks de git con lefthook (commitlint y format) | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `package.json` | CFG-05, CFG-06, CFG-15 |
| `.prettierrc` | CFG-14 |
| `.editorconfig` | CFG-14 |
| `.gitattributes` | CFG-14 |
| `eslint.config.js` | CFG-06 |
| `angular.json` | CFG-06 |
| `tsconfig.json` | CFG-09 |
| `tsconfig.app.json` | CFG-09 |
| `lefthook.yml` | CFG-15 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `angular.json`, `package.json`
- [EP-DEP-1](../../04-dependencias/EP-DEP-1-editores-vendorizados/README.md) — Editores vendorizados: `angular.json`
- [EP-DEP-2](../../04-dependencias/EP-DEP-2-opentelemetry/README.md) — OpenTelemetry: `package.json`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `package.json`
- [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md) — Encapsular Angular Material: `eslint.config.js`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `angular.json`
- [EP-CFG-3](../EP-CFG-3-build-y-tests/README.md) — angular.json, build y tests: `angular.json`, `package.json`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `package.json`

## Desbloquea

- [DEP-08](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-08-eslint-material-solo-en-toolkit.md) — Regla de lint: Material solo desde el toolkit y el shell *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*
- [CFG-02](../EP-CFG-4-docker-y-despliegue/CFG-02-makefile-coherente.md) — Makefile coherente con el proyecto *(épica [EP-CFG-4](../EP-CFG-4-docker-y-despliegue/README.md))*
- [FEAT-18](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-18-formatear-al-generar.md) — Formatear el código al terminar de generar *(épica [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md))*

## Checklist de la épica

- [ ] CFG-05 — package.json: nombre, engines y scripts útiles
- [ ] CFG-14 — Prettier con finales de línea LF
- [ ] CFG-06 — Añadir ESLint con reglas para el código generado
- [ ] CFG-09 — tsconfig: alias coherentes y sin experimentalDecorators
- [ ] CFG-15 — Hooks de git con lefthook (commitlint y format)
