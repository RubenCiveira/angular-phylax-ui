---
id: SHELL-20
titulo: "ContainerComponent: inputs de ruta y valores por defecto"
area: shell-y-layout
epica: EP-SHELL-2
paso: 4
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [SHELL-07, SHELL-08]
origen: 04-shell-y-layout.md
---

# SHELL-20 · ContainerComponent: inputs de ruta y valores por defecto

**Épica:** [EP-SHELL-2 · Arranque, rutas raíz y valores por defecto](README.md) — paso 4 de 5

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Sincroniza URL y estado con dos `effect` que navegan y una suscripción a `route.params`, con `'es'`/`'main'` fijos. Su SCSS define una rejilla que no se usa.

## Tareas

- [ ] Recibir `language`/`tenant` como `input()`.
- [ ] Un único `effect` de sincronización.
- [ ] Valores por defecto desde `DefaultsService`.
- [ ] Quitar la rejilla.

## Criterios de aceptación

- [ ] Cambiar el idioma desde la URL o desde la UI no provoca navegaciones en bucle.

## Ficheros afectados

- `src/app/bootstrap/layout/pages/container/container.component.ts`
- `src/app/bootstrap/layout/pages/container/container.component.scss`

## Relacionado

**Depende de:**
- [SHELL-07](SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio
- [SHELL-08](SHELL-08-rutas-raiz-y-titulos.md) — Redirección inicial, títulos de pestaña y opciones del router

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *pages/container/container.component.ts*
