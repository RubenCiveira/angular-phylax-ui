---
id: STY-19
titulo: "Clases globales de pantalla de entidad y fin de los estilos inline"
area: estilos-y-theming
epica: EP-STY-6
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [STY-03]
origen: 02-estilos-y-theming.md
---

# STY-19 · Clases globales de pantalla de entidad y fin de los estilos inline

**Épica:** [EP-STY-6 · Estilos de las features generadas](README.md) — paso 1 de 1

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Las 26 entidades repiten los mismos estilos (125 SCSS casi idénticos) y 77 plantillas tienen `style="…"`. Las páginas de ruta llevan `styles: [':host { …; margin: 15px; }']` inline. Cambiar el espaciado de las listas exige editar unos 78 sitios.

## Tareas

- [ ] Crear `src/styles/components/_entity-list.scss` con `.entity-page`, `.entity-list`, `.entity-list__toolbar`, `__spacer`, `__search`, `__empty`.
- [ ] Cambiar las plantillas del generador para emitir solo clases y no crear `.scss` por entidad.
- [ ] Regenerar y comparar capturas en 2–3 entidades.

## Criterios de aceptación

- [ ] `grep -rl 'style="' src/app/features` devuelve 0 ficheros.
- [ ] Las features no tienen `.scss` propios (o están vacíos).

## Ficheros afectados

- `src/styles/components/_entity-list.scss`
- `src/app/features/**/*-view-list.component.{html,scss}`
- `src/app/features/**/*-page.component.ts`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*

**Desbloquea:**
- [FEAT-05](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/FEAT-05-pantalla-de-lista-usable.md) — Pantalla de lista: textos, estado vacío y filtros visibles *(épica [EP-FEAT-1](../../08-features-generadas/EP-FEAT-1-listas-de-entidad/README.md))*
- [FEAT-15](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/FEAT-15-paginas-de-ruta.md) — Páginas de ruta con clase global y título *(épica [EP-FEAT-6](../../08-features-generadas/EP-FEAT-6-standalone-y-paginas/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *SCSS e inline styles de las features generadas*
