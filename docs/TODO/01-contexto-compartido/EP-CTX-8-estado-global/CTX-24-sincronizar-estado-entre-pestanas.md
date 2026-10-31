---
id: CTX-24
titulo: "Sincronizar sesión, idioma y tenant entre pestañas"
area: contexto-compartido
epica: EP-CTX-8
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CTX-23]
origen: 05-contexto-compartido.md
---

# CTX-24 · Sincronizar sesión, idioma y tenant entre pestañas

**Épica:** [EP-CTX-8 · Estado global](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

A nivel de módulo se hace `window.addEventListener('state-item', …)` (efecto secundario al importar) para sincronizar entre micro-frontends. No hay sincronización entre pestañas: cerrar sesión o cambiar de tenant en una no se refleja en las demás.

## Tareas

- [ ] Sustituir el evento `state-item` por `BroadcastChannel('app-state')` (sirve para MFE y pestañas).
- [ ] Mover el listener al constructor del servicio y cerrarlo en `DestroyRef`.
- [ ] Propagar `logout`, `language` y `tenant`.

## Criterios de aceptación

- [ ] Con dos pestañas abiertas, cerrar sesión en una muestra la otra como no autenticada.

## Ficheros afectados

- `src/app/shared/context/state/app-state.service.ts`

## Relacionado

**Depende de:**
- [CTX-23](CTX-23-app-state-con-signals.md) — AppStateService con signals reales y claves tipadas

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/state/app-state.service.ts*
