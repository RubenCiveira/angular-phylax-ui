---
id: I18N-05
titulo: "Traducciones globales del shell, toolkit y errores"
area: i18n-y-assets
epica: EP-I18N-1
paso: 2
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 09-i18n-y-assets-publicos.md
---

# I18N-05 · Traducciones globales del shell, toolkit y errores

**Épica:** [EP-I18N-1 · Ficheros de traducción](README.md) — paso 2 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`public/i18n/{es,en}.json` solo contienen `{"info": "Module"}`. No hay claves para el shell, el toolkit, las páginas de error ni textos comunes.

## Tareas

- [ ] Secciones `shell`, `menu`, `common` (incluido `common.action.*`), `errors`, `validation`, `auth`, `identity`.
- [ ] Español e inglés completos.
- [ ] El generador añade las entradas `menu.*` de cada entidad.

## Criterios de aceptación

- [ ] Shell, páginas de error y textos comunes se traducen en ambos idiomas.

## Ficheros afectados

- `public/i18n/es.json`
- `public/i18n/en.json`

## Relacionado

**Desbloquea:**
- [UI-04](../../05-toolkit-ui/EP-UI-2-base-editable/UI-04-mensajes-de-error-con-parametros.md) — Mensajes de validación con parámetros y fallback común *(épica [EP-UI-2](../../05-toolkit-ui/EP-UI-2-base-editable/README.md))*
- [UI-13](../../05-toolkit-ui/EP-UI-4-list-view/UI-13-list-view-estado-vacio-y-error.md) — list-view: estados vacío y de error integrados *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*
- [UI-19](../../05-toolkit-ui/EP-UI-6-paginas-de-error/UI-19-error-page-traducida.md) — Página de error traducida y útil *(épica [EP-UI-6](../../05-toolkit-ui/EP-UI-6-paginas-de-error/README.md))*
- [I18N-06](I18N-06-calidad-de-traducciones.md) — Revisar la calidad de las traducciones generadas

**Recomendación de origen:** [09 · i18n y assets públicos](../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/i18n/{es,en}.json (global)*
