---
id: UI-19
titulo: "Página de error traducida y útil"
area: toolkit-ui
epica: EP-UI-6
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [I18N-05]
origen: 07-toolkit-ui.md
---

# UI-19 · Página de error traducida y útil

**Épica:** [EP-UI-6 · Páginas y modal de error](README.md) — paso 1 de 2

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La plantilla no usa el pipe `transloco`: pinta literalmente `{{ 'app.layout.errorpage.error_404.title' }}`. Los 5xx caen en "error desconocido" y muestran `JSON.stringify(error.error)` al usuario. `smallScreen` nunca cambia y el botón de inicio usa `href="/"`.

## Tareas

- [x] Importar `TranslocoModule` y usar `| transloco` en todos los textos. *Claves en `errors.page.*` (en/es), la sección `errors` de I18N-05.*
- [x] Caso propio para 5xx ("el servicio no responde, inténtalo en unos minutos").
- [x] Detalle técnico solo en `<details>` plegado (o en `isDevMode()`), con el `traceId` del span para soporte. *`ErrorService.storeError` anota `error.traceId`.*
- [x] `routerLink` al inicio con idioma y tenant. *Además admite `titleKey`/`messageKey`, `showHome` y acciones proyectadas, que usa la página de acceso denegado (CTX-13).*
- [x] `smallScreen` desde `BreakpointObserver` o quitarlo. *Quitado: lo resuelve el CSS (`flex-wrap` y media query).*

## Criterios de aceptación

- [x] Un 404 y un 503 muestran textos traducidos distintos.
- [x] Ningún error muestra JSON crudo por defecto.

## Ficheros afectados

- `src/app/shared/toolkit/error-page/error-page.component.ts`
- `src/app/shared/toolkit/error-page/error-page.component.html`

## Relacionado

**Depende de:**
- [I18N-05](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-05-i18n-global.md) — Traducciones globales del shell, toolkit y errores *(épica [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md))*

**Desbloquea:**
- [CTX-13](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-13-pagina-unauthorized-con-salida.md) — Página de acceso denegado con acciones (401/403) *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*
- [UI-20](UI-20-error-modal-acciones.md) — Modal de error con acciones y sin código muerto
- [SHELL-18](../../07-shell-y-layout/EP-SHELL-5-paginas-del-layout/SHELL-18-pagina-404.md) — Página 404 con salida *(épica [EP-SHELL-5](../../07-shell-y-layout/EP-SHELL-5-paginas-del-layout/README.md))*

**Recomendación de origen:** [07 · Toolkit de UI](../../recomendaciones/07-toolkit-ui.md) → *error-page/error-page.component.ts / .html*
