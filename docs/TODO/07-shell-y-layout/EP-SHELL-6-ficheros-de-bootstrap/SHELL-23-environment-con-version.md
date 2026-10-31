---
id: SHELL-23
titulo: "Renombrar enviroment y añadir versión de build"
area: shell-y-layout
epica: EP-SHELL-6
paso: 1
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 04-shell-y-layout.md
---

# SHELL-23 · Renombrar enviroment y añadir versión de build

**Épica:** [EP-SHELL-6 · Ficheros de bootstrap](README.md) — paso 1 de 2

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La carpeta y el fichero tienen errata (`enviroment`) y solo contienen `{ name: 'phylax' }`.

## Tareas

- [ ] Renombrar a `environment/environment.ts` y actualizar imports.
- [ ] Inyectar `version` y `buildDate` en el build.

## Criterios de aceptación

- [ ] La versión está disponible para pie y telemetría.

## Ficheros afectados

- `src/app/bootstrap/enviroment/enviroment.ts`
- `src/app/shared/context/config/app-config.service.ts`
- `src/app/shared/context/config/i18n-loader.service.ts`

## Relacionado

**Desbloquea:**
- [CTX-22](../../01-contexto-compartido/EP-CTX-5-observabilidad/CTX-22-telemetria-atributos-de-recurso.md) — Telemetría: atributos útiles y nombres correctos *(épica [EP-CTX-5](../../01-contexto-compartido/EP-CTX-5-observabilidad/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *enviroment/enviroment.ts*
