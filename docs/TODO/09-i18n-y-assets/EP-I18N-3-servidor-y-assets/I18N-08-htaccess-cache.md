---
id: I18N-08
titulo: ".htaccess: caché larga solo para ficheros con hash"
area: i18n-y-assets
epica: EP-I18N-3
paso: 1
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 09-i18n-y-assets-publicos.md
---

# I18N-08 · .htaccess: caché larga solo para ficheros con hash

**Épica:** [EP-I18N-3 · Caché del servidor y assets](README.md) — paso 1 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La regla `immutable` de un año se aplica a todos los `.js`, `.css` y `.json`, incluidos `config/phylax-config.json` e `i18n/**/*.json`, que no llevan hash: los cambios de configuración y traducciones no llegan durante un año.

## Tareas

- [ ] Caché larga solo para `-[A-Z0-9]{8}\.(js|mjs|css)$`.
- [ ] `no-cache` para `/config/` y `/i18n/`.
- [ ] Caché corta con revalidación para imágenes y fuentes.
- [ ] Cabeceras de seguridad (`nosniff`, `Referrer-Policy`).
- [ ] Alternativa: `?v=<build-hash>` en las URLs de configuración e i18n.

## Criterios de aceptación

- [ ] Tras cambiar una traducción en el servidor, una recarga normal la muestra.

## Ficheros afectados

- `public/.htaccess`

## Relacionado

**Recomendación de origen:** [09 · i18n y assets públicos](../../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/.htaccess*
