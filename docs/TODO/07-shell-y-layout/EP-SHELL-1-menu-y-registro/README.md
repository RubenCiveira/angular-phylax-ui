---
id: EP-SHELL-1
titulo: "Registro de features y menú"
area: shell-y-layout
prioridad: critica
estado: pendiente
issues: [SHELL-06, SHELL-21, SHELL-05, SHELL-01, SHELL-02, SHELL-03, SHELL-04]
---

# EP-SHELL-1 · Registro de features y menú

**Prioridad máxima:** 🔴 Crítica · **Issues:** 7 · **Esfuerzo estimado:** ~5.5 días

## Objetivo

Todas las entidades accesibles desde un menú accesible, traducido y con permisos.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [SHELL-06](SHELL-06-modelo-menu-item.md) | Ampliar el modelo MenuItem | ⚪ | S | 🧩 |
| 2 | [SHELL-21](SHELL-21-layout-state-signal.md) | LayoutStateService con signal | ⚪ | S | 🧩 |
| 3 | [SHELL-05](SHELL-05-route-access-service-unico.md) | Eliminar el servicio de rutas duplicado y combinar todos los guards | 🟡 | S | 🧩 |
| 4 | [SHELL-01](SHELL-01-registro-de-features.md) | Registro único de features: todas las entidades en rutas y menú | 🔴 | M | 🧩 |
| 5 | [SHELL-02](SHELL-02-overrides-de-menu.md) | Personalización del menú separada de lo generado | 🟠 | S | 🧩 |
| 6 | [SHELL-03](SHELL-03-menu-accesible-con-router-link.md) | Menú con enlaces reales, iconos y modo mini usable | 🟠 | M | 🧩 |
| 7 | [SHELL-04](SHELL-04-visibilidad-por-permisos.md) | Visibilidad del menú por permiso, calculada una vez | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/bootstrap/layout/menu-item.model.ts` | SHELL-06 |
| `src/app/bootstrap/layout/layout-state.service.ts` | SHELL-21 |
| `src/app/bootstrap/layout/menu/route-accesible.service.ts` | SHELL-05 |
| `src/app/bootstrap/layout/menu/route-accesible.service.spec.ts` | SHELL-05 |
| `src/app/bootstrap/layout/menu/route-accessible.service.ts` | SHELL-05 |
| `src/app/bootstrap/menu.config.ts` | SHELL-01, SHELL-02 |
| `src/app/bootstrap/features.registry.ts` | SHELL-01 |
| `src/app/bootstrap/app.routes.ts` | SHELL-01 |
| `src/app/bootstrap/layout/menu/menu.component.html` | SHELL-03 |
| `src/app/bootstrap/layout/menu/menu.component.ts` | SHELL-03, SHELL-04 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-12](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-12-guards-return-url-y-permisos.md) — Guards: returnUrl y guard por permiso *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-8](../../01-contexto-compartido/EP-CTX-8-estado-global/README.md) — Estado global: `src/app/bootstrap/layout/layout-state.service.ts`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `src/app/bootstrap/layout/menu/menu.component.html`
- [EP-SHELL-2](../EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/bootstrap/app.routes.ts`

## Desbloquea

- [SHELL-19](../EP-SHELL-2-arranque-y-rutas/SHELL-19-home-redirect-y-dashboard.md) — Portada: redirección sin parpadeo y dashboard opcional *(épica [EP-SHELL-2](../EP-SHELL-2-arranque-y-rutas/README.md))*

## Checklist de la épica

- [ ] SHELL-06 — Ampliar el modelo MenuItem
- [ ] SHELL-21 — LayoutStateService con signal
- [ ] SHELL-05 — Eliminar el servicio de rutas duplicado y combinar todos los guards
- [ ] SHELL-01 — Registro único de features: todas las entidades en rutas y menú
- [ ] SHELL-02 — Personalización del menú separada de lo generado
- [ ] SHELL-03 — Menú con enlaces reales, iconos y modo mini usable
- [ ] SHELL-04 — Visibilidad del menú por permiso, calculada una vez
