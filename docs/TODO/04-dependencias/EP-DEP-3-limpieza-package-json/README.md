---
id: EP-DEP-3
titulo: "Dependencias sobrantes"
area: dependencias
prioridad: media
estado: pendiente
issues: [DEP-05, DEP-06, DEP-07]
---

# EP-DEP-3 · Dependencias sobrantes

**Prioridad máxima:** 🟡 Media · **Issues:** 3 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Quitar `uuid`, `@angular/animations` (si procede) y `platform-browser-dynamic`.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [DEP-05](DEP-05-uuid-por-crypto.md) | Sustituir uuid por crypto.randomUUID() | ⚪ | S | 🧩 |
| 2 | [DEP-06](DEP-06-animaciones-async.md) | provideAnimationsAsync y evaluar retirar @angular/animations | 🟡 | S | 🧩 |
| 3 | [DEP-07](DEP-07-quitar-platform-browser-dynamic.md) | Quitar @angular/platform-browser-dynamic | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/data/repository/repository.service.ts` | DEP-05 |
| `package.json` | DEP-05, DEP-06, DEP-07 |
| `src/app/app.config.ts` | DEP-06 |

## Antes de empezar

No depende de issues de otras épicas: se puede empezar en cualquier momento.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `src/app/app.config.ts`
- [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/app.config.ts`
- [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md) — RepositoryService y metadatos: `src/app/shared/data/repository/repository.service.ts`
- [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `package.json`
- [EP-STY-2](../../03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/app/app.config.ts`
- [EP-DEP-2](../EP-DEP-2-opentelemetry/README.md) — OpenTelemetry: `package.json`
- [EP-DEP-6](../EP-DEP-6-zoneless/README.md) — Zoneless: `src/app/app.config.ts`
- [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md) — Ajustes aislados: `src/app/app.config.ts`
- [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md) — package.json y calidad de código: `package.json`
- [EP-CFG-3](../../06-configuracion-y-build/EP-CFG-3-build-y-tests/README.md) — angular.json, build y tests: `package.json`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/app.config.ts`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `package.json`

## Checklist de la épica

- [ ] DEP-05 — Sustituir uuid por crypto.randomUUID()
- [ ] DEP-06 — provideAnimationsAsync y evaluar retirar @angular/animations
- [x] DEP-07 — Quitar @angular/platform-browser-dynamic
