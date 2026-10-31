---
id: SHELL-18
titulo: "Página 404 con salida"
area: shell-y-layout
epica: EP-SHELL-5
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [UI-19]
origen: 04-shell-y-layout.md
---

# SHELL-18 · Página 404 con salida

**Épica:** [EP-SHELL-5 · Páginas de carga y 404](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`template: '<h1>unknown</h1>'` para cualquier ruta inexistente.

## Tareas

- [ ] Usar `ErrorPageComponent` con `{ status: 404 }` y botón "Ir al inicio".

## Criterios de aceptación

- [ ] Una URL inexistente muestra un 404 traducido con enlace al inicio.

## Ficheros afectados

- `src/app/bootstrap/layout/pages/unknown/unknown.component.ts`

## Relacionado

**Depende de:**
- [UI-19](../../05-toolkit-ui/EP-UI-6-paginas-de-error/UI-19-error-page-traducida.md) — Página de error traducida y útil *(épica [EP-UI-6](../../05-toolkit-ui/EP-UI-6-paginas-de-error/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *pages/unknown/unknown.component.ts*
