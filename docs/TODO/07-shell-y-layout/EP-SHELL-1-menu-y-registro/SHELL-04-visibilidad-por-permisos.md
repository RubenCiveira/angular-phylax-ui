---
id: SHELL-04
titulo: "Visibilidad del menú por permiso, calculada una vez"
area: shell-y-layout
epica: EP-SHELL-1
paso: 7
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [SHELL-03, CTX-12]
origen: 04-shell-y-layout.md
---

# SHELL-04 · Visibilidad del menú por permiso, calculada una vez

**Épica:** [EP-SHELL-1 · Registro de features y menú](README.md) — paso 7 de 7

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Cada ítem se suscribe a todos los `router.events` y ejecuta guards de navegación para decidir si se ve: coste O(ítems × eventos) y efectos secundarios posibles.

## Tareas

- [ ] Calcular la visibilidad con `computed` a partir de `feature.permission` y `PermissionService`.
- [ ] Recalcular solo al cambiar de usuario o tenant.

## Criterios de aceptación

- [ ] Navegar no dispara cálculos de visibilidad del menú.

## Ficheros afectados

- `src/app/bootstrap/layout/menu/menu.component.ts`

## Relacionado

**Depende de:**
- [SHELL-03](SHELL-03-menu-accesible-con-router-link.md) — Menú con enlaces reales, iconos y modo mini usable
- [CTX-12](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-12-guards-return-url-y-permisos.md) — Guards: returnUrl y guard por permiso *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *menu.component.html / .ts*
