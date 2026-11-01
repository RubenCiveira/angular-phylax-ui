---
id: UI-22
titulo: "Avatares de iniciales con contraste AA y colores del tema"
area: toolkit-ui
epica: EP-UI-7
paso: 3
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 07-toolkit-ui.md
---

# UI-22 · Avatares de iniciales con contraste AA y colores del tema

**Épica:** [EP-UI-7 · Ajustes aislados](README.md) — paso 3 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`avatar-text.service.ts` calcula colores de avatar por hash con una paleta fija en JS.

## Tareas

- [x] Verificar contraste ≥ 4,5:1 entre `fg` y `bg`. *El spec replica `color-mix(in oklch)` y el gamut mapping y comprueba los 360 tonos en claro y oscuro con cinco paletas M3 (mínimo ≈ 7,3:1).*
- [x] Generar los colores a partir del tema (por ejemplo `color-mix(in oklch, var(--mat-sys-primary) …)` con tono por hash). *`bg`/`fg` = 30 % de `--mat-sys-primary-container` / `--mat-sys-on-primary-container` mezclado con `light-dark(oklch(L C <hash>), …)`; la API de `AvatarSpec` no cambia para `list-view` (añade `hue`; se quitan las opciones `saturation`/`lightness`).*

## Criterios de aceptación

- [x] Todos los avatares cumplen contraste AA.

## Ficheros afectados

- `src/app/shared/toolkit/avatar-text.service.ts`

## Relacionado

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *avatar-text.service.ts*
