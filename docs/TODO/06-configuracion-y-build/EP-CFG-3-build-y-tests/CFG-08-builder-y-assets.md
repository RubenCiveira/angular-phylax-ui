---
id: CFG-08
titulo: "Migrar a @angular/build y filtrar assets"
area: configuracion-y-build
epica: EP-CFG-3
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-07, DEP-01, DEP-02]
origen: 01-configuracion-y-build.md
---

# CFG-08 · Migrar a @angular/build y filtrar assets

**Épica:** [EP-CFG-3 · angular.json, build y tests](README.md) — paso 3 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Se usa `@angular-devkit/build-angular` y `assets` copia todo `public/**`, incluidos los editores vendorizados.

## Tareas

- [ ] Migrar a `@angular/build:application` (`ng update`).
- [ ] Si quedan editores opcionales, configuración `with-editors` que los incluye.

## Criterios de aceptación

- [ ] Build y serve funcionan con `@angular/build`.

## Ficheros afectados

- `angular.json`
- `package.json`

## Relacionado

**Depende de:**
- [CFG-07](CFG-07-renombrar-proyecto-angular.md) — Renombrar el proyecto de angular.json (lughauth → phylax-ui)
- [DEP-01](../../04-dependencias/EP-DEP-1-editores-vendorizados/DEP-01-sacar-monaco.md) — Sacar Monaco de la base (21 MB) *(épica [EP-DEP-1](../../04-dependencias/EP-DEP-1-editores-vendorizados/README.md))*
- [DEP-02](../../04-dependencias/EP-DEP-1-editores-vendorizados/DEP-02-sacar-editorjs.md) — Sacar Editor.js de la base *(épica [EP-DEP-1](../../04-dependencias/EP-DEP-1-editores-vendorizados/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../recomendaciones/01-configuracion-y-build.md) → *angular.json*
