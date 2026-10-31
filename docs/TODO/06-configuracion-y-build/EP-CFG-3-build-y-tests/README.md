---
id: EP-CFG-3
titulo: "angular.json, build y tests"
area: configuracion-y-build
prioridad: alta
estado: pendiente
issues: [CFG-07, CFG-10, CFG-08, CFG-11]
---

# EP-CFG-3 · angular.json, build y tests

**Prioridad máxima:** 🟠 Alta · **Issues:** 4 · **Esfuerzo estimado:** ~4 días

## Objetivo

Proyecto con nombre correcto, builder actual, sin configuración ignorada y tests modernos.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CFG-07](CFG-07-renombrar-proyecto-angular.md) | Renombrar el proyecto de angular.json (lughauth → phylax-ui) | 🟠 | S | 🧩 |
| 2 | [CFG-10](CFG-10-decidir-microfrontend.md) | Decidir sobre micro-frontends (borrar webpack o Native Federation) | 🟠 | M | 🧩 |
| 3 | [CFG-08](CFG-08-builder-y-assets.md) | Migrar a @angular/build y filtrar assets | 🟡 | S | 🧩 |
| 4 | [CFG-11](CFG-11-tests-vitest.md) | Migrar los tests de Karma a Vitest (o Jest) | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `angular.json` | CFG-07, CFG-08, CFG-11 |
| `webpack.config.js` | CFG-10 |
| `webpack.prod.config.js` | CFG-10 |
| `src/main.ts` | CFG-10 |
| `src/bootstrap.ts` | CFG-10 |
| `package.json` | CFG-08, CFG-11 |
| `karma.config.js` | CFG-11 |
| `tsconfig.spec.json` | CFG-11 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [DEP-01](../../04-dependencias/EP-DEP-1-editores-vendorizados/DEP-01-sacar-monaco.md) — Sacar Monaco de la base (21 MB) *(épica [EP-DEP-1](../../04-dependencias/EP-DEP-1-editores-vendorizados/README.md))*
- [DEP-02](../../04-dependencias/EP-DEP-1-editores-vendorizados/DEP-02-sacar-editorjs.md) — Sacar Editor.js de la base *(épica [EP-DEP-1](../../04-dependencias/EP-DEP-1-editores-vendorizados/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `angular.json`, `package.json`
- [EP-DEP-1](../../04-dependencias/EP-DEP-1-editores-vendorizados/README.md) — Editores vendorizados: `angular.json`
- [EP-DEP-2](../../04-dependencias/EP-DEP-2-opentelemetry/README.md) — OpenTelemetry: `package.json`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `package.json`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `angular.json`
- [EP-CFG-2](../EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `angular.json`, `package.json`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `package.json`

## Desbloquea

- [CTX-17](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-17-app-config-adaptador-mfe.md) — Aislar la lógica de micro-frontend de configuración e i18n *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*
- [CFG-03](../EP-CFG-1-secretos-y-artefactos/CFG-03-sonar-exclusiones-y-cobertura.md) — Sonar: excluir código de terceros y cobertura real *(épica [EP-CFG-1](../EP-CFG-1-secretos-y-artefactos/README.md))*
- [CFG-12](../EP-CFG-4-docker-y-despliegue/CFG-12-dockerfile-unico.md) — Un único Dockerfile que funcione *(épica [EP-CFG-4](../EP-CFG-4-docker-y-despliegue/README.md))*

## Checklist de la épica

- [ ] CFG-07 — Renombrar el proyecto de angular.json (lughauth → phylax-ui)
- [ ] CFG-10 — Decidir sobre micro-frontends (borrar webpack o Native Federation)
- [ ] CFG-08 — Migrar a @angular/build y filtrar assets
- [ ] CFG-11 — Migrar los tests de Karma a Vitest (o Jest)
