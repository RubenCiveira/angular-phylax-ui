---
id: EP-STY-6
titulo: "Estilos de las features generadas"
area: estilos-y-theming
prioridad: alta
estado: pendiente
issues: [STY-19]
---

# EP-STY-6 · Estilos de las features generadas

**Prioridad máxima:** 🟠 Alta · **Issues:** 1 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Pantallas de entidad con clases globales y sin estilos inline.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [STY-19](STY-19-estilos-comunes-de-entidad.md) | Clases globales de pantalla de entidad y fin de los estilos inline | 🟠 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/styles/components/_entity-list.scss` | STY-19 |
| `src/app/features/**/*-view-list.component.{html,scss}` | STY-19 |
| `src/app/features/**/*-page.component.ts` | STY-19 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

## Desbloquea

- [FEAT-05](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-05-pantalla-de-lista-usable.md) — Pantalla de lista: textos, estado vacío y filtros visibles *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*
- [FEAT-15](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-15-paginas-de-ruta.md) — Páginas de ruta con clase global y título *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*

## Checklist de la épica

- [ ] STY-19 — Clases globales de pantalla de entidad y fin de los estilos inline
