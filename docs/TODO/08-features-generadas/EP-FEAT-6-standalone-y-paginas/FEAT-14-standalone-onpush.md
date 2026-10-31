---
id: FEAT-14
titulo: "Generar componentes standalone con OnPush y rutas sin NgModule"
area: features-generadas
epica: EP-FEAT-6
paso: 1
prioridad: media
esfuerzo: L
ambito: plantilla
estado: pendiente
depende_de: [UI-14, FEAT-12]
origen: 08-features-generadas.md
---

# FEAT-14 · Generar componentes standalone con OnPush y rutas sin NgModule

**Épica:** [EP-FEAT-6 · Standalone, OnPush y páginas de ruta](README.md) — paso 1 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** L (> 2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

344 `NgModule` y 344 componentes `standalone: false`, ninguno con `OnPush`. `provideTranslocoScope` se repite en ~14 módulos por entidad.

## Tareas

- [ ] Probar el schematic `ng g @angular/core:standalone` en una entidad.
- [ ] Llevar el resultado a las plantillas: componentes standalone, `OnPush`, `export const ROUTES`.
- [ ] `provideTranslocoScope` en los `providers` de la ruta.
- [ ] Regenerar todas las entidades.

## Criterios de aceptación

- [ ] No quedan `NgModule` en `src/app/features`.
- [ ] Todos los componentes generados usan `OnPush`.

## Ficheros afectados

- `src/app/features/**/*.module.ts`
- `src/app/features/**/*.component.ts`

## Relacionado

**Depende de:**
- [UI-14](../../05-toolkit-ui/EP-UI-4-list-view/UI-14-list-view-standalone.md) — Directivas de list-view standalone *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*
- [FEAT-12](../EP-FEAT-5-i18n-de-features/FEAT-12-convencion-unica-claves-i18n.md) — Una sola convención de claves i18n en las plantillas (verificar primero) *(épica [EP-FEAT-5](../EP-FEAT-5-i18n-de-features/README.md))*

**Desbloquea:**
- [DEP-10](../../04-dependencias/EP-DEP-6-zoneless/DEP-10-zoneless.md) — Pasar a detección de cambios zoneless *(épica [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → ***/*.module.ts y standalone: false*
