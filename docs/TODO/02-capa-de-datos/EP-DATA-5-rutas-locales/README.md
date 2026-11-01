---
id: EP-DATA-5
titulo: "Rutas locales"
area: capa-de-datos
prioridad: media
estado: hecho
issues: [DATA-18, DATA-19]
---

# EP-DATA-5 · Rutas locales

**Prioridad máxima:** 🟡 Media · **Issues:** 2 · **Esfuerzo estimado:** ~2 días

## Objetivo

Estado de pantalla en la URL sin navegaciones fantasma y con tipos.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DATA-18](DATA-18-local-route-state-sin-navegaciones-fantasma.md) | LocalRouteState: ámbito de componente y sin navegaciones al destruir | 🟡 | M | 🧩 |
| 2 | [DATA-19](DATA-19-local-route-tipado.md) | LocalRoute: tipado y mensajes solo en desarrollo | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/interaction/local-route-state/local-route-state.service.ts` | DATA-18 |
| `src/app/shared/interaction/local-route/local-route-context.component.ts` | DATA-19 |
| `src/app/shared/interaction/local-route/local-router.service.ts` | DATA-19 |
| `src/app/shared/interaction/local-route/local-route.directive.ts` | DATA-19 |
| `src/app/shared/interaction/local-route/local-route-context.token.ts` *(nuevo)* | DATA-19 |
| `src/app/shared/toolkit/action/action-container.component.ts` | DATA-18 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Desbloquea

- [FEAT-07](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-07-lista-busqueda-reactiva-y-url.md) — Lista: búsqueda reactiva, tamaño de página y filtros en la URL *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

## Checklist de la épica

- [x] DATA-18 — LocalRouteState: ámbito de componente y sin navegaciones al destruir
- [x] DATA-19 — LocalRoute: tipado y mensajes solo en desarrollo
