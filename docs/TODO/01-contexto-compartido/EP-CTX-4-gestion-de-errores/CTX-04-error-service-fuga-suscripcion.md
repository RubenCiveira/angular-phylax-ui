---
id: CTX-04
titulo: "ErrorService: eliminar la suscripción que se acumula por error"
area: contexto-compartido
epica: EP-CTX-4
paso: 2
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-04 · ErrorService: eliminar la suscripción que se acumula por error

**Épica:** [EP-CTX-4 · Gestión de errores](README.md) — paso 2 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`storeError()` hace `this.appConfig['name'].subscribe(...)` **sin `take(1)`**. Cada error deja una suscripción viva y, si la configuración vuelve a emitir (escenario MFE), todos los errores anteriores se reenvían como spans nuevos. También deja `console.log('HAS TRACER')` en cada error, que se exporta a los logs.

## Tareas

- [ ] Crear el span directamente con `this.provider.startSpan(msg)` sin suscribirse a la configuración (el nombre del servicio ya está en el `Resource`).
- [ ] Quitar `console.log('HAS TRACER')`.
- [ ] Quitar la propiedad `displayedError`, que no se usa.
- [ ] Test: dos llamadas a `storeError` + una emisión nueva de configuración → solo 2 spans.

## Criterios de aceptación

- [ ] Cada error genera exactamente un span.
- [ ] No hay `console.log` en `error.service.ts`.

## Ficheros afectados

- `src/app/shared/context/observability/error.service.ts`

## Relacionado

**Desbloquea:**
- [CTX-05](CTX-05-error-service-api-errores-gestionados.md) — ErrorService: traducir mensajes y formalizar los errores gestionados

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/observability/error.service.ts*
