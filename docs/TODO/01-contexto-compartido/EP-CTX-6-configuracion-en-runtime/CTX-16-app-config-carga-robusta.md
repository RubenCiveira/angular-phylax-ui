---
id: CTX-16
titulo: "Carga de configuración con error visible"
area: contexto-compartido
epica: EP-CTX-6
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-16 · Carga de configuración con error visible

**Épica:** [EP-CTX-6 · Configuración en runtime](README.md) — paso 2 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Se usa `APP_INITIALIZER` (deprecado). `$$_loadConfig` hace `fetch` sin control de errores: si `config/phylax-config.json` falta o está mal formado, la app falla sin mensaje. Además, `deepMerge(env, config)` muta el objeto `environment` importado.

## Tareas

- [ ] Migrar a `provideAppInitializer(async () => …)`.
- [ ] Envolver la carga en `try/catch` y pintar una pantalla de error fatal legible ("No se pudo cargar config/phylax-config.json: <motivo>") directamente en el DOM (sin depender de Angular).
- [ ] Usar `structuredClone(environment)` antes de mezclar.
- [ ] Renombrar los internos `_$$_AppConfigService` y `$$_loadConfig`.

## Criterios de aceptación

- [ ] Con el JSON borrado o mal formado, se ve un mensaje claro en lugar de una pantalla en blanco.

## Ficheros afectados

- `src/app/shared/context/config/app-config.service.ts`

## Relacionado

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/config/app-config.service.ts*
