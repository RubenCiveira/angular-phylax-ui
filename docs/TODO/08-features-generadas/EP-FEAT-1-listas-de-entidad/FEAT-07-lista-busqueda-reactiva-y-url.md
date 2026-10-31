---
id: FEAT-07
titulo: "Lista: búsqueda reactiva, tamaño de página y filtros en la URL"
area: features-generadas
epica: EP-FEAT-1
paso: 5
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [CTX-15, DATA-18]
origen: 08-features-generadas.md
---

# FEAT-07 · Lista: búsqueda reactiva, tamaño de página y filtros en la URL

**Épica:** [EP-FEAT-1 · Listas de entidad](README.md) — paso 5 de 6

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

- `makeSearch()` copia el filtro campo a campo dos veces (~30 líneas).
- `effect(() => { setTimeout(() => this.makeSearch()) })` no tiene dependencias reactivas: **no se vuelve a ejecutar si cambia el input `filters`**.
- `limit: 10` fijo.
- `prev() { console.log('PREV') }`.
- Los filtros no van en la URL.

## Tareas

- [ ] `query = computed(() => buildQuery(filters(), searchValue()))` con un helper genérico y mapa de campos generado.
- [ ] `effect(() => list.fetch(query()))`.
- [ ] `pageSize` desde `data.page-size` (por ejemplo 25).
- [ ] Sincronizar filtros con query params vía `LocalRouteStateService.bind`.
- [ ] Traducir `sortChange` (UI-11) a `order`.
- [ ] Quitar `prev`.

## Criterios de aceptación

- [ ] Cambiar el input `filters` relanza la búsqueda.
- [ ] Recargar la página conserva los filtros.

## Ficheros afectados

- `src/app/features/**/components/*-view-list/*.component.ts`

## Relacionado

**Depende de:**
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*
- [DATA-18](../../02-capa-de-datos/EP-DATA-5-rutas-locales/DATA-18-local-route-state-sin-navegaciones-fantasma.md) — LocalRouteState: ámbito de componente y sin navegaciones al destruir *(épica [EP-DATA-5](../../02-capa-de-datos/EP-DATA-5-rutas-locales/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *components/*-view-list/*.component.ts*
