---
id: EP-STY-2
titulo: "index.html, fuentes e iconos"
area: estilos-y-theming
prioridad: alta
estado: pendiente
issues: [STY-08, STY-09, STY-07]
---

# EP-STY-2 · index.html, fuentes e iconos

**Prioridad máxima:** 🟠 Alta · **Issues:** 3 · **Esfuerzo estimado:** ~2.5 días

## Objetivo

Sin dependencias de CDN y con un index.html que respeta idioma y tema.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [STY-08](STY-08-iconos-autoalojados.md) | Iconos autoalojados (Material Symbols o sprite SVG) | 🟠 | M | 🧩 |
| 2 | [STY-09](STY-09-tipografia-autoalojada.md) | Tipografía autoalojada o pila del sistema | 🟡 | S | 🧩 |
| 3 | [STY-07](STY-07-index-html.md) | index.html: idioma dinámico, theme-color y splash | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `public/assets/mat.css` | STY-08 |
| `src/index.html` | STY-07, STY-08 |
| `src/app/app.config.ts` | STY-08 |
| `public/assets/roboto.css` | STY-09 |
| `src/styles/_config.scss` | STY-09 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [STY-02](../EP-STY-1-fundamentos-de-estilos/STY-02-tema-material-parametrizable.md) — Tema de Material parametrizable y overrides sin !important *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-1](../../01-contexto-compartido/EP-CTX-1-step-up-e-interceptores/README.md) — Step-up e interceptores HTTP: `src/app/app.config.ts`
- [EP-CTX-4](../../01-contexto-compartido/EP-CTX-4-gestion-de-errores/README.md) — Gestión de errores: `src/app/app.config.ts`
- [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md) — Fundamentos: src/styles, tokens y tema: `src/styles/_config.scss`
- [EP-STY-3](../EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `src/index.html`
- [EP-DEP-3](../../04-dependencias/EP-DEP-3-limpieza-package-json/README.md) — Dependencias sobrantes: `src/app/app.config.ts`
- [EP-DEP-6](../../04-dependencias/EP-DEP-6-zoneless/README.md) — Zoneless: `src/app/app.config.ts`
- [EP-UI-7](../../05-toolkit-ui/EP-UI-7-ajustes-aislados/README.md) — Ajustes aislados: `src/app/app.config.ts`
- [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md) — Arranque, rutas raíz y valores por defecto: `src/app/app.config.ts`
- [EP-I18N-3](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/README.md) — Caché del servidor y assets: `src/index.html`

## Checklist de la épica

- [ ] STY-08 — Iconos autoalojados (Material Symbols o sprite SVG)
- [ ] STY-09 — Tipografía autoalojada o pila del sistema
- [ ] STY-07 — index.html: idioma dinámico, theme-color y splash
