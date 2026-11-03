---
id: FEAT-15
titulo: "Páginas de ruta con clase global y título"
area: features-generadas
epica: EP-FEAT-6
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [STY-19, SHELL-08]
origen: 08-features-generadas.md
---

# FEAT-15 · Páginas de ruta con clase global y título

**Épica:** [EP-FEAT-6 · Standalone, OnPush y páginas de ruta](README.md) — paso 2 de 2

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`styles: [':host { …; margin: 15px; }']` inline en el decorador y sin `title` en la ruta.

## Tareas

- [ ] Usar `.entity-page`.
- [ ] Definir `title` en la ruta.

## Criterios de aceptación

- [ ] Sin `styles:` en los componentes de página.

## Ficheros afectados

- `src/app/features/**/routes/*/*-page.component.ts`

## Relacionado

**Depende de:**
- [STY-19](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/STY-19-estilos-comunes-de-entidad.md) — Clases globales de pantalla de entidad y fin de los estilos inline *(épica [EP-STY-6](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/README.md))*
- [SHELL-08](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-08-rutas-raiz-y-titulos.md) — Redirección inicial, títulos de pestaña y opciones del router *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *routes/*-view-list-route/*-page.component.ts*
