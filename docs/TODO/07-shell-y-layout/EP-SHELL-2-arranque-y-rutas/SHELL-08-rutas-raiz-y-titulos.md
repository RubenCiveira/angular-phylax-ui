---
id: SHELL-08
titulo: "Redirección inicial, títulos de pestaña y opciones del router"
area: shell-y-layout
epica: EP-SHELL-2
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [SHELL-07]
origen: 04-shell-y-layout.md
---

# SHELL-08 · Redirección inicial, títulos de pestaña y opciones del router

**Épica:** [EP-SHELL-2 · Arranque, rutas raíz y valores por defecto](README.md) — paso 2 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La ruta `''` usa un componente que navega en el constructor, `'**'` aparece dos veces, la función se llama `aditioanlRoutes` y no hay `title` en las rutas.

## Tareas

- [ ] `{ path: '', pathMatch: 'full', redirectTo: () => inject(DefaultsService).homeUrl() }`.
- [ ] Un `TitleStrategy` que traduzca `title` (claves del registro).
- [ ] `provideRouter([], withComponentInputBinding(), withInMemoryScrolling(...), withViewTransitions())`.
- [ ] Corregir la errata y dejar un único `**`.

## Criterios de aceptación

- [ ] El título de la pestaña muestra la entidad actual en el idioma activo.

## Ficheros afectados

- `src/app/bootstrap/app.routes.ts`
- `src/app/app.config.ts`

## Relacionado

**Depende de:**
- [SHELL-07](SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio

**Desbloquea:**
- [SHELL-19](SHELL-19-home-redirect-y-dashboard.md) — Portada: redirección sin parpadeo y dashboard opcional
- [SHELL-20](SHELL-20-container-simplificado.md) — ContainerComponent: inputs de ruta y valores por defecto
- [FEAT-15](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-15-paginas-de-ruta.md) — Páginas de ruta con clase global y título *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *src/app/bootstrap/app.routes.ts*
