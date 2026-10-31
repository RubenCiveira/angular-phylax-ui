---
id: CFG-05
titulo: "package.json: nombre, engines y scripts útiles"
area: configuracion-y-build
epica: EP-CFG-2
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-05 · package.json: nombre, engines y scripts útiles

**Épica:** [EP-CFG-2 · package.json y calidad de código](README.md) — paso 1 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`"name": "phylaxui"`, sin `engines` ni `packageManager` (Angular 20 necesita Node ≥ 20.19). El script `pretify` tiene globs a carpetas que no existen e incluye código vendorizado; `analyze` usa una herramienta no instalada e incompatible con esbuild.

## Tareas

- [ ] `name: phylax-ui`, `engines.node: ">=20.19"`, `packageManager: "pnpm@9.x"`.
- [ ] Scripts `format` y `format:check` con globs sobre `src/**` y `public/{config,i18n}/**`.
- [ ] `analyze` con `esbuild-visualizer` sobre `stats.json`.
- [ ] Que el generador ejecute `format` al terminar.

## Criterios de aceptación

- [ ] `pnpm format:check` pasa en CI.
- [ ] `pnpm analyze` abre el informe de bundle.

## Ficheros afectados

- `package.json`

## Relacionado

**Desbloquea:**
- [CFG-15](CFG-15-hooks-de-git.md) — Hooks de git con lefthook (commitlint y format)
- [FEAT-18](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-18-formatear-al-generar.md) — Formatear el código al terminar de generar *(épica [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *package.json*
