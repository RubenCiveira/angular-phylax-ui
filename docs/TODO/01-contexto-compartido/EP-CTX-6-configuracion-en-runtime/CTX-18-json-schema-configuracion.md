---
id: CTX-18
titulo: "Publicar phylax-config.schema.json"
area: contexto-compartido
epica: EP-CTX-6
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [CTX-15]
origen: 05-contexto-compartido.md
---

# CTX-18 · Publicar phylax-config.schema.json

**Épica:** [EP-CTX-6 · Configuración en runtime](README.md) — paso 3 de 4

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Quien despliega no tiene forma de saber qué claves admite `phylax-config.json` ni de validarlas.

## Tareas

- [x] Generar `public/config/phylax-config.schema.json` (JSON Schema) a partir de `AppConfig`. *Con `pnpm run config:schema` (`ts-json-schema-generator` sobre `AppConfigFile`: secciones opcionales, sin `name`, con `$schema`). Los JSDoc del modelo salen como descripciones.*
- [x] Añadir `"$schema": "./phylax-config.schema.json"` al JSON.
- [x] Validar el JSON en CI (`ajv-cli` o similar). *`pnpm run config:validate` y `.github/workflows/config.yml`, que además falla si el schema no está al día con el modelo.*

## Criterios de aceptación

- [x] El IDE autocompleta y valida `phylax-config.json`.
- [x] CI falla con una clave mal escrita. *Salvo dentro de `identity.<nombre>`, que admite claves extra por su índice `[extra: string]`.*

## Ficheros afectados

- `public/config/phylax-config.json`
- `public/config/phylax-config.schema.json`

## Relacionado

**Depende de:**
- [CTX-15](CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG)

**Desbloquea:**
- [I18N-07](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/I18N-07-phylax-config-limpio.md) — Limpiar phylax-config.json y publicar un ejemplo de producción *(épica [EP-I18N-2](../../09-i18n-y-assets/EP-I18N-2-configuracion-publica/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *context/config/app-config.service.ts*
