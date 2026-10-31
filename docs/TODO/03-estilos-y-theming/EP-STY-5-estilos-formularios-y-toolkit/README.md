---
id: EP-STY-5
titulo: "Formularios y componentes del toolkit"
area: estilos-y-theming
prioridad: alta
estado: pendiente
issues: [STY-11, STY-15, STY-16]
---

# EP-STY-5 · Formularios y componentes del toolkit

**Prioridad máxima:** 🟠 Alta · **Issues:** 3 · **Esfuerzo estimado:** ~2.5 días

## Objetivo

Rejilla global única y editables y modales sin colores fijos.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [STY-11](STY-11-rejilla-global-unica.md) | Generar la rejilla una sola vez y simplificar form-layout | 🟠 | S | 🧩 |
| 2 | [STY-15](STY-15-editables-sin-mdc-ni-hex.md) | Editables: tokens M3 en lugar de --mdc-* y hex | 🟡 | M | 🧩 |
| 3 | [STY-16](STY-16-error-modal-tokens.md) | Colores del modal de error con tokens y contraste AA | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/form-layout/form-layout.component.scss` | STY-11 |
| `src/styles/_utilities.scss` | STY-11 |
| `src/app/features/**/*-form-group.component.html` | STY-11 |
| `src/app/shared/toolkit/editable/*/*.scss` | STY-15 |
| `src/app/shared/toolkit/error-modal/error-modal.component.css` | STY-16 |
| `src/app/shared/toolkit/error-page/error-page.component.css` | STY-16 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [STY-01](../EP-STY-1-fundamentos-de-estilos/STY-01-estructura-src-styles.md) — Crear la estructura src/styles/ sin cambios visuales *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

## Checklist de la épica

- [ ] STY-11 — Generar la rejilla una sola vez y simplificar form-layout
- [ ] STY-15 — Editables: tokens M3 en lugar de --mdc-* y hex
- [ ] STY-16 — Colores del modal de error con tokens y contraste AA
