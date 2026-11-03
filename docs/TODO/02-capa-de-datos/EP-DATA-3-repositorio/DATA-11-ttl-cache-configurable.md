---
id: DATA-11
titulo: "TTL de caché configurable"
area: capa-de-datos
epica: EP-DATA-3
paso: 3
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [CTX-15]
origen: 06-capa-de-datos.md
---

# DATA-11 · TTL de caché configurable

**Épica:** [EP-DATA-3 · RepositoryService y metadatos](README.md) — paso 3 de 7

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`TIME_TO_LIVE = 3_000` es fijo para todas las entidades.

## Tareas

- [x] `RepositoryMetadata.ttl` opcional por entidad.
- [x] Valor global `data.cache-ttl` en la configuración. *Prioridad: `RepositoryMetadata.ttl` → `data.cache-ttl` → 3000 ms. Se lee en cada uso, así que también cambia si la configuración se recarga.*

## Criterios de aceptación

- [x] Cambiar `data.cache-ttl` modifica la caducidad sin recompilar.

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`

## Relacionado

**Depende de:**
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../recomendaciones/06-capa-de-datos.md) → *data/repository/repository.service.ts*
