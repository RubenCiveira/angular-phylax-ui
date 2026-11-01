---
id: EP-DEP-2
titulo: "OpenTelemetry"
area: dependencias
prioridad: alta
estado: en-curso
issues: [DEP-03, DEP-04]
---

# EP-DEP-2 · OpenTelemetry

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~2 días

## Objetivo

Telemetría diferida y con versiones alineadas. Coordinar con EP-CTX-5 (mismo fichero).

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DEP-03](DEP-03-opentelemetry-diferido.md) | Cargar OpenTelemetry bajo demanda | 🟠 | M | 🧩 |
| 2 | [DEP-04](DEP-04-alinear-versiones-otel.md) | Alinear versiones de los paquetes de OpenTelemetry | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/observability/instrumentation.service.ts` | DEP-03 |
| `src/app/shared/context/observability/otel-bootstrap.ts` | DEP-03 |
| `package.json` | DEP-03, DEP-04 |
| `pnpm-lock.yaml` | DEP-04 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-5](../../01-contexto-compartido/EP-CTX-5-observabilidad/README.md) — Logger y telemetría: `src/app/shared/context/observability/instrumentation.service.ts`
- [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `package.json`
- [EP-DEP-3](../EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `package.json`
- [EP-DEP-6](../EP-DEP-6-zoneless/README.md) — Zoneless: `src/app/shared/context/observability/otel-bootstrap.ts`
- [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `package.json`
- [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md) — angular.json, build y tests: `package.json`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `package.json`

## Checklist de la épica

- [x] DEP-03 — Cargar OpenTelemetry bajo demanda
- [ ] DEP-04 — Alinear versiones de los paquetes de OpenTelemetry
