---
id: STY-12
titulo: "Lista móvil legible en modo oscuro"
area: estilos-y-theming
epica: EP-STY-4
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: en-curso
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-12 · Lista móvil legible en modo oscuro

**Épica:** [EP-STY-4 · Estilos de list-view](README.md) — paso 1 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`list-view.list.component.scss` usa `#e0e0e0`, `#f5f5f5`, `#333`, `#666`, `#777` y `#2196f3` sobre un fondo `--mat-sys-surface-container-lowest`. En móvil con modo oscuro el texto `#333` queda sobre un fondo casi negro: **la lista no se puede leer**.

## Tareas

- [x] Sustituir los colores por `--app-color-border`, `--app-color-text`, `--app-color-text-muted`, `--app-color-primary`. *Como STY-03 aún no está hecho, se usa `var(--app-…, <reserva>)` con la reserva en `--mat-sys-*`/valor anterior: adopta los tokens en cuanto existan.*
- [x] Hover con `color-mix(in srgb, var(--mat-sys-on-surface) 8%, transparent)`.
- [x] Tipografía con `font: var(--mat-sys-title-medium)` / `--mat-sys-body-medium`.

## Criterios de aceptación

- [x] Con DevTools → *Emulate prefers-color-scheme: dark* y ancho móvil, la lista tiene contraste AA. *Cubierto por test: `list-view.component.spec.ts` mide en Chrome el contraste de título, subtítulo y texto sobre el fondo de la lista con `color-scheme` claro y oscuro (≥ 4.5:1). Con el `#333` original el título daba 1.5:1 en oscuro.*

## Notas

- Bordes, hover y transición salen de las variables de componente declaradas en `:host` (`--list-view-border-color`, `--list-view-hover-bg`, `--list-view-transition`), que apuntan a los tokens `--app-*`.
- Los botones de acción heredan `--app-color-text-muted` en lugar de `#666`.

## Ficheros afectados

- `src/app/shared/toolkit/list-view/list-view.list.component.scss`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *list-view.list.component.scss*
