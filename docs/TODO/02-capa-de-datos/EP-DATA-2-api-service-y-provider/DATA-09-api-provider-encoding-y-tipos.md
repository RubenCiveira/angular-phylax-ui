---
id: DATA-09
titulo: "ApiProvider: codificar claves en la URL y tipar el ACL"
area: capa-de-datos
epica: EP-DATA-2
paso: 5
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-09 · ApiProvider: codificar claves en la URL y tipar el ACL

**Épica:** [EP-DATA-2 · ApiService y ApiProvider](README.md) — paso 5 de 5

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Las URLs se construyen con `bodyUrl + '/' + key` sin `encodeURIComponent`, y `formatAcl` usa `(<any>v).name` / `(<any>v).reason`.

## Tareas

- [ ] `encodeURIComponent(key)` en `retrieve`, `update`, `patch`, `delete` y `acl`.
- [ ] Tipar la respuesta (`AclResponse`).

## Criterios de aceptación

- [ ] Una clave con `/` o espacios funciona.
- [ ] Sin `any` en `formatAcl`.

## Ficheros afectados

- `src/app/shared/data/repository/provider/impl/api.provider.ts`

## Relacionado

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/repository/provider/impl/api.provider.ts*
