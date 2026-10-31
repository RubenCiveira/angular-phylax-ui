---
id: EP-DEP-5
titulo: "Generador modular"
area: dependencias
prioridad: media
estado: pendiente
issues: [DEP-11]
---

# EP-DEP-5 · Generador modular

**Prioridad máxima:** 🟡 Media · **Issues:** 1 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Que cada proyecto generado incluya solo los módulos opcionales que necesita.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DEP-11](DEP-11-modulos-opcionales-del-generador.md) | Módulos opcionales en el generador y política de dependencias | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `generator.config.json` | DEP-11 |
| `renovate.json` | DEP-11 |
| `README.md` | DEP-11 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CFG-5](../../06-configuracion-y-build/EP-CFG-5-documentacion/README.md) — Documentación del proyecto: `README.md`
- [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md) — Contrato del generador: `README.md`

## Checklist de la épica

- [ ] DEP-11 — Módulos opcionales en el generador y política de dependencias
