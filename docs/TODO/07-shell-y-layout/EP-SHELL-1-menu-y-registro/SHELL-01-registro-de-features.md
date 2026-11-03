---
id: SHELL-01
titulo: "Registro único de features: todas las entidades en rutas y menú"
area: shell-y-layout
epica: EP-SHELL-1
paso: 4
prioridad: critica
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [SHELL-06]
origen: 04-shell-y-layout.md
---

# SHELL-01 · Registro único de features: todas las entidades en rutas y menú

**Épica:** [EP-SHELL-1 · Registro de features y menú](README.md) — paso 4 de 7

**Prioridad:** 🔴 Crítica · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`menu.config.ts` solo registra 2 de las 26 entidades (`tenant` y `users`); las otras 24 tienen su ruta generada pero no se puede llegar a ellas. Rutas y menú se definen por separado, con datos repetidos, `data.label: 'Tenants'` copiado en ambas y etiquetas sin traducir.

## Tareas

- [ ] El generador emite `bootstrap/features.registry.ts` con `{ group, key, path, icon, labelKey, permission, load }` por entidad.
- [ ] `menuRoutes()` y `menu()` se derivan del registro.
- [ ] Unificar la pluralización de `path` (kebab-plural).
- [ ] Claves `menu.<grupo>.<entidad>` en el i18n global.

## Criterios de aceptación

- [ ] Las 26 entidades aparecen en el menú agrupadas por dominio y sus rutas cargan.

## Ficheros afectados

- `src/app/bootstrap/menu.config.ts`
- `src/app/bootstrap/features.registry.ts`
- `src/app/bootstrap/app.routes.ts`

## Relacionado

**Depende de:**
- [SHELL-06](SHELL-06-modelo-menu-item.md) — Ampliar el modelo MenuItem

**Desbloquea:**
- [SHELL-02](SHELL-02-overrides-de-menu.md) — Personalización del menú separada de lo generado
- [SHELL-03](SHELL-03-menu-accesible-con-router-link.md) — Menú con enlaces reales, iconos y modo mini usable
- [SHELL-19](../EP-SHELL-2-arranque-y-rutas/SHELL-19-home-redirect-y-dashboard.md) — Portada: redirección sin parpadeo y dashboard opcional *(épica [EP-SHELL-2](../EP-SHELL-2-arranque-y-rutas/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *src/app/bootstrap/menu.config.ts*
