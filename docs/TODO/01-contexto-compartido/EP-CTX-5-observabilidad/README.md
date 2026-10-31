---
id: EP-CTX-5
titulo: "Logger y telemetría"
area: contexto-compartido
prioridad: alta
estado: pendiente
issues: [CTX-21, CTX-22]
---

# EP-CTX-5 · Logger y telemetría

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~2 días

## Objetivo

Logs con niveles y redacción, y spans con atributos útiles. Coordinar con DEP-03 (mismo fichero).

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-21](CTX-21-logger-con-niveles-y-redaccion.md) | Logger propio con niveles y redacción; no interceptar console por defecto | 🟠 | M | 🧩 |
| 2 | [CTX-22](CTX-22-telemetria-atributos-de-recurso.md) | Telemetría: atributos útiles y nombres correctos | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/observability/instrumentation.service.ts` | CTX-21, CTX-22 |
| `src/app/shared/context/observability/logger.service.ts` | CTX-21 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [SHELL-23](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/SHELL-23-environment-con-version.md) — Renombrar enviroment y añadir versión de build *(épica [EP-SHELL-6](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-DEP-2](../../04-dependencias/EP-DEP-2-opentelemetry/README.md) — OpenTelemetry: `src/app/shared/context/observability/instrumentation.service.ts`

## Checklist de la épica

- [ ] CTX-21 — Logger propio con niveles y redacción; no interceptar console por defecto
- [ ] CTX-22 — Telemetría: atributos útiles y nombres correctos
