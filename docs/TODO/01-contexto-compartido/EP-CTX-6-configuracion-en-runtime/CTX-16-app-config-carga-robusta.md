---
id: CTX-16
titulo: "Carga de configuración con error visible"
area: contexto-compartido
epica: EP-CTX-6
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-16 · Carga de configuración con error visible

**Épica:** [EP-CTX-6 · Configuración en runtime](README.md) — paso 2 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Se usa `APP_INITIALIZER` (deprecado). `$$_loadConfig` hace `fetch` sin control de errores: si `config/phylax-config.json` falta o está mal formado, la app falla sin mensaje. Además, `deepMerge(env, config)` muta el objeto `environment` importado.

## Tareas

- [x] Migrar a `provideAppInitializer(async () => …)`.
- [x] Envolver la carga en `try/catch` y pintar una pantalla de error fatal legible ("No se pudo cargar config/phylax-config.json: <motivo>") directamente en el DOM (sin depender de Angular). *En `config-fatal-error.ts`. Cubre HTTP no 2xx, JSON mal formado (incluido el `index.html` que sirve `ng serve`), contenido que no es un objeto y fallo de red. Tras pintarlo, el initializer rechaza y la app no arranca a medias. En un microfront solo se registra en consola: no se pinta encima del host.*
- [x] Usar `structuredClone(environment)` antes de mezclar.
- [x] Renombrar los internos `_$$_AppConfigService` y `$$_loadConfig`. *Ahora `ConfigStore` y `loadShellConfig()`.*

## Criterios de aceptación

- [x] Con el JSON borrado o mal formado, se ve un mensaje claro en lugar de una pantalla en blanco.

## Ficheros afectados

- `src/app/shared/context/config/app-config.service.ts`

## Relacionado

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *context/config/app-config.service.ts*
