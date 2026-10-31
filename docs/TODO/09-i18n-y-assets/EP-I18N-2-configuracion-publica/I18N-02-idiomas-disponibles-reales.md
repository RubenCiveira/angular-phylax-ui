---
id: I18N-02
titulo: "available-langs solo con idiomas que existen"
area: i18n-y-assets
epica: EP-I18N-2
paso: 1
prioridad: alta
esfuerzo: S
ambito: local
estado: pendiente
depende_de: [I18N-01]
origen: 09-i18n-y-assets-publicos.md
---

# I18N-02 · available-langs solo con idiomas que existen

**Épica:** [EP-I18N-2 · phylax-config.json](README.md) — paso 1 de 2

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 📄 Local (este proyecto)

## Contexto

`phylax-config.json` declara `available-langs: ["es","pt","fr","de"]`, pero no hay ningún fichero `pt`, `fr` ni `de`.

## Tareas

- [ ] `available-langs: ["es","en"]` y `default-lang: "es"` (o el que se decida).

## Criterios de aceptación

- [ ] El selector de idioma solo ofrece idiomas con traducción.

## Ficheros afectados

- `public/config/phylax-config.json`

## Relacionado

**Depende de:**
- [I18N-01](../EP-I18N-1-ficheros-de-traduccion/I18N-01-recolocar-traducciones-en.md) — Mover los en.json a sus carpetas actuales y borrar las huérfanas *(épica [EP-I18N-1](../EP-I18N-1-ficheros-de-traduccion/README.md))*

**Recomendación de origen:** [09 · i18n y assets públicos](../../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/i18n/** (estructura de carpetas)*
