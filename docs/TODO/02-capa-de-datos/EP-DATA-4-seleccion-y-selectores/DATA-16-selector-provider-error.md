---
id: DATA-16
titulo: "selectorProvider: exponer error y no relanzarlo"
area: capa-de-datos
epica: EP-DATA-4
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-16 · selectorProvider: exponer error y no relanzarlo

**Épica:** [EP-DATA-4 · Selección y selectores](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La interfaz declara `error: Signal<any>`, pero `selectorProvider()` nunca asigna `result.error`: `provider.error()` lanza `TypeError`. Además el error se relanza dentro del `subscribe` sin manejador y se deduplica con `JSON.stringify`.

## Tareas

- [x] `result.error = errors.asReadonly()`.
- [x] Registrar el error y usar `catchError(() => EMPTY)`.
- [x] Comparar con `handler.equals(handler.value(a), handler.value(b))`.
- [x] Test: una búsqueda que falla deja `error()` con valor y `searching()` en `false`.

## Criterios de aceptación

- [x] `provider.error()` funciona.
- [x] No hay errores no capturados en consola al fallar la búsqueda.

## Ficheros afectados

- `src/app/shared/data/selector-provider.ts`

## Relacionado

**Desbloquea:**
- [UI-08](../../05-toolkit-ui/EP-UI-3-editables-de-seleccion/UI-08-selectone-accesible.md) — editable-selectone accesible y con feedback *(épica [EP-UI-3](../../05-toolkit-ui/EP-UI-3-editables-de-seleccion/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/selector-provider.ts*
