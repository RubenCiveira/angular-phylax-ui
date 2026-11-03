---
id: CTX-20
titulo: "Missing handler que humaniza claves sin traducción"
area: contexto-compartido
epica: EP-CTX-7
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [CTX-19]
origen: 05-contexto-compartido.md
---

# CTX-20 · Missing handler que humaniza claves sin traducción

**Épica:** [EP-CTX-7 · Cargador de traducciones](README.md) — paso 2 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Si falta una clave, Transloco devuelve la clave literal (`access.oauth-client.list.filter.button`). En una base generada las traducciones suelen ir por detrás, así que la UI muestra claves técnicas.

## Tareas

- [x] Implementar `TranslocoMissingHandler`: en producción humaniza el último segmento significativo (`allow-all-scopes.title` → "Allow all scopes"); en desarrollo devuelve `⟦clave⟧` y registra la clave una sola vez.
- [x] Registrarlo con `provideTranslocoMissingHandler`. *Dentro de `provideI18nConfiguration()`; la clase es `HumanizingMissingHandler`. Los segmentos genéricos (`title`, `button`, `label`…) se saltan.*
- [x] Test unitario de la humanización.

## Criterios de aceptación

- [x] Ninguna pantalla muestra una clave con puntos en producción.
- [x] En desarrollo las claves que faltan se ven marcadas.

## Ficheros afectados

- `src/app/shared/context/config/i18n-loader.service.ts`
- `src/app/shared/context/config/missing-handler.ts`

## Relacionado

**Depende de:**
- [CTX-19](CTX-19-i18n-loader-tolerante.md) — i18n loader: tolerar ficheros ausentes y prodMode real

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *context/config/i18n-loader.service.ts*
