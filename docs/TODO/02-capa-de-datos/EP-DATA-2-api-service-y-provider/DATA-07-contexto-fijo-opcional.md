---
id: DATA-07
titulo: "Inyección de contexto fijo en el body, opcional por API"
area: capa-de-datos
epica: EP-DATA-2
paso: 3
prioridad: baja
esfuerzo: S
ambito: ambos
estado: hecho
depende_de: [CTX-15]
origen: 06-capa-de-datos.md
---

# DATA-07 · Inyección de contexto fijo en el body, opcional por API

**Épica:** [EP-DATA-2 · ApiService y ApiProvider](README.md) — paso 3 de 5

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

El body de cada mutación se mezcla con `fixedContext`, lo que puede añadir propiedades que el backend no espera sin que se vea.

## Tareas

- [x] Nueva clave de configuración `api.<key>.inject-context: string[]` (por defecto, la lista actual de contextos). *Ausente = todas las claves del contexto fijo (comportamiento previo); no se añade a `phylax-config.json` porque las claves de contexto son dinámicas. Se lee del `AppConfigService` actual, sin esperar a CTX-15.*
- [x] Aplicar solo las claves listadas.

## Criterios de aceptación

- [x] Con `inject-context: []`, el body se envía tal cual.

## Ficheros afectados

- `src/app/shared/data/api/api.service.ts`
- `public/config/phylax-config.json`

## Relacionado

**Depende de:**
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/api/api.service.ts*
