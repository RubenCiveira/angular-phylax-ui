---
id: SHELL-19
titulo: "Portada: redirección sin parpadeo y dashboard opcional"
area: shell-y-layout
epica: EP-SHELL-2
paso: 5
prioridad: baja
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [SHELL-08, SHELL-01]
origen: 04-shell-y-layout.md
---

# SHELL-19 · Portada: redirección sin parpadeo y dashboard opcional

**Épica:** [EP-SHELL-2 · Arranque, rutas raíz y valores por defecto](README.md) — paso 5 de 5

**Prioridad:** ⚪ Baja · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`HomeComponent` navega en el constructor y se ve un instante `<h1>Home</h1>`.

## Tareas

- [ ] Borrar `HomeComponent` (lo sustituye la redirección de SHELL-08).
- [ ] Opcional: ruta hija `''` bajo `/:lang/:tenant` con accesos directos generados desde el registro.

## Criterios de aceptación

- [ ] No hay parpadeo al entrar en `/`.

## Ficheros afectados

- `src/app/bootstrap/layout/pages/home/home.component.ts`

## Relacionado

**Depende de:**
- [SHELL-08](SHELL-08-rutas-raiz-y-titulos.md) — Redirección inicial, títulos de pestaña y opciones del router
- [SHELL-01](../EP-SHELL-1-menu-y-registro/SHELL-01-registro-de-features.md) — Registro único de features: todas las entidades en rutas y menú *(épica [EP-SHELL-1](../EP-SHELL-1-menu-y-registro/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *pages/home/home.component.ts*
