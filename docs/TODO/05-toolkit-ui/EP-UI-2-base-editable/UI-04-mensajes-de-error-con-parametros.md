---
id: UI-04
titulo: "Mensajes de validación con parámetros y fallback común"
area: toolkit-ui
epica: EP-UI-2
paso: 4
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [I18N-05]
origen: 07-toolkit-ui.md
---

# UI-04 · Mensajes de validación con parámetros y fallback común

**Épica:** [EP-UI-2 · BaseEditable y envoltorio de campo](README.md) — paso 4 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`errorMessages` solo guarda las claves (`Object.keys(errors)`) y se traducen como `label + '.error.' + key`. No se usan los parámetros (`minlength.requiredLength`), así que no se puede decir "mínimo 8 caracteres", y cada campo necesita su propia traducción.

## Tareas

- [ ] `errorList = computed(() => Object.entries(errors).map(([key, params]) => ({ key, params })))`.
- [ ] Traducir con parámetros y, si no existe la clave del campo, usar `validation.<key>` del i18n global.
- [ ] Actualizar las plantillas de todos los editables (o del envoltorio de UI-06).

## Criterios de aceptación

- [ ] Un `minlength(8)` muestra "Mínimo 8 caracteres" sin traducción específica del campo.

## Ficheros afectados

- `src/app/shared/toolkit/editable/base-editable.ts`
- `src/app/shared/toolkit/editable/*/*.component.ts`

## Relacionado

**Depende de:**
- [I18N-05](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-05-i18n-global.md) — Traducciones globales del shell, toolkit y errores *(épica [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md))*

**Desbloquea:**
- [UI-06](UI-06-envoltorio-editable-field.md) — Componente envoltorio <editable-field>

**Recomendación de origen:** [07 · Toolkit de UI](../../../recomendaciones/07-toolkit-ui.md) → *editable/base-editable.ts*
