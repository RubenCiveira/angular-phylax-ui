---
id: SHELL-17
titulo: "Pantalla de carga accesible"
area: shell-y-layout
epica: EP-SHELL-5
paso: 1
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 04-shell-y-layout.md
---

# SHELL-17 · Pantalla de carga accesible

**Épica:** [EP-SHELL-5 · Páginas de carga y 404](README.md) — paso 1 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`template: '<h1>Loading...</h1>'`: texto en inglés, sin indicador visual ni `aria-busy`.

## Tareas

- [ ] Spinner + texto oculto con `role="status"`.
- [ ] Fallback sin transloco (las traducciones pueden no estar cargadas).

## Criterios de aceptación

- [ ] La carga muestra un spinner y la anuncia el lector de pantalla.

## Ficheros afectados

- `src/app/bootstrap/layout/pages/bootstrap/bootstrap.component.ts`

## Relacionado

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *pages/bootstrap/bootstrap.component.ts*
