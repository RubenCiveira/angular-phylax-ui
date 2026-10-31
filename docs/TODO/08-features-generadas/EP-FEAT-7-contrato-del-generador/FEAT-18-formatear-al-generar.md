---
id: FEAT-18
titulo: "Formatear el código al terminar de generar"
area: features-generadas
epica: EP-FEAT-7
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-05, CFG-14]
origen: 08-features-generadas.md
---

# FEAT-18 · Formatear el código al terminar de generar

**Épica:** [EP-FEAT-7 · Contrato del generador](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El código generado sale sin formatear (`}    update(`, decoradores en una línea, `</button>    </div>`).

## Tareas

- [ ] Ejecutar `prettier --write` sobre los ficheros generados al final del generador.
- [ ] `format:check` en CI.

## Criterios de aceptación

- [ ] `pnpm format:check` pasa justo después de regenerar.

## Ficheros afectados

- `(generador)`
- `src/app/features/**`

## Relacionado

**Depende de:**
- [CFG-05](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-05-package-json-scripts.md) — package.json: nombre, engines y scripts útiles *(épica [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md))*
- [CFG-14](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-14-prettier-lf.md) — Prettier con finales de línea LF *(épica [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *components/*-view-list/*.component.html (resto de la plantilla)*
