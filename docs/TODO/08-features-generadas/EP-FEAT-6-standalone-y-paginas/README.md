---
id: EP-FEAT-6
titulo: "Standalone, OnPush y páginas de ruta"
area: features-generadas
prioridad: media
estado: pendiente
issues: [FEAT-14, FEAT-15]
---

# EP-FEAT-6 · Standalone, OnPush y páginas de ruta

**Prioridad máxima:** 🟡 Media · **Issues:** 2 · **Esfuerzo estimado:** ~4.5 días

## Objetivo

Sin NgModule, con OnPush y rutas con título.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [FEAT-14](FEAT-14-standalone-onpush.md) | Generar componentes standalone con OnPush y rutas sin NgModule | 🟡 | L | 🧩 |
| 2 | [FEAT-15](FEAT-15-paginas-de-ruta.md) | Páginas de ruta con clase global y título | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/features/**/*.module.ts` | FEAT-14 |
| `src/app/features/**/*.component.ts` | FEAT-14 |
| `src/app/features/**/routes/*/*-page.component.ts` | FEAT-15 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [STY-19](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/STY-19-estilos-comunes-de-entidad.md) — Clases globales de pantalla de entidad y fin de los estilos inline *(épica [EP-STY-6](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/README.md))*
- [UI-14](../../05-toolkit-ui/EP-UI-4-list-view/UI-14-list-view-standalone.md) — Directivas de list-view standalone *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*
- [SHELL-08](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-08-rutas-raiz-y-titulos.md) — Redirección inicial, títulos de pestaña y opciones del router *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*
- [FEAT-12](../EP-FEAT-5-i18n-de-features/FEAT-12-convencion-unica-claves-i18n.md) — Una sola convención de claves i18n en las plantillas (verificar primero) *(épica [EP-FEAT-5](../EP-FEAT-5-i18n-de-features/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-FEAT-5](../EP-FEAT-5-i18n-de-features/README.md) — i18n de las features: `src/app/features/**/*.module.ts`

## Desbloquea

- [DEP-10](../../04-dependencias/EP-DEP-6-zoneless/DEP-10-zoneless.md) — Pasar a detección de cambios zoneless *(épica [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md))*

## Checklist de la épica

- [ ] FEAT-14 — Generar componentes standalone con OnPush y rutas sin NgModule
- [ ] FEAT-15 — Páginas de ruta con clase global y título
