---
id: STY-09
titulo: "Tipografía autoalojada o pila del sistema"
area: estilos-y-theming
epica: EP-STY-2
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [STY-02]
origen: 02-estilos-y-theming.md
---

# STY-09 · Tipografía autoalojada o pila del sistema

**Épica:** [EP-STY-2 · index.html, fuentes e iconos](README.md) — paso 2 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`roboto.css` (17,6 KB) declara todos los subsets (cyrillic, greek, vietnamese…) en 3 pesos, todos desde `fonts.gstatic.com`.

## Tareas

- [x] Usar `@fontsource-variable/roboto` (subset latin y latin-ext) o la pila del sistema como valor por defecto de `$font-family`. *Roboto Variable autoalojada (solo latin y latin-ext) con la pila del sistema como respaldo; `$font-self-hosted: false` desactiva la carga.*
- [x] Borrar `public/assets/roboto.css`.

## Criterios de aceptación

- [x] No hay peticiones a dominios de Google al cargar.
- [x] La fuente se cambia desde `_config.scss`.

## Ficheros afectados

- `public/assets/roboto.css`
- `src/styles/_config.scss`

## Relacionado

**Depende de:**
- [STY-02](../EP-STY-1-fundamentos-de-estilos/STY-02-tema-material-parametrizable.md) — Tema de Material parametrizable y overrides sin !important *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Desbloquea:**
- [STY-07](STY-07-index-html.md) — index.html: idioma dinámico, theme-color y splash

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *public/assets/roboto.css*
