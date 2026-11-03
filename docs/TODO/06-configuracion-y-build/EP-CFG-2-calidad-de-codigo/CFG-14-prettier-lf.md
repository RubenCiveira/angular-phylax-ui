---
id: CFG-14
titulo: "Prettier con finales de línea LF"
area: configuracion-y-build
epica: EP-CFG-2
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-14 · Prettier con finales de línea LF

**Épica:** [EP-CFG-2 · package.json y calidad de código](README.md) — paso 2 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`"endOfLine": "crlf"` en un entorno macOS/Linux genera diffs enormes en cada `format`.

## Tareas

- [ ] `"endOfLine": "lf"`.
- [ ] Añadir `.editorconfig` y `.gitattributes` (`* text=auto eol=lf`).
- [ ] Formatear en un commit aislado y añadirlo a `.git-blame-ignore-revs`.

## Criterios de aceptación

- [ ] `pnpm format` no cambia los finales de línea.

## Ficheros afectados

- `.prettierrc`
- `.editorconfig`
- `.gitattributes`

## Relacionado

**Desbloquea:**
- [FEAT-18](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-18-formatear-al-generar.md) — Formatear el código al terminar de generar *(épica [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../recomendaciones/01-configuracion-y-build.md) → *.prettierrc*
