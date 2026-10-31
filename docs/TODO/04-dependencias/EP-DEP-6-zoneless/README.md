---
id: EP-DEP-6
titulo: "Zoneless"
area: dependencias
prioridad: media
estado: pendiente
issues: [DEP-10]
---

# EP-DEP-6 · Zoneless

**Prioridad máxima:** 🟡 Media · **Issues:** 1 · **Esfuerzo estimado:** ~4 días

## Objetivo

Retirar zone.js cuando el estado esté en signals y los componentes en OnPush.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DEP-10](DEP-10-zoneless.md) | Pasar a detección de cambios zoneless | 🟡 | L | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `angular.json` | DEP-10 |
| `src/app/app.config.ts` | DEP-10 |
| `src/app/shared/context/observability/otel-bootstrap.ts` | DEP-10 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-23](../../01-contexto-compartido/EP-CTX-8-estado-global/CTX-23-app-state-con-signals.md) — AppStateService con signals reales y claves tipadas *(épica [EP-CTX-8](../../01-contexto-compartido/EP-CTX-8-estado-global/README.md))*
- [DATA-13](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-13-tick-shift-sobre-resource.md) — Reimplementar Tick/Shift sobre resource()/rxResource() *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*
- [FEAT-14](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-14-standalone-onpush.md) — Generar componentes standalone con OnPush y rutas sin NgModule *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `src/app/app.config.ts`
- [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/app.config.ts`
- [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `angular.json`
- [EP-STY-2](../../03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/app/app.config.ts`
- [EP-DEP-1](../EP-DEP-1-editores-vendorizados/README.md) — Editores vendorizados: `angular.json`
- [EP-DEP-2](../EP-DEP-2-opentelemetry/README.md) — OpenTelemetry: `src/app/shared/context/observability/otel-bootstrap.ts`
- [EP-DEP-3](../EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/app.config.ts`
- [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md) — Ajustes aislados: `src/app/app.config.ts`
- [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `angular.json`
- [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md) — angular.json, build y tests: `angular.json`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/app.config.ts`

## Checklist de la épica

- [ ] DEP-10 — Pasar a detección de cambios zoneless
