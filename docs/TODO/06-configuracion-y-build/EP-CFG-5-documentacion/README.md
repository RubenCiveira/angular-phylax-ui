---
id: EP-CFG-5
titulo: "Documentación del proyecto"
area: configuracion-y-build
prioridad: media
estado: pendiente
issues: [CFG-16]
---

# EP-CFG-5 · Documentación del proyecto

**Prioridad máxima:** 🟡 Media · **Issues:** 1 · **Esfuerzo estimado:** ~0.5 días

## Objetivo

README que explica arranque, configuración, regeneración y tema.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CFG-16](CFG-16-readme.md) | README del proyecto | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `README.md` | CFG-16 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [FEAT-17](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-17-marcas-de-generacion-y-extension.md) — Contrato de regeneración: @generated, @generated-once y extensiones *(épica [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-DEP-5](../../04-dependencias/EP-DEP-5-generador-modular/README.md) — Generador modular: `README.md`
- [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md) — Contrato del generador: `README.md`

## Checklist de la épica

- [ ] CFG-16 — README del proyecto
