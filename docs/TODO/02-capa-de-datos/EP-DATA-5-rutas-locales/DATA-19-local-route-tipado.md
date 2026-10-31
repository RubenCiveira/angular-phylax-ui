---
id: DATA-19
titulo: "LocalRoute: tipado y mensajes solo en desarrollo"
area: capa-de-datos
epica: EP-DATA-5
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-19 · LocalRoute: tipado y mensajes solo en desarrollo

**Épica:** [EP-DATA-5 · Rutas locales](README.md) — paso 2 de 2

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`LocalRouterService` accede al contexto con `(this as any).context`, la directiva acepta `initial="true"` como string o boolean y el componente pinta un `<h1>` de ayuda para desarrolladores incluso en producción.

## Tareas

- [ ] `InjectionToken<LocalRouteContext>` en lugar de `as any`.
- [ ] Inputs con `booleanAttribute`.
- [ ] Mensaje de ayuda solo con `isDevMode()`.

## Criterios de aceptación

- [ ] Sin `as any` en `interaction/local-route`.

## Ficheros afectados

- `src/app/shared/interaction/local-route/local-route-context.component.ts`
- `src/app/shared/interaction/local-route/local-router.service.ts`
- `src/app/shared/interaction/local-route/local-route.directive.ts`

## Relacionado

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *interaction/local-route/**
