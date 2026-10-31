---
id: EP-SHELL-6
titulo: "Ficheros de bootstrap"
area: shell-y-layout
prioridad: baja
estado: pendiente
issues: [SHELL-23, SHELL-22]
---

# EP-SHELL-6 · Ficheros de bootstrap

**Prioridad máxima:** ⚪ Baja · **Issues:** 2 · **Esfuerzo estimado:** ~1 días

## Objetivo

Puntos de extensión documentados y entorno con versión.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [SHELL-23](SHELL-23-environment-con-version.md) | Renombrar enviroment y añadir versión de build | ⚪ | S | 🧩 |
| 2 | [SHELL-22](SHELL-22-context-config-documentado.md) | Documentar context.config.ts como punto de extensión | ⚪ | S | 🧩📄 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/bootstrap/enviroment/enviroment.ts` | SHELL-23 |
| `src/app/shared/context/config/app-config.service.ts` | SHELL-23 |
| `src/app/shared/context/config/i18n-loader.service.ts` | SHELL-23 |
| `src/app/bootstrap/context.config.ts` | SHELL-22 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [FEAT-17](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-17-marcas-de-generacion-y-extension.md) — Contrato de regeneración: @generated, @generated-once y extensiones *(épica [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md) — Configuración en runtime: `src/app/shared/context/config/app-config.service.ts`, `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-CTX-7](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md) — Cargador de traducciones: `src/app/shared/context/config/i18n-loader.service.ts`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `src/app/shared/context/config/app-config.service.ts`
- [EP-SHELL-2](../EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/shared/context/config/i18n-loader.service.ts`

## Desbloquea

- [CTX-22](../../01-contexto-compartido/EP-CTX-5-observabilidad/CTX-22-telemetria-atributos-de-recurso.md) — Telemetría: atributos útiles y nombres correctos *(épica [EP-CTX-5](../../01-contexto-compartido/EP-CTX-5-observabilidad/README.md))*

## Checklist de la épica

- [ ] SHELL-23 — Renombrar enviroment y añadir versión de build
- [ ] SHELL-22 — Documentar context.config.ts como punto de extensión
