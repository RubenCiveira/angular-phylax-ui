---
id: DEP-06
titulo: "provideAnimationsAsync y evaluar retirar @angular/animations"
area: dependencias
epica: EP-DEP-3
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 03-dependencias.md
---

# DEP-06 · provideAnimationsAsync y evaluar retirar @angular/animations

**Épica:** [EP-DEP-3 · Dependencias sobrantes](README.md) — paso 2 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`provideAnimations()` carga el motor de animaciones de forma síncrona (~60 KB). Angular Material ha ido pasando sus componentes a animaciones CSS.

## Tareas

- [ ] Cambiar a `provideAnimationsAsync()`.
- [ ] Probar diálogos, menús, expansion panels y snackbars sin el provider; si funcionan, quitarlo y quitar la dependencia.

## Criterios de aceptación

- [ ] El bundle inicial no contiene el motor de animaciones.
- [ ] Los componentes de Material se animan bien.

## Ficheros afectados

- `src/app/app.config.ts`
- `package.json`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../recomendaciones/03-dependencias.md) → *app.config.ts (@angular/animations)*
