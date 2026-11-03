---
id: DEP-07
titulo: "Quitar @angular/platform-browser-dynamic"
area: dependencias
epica: EP-DEP-3
paso: 3
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 03-dependencias.md
---

# DEP-07 · Quitar @angular/platform-browser-dynamic

**Épica:** [EP-DEP-3 · Dependencias sobrantes](README.md) — paso 3 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Está en las dependencias, pero el arranque usa `bootstrapApplication` de `@angular/platform-browser` y no se importa en ningún sitio.

## Tareas

- [x] Quitarlo de `package.json` y comprobar `ng build` y `ng test`. *Hecho; los fallos de build de producción (presupuesto de `form-layout.component.scss`) y de tests ya existían y no dependen de esto.*

## Criterios de aceptación

- [ ] Build y tests pasan sin la dependencia.

## Ficheros afectados

- `package.json`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../recomendaciones/03-dependencias.md) → *@angular/platform-browser-dynamic*
