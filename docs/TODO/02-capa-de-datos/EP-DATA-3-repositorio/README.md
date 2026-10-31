---
id: EP-DATA-3
titulo: "RepositoryService y metadatos"
area: capa-de-datos
prioridad: critica
estado: pendiente
issues: [DATA-10, DATA-14, DATA-11, DATA-12, DATA-15, DATA-03, DATA-13]
---

# EP-DATA-3 · RepositoryService y metadatos

**Prioridad máxima:** 🔴 Crítica · **Issues:** 7 · **Esfuerzo estimado:** ~9 días

## Objetivo

Proyecciones correctas, caché segura entre sesiones y, al final, implementación sobre primitivas de Angular.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DATA-10](DATA-10-proyecciones-conservan-fechas.md) | Las proyecciones no deben convertir las fechas en strings | 🔴 | S | 🧩 |
| 2 | [DATA-14](DATA-14-repository-restos.md) | RepositoryService: limpiar restos de depuración | ⚪ | S | 🧩 |
| 3 | [DATA-11](DATA-11-ttl-cache-configurable.md) | TTL de caché configurable | ⚪ | S | 🧩 |
| 4 | [DATA-12](DATA-12-store-inyectable-y-clear-logout.md) | Store de repositorios inyectable y vaciado al cerrar sesión | 🟠 | M | 🧩 |
| 5 | [DATA-15](DATA-15-entity-metadata-activo.md) | Activar EntityMetadata y borrar APIs comentadas | 🟡 | S | 🧩 |
| 6 | [DATA-03](DATA-03-fechas-por-metadatos.md) | Convertir fechas según los metadatos de la entidad | 🟠 | M | 🧩 |
| 7 | [DATA-13](DATA-13-tick-shift-sobre-resource.md) | Reimplementar Tick/Shift sobre resource()/rxResource() | 🟡 | L | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/data/repository/repository.service.ts` | DATA-03, DATA-10, DATA-11, DATA-12, DATA-13, DATA-14 |
| `src/app/features/**/repository/*-repository.service.ts` | DATA-03, DATA-12 |
| `src/app/shared/data/repository/provider/repository-provider.interface.ts` | DATA-15 |
| `src/app/shared/data/repository/repository.model.ts` | DATA-13, DATA-15 |
| `src/app/shared/data/long-task.model.ts` | DATA-15 |
| `src/app/shared/data/api/client.service.ts` | DATA-03 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md) — Identidad y autorización: `src/app/shared/data/api/client.service.ts`
- [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/shared/data/api/client.service.ts`
- [EP-DATA-1](../EP-DATA-1-cliente-http/README.md) — Cliente HTTP (ClientService): `src/app/shared/data/api/client.service.ts`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/shared/data/repository/repository.service.ts`
- [EP-FEAT-3](../../08-features-generadas/EP-FEAT-3-repositorios/README.md) — Repositorios generados: `src/app/features/**/repository/*-repository.service.ts`

## Desbloquea

- [DEP-10](../../04-dependencias/EP-DEP-6-zoneless/DEP-10-zoneless.md) — Pasar a detección de cambios zoneless *(épica [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md))*
- [FEAT-03](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-03-metadatos-de-campo.md) — Metadatos de campo en el generador (sensitive, list, group…) *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*
- [FEAT-04](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-04-renderizadores-por-tipo.md) — Renderizado de valores por tipo en listas y detalle *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*

## Checklist de la épica

- [ ] DATA-10 — Las proyecciones no deben convertir las fechas en strings
- [ ] DATA-14 — RepositoryService: limpiar restos de depuración
- [ ] DATA-11 — TTL de caché configurable
- [ ] DATA-12 — Store de repositorios inyectable y vaciado al cerrar sesión
- [ ] DATA-15 — Activar EntityMetadata y borrar APIs comentadas
- [ ] DATA-03 — Convertir fechas según los metadatos de la entidad
- [ ] DATA-13 — Reimplementar Tick/Shift sobre resource()/rxResource()
