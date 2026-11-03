---
id: I18N-06
titulo: "Revisar la calidad de las traducciones generadas"
area: i18n-y-assets
epica: EP-I18N-1
paso: 4
prioridad: media
esfuerzo: M
ambito: ambos
estado: pendiente
depende_de: [I18N-01, I18N-05]
origen: 09-i18n-y-assets-publicos.md
---

# I18N-06 · Revisar la calidad de las traducciones generadas

**Épica:** [EP-I18N-1 · Ficheros de traducción](README.md) — paso 4 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

Hay traducción automática sin revisar: `action.delete.title: "Ticket passed"`, `report: " has been cleared."`, tooltips de "modificar" en acciones que no modifican, `es.json` con textos en inglés (`"Delete oauth client"`, `"Create"`) y tooltips que repiten el título.

## Tareas

- [ ] Revisar a mano el i18n global y las acciones, empezando por las entidades más usadas.
- [ ] Usar plantillas con interpolación (`"Eliminar {{entity}}"`) en lugar de una frase por entidad.
- [ ] No generar tooltips iguales al título.
- [ ] Glosario de términos técnicos (OAuth/OIDC) que no se traducen.

## Criterios de aceptación

- [ ] Ninguna clave de `es.json` contiene texto en inglés (salvo términos del glosario).

## Ficheros afectados

- `public/i18n/**`

## Relacionado

**Depende de:**
- [I18N-01](I18N-01-recolocar-traducciones-en.md) — Mover los en.json a sus carpetas actuales y borrar las huérfanas
- [I18N-05](I18N-05-i18n-global.md) — Traducciones globales del shell, toolkit y errores

**Recomendación de origen:** [09 · i18n y assets públicos](../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/i18n/<dominio>/<entidad>/{es,en}.json (calidad del contenido)*
