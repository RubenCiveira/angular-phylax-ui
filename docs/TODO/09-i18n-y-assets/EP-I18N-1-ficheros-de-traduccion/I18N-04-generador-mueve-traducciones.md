---
id: I18N-04
titulo: "El generador mueve las traducciones al renombrar y crea todos los idiomas"
area: i18n-y-assets
epica: EP-I18N-1
paso: 5
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 09-i18n-y-assets-publicos.md
---

# I18N-04 · El generador mueve las traducciones al renombrar y crea todos los idiomas

**Épica:** [EP-I18N-1 · Ficheros de traducción](README.md) — paso 5 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Al cambiar una entidad de dominio, el generador escribió solo `es.json` en la ruta nueva y dejó la antigua.

## Tareas

- [ ] Al renombrar o mover una entidad, mover sus ficheros de i18n.
- [ ] Generar un fichero por cada idioma de `available-langs` (con fallback).
- [ ] Borrar los i18n de entidades eliminadas.

## Criterios de aceptación

- [ ] Mover una entidad de dominio no deja carpetas huérfanas.

## Ficheros afectados

- `(generador)`

## Relacionado

**Recomendación de origen:** [09 · i18n y assets públicos](../../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/i18n/** (estructura de carpetas)*
