---
id: DEP-02
titulo: "Sacar Editor.js de la base"
area: dependencias
epica: EP-DEP-1
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 03-dependencias.md
---

# DEP-02 · Sacar Editor.js de la base

**Épica:** [EP-DEP-1 · Editores vendorizados](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`public/assets/editorjs/` (648 KB: Editor.js, plugins y `markdown-it`) se carga con `<script>` desde `editable-markdown`, que no tiene usos. Mismo problema de ruta absoluta.

## Tareas

- [ ] `git rm -r public/assets/editorjs`.
- [ ] Si se necesita: dependencias npm (`@editorjs/editorjs`, `markdown-it`) con `import()` dinámico, o un `textarea` con vista previa (`marked`).

## Criterios de aceptación

- [ ] El repositorio no contiene `public/assets/editorjs`.

## Ficheros afectados

- `public/assets/editorjs/**`
- `src/app/shared/toolkit/editable/editable-markdown/editable-markdown.component.ts`

## Relacionado

**Desbloquea:**
- [CFG-08](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-08-builder-y-assets.md) — Migrar a @angular/build y filtrar assets *(épica [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md))*

**Recomendación de origen:** [03 · Dependencias](../../recomendaciones/03-dependencias.md) → *public/assets/editorjs/***
