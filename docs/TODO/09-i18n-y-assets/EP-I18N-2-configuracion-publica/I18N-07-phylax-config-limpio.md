---
id: I18N-07
titulo: "Limpiar phylax-config.json y publicar un ejemplo de producción"
area: i18n-y-assets
epica: EP-I18N-2
paso: 2
prioridad: alta
esfuerzo: S
ambito: ambos
estado: pendiente
depende_de: [CTX-18]
origen: 09-i18n-y-assets-publicos.md
---

# I18N-07 · Limpiar phylax-config.json y publicar un ejemplo de producción

**Épica:** [EP-I18N-2 · phylax-config.json](README.md) — paso 2 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

- `…/oauth/openid//{{tenant}}/…` tiene doble barra.
- `ph-audience` duplica `audience` y no se usa.
- `pkce: false` se ignora.
- `meta.title` vale `"config de phylax"`.
- Solo hay valores de desarrollo (`localhost`).

## Tareas

- [ ] Corregir la doble barra y quitar `ph-audience` y `pkce`.
- [ ] `meta.title: "Phylax"`.
- [ ] Añadir las secciones nuevas (`tenant`, `data`, `theme`, `layout`) con valores por defecto.
- [ ] Crear `phylax-config.example.prod.json`.

## Criterios de aceptación

- [ ] El JSON valida contra el esquema de CTX-18.
- [ ] Hay un ejemplo de producción documentado.

## Ficheros afectados

- `public/config/phylax-config.json`
- `public/config/phylax-config.example.prod.json`

## Relacionado

**Depende de:**
- [CTX-18](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-18-json-schema-configuracion.md) — Publicar phylax-config.schema.json *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Recomendación de origen:** [09 · i18n y assets públicos](../../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/config/phylax-config.json*
