---
id: DATA-18
titulo: "LocalRouteState: ámbito de componente y sin navegaciones al destruir"
area: capa-de-datos
epica: EP-DATA-5
paso: 1
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-18 · LocalRouteState: ámbito de componente y sin navegaciones al destruir

**Épica:** [EP-DATA-5 · Rutas locales](README.md) — paso 1 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El servicio es `providedIn: 'root'` e inyecta `ActivatedRoute` (la raíz). Su suscripción no se cancela, `watch()` emite en `setTimeout` y, al destruir, `clear()` navega para borrar query params, lo que compite con la navegación que causó la destrucción.

## Tareas

- [ ] Proveer a nivel de componente o leer `router.routerState` de forma explícita.
- [ ] Usar `takeUntilDestroyed`.
- [ ] En `clear()`, no navegar si `router.getCurrentNavigation()` no es `null`.
- [ ] Probar el caso "abrir detalle → pulsar otra entrada del menú".

## Criterios de aceptación

- [ ] No hay doble navegación al salir de una pantalla con estado local.
- [ ] El botón atrás funciona de forma predecible.

## Ficheros afectados

- `src/app/shared/interaction/local-route-state/local-route-state.service.ts`

## Relacionado

**Desbloquea:**
- [FEAT-07](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-07-lista-busqueda-reactiva-y-url.md) — Lista: búsqueda reactiva, tamaño de página y filtros en la URL *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *interaction/local-route-state/local-route-state.service.ts*
