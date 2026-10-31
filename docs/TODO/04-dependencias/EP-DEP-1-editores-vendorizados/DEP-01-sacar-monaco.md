---
id: DEP-01
titulo: "Sacar Monaco de la base (21 MB)"
area: dependencias
epica: EP-DEP-1
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 03-dependencias.md
---

# DEP-01 · Sacar Monaco de la base (21 MB)

**Épica:** [EP-DEP-1 · Editores vendorizados](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`public/assets/monaco/` (21 MB, 103 ficheros) está versionado y se copia a `dist` en cada build (38 MB en total). `editable-sourcecode` lo carga desde `/assets/monaco/vs` (ruta absoluta, se rompe con `APP_ROOT` ≠ `/`), y ninguna feature usa ese editable.

## Tareas

- [ ] `git rm -r public/assets/monaco`.
- [ ] Si un proyecto necesita el editor: dependencia `monaco-editor` + glob de assets en `angular.json`, que el generador añade solo si hay campos `sourcecode`.
- [ ] Ruta relativa al `base href` en `editable-sourcecode` (`assets/monaco/vs`).
- [ ] Evaluar CodeMirror 6 con `import()` dinámico como alternativa ligera (anotar la decisión).

## Criterios de aceptación

- [ ] `du -sh dist` < 3 MB sin editores.
- [ ] El repositorio no contiene `public/assets/monaco`.

## Ficheros afectados

- `public/assets/monaco/**`
- `src/app/shared/toolkit/editable/editable-sourcecode/editable-sourcecode.component.ts`
- `angular.json`

## Relacionado

**Desbloquea:**
- [CFG-08](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/CFG-08-builder-y-assets.md) — Migrar a @angular/build y filtrar assets *(épica [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md))*

**Recomendación de origen:** [03 · Dependencias](../../../recomendaciones/03-dependencias.md) → *public/assets/monaco/***
