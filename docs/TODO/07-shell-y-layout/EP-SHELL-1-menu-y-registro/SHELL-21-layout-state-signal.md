---
id: SHELL-21
titulo: "LayoutStateService con signal"
area: shell-y-layout
epica: EP-SHELL-1
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 04-shell-y-layout.md
---

# SHELL-21 · LayoutStateService con signal

**Épica:** [EP-SHELL-1 · Registro de features y menú](README.md) — paso 2 de 7

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Reimplementa un `BehaviorSubject` con `.set` mediante `as any`.

## Tareas

- [ ] `readonly menu = signal<MenuItem[]>([])` y `toObservable` donde haga falta.

## Criterios de aceptación

- [ ] Sin `as any` en el servicio.

## Ficheros afectados

- `src/app/bootstrap/layout/layout-state.service.ts`

## Relacionado

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *layout-state.service.ts*
