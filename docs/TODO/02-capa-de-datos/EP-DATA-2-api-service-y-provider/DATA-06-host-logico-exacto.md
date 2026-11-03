---
id: DATA-06
titulo: "Resolver hosts lógicos por coincidencia exacta"
area: capa-de-datos
epica: EP-DATA-2
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-06 · Resolver hosts lógicos por coincidencia exacta

**Épica:** [EP-DATA-2 · ApiService y ApiProvider](README.md) — paso 2 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`find()` prueba `startsWith(key)` sobre todas las APIs y gana la última que coincide: una clave `api` coincidiría también con `api-v2/...`.

## Tareas

- [x] Resolver con `new URL(url).host === key` cuando la URL sea `http(s)://<key>/…`.
- [x] Mantener el prefijo como alternativa documentada y quedarse con la coincidencia más larga. *El prefijo además debe terminar en límite de segmento (`/`, `?`, `#` o fin). Ya no se aplican varias entradas en cascada: gana una.*
- [x] Tests con claves que comparten prefijo.

## Criterios de aceptación

- [x] `api` y `api-v2` se resuelven a sus URLs respectivas.

## Ficheros afectados

- `src/app/shared/data/api/api.service.ts`

## Relacionado

**Recomendación de origen:** [06 · Capa de datos](../../recomendaciones/06-capa-de-datos.md) → *data/api/api.service.ts*
