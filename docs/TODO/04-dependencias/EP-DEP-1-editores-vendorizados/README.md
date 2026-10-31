---
id: EP-DEP-1
titulo: "Editores vendorizados"
area: dependencias
prioridad: alta
estado: pendiente
issues: [DEP-01, DEP-02]
---

# EP-DEP-1 · Editores vendorizados

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~2 días

## Objetivo

Sacar Monaco y Editor.js de la base (−21,6 MB).

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DEP-01](DEP-01-sacar-monaco.md) | Sacar Monaco de la base (21 MB) | 🟠 | M | 🧩 |
| 2 | [DEP-02](DEP-02-sacar-editorjs.md) | Sacar Editor.js de la base | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `public/assets/monaco/**` | DEP-01 |
| `src/app/shared/toolkit/editable/editable-sourcecode/editable-sourcecode.component.ts` | DEP-01 |
| `angular.json` | DEP-01 |
| `public/assets/editorjs/**` | DEP-02 |
| `src/app/shared/toolkit/editable/editable-markdown/editable-markdown.component.ts` | DEP-02 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `angular.json`
- [EP-DEP-6](../EP-DEP-6-zoneless/README.md) — Zoneless: `angular.json`
- [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `angular.json`
- [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md) — angular.json, build y tests: `angular.json`

## Desbloquea

- [CFG-08](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-08-builder-y-assets.md) — Migrar a @angular/build y filtrar assets *(épica [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md))*

## Checklist de la épica

- [ ] DEP-01 — Sacar Monaco de la base (21 MB)
- [ ] DEP-02 — Sacar Editor.js de la base
