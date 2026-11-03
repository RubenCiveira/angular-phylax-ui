---
id: DATA-12
titulo: "Store de repositorios inyectable y vaciado al cerrar sesión"
area: capa-de-datos
epica: EP-DATA-3
paso: 4
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-12 · Store de repositorios inyectable y vaciado al cerrar sesión

**Épica:** [EP-DATA-3 · RepositoryService y metadatos](README.md) — paso 4 de 7

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La caché es un `Map` a nivel de módulo (`repositoryStore`), invisible para DI y tests. Al cambiar de usuario, conserva los datos del anterior hasta que caducan.

## Tareas

- [x] Crear `@Injectable({ providedIn: 'root' }) RepositoryStore` con `clear()`.
- [x] Inyectarlo en `RepositoryService` (el constructor recibe el store). *`reference` devuelve ahora metadatos y no un `RepositoryService`, para que la referencia comparta el store.*
- [x] Llamar a `clear()` en el evento de logout y al cambiar de tenant. *El propio store se suscribe a `AppStateService.tenant` y al `uid` de `userInfo` de cada identidad configurada (login y logout). Vacía los mapas en sitio y `CacheResource` ya no borra una entrada ajena con la misma clave.*
- [x] Tests aislados que reinician el store.

## Criterios de aceptación

- [x] Tras cerrar sesión e iniciar con otro usuario, no se ven datos del anterior.

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`
- `src/app/features/**/repository/*-repository.service.ts`

## Relacionado

**Desbloquea:**
- [DATA-13](DATA-13-tick-shift-sobre-resource.md) — Reimplementar Tick/Shift sobre resource()/rxResource()

**Recomendación de origen:** [06 · Capa de datos](../../recomendaciones/06-capa-de-datos.md) → *data/repository/repository.service.ts*
