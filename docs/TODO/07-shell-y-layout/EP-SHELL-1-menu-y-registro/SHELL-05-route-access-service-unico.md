---
id: SHELL-05
titulo: "Eliminar el servicio de rutas duplicado y combinar todos los guards"
area: shell-y-layout
epica: EP-SHELL-1
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 04-shell-y-layout.md
---

# SHELL-05 · Eliminar el servicio de rutas duplicado y combinar todos los guards

**Épica:** [EP-SHELL-1 · Registro de features y menú](README.md) — paso 3 de 7

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`route-accesible.service.ts` y `route-accessible.service.ts` son idénticos (con sus specs) y declaran la misma clase en root. `checkRouteGuards` devuelve el primer guard observable e ignora los siguientes, y pasa un `ActivatedRouteSnapshot` vacío.

## Tareas

- [ ] Borrar `route-accesible.service.ts` y su spec.
- [ ] Combinar todos los guards (`forkJoin` + `every`).

## Criterios de aceptación

- [ ] Solo existe `route-accessible.service.ts`.
- [ ] Un ítem con dos guards solo es visible si ambos lo permiten.

## Ficheros afectados

- `src/app/bootstrap/layout/menu/route-accesible.service.ts`
- `src/app/bootstrap/layout/menu/route-accesible.service.spec.ts`
- `src/app/bootstrap/layout/menu/route-accessible.service.ts`

## Relacionado

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *route-accesible.service.ts y route-accessible.service.ts*
