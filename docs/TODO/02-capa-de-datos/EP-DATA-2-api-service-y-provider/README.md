---
id: EP-DATA-2
titulo: "ApiService y ApiProvider"
area: capa-de-datos
prioridad: critica
estado: pendiente
issues: [DATA-05, DATA-06, DATA-07, DATA-08, DATA-09]
---

# EP-DATA-2 · ApiService y ApiProvider

**Prioridad máxima:** 🔴 Crítica · **Issues:** 5 · **Esfuerzo estimado:** ~3.5 días

## Objetivo

Mutaciones de una sola emisión, resolución de hosts predecible y sondeo acotado.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DATA-05](DATA-05-api-query-vs-command.md) | Las mutaciones no deben repetirse al cambiar el contexto | 🔴 | M | 🧩 |
| 2 | [DATA-06](DATA-06-host-logico-exacto.md) | Resolver hosts lógicos por coincidencia exacta | 🟡 | S | 🧩 |
| 3 | [DATA-07](DATA-07-contexto-fijo-opcional.md) | Inyección de contexto fijo en el body, opcional por API | ⚪ | S | 🧩📄 |
| 4 | [DATA-08](DATA-08-poll-until-con-backoff.md) | Sondeo de operaciones masivas con backoff y límite | 🟡 | S | 🧩 |
| 5 | [DATA-09](DATA-09-api-provider-encoding-y-tipos.md) | ApiProvider: codificar claves en la URL y tipar el ACL | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/data/api/api.service.ts` | DATA-05, DATA-06, DATA-07 |
| `src/app/shared/data/repository/provider/impl/api.provider.ts` | DATA-05, DATA-08, DATA-09 |
| `public/config/phylax-config.json` | DATA-07 |
| `src/app/shared/data/poll-until.ts` | DATA-08 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md) — Proveedor OIDC: `public/config/phylax-config.json`
- [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md) — Configuración en runtime: `public/config/phylax-config.json`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `public/config/phylax-config.json`
- [EP-I18N-2](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/README.md) — phylax-config.json: `public/config/phylax-config.json`

## Desbloquea

- [UI-21](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/UI-21-long-task-view-accesible.md) — long-task-view: progreso accesible *(épica [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md))*

## Checklist de la épica

- [ ] DATA-05 — Las mutaciones no deben repetirse al cambiar el contexto
- [ ] DATA-06 — Resolver hosts lógicos por coincidencia exacta
- [ ] DATA-07 — Inyección de contexto fijo en el body, opcional por API
- [ ] DATA-08 — Sondeo de operaciones masivas con backoff y límite
- [ ] DATA-09 — ApiProvider: codificar claves en la URL y tipar el ACL
