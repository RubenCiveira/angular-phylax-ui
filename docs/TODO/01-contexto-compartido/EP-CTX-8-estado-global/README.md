---
id: EP-CTX-8
titulo: "Estado global"
area: contexto-compartido
prioridad: media
estado: pendiente
issues: [CTX-23, CTX-24]
---

# EP-CTX-8 · Estado global

**Prioridad máxima:** 🟡 Media · **Issues:** 2 · **Esfuerzo estimado:** ~4.5 días

## Objetivo

Estado con signals tipados y sincronizado entre pestañas.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CTX-23](CTX-23-app-state-con-signals.md) | AppStateService con signals reales y claves tipadas | 🟡 | L | 🧩 |
| 2 | [CTX-24](CTX-24-sincronizar-estado-entre-pestanas.md) | Sincronizar sesión, idioma y tenant entre pestañas | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/context/state/app-state.service.ts` | CTX-23, CTX-24 |
| `src/app/bootstrap/layout/layout-state.service.ts` | CTX-23 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [SHELL-07](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-SHELL-1](../../07-shell-y-layout/EP-SHELL-1-menu-y-registro/README.md) — Registro de features y menú: `src/app/bootstrap/layout/layout-state.service.ts`

## Desbloquea

- [DEP-10](../../04-dependencias/EP-DEP-6-zoneless/DEP-10-zoneless.md) — Pasar a detección de cambios zoneless *(épica [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md))*

## Checklist de la épica

- [ ] CTX-23 — AppStateService con signals reales y claves tipadas
- [ ] CTX-24 — Sincronizar sesión, idioma y tenant entre pestañas
