---
id: SHELL-06
titulo: "Ampliar el modelo MenuItem"
area: shell-y-layout
epica: EP-SHELL-1
paso: 1
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 04-shell-y-layout.md
---

# SHELL-06 · Ampliar el modelo MenuItem

**Épica:** [EP-SHELL-1 · Registro de features y menú](README.md) — paso 1 de 7

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`MenuItem` solo tiene `label`, `icon`, `route` y `subItems`.

## Tareas

- [ ] Añadir `key`, `labelKey`, `href`, `permission` y `badge`.

## Criterios de aceptación

- [ ] El modelo soporta traducción, permisos, enlaces externos y contadores.

## Ficheros afectados

- `src/app/bootstrap/layout/menu-item.model.ts`

## Relacionado

**Desbloquea:**
- [SHELL-01](SHELL-01-registro-de-features.md) — Registro único de features: todas las entidades en rutas y menú
- [SHELL-03](SHELL-03-menu-accesible-con-router-link.md) — Menú con enlaces reales, iconos y modo mini usable

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *menu-item.model.ts*
