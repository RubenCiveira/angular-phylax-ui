---
id: DATA-14
titulo: "RepositoryService: limpiar restos de depuración"
area: capa-de-datos
epica: EP-DATA-3
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-14 · RepositoryService: limpiar restos de depuración

**Épica:** [EP-DATA-3 · RepositoryService y metadatos](README.md) — paso 2 de 7

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Quedan `console.log('REMOVE UNSUSCRIBES OF THE PROYECTION')`, varios `FIXME`/`TODO` y un `list().next()` que lanza `'Complex results'`.

## Tareas

- [ ] Quitar el `console.log`.
- [ ] Quitar `next()`/`hasNext()` añadidos a `list()` o implementarlos.
- [ ] Convertir los `FIXME` en issues o resolverlos (el de `finalize` en operaciones masivas queda cubierto por DATA-08).

## Criterios de aceptación

- [ ] Sin `console.log` ni `FIXME` en el fichero.

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`

## Relacionado

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/repository/repository.service.ts*
