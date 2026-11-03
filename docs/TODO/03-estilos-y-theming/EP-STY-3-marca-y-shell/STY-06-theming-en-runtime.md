---
id: STY-06
titulo: "Theming en runtime desde la configuración (por despliegue y tenant)"
area: estilos-y-theming
epica: EP-STY-3
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: [STY-03, CTX-15]
origen: 02-estilos-y-theming.md
---

# STY-06 · Theming en runtime desde la configuración (por despliegue y tenant)

**Épica:** [EP-STY-3 · Marca configurable y estilos del shell](README.md) — paso 1 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La configuración en runtime resuelve API, identidad, i18n y telemetría, pero no estilos: cambiar la marca exige recompilar.

## Tareas

- [x] Sección `theme` en `AppConfig`: `mode`, `tokens` (mapa variable → valor), `logo`, `logo-dark`, `product-name`.
- [x] Aplicar `tokens` con `document.documentElement.style.setProperty` en el inicializador.
- [x] Soporte `theme.tenants.<tenant>.tokens` aplicado al cambiar `AppStateService.tenant`.
- [x] Alternativa simple: `<link rel="stylesheet" href="config/theme.css" onerror="this.remove()">` en `index.html`.
- [x] Documentar en el README cómo generar la paleta M3 completa (`ng generate @angular/material:theme-color`).

## Criterios de aceptación

- [x] Cambiar `theme.tokens["--mat-sys-primary"]` en el JSON montado en Docker cambia el color sin recompilar.
- [x] Dos tenants pueden tener colores distintos.

## Ficheros afectados

- `public/config/phylax-config.json`
- `src/app/shared/context/config/app-config.service.ts`
- `src/index.html`

## Relacionado

**Depende de:**
- [STY-03](../EP-STY-1-fundamentos-de-estilos/STY-03-design-tokens-app.md) — Definir los design tokens --app-* *(épica [EP-STY-1](../EP-STY-1-fundamentos-de-estilos/README.md))*
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Desbloquea:**
- [STY-17](STY-17-marca-del-menu-configurable.md) — Logo y nombre del producto configurables en el menú
- [I18N-10](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/I18N-10-imagenes-svg-y-favicon.md) — Ilustraciones y logo en SVG adaptables al tema *(épica [EP-I18N-3](../../09-i18n-y-assets/EP-I18N-3-servidor-y-assets/README.md))*

**Recomendación de origen:** [02 · Estilos y theming](../../recomendaciones/02-estilos-y-theming.md) → *public/config/theme.css (nuevo)*
