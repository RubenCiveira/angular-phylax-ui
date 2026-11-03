---
id: CTX-19
titulo: "i18n loader: tolerar ficheros ausentes y prodMode real"
area: contexto-compartido
epica: EP-CTX-7
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-19 · i18n loader: tolerar ficheros ausentes y prodMode real

**Épica:** [EP-CTX-7 · Cargador de traducciones](README.md) — paso 1 de 2

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`getTranslation` combina con `forkJoin` el idioma activo y el idioma por defecto. Si uno de los ficheros da 404 (17 scopes no tienen `en.json`), **falla el scope entero**. Además `prodMode: false` está fijado y `buildTranslocoConfig` muta el array `available-langs` de la configuración.

## Tareas

- [x] Cada petición con `catchError(() => of({}))` (y log de aviso una vez por fichero). *Aviso con `rootLogger.warn`.*
- [x] `prodMode: !isDevMode()`.
- [x] No mutar la configuración: `const availables = [...(conf['available-langs'] ?? ['en', 'es'])]`. *Ya lo hacía `availableLanguages()` en `defaults.service.ts` (CTX-15); se añade un test que lo fija.*
- [x] Test: scope con solo `es.json` carga correctamente en `es`.
- [x] *(Añadido)* `TRANSLOCO_CONFIG` no depende de `STATIC_CONF`: se construye desde `APP_CONFIG` (con los idiomas por defecto si aún no ha llegado) y un `APP_INITIALIZER` actualiza idiomas disponibles e idioma por defecto de Transloco al llegar la configuración. *Motivo: `StepUpService` → `NotifyService` → `TranslocoService` se crea desde otro `APP_INITIALIZER` antes de que termine el `fetch` de la configuración, y `STATIC_CONF` valía `null`.*
- [x] Tras SHELL-23: importa `environment/environment` y añade `?v=<versión>` a los JSON en builds, para no servir traducciones cacheadas de un despliegue anterior (los ficheros de `public/` no llevan hash).

## Criterios de aceptación

- [x] Con `en.json` ausente, las pantallas en `es` se traducen.
- [x] En producción no hay warnings de Transloco.

## Ficheros afectados

- `src/app/shared/context/config/i18n-loader.service.ts`

## Relacionado

**Desbloquea:**
- [CTX-20](CTX-20-transloco-missing-handler.md) — Missing handler que humaniza claves sin traducción
- [SHELL-09](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-09-app-config-providers.md) — Ordenar app.config.ts: una sola configuración de i18n *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*
- [FEAT-12](../../08-features-generadas/EP-FEAT-5-i18n-de-features/FEAT-12-convencion-unica-claves-i18n.md) — Una sola convención de claves i18n en las plantillas (verificar primero) *(épica [EP-FEAT-5](../../08-features-generadas/EP-FEAT-5-i18n-de-features/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *context/config/i18n-loader.service.ts*
