---
id: DATA-07
titulo: "Inyección de contexto fijo en el body, opcional por API"
area: capa-de-datos
epica: EP-DATA-2
paso: 3
prioridad: baja
esfuerzo: S
ambito: ambos
estado: pendiente
depende_de: [CTX-15]
origen: 06-capa-de-datos.md
---

# DATA-07 · Inyección de contexto fijo en el body, opcional por API

**Épica:** [EP-DATA-2 · ApiService y ApiProvider](README.md) — paso 3 de 5

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

El body de cada mutación se mezcla con `fixedContext`, lo que puede añadir propiedades que el backend no espera sin que se vea.

## Tareas

- [ ] Nueva clave de configuración `api.<key>.inject-context: string[]` (por defecto, la lista actual de contextos).
- [ ] Aplicar solo las claves listadas.

## Criterios de aceptación

- [ ] Con `inject-context: []`, el body se envía tal cual.

## Ficheros afectados

- `src/app/shared/data/api/api.service.ts`
- `public/config/phylax-config.json`

## Relacionado

**Depende de:**
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/api/api.service.ts*
