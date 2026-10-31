---
id: EP-STY-4
titulo: "Estilos de list-view"
area: estilos-y-theming
prioridad: critica
estado: pendiente
issues: [STY-12, STY-13, STY-14]
---

# EP-STY-4 · Estilos de list-view

**Prioridad máxima:** 🔴 Crítica · **Issues:** 3 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Lista, tabla y tarjetas legibles en ambos modos y configurables por variables.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [STY-12](STY-12-lista-movil-modo-oscuro.md) | Lista móvil legible en modo oscuro | 🔴 | S | 🧩 |
| 2 | [STY-13](STY-13-tabla-variables-de-componente.md) | Tabla de list-view con variables de componente | 🟠 | S | 🧩 |
| 3 | [STY-14](STY-14-tarjetas-responsive.md) | Rejilla de tarjetas adaptable | 🟠 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/list-view/list-view.list.component.scss` | STY-12 |
| `src/app/shared/toolkit/list-view/list-view.table.component.scss` | STY-13 |
| `src/app/shared/toolkit/list-view/list-view.component.scss` | STY-13 |
| `src/app/shared/toolkit/list-view/list-view.grid.component.scss` | STY-14 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

## Desbloquea

- [UI-12](../../05-toolkit-ui/EP-UI-4-list-view/UI-12-list-view-limpieza.md) — list-view: seleccionar todo y limpieza interna *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*

## Checklist de la épica

- [ ] STY-12 — Lista móvil legible en modo oscuro
- [ ] STY-13 — Tabla de list-view con variables de componente
- [ ] STY-14 — Rejilla de tarjetas adaptable
