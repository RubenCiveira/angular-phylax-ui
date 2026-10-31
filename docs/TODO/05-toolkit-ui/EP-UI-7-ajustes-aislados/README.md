---
id: EP-UI-7
titulo: "Ajustes aislados"
area: toolkit-ui
prioridad: media
estado: pendiente
issues: [UI-18, UI-21, UI-22]
---

# EP-UI-7 · Ajustes aislados

**Prioridad máxima:** 🟡 Media · **Issues:** 3 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Mejoras pequeñas que no comparten ficheros entre sí; se pueden repartir o hacer en cualquier hueco.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-18](UI-18-ui-defaults-apariencia.md) | Apariencia de los campos desde provideUiDefaults | 🟡 | S | 🧩 |
| 2 | [UI-21](UI-21-long-task-view-accesible.md) | long-task-view: progreso accesible | ⚪ | S | 🧩 |
| 3 | [UI-22](UI-22-avatares-con-contraste.md) | Avatares de iniciales con contraste AA y colores del tema | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/form-layout/form-layout.component.ts` | UI-18 |
| `src/app/app.config.ts` | UI-18 |
| `src/app/shared/toolkit/long-task-view/**` | UI-21 |
| `src/app/shared/toolkit/avatar-text.service.ts` | UI-22 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [DATA-08](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/DATA-08-poll-until-con-backoff.md) — Sondeo de operaciones masivas con backoff y límite *(épica [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `src/app/app.config.ts`
- [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/app.config.ts`
- [EP-STY-2](../../03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/app/app.config.ts`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/app.config.ts`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `src/app/app.config.ts`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/app.config.ts`

## Checklist de la épica

- [ ] UI-18 — Apariencia de los campos desde provideUiDefaults
- [ ] UI-21 — long-task-view: progreso accesible
- [ ] UI-22 — Avatares de iniciales con contraste AA y colores del tema
