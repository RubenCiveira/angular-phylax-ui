---
id: DEP-05
titulo: "Sustituir uuid por crypto.randomUUID()"
area: dependencias
epica: EP-DEP-3
paso: 1
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 03-dependencias.md
---

# DEP-05 · Sustituir uuid por crypto.randomUUID()

**Épica:** [EP-DEP-3 · Dependencias sobrantes](README.md) — paso 1 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`uuid` solo se usa en `RepositoryService.generateComb()` (`uuidv4().split('-')`).

## Tareas

- [ ] `crypto.randomUUID().split('-')`.
- [ ] Quitar `uuid` y `@types/uuid` de `package.json`.
- [ ] Opcional: valorar UUIDv7 propio para IDs ordenables por tiempo.

## Criterios de aceptación

- [ ] No hay `uuid` en `package.json`.
- [ ] Los tests de `generateComb` pasan.

## Ficheros afectados

- `src/app/shared/data/repository/repository.service.ts`
- `package.json`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../recomendaciones/03-dependencias.md) → *repository.service.ts (uuid)*
