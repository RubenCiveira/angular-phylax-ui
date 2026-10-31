---
id: SHELL-10
titulo: "AppComponent: estado del nav con signals y persistido"
area: shell-y-layout
epica: EP-SHELL-3
paso: 1
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-10]
origen: 04-shell-y-layout.md
---

# SHELL-10 · AppComponent: estado del nav con signals y persistido

**Épica:** [EP-SHELL-3 · AppComponent](README.md) — paso 1 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`get isMobile()` llama a `matchMedia` en cada ciclo de detección de cambios. El estado del nav son tres booleanos con `@HostBinding` que no se guardan. Hay propiedades sin uso (`mobile`, `visibleMenu`, `menuStyle`, `headerCompact`, `headerHide`) y no se actualiza `document.documentElement.lang`.

## Tareas

- [ ] `isMobile` con `toSignal(BreakpointObserver…)`.
- [ ] `navMode = signal<'full'|'mini'|'hide'>` persistido en `localStorage` y aplicado con `host`.
- [ ] `effect` que actualiza `document.documentElement.lang`.
- [ ] Quitar propiedades muertas; `OnPush`.

## Criterios de aceptación

- [ ] El modo de menú elegido se mantiene al recargar.
- [ ] `<html lang>` cambia con el idioma.

## Ficheros afectados

- `src/app/app.component.ts`

## Relacionado

**Depende de:**
- [STY-10](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-10-layout-raiz-con-tokens.md) — Layout raíz con tokens (corrige el nav móvil en modo oscuro) *(épica [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *src/app/app.component.ts*
