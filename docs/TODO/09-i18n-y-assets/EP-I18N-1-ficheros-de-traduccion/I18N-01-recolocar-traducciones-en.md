---
id: I18N-01
titulo: "Mover los en.json a sus carpetas actuales y borrar las huérfanas"
area: i18n-y-assets
epica: EP-I18N-1
paso: 1
prioridad: critica
esfuerzo: S
ambito: local
estado: pendiente
depende_de: []
origen: 09-i18n-y-assets-publicos.md
---

# I18N-01 · Mover los en.json a sus carpetas actuales y borrar las huérfanas

**Épica:** [EP-I18N-1 · Ficheros de traducción](README.md) — paso 1 de 5

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 📄 Local (este proyecto)

## Contexto

17 de los 26 scopes solo tienen `es.json`. Los `en.json` siguen en las carpetas antiguas de cuando las entidades cambiaron de dominio (`access/tenant` → `identity/tenant`, `document/*` → `template/*`…). Hay 26 carpetas huérfanas en total, incluida `access/user-role-assignament` (errata).

## Tareas

- [ ] Para cada carpeta antigua con equivalente nuevo: `git mv <antigua>/en.json <nueva>/en.json` y comparar claves con el `es.json` nuevo.
- [ ] Revisar si algún `es.json` antiguo tiene traducciones más completas que el nuevo.
- [ ] Borrar las 26 carpetas huérfanas.

## Criterios de aceptación

- [ ] Cada scope de las features tiene `es.json` y `en.json` con las mismas claves.
- [ ] No hay carpetas sin scope.

## Ficheros afectados

- `public/i18n/access/**`
- `public/i18n/identity/**`
- `public/i18n/document/**`
- `public/i18n/template/**`
- `public/i18n/templating/**`

## Relacionado

**Desbloquea:**
- [I18N-03](I18N-03-validacion-i18n-en-ci.md) — Validar en CI scopes, carpetas y claves entre idiomas
- [I18N-06](I18N-06-calidad-de-traducciones.md) — Revisar la calidad de las traducciones generadas
- [I18N-02](../EP-I18N-2-configuracion-publica/I18N-02-idiomas-disponibles-reales.md) — available-langs solo con idiomas que existen *(épica [EP-I18N-2](../EP-I18N-2-configuracion-publica/README.md))*

**Recomendación de origen:** [09 · i18n y assets públicos](../../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/i18n/** (estructura de carpetas)*
