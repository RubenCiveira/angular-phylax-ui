---
id: I18N-03
titulo: "Validar en CI scopes, carpetas y claves entre idiomas"
area: i18n-y-assets
epica: EP-I18N-1
paso: 3
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [I18N-01]
origen: 09-i18n-y-assets-publicos.md
---

# I18N-03 · Validar en CI scopes, carpetas y claves entre idiomas

**Épica:** [EP-I18N-1 · Ficheros de traducción](README.md) — paso 3 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Nada detectó que faltaban 17 `en.json` ni las 26 carpetas huérfanas.

## Tareas

- [ ] Script que compare los scopes de `provideTranslocoScope` con las carpetas de `public/i18n`.
- [ ] Comparar las claves entre idiomas de cada scope.
- [ ] Ejecutarlo en CI.

## Criterios de aceptación

- [ ] CI falla si falta un idioma, sobra una carpeta o una clave no está en todos los idiomas.

## Ficheros afectados

- `scripts/check-i18n.mjs`
- `package.json`

## Relacionado

**Depende de:**
- [I18N-01](I18N-01-recolocar-traducciones-en.md) — Mover los en.json a sus carpetas actuales y borrar las huérfanas

**Recomendación de origen:** [09 · i18n y assets públicos](../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/i18n/** (estructura de carpetas)*
