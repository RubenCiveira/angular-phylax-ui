---
id: CFG-09
titulo: "tsconfig: alias coherentes y sin experimentalDecorators"
area: configuracion-y-build
epica: EP-CFG-2
paso: 4
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-06]
origen: 01-configuracion-y-build.md
---

# CFG-09 · tsconfig: alias coherentes y sin experimentalDecorators

**Épica:** [EP-CFG-2 · package.json y calidad de código](README.md) — paso 4 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Conviven imports `app/...` (posibles por `baseUrl: "src"`) y `@shared/...`. `experimentalDecorators: true` no hace falta en Angular 20.

## Tareas

- [ ] Añadir alias `@app/*` y `@styles/*`.
- [ ] Quitar `experimentalDecorators`.
- [ ] Valorar quitar `baseUrl`.
- [ ] Unificar `outDir` con `tsconfig.app.json`.

## Criterios de aceptación

- [ ] No quedan imports `app/...` (el lint lo comprueba).

## Ficheros afectados

- `tsconfig.json`
- `tsconfig.app.json`

## Relacionado

**Depende de:**
- [CFG-06](CFG-06-eslint.md) — Añadir ESLint con reglas para el código generado

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *tsconfig.json*
