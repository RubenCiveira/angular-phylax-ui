---
id: DATA-02
titulo: "Convertir fechas con offset ±hh:mm"
area: capa-de-datos
epica: EP-DATA-1
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-02 · Convertir fechas con offset ±hh:mm

**Épica:** [EP-DATA-1 · Cliente HTTP (ClientService)](README.md) — paso 1 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`isIsoDateString` usa `…(Z|[+-]\d{4})?$`. Un backend Java (`OffsetDateTime` con Jackson) envía `2025-10-30T12:00:00+02:00`, que no encaja y queda como `string` aunque el modelo diga `Date`.

## Tareas

- [x] Cambiar la regex a `/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/`.
- [x] Tests con `Z`, `+0200`, `+02:00`, sin offset y con milisegundos.

## Criterios de aceptación

- [x] Los cinco formatos se convierten a `Date`.

## Ficheros afectados

- `src/app/shared/data/api/client.service.ts`
- `src/app/shared/data/api/client.service.spec.ts`

## Relacionado

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/api/client.service.ts*
