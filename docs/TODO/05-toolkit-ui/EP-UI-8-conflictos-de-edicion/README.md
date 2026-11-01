---
id: EP-UI-8
titulo: "Resolución de conflictos de edición (412)"
area: toolkit-ui
prioridad: alta
estado: en-curso
issues: [UI-23, UI-24, UI-25, UI-26]
---

# EP-UI-8 · Resolución de conflictos de edición (412)

**Prioridad máxima:** 🟠 Alta · **Issues:** 4 · **Esfuerzo estimado:** ~5 días

## Objetivo

Cuando el servidor rechaza un guardado con **412 Precondition Failed** por bloqueo optimista (el campo `version` enviado ya no es el vigente), el formulario de edición no debe mostrar el modal de error genérico ni perder lo que ha escrito el usuario. En su lugar abre un **cuadro de resolución** que compara, campo a campo, tres valores:

| Columna | Origen |
|---|---|
| **Original** | El valor que se cargó en el formulario al abrir la edición (`run()` de la acción). |
| **Enviado** | El valor que el usuario intentó guardar (`form.value`). |
| **Actual** | El valor vigente en el servidor, releído tras el 412 (o tomado del cuerpo del error si el backend lo devuelve). |

Los cambios que no chocan se fusionan solos (solo cambió el usuario, solo cambió el servidor, o ambos pusieron lo mismo); el usuario solo decide en los campos en conflicto (cambiaron ambos con valores distintos). Al aceptar, el formulario se rellena con el resultado y con la `version` actual, y se reintenta el guardado.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-23](UI-23-modelo-y-fusion-a-tres-bandas.md) | Modelo de conflicto y fusión a tres bandas | 🟠 | S | 🧩 |
| 2 | [UI-24](UI-24-repositorio-detecta-conflicto-412.md) | El repositorio convierte el 412 en un conflicto tipado | 🟠 | M | 🧩 |
| 3 | [UI-25](UI-25-dialogo-de-resolucion-de-conflictos.md) | Diálogo de resolución de conflictos | 🟠 | M | 🧩 |
| 4 | [UI-26](UI-26-edit-action-resuelve-conflictos.md) | La acción de edición generada resuelve conflictos | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/edit-conflict/edit-conflict.model.ts` *(nuevo)* | UI-23, UI-24 |
| `src/app/shared/toolkit/edit-conflict/three-way-merge.ts` *(nuevo)* | UI-23 |
| `src/app/shared/data/repository/repository.service.ts` | UI-24 |
| `src/app/shared/data/repository/repository.model.ts` | UI-24 |
| `src/app/shared/toolkit/edit-conflict/edit-conflict-dialog.component.*` *(nuevo)* | UI-25 |
| `src/app/shared/toolkit/edit-conflict/edit-conflict.service.ts` *(nuevo)* | UI-25 |
| `public/i18n/es.json`, `public/i18n/en.json` | UI-25 |
| `src/app/features/**/actions/*-view-edit-action/*` | UI-26 |
| `src/app/features/**/components/*-view-form-group/*.component.ts` | UI-26 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-05](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/CTX-05-error-service-api-errores-gestionados.md) — `handledErrors` / errores gestionados por el componente *(épica [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md))*: el 412 se marca como gestionado para que no salte el modal global.
- [DEP-09](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) — Servicios de confirmación y aviso *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*: el diálogo se abre con un servicio del toolkit, igual que `ConfirmDialogService`.

Recomendable, no bloqueante:

- [UI-15](../EP-UI-5-acciones/UI-15-base-action-y-confirm-action.md) — `BaseAction`: si ya existe, la lógica de UI-26 va en una clase base de acción de edición en lugar de repetirse en cada acción generada.

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md) — RepositoryService y metadatos: `src/app/shared/data/repository/repository.service.ts`, `repository.model.ts`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/shared/data/repository/repository.service.ts`
- [EP-FEAT-2](../../08-features-generadas/EP-FEAT-2-formularios-y-modelos/README.md) — Formularios y modelos: `src/app/features/**/components/*-view-form-group/*`
- [EP-FEAT-4](../../08-features-generadas/EP-FEAT-4-acciones-generadas/README.md) — Acciones generadas: `src/app/features/**/actions/**`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `public/i18n/es.json`, `public/i18n/en.json`
- [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `public/i18n/es.json`, `public/i18n/en.json`

## Checklist de la épica

- [x] UI-23 — Modelo de conflicto y fusión a tres bandas
- [x] UI-24 — El repositorio convierte el 412 en un conflicto tipado
- [x] UI-25 — Diálogo de resolución de conflictos
- [ ] UI-26 — La acción de edición generada resuelve conflictos
