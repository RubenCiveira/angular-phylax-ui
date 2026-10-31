---
id: EP-FEAT-5
titulo: "i18n de las features"
area: features-generadas
prioridad: critica
estado: pendiente
issues: [FEAT-12, FEAT-16]
---

# EP-FEAT-5 · i18n de las features

**Prioridad máxima:** 🔴 Crítica · **Issues:** 2 · **Esfuerzo estimado:** ~2 días

## Objetivo

Una convención de claves que resuelva y todos los scopes con traducciones.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [FEAT-12](FEAT-12-convencion-unica-claves-i18n.md) | Una sola convención de claves i18n en las plantillas (verificar primero) | 🔴 | M | 🧩 |
| 2 | [FEAT-16](FEAT-16-i18n-security-domain.md) | Traducciones para access/security-domain | 🟡 | S | 🧩📄 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/features/**/*.html` | FEAT-12 |
| `src/app/features/**/*.module.ts` | FEAT-12 |
| `src/app/features/access/security-domain/**` | FEAT-16 |
| `public/i18n/access/security-domain/` | FEAT-16 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-19](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/CTX-19-i18n-loader-tolerante.md) — i18n loader: tolerar ficheros ausentes y prodMode real *(épica [EP-CTX-7](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-FEAT-6](../EP-FEAT-6-standalone-y-paginas/README.md) — Standalone, OnPush y páginas de ruta: `src/app/features/**/*.module.ts`

## Desbloquea

- [FEAT-14](../EP-FEAT-6-standalone-y-paginas/FEAT-14-standalone-onpush.md) — Generar componentes standalone con OnPush y rutas sin NgModule *(épica [EP-FEAT-6](../EP-FEAT-6-standalone-y-paginas/README.md))*

## Checklist de la épica

- [ ] FEAT-12 — Una sola convención de claves i18n en las plantillas (verificar primero)
- [ ] FEAT-16 — Traducciones para access/security-domain
