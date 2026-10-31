---
id: EP-DATA-1
titulo: "Cliente HTTP (ClientService)"
area: capa-de-datos
prioridad: critica
estado: pendiente
issues: [DATA-02, DATA-01, DATA-04]
---

# EP-DATA-1 · Cliente HTTP (ClientService)

**Prioridad máxima:** 🔴 Crítica · **Issues:** 3 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Fechas bien convertidas, sin esperas infinitas sin sesión y trazas homogéneas.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DATA-02](DATA-02-regex-fechas-offset.md) | Convertir fechas con offset ±hh:mm | 🔴 | S | 🧩 |
| 2 | [DATA-01](DATA-01-token-con-timeout.md) | Peticiones sin sesión: error 401 en lugar de esperar para siempre | 🔴 | S | 🧩 |
| 3 | [DATA-04](DATA-04-client-service-limpieza.md) | ClientService: tipo RequestTarget y trazas homogéneas | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/data/api/client.service.ts` | DATA-01, DATA-02, DATA-04 |
| `src/app/shared/data/api/client.service.spec.ts` | DATA-02 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md) — Identidad y autorización: `src/app/shared/data/api/client.service.ts`
- [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/shared/data/api/client.service.ts`
- [EP-DATA-3](../EP-DATA-3-repositorio/README.md) — RepositoryService y metadatos: `src/app/shared/data/api/client.service.ts`

## Desbloquea

- [CTX-25](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-25-user-info-sin-token.md) — UserInfo como interfaz y sin token en el estado de UI *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*

## Checklist de la épica

- [ ] DATA-02 — Convertir fechas con offset ±hh:mm
- [ ] DATA-01 — Peticiones sin sesión: error 401 en lugar de esperar para siempre
- [ ] DATA-04 — ClientService: tipo RequestTarget y trazas homogéneas
