---
id: STY-03
titulo: "Definir los design tokens --app-*"
area: estilos-y-theming
epica: EP-STY-1
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [STY-01]
origen: 02-estilos-y-theming.md
---

# STY-03 · Definir los design tokens --app-*

**Épica:** [EP-STY-1 · Fundamentos: src/styles, tokens y tema](README.md) — paso 2 de 6

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay una capa de tokens propia: cada componente decide colores, radios y espaciados. Es la base de todos los demás issues de estilos.

## Tareas

- [x] En `_tokens.scss`, definir `--app-color-*` (primary, surface, border, text, text-muted, success, on-success), `--app-radius-*`, `--app-space-*`, `--app-nav-width(-mini)`, `--app-row-height`, `--app-transition-*`.
- [x] Valores por defecto apuntando a `--mat-sys-*`.
- [x] Documentar los tokens en `src/styles/README.md` (tabla nombre → uso → valor por defecto).

## Criterios de aceptación

- [x] Los tokens existen en `:root` y están documentados.

## Ficheros afectados

- `src/styles/_tokens.scss`
- `src/styles/README.md`

## Relacionado

**Depende de:**
- [STY-01](STY-01-estructura-src-styles.md) — Crear la estructura src/styles/ sin cambios visuales

**Desbloquea:**
- [STY-20](STY-20-stylelint.md) — Añadir stylelint para proteger los tokens
- [STY-06](../EP-STY-3-marca-y-shell/STY-06-theming-en-runtime.md) — Theming en runtime desde la configuración (por despliegue y tenant) *(épica [EP-STY-3](../EP-STY-3-marca-y-shell/README.md))*
- [STY-10](../EP-STY-3-marca-y-shell/STY-10-layout-raiz-con-tokens.md) — Layout raíz con tokens (corrige el nav móvil en modo oscuro) *(épica [EP-STY-3](../EP-STY-3-marca-y-shell/README.md))*
- [STY-12](../EP-STY-4-estilos-list-view/STY-12-lista-movil-modo-oscuro.md) — Lista móvil legible en modo oscuro *(épica [EP-STY-4](../EP-STY-4-estilos-list-view/README.md))*
- [STY-13](../EP-STY-4-estilos-list-view/STY-13-tabla-variables-de-componente.md) — Tabla de list-view con variables de componente *(épica [EP-STY-4](../EP-STY-4-estilos-list-view/README.md))*
- [STY-15](../EP-STY-5-estilos-formularios-y-toolkit/STY-15-editables-sin-mdc-ni-hex.md) — Editables: tokens M3 en lugar de --mdc-* y hex *(épica [EP-STY-5](../EP-STY-5-estilos-formularios-y-toolkit/README.md))*
- [STY-16](../EP-STY-5-estilos-formularios-y-toolkit/STY-16-error-modal-tokens.md) — Colores del modal de error con tokens y contraste AA *(épica [EP-STY-5](../EP-STY-5-estilos-formularios-y-toolkit/README.md))*
- [STY-19](../EP-STY-6-estilos-de-features/STY-19-estilos-comunes-de-entidad.md) — Clases globales de pantalla de entidad y fin de los estilos inline *(épica [EP-STY-6](../EP-STY-6-estilos-de-features/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *Arquitectura objetivo*
