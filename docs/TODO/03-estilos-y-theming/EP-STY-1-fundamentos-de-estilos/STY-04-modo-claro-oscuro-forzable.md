---
id: STY-04
titulo: "Permitir forzar modo claro u oscuro"
area: estilos-y-theming
epica: EP-STY-1
paso: 5
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [STY-02]
origen: 02-estilos-y-theming.md
---

# STY-04 · Permitir forzar modo claro u oscuro

**Épica:** [EP-STY-1 · Fundamentos: src/styles, tokens y tema](README.md) — paso 5 de 6

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`color-scheme: light dark` hace que el modo dependa solo del sistema operativo; el usuario no puede elegir.

## Tareas

- [x] Clases `html.theme-light { color-scheme: light }` y `html.theme-dark { color-scheme: dark }`.
- [x] `ThemeModeService` (`auto | light | dark`) persistido en `localStorage`, que aplica la clase.
- [x] El selector de UI va en SHELL-14.

## Criterios de aceptación

- [x] Cambiar el modo en el servicio cambia la UI sin recargar.

## Ficheros afectados

- `src/styles/_material-theme.scss`
- `src/app/shared/context/theme/theme-mode.service.ts`

## Relacionado

**Depende de:**
- [STY-02](STY-02-tema-material-parametrizable.md) — Tema de Material parametrizable y overrides sin !important

**Desbloquea:**
- [SHELL-14](../../07-shell-y-layout/EP-SHELL-4-toolbar/SHELL-14-menu-de-usuario-preferencias.md) — Menú de usuario con idioma, tenant y tema *(épica [EP-SHELL-4](../../07-shell-y-layout/EP-SHELL-4-toolbar/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *src/styles.scss*
