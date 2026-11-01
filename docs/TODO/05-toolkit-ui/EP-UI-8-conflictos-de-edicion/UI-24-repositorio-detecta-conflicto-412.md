---
id: UI-24
titulo: "El repositorio convierte el 412 en un conflicto tipado"
area: toolkit-ui
epica: EP-UI-8
paso: 2
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: [UI-23, CTX-05]
origen: peticion
---

# UI-24 · El repositorio convierte el 412 en un conflicto tipado

**Épica:** [EP-UI-8 · Resolución de conflictos de edición (412)](README.md) — paso 2 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`RepositoryService.update()` hace `PUT` con el cuerpo completo (incluida `version`) y, si el backend responde 412, el error sube sin tratar: `ErrorService` lo notifica con el modal genérico y la acción de edición se queda con el formulario abierto sin saber qué ha pasado. Además, la caché del repositorio sigue guardando la versión antigua del elemento.

## Tareas

- [x] Añadir a `RepositoryService` un `update(item, { original })` (o un método `updateOrConflict`) que:
  - Marque el 412 como gestionado con `handledErrors([412])` para que no aparezca el modal global.
  - Obtenga el estado **actual**: del cuerpo del error si el backend lo devuelve con la forma de la entidad; si no, con un `retrieve` que **salte la caché** e invalide la entrada antigua.
  - Emita un error tipado `EditConflictError<T>` que lleve el `EditConflict<T>` (`original`, `sent`, `current`), ya pasado por `mapItem`/`toWire` igual que el resto de valores.
- [x] Exportar un guard `isEditConflict(err): err is EditConflictError<T>` para que los consumidores distingan el conflicto del resto de errores.
- [x] Si la relectura falla (404 porque otro usuario lo borró, 403…), propagar ese error tal cual, sin envolverlo en conflicto.
- [x] Documentar en el JSDoc el contrato con el backend: `version` en el cuerpo y 412 cuando no coincide (y, opcionalmente, `If-Match`/`ETag` si se adopta más adelante).

## Criterios de aceptación

- [x] Un 412 en `update` no abre el modal de error y llega al suscriptor como `EditConflictError` con las tres versiones.
- [x] Tras el conflicto, `retrieve(key)` devuelve el valor actual del servidor, no el cacheado.
- [x] Un 412 seguido de 404 en la relectura llega como 404.
- [x] Tests con `HttpTestingController` para los tres casos (cuerpo con entidad, cuerpo vacío, relectura fallida).

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`
- `src/app/shared/data/repository/repository.model.ts`
- `src/app/shared/toolkit/edit-conflict/edit-conflict.model.ts`
- `src/app/features/**/repository/*-repository.service.ts` *(solo si el `update` de las features necesita reexponer la nueva firma)*

## Relacionado

**Origen:** petición directa (no procede de `docs/recomendaciones`).
