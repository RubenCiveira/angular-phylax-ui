---
id: CTX-05
titulo: "ErrorService: traducir mensajes y formalizar los errores gestionados"
area: contexto-compartido
epica: EP-CTX-4
paso: 3
prioridad: media
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: [CTX-04]
origen: 05-contexto-compartido.md
---

# CTX-05 · ErrorService: traducir mensajes y formalizar los errores gestionados

**Épica:** [EP-CTX-4 · Gestión de errores](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El mecanismo de "error diferido" (`initialiceError` con `setTimeout(2000)` + `cancelError`) permite que un componente trate un error antes de que aparezca el diálogo global, pero no está documentado y muta el objeto error (`error.timeout`, `error.hidden`). El mensaje del 422 está fijado en español.

## Tareas

- [x] Guardar los timeouts en un `WeakMap<object, number>` en lugar de mutar el error.
- [x] Crear el operador `handledErrors(statuses: number[])` que marca el error como gestionado para esos estados. *Los errores gestionados viven en un `WeakSet` del módulo, así el operador no necesita contexto de inyección; también `markErrorHandled(error)`. Sustituye a `error.hidden`.*
- [x] Pasar los mensajes por transloco (`errors.422`, `errors.generic`). *`errors.generic` es el mensaje por defecto de `notifyError()`; el botón usa `common.confirm.ok`.*
- [x] Corregir la errata `initialiceError` → `initializeError` (con alias deprecado). *`isCanceled` (devolvía `true` si el aviso seguía pendiente) pasa a `isPending`, también con alias deprecado.*
- [x] Documentar el patrón con JSDoc y un ejemplo en el README.

## Criterios de aceptación

- [x] Un componente puede usar `.pipe(handledErrors([422]))` y no aparece el snackbar global.
- [x] Los mensajes cambian con el idioma.

## Ficheros afectados

- `src/app/shared/context/observability/error.service.ts`
- `src/app/shared/data/api/client.service.ts`

## Relacionado

**Depende de:**
- [CTX-04](CTX-04-error-service-fuga-suscripcion.md) — ErrorService: eliminar la suscripción que se acumula por error

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/observability/error.service.ts*
