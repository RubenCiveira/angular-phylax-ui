---
id: EP-CTX-7
titulo: "Cargador de traducciones"
area: contexto-compartido
prioridad: critica
estado: hecho
issues: [CTX-19, CTX-20]
---

# EP-CTX-7 · Cargador de traducciones

**Prioridad máxima:** 🔴 Crítica · **Issues:** 2 · **Esfuerzo estimado:** ~1 días

## Objetivo

Que falte un fichero o una clave no rompa ni ensucie la UI.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-19](CTX-19-i18n-loader-tolerante.md) | i18n loader: tolerar ficheros ausentes y prodMode real | 🔴 | S | 🧩 |
| 2 | [CTX-20](CTX-20-transloco-missing-handler.md) | Missing handler que humaniza claves sin traducción | 🟠 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/config/i18n-loader.service.ts` | CTX-19, CTX-20 |
| `src/app/shared/context/config/missing-handler.ts` | CTX-20 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-6](../EP-CTX-6-configuracion-en-runtime/README.md) — Configuración en runtime: `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-SHELL-6](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md) — Ficheros de bootstrap: `src/app/shared/context/config/i18n-loader.service.ts`

## Desbloquea

- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*
- [FEAT-12](../../08-features-generadas/EP-FEAT-5-i18n-de-features/FEAT-12-convencion-unica-claves-i18n.md) — Una sola convención de claves i18n en las plantillas (verificar primero) *(épica [EP-FEAT-5](../../08-features-generadas/EP-FEAT-5-i18n-de-features/README.md))*

## Checklist de la épica

- [x] CTX-19 — i18n loader: tolerar ficheros ausentes y prodMode real
- [x] CTX-20 — Missing handler que humaniza claves sin traducción
