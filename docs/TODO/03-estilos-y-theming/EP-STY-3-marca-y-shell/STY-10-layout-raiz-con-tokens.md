---
id: STY-10
titulo: "Layout raíz con tokens (corrige el nav móvil en modo oscuro)"
area: estilos-y-theming
epica: EP-STY-3
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-10 · Layout raíz con tokens (corrige el nav móvil en modo oscuro)

**Épica:** [EP-STY-3 · Marca configurable y estilos del shell](README.md) — paso 2 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`app.component.scss` fija `260px`, `72px` y `900px` (este también en TS), usa bordes `silver` y en móvil `background: var(--md-sys-color-surface, #fff)`. Ese prefijo no existe en Angular Material, así que el nav móvil es **siempre blanco**, también en modo oscuro.

## Tareas

- [ ] Sustituir medidas y colores por `--app-nav-width`, `--app-nav-width-mini`, `--app-color-border`, `--mat-sys-surface-container`, `--mat-sys-scrim`, `--mat-sys-level3`.
- [ ] Breakpoint en una constante compartida (Sass + `LAYOUT_MOBILE_QUERY` en TS).

## Criterios de aceptación

- [ ] En móvil con modo oscuro, el nav tiene fondo oscuro.
- [ ] La anchura del menú se cambia con una variable.

## Ficheros afectados

- `src/app/app.component.scss`
- `src/app/app.component.ts`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Desbloquea:**
- [SHELL-10](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-10-app-component-signals.md) — AppComponent: estado del nav con signals y persistido *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *src/app/app.component.scss*
