---
id: DATA-05
titulo: "Las mutaciones no deben repetirse al cambiar el contexto"
area: capa-de-datos
epica: EP-DATA-2
paso: 1
prioridad: critica
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-05 · Las mutaciones no deben repetirse al cambiar el contexto

**Épica:** [EP-DATA-2 · ApiService y ApiProvider](README.md) — paso 1 de 5

**Prioridad:** 🔴 Crítica · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`contextualizeBody` combina cada petición con `appState.filterContext()` mediante `switchMap`, así que las peticiones no completan mientras el contexto pueda cambiar. `ApiProvider.deleteAllForQuery` y `patchAllForQuery` no aplican `take(1)`: si el contexto cambia durante el sondeo de una operación masiva, **el DELETE o PATCH masivo se reenvía**.

## Tareas

- [ ] Separar `query(endpoint, params)` (reactiva al contexto, comportamiento actual) de `command(method, endpoint, body, params)` (una sola emisión, contexto con `first()`).
- [ ] Hacer que `post/put/patch/delete` de `ApiService` usen `command`.
- [ ] Revisar `ApiProvider` para que las operaciones masivas usen `command`.
- [ ] Test: cambiar el contexto durante un `deleteAllForQuery` → una sola petición DELETE.

## Criterios de aceptación

- [ ] Ninguna petición de mutación se emite dos veces por cambios de contexto.

## Ficheros afectados

- `src/app/shared/data/api/api.service.ts`
- `src/app/shared/data/repository/provider/impl/api.provider.ts`

## Relacionado

**Desbloquea:**
- [DATA-08](DATA-08-poll-until-con-backoff.md) — Sondeo de operaciones masivas con backoff y límite

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/api/api.service.ts*
