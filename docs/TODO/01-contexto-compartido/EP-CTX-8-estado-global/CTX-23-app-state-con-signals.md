---
id: CTX-23
titulo: "AppStateService con signals reales y claves tipadas"
area: contexto-compartido
epica: EP-CTX-8
paso: 1
prioridad: media
esfuerzo: L
ambito: plantilla
estado: hecho
depende_de: [SHELL-07]
origen: 05-contexto-compartido.md
---

# CTX-23 · AppStateService con signals reales y claves tipadas

**Épica:** [EP-CTX-8 · Estado global](README.md) — paso 1 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`buildWritableSignal` crea un `BehaviorSubject` con `.set` añadido vía `as any` (no es un signal). `ArrayOfSignals` es un `Proxy` que crea y persiste una entrada nueva al leer cualquier propiedad. Cada `set` compara con `JSON.stringify` y `language` tiene `'es'` fijo como valor por defecto.

## Tareas

- [x] Crear `persistedSignal(key, default)` (signal + `localStorage`). *Basado en `linkedSignal`: mientras no se escribe sigue al valor por defecto (que puede ser un signal); al escribirlo se guarda con el mismo formato `{ data }` de antes.*
- [x] Migrar `language` y `tenant` (valores por defecto desde `DefaultsService`). *Son `WritableSignal<string>` que siguen a `DefaultsService` hasta que el usuario elige; ya no hace falta suscribirse a la configuración en el constructor.*
- [x] Migrar `userInfo` a `signal<Record<string, UserInfo>>`. *`users`, `user(key)`, `user$(key)` y `setUser(key, user)`.*
- [x] Migrar `context` a `signal<Record<ContextKey, ContextValue | null>>`. *`contexts`, `contextValue(key)`, `context$(key)`, `setContext(key, value)`, y `fixedValues`/`filterValues` como `computed`. Se persiste entero en `state-item-context` y se reconstruye con `ContextValue.restore`.*
- [x] Exponer `toObservable()` para los consumidores RxJS y mantener la API antigua `@deprecated` una versión. *`language$`, `tenant$`, `user$()`, `context$()`, `fixedContext()` y `filterContext()`. `userInfo[key]` y `context[key]` se mantienen `@deprecated` (no crean estado al leer). `language` y `tenant` no pueden mantener la API antigua con el mismo nombre: pasan a signal y `.subscribe` se sustituye por `language$`/`tenant$`. Todos los consumidores del repo están migrados.*
- [x] Borrar `currentContext()`, que no se usa.

## Criterios de aceptación

- [x] No queda `as any` en `app-state.service.ts`.
- [x] Leer una clave inexistente no crea estado nuevo.

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
