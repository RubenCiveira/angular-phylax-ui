---
id: CTX-23
titulo: "AppStateService con signals reales y claves tipadas"
area: contexto-compartido
epica: EP-CTX-8
paso: 1
prioridad: media
esfuerzo: L
ambito: plantilla
estado: pendiente
depende_de: [SHELL-07]
origen: 05-contexto-compartido.md
---

# CTX-23 · AppStateService con signals reales y claves tipadas

**Épica:** [EP-CTX-8 · Estado global](README.md) — paso 1 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`buildWritableSignal` crea un `BehaviorSubject` con `.set` añadido vía `as any` (no es un signal). `ArrayOfSignals` es un `Proxy` que crea y persiste una entrada nueva al leer cualquier propiedad. Cada `set` compara con `JSON.stringify` y `language` tiene `'es'` fijo como valor por defecto.

## Tareas

- [ ] Crear `persistedSignal(key, default)` (signal + `localStorage`).
- [ ] Migrar `language` y `tenant` (valores por defecto desde `DefaultsService`).
- [ ] Migrar `userInfo` a `signal<Record<string, UserInfo>>`.
- [ ] Migrar `context` a `signal<Record<ContextKey, ContextValue | null>>`.
- [ ] Exponer `toObservable()` para los consumidores RxJS y mantener la API antigua `@deprecated` una versión.
- [ ] Borrar `currentContext()`, que no se usa.

## Criterios de aceptación

- [ ] No queda `as any` en `app-state.service.ts`.
- [ ] Leer una clave inexistente no crea estado nuevo.

## Ficheros afectados

- `src/app/shared/context/state/app-state.service.ts`
- `src/app/bootstrap/layout/layout-state.service.ts`

## Relacionado

**Depende de:**
- [SHELL-07](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

**Desbloquea:**
- [CTX-24](CTX-24-sincronizar-estado-entre-pestanas.md) — Sincronizar sesión, idioma y tenant entre pestañas
- [DEP-10](../../04-dependencias/EP-DEP-6-zoneless/DEP-10-zoneless.md) — Pasar a detección de cambios zoneless *(épica [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/state/app-state.service.ts*
