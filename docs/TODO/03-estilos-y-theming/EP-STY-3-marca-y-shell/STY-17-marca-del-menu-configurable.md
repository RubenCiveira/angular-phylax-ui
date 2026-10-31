---
id: STY-17
titulo: "Logo y nombre del producto configurables en el menú"
area: estilos-y-theming
epica: EP-STY-3
paso: 3
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-06]
origen: 02-estilos-y-theming.md
---

# STY-17 · Logo y nombre del producto configurables en el menú

**Épica:** [EP-STY-3 · Marca configurable y estilos del shell](README.md) — paso 3 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El menú pinta `<img src="./assets/img/logo-75x75.png" style="width: 75px; …"> PHYLAX`, con estilos inline. En modo mini (72 px) el logo desborda.

## Tareas

- [ ] Leer `theme.logo` y `theme.product-name` (o `meta.title`) de la configuración.
- [ ] Clases `.brand`, `.brand-logo` (`--app-brand-logo-size`) y `.brand-name` sin estilos inline.
- [ ] En modo mini, solo el logo.
- [ ] Enlace al inicio con `routerLink`.

## Criterios de aceptación

- [ ] Cambiar `theme.logo` en la configuración cambia el logo.
- [ ] El modo mini no desborda.

## Ficheros afectados

- `src/app/bootstrap/layout/menu/menu.component.html`
- `src/app/bootstrap/layout/menu/menu.component.scss`

## Relacionado

**Depende de:**
- [STY-06](STY-06-theming-en-runtime.md) — Theming en runtime desde la configuración (por despliegue y tenant)

**Recomendación de origen:** [02 · Estilos y theming](../../../recomendaciones/02-estilos-y-theming.md) → *menu.component.html*
