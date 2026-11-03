---
id: DATA-04
titulo: "ClientService: tipo RequestTarget y trazas homogéneas"
area: capa-de-datos
epica: EP-DATA-1
paso: 3
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-04 · ClientService: tipo RequestTarget y trazas homogéneas

**Épica:** [EP-DATA-1 · Cliente HTTP (ClientService)](README.md) — paso 3 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Los parámetros `{ url; params?; headers?; identity?; withIdentity? }` se repiten seis veces, `trace()` deja `console.error('IM MASK IN', sreq)` y `download()` no se traza.

## Tareas

- [x] Definir `type RequestTarget` y usarlo en todos los métodos. *Exportado como `interface RequestTarget`; `post`/`put`/`patch` usan `RequestTarget & { body?: any }` y `upload` `RequestTarget & { name; file }`.*
- [x] Quitar el `console.error`.
- [x] Trazar `download` y `upload` igual que `send`.

## Criterios de aceptación

- [x] Sin cambios funcionales; los tests existentes pasan.

## Ficheros afectados

- `src/app/shared/data/api/client.service.ts`

## Relacionado

**Recomendación de origen:** [06 · Capa de datos](../../recomendaciones/06-capa-de-datos.md) → *data/api/client.service.ts*
