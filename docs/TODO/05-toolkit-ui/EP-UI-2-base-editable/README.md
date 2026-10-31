---
id: EP-UI-2
titulo: "BaseEditable y envoltorio de campo"
area: toolkit-ui
prioridad: alta
estado: pendiente
issues: [UI-02, UI-03, UI-05, UI-04, UI-06]
---

# EP-UI-2 · BaseEditable y envoltorio de campo

**Prioridad máxima:** 🟠 Alta · **Issues:** 5 · **Esfuerzo estimado:** ~4.5 días

## Objetivo

Campos sin parpadeo, con required fiable, errores con parámetros, ayuda y un envoltorio común.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-02](UI-02-base-editable-sin-settimeout.md) | BaseEditable: aplicar valor y estado sin setTimeout | 🟠 | S | 🧩 |
| 2 | [UI-03](UI-03-base-editable-required.md) | BaseEditable: detectar required con hasValidator | 🟡 | S | 🧩 |
| 3 | [UI-05](UI-05-hint-appearance-y-marca-oculta.md) | BaseEditable: hint, apariencia por campo y marca de oculto accesible | 🟡 | S | 🧩 |
| 4 | [UI-04](UI-04-mensajes-de-error-con-parametros.md) | Mensajes de validación con parámetros y fallback común | 🟠 | M | 🧩 |
| 5 | [UI-06](UI-06-envoltorio-editable-field.md) | Componente envoltorio <editable-field> | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/editable/base-editable.ts` | UI-02, UI-03, UI-04, UI-05 |
| `src/app/shared/toolkit/editable/*/*.component.ts` | UI-04, UI-06 |
| `src/app/shared/toolkit/editable/editable-field/**` | UI-06 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [I18N-05](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-05-i18n-global.md) — Traducciones globales del shell, toolkit y errores *(épica [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md))*

## Checklist de la épica

- [ ] UI-02 — BaseEditable: aplicar valor y estado sin setTimeout
- [ ] UI-03 — BaseEditable: detectar required con hasValidator
- [ ] UI-05 — BaseEditable: hint, apariencia por campo y marca de oculto accesible
- [ ] UI-04 — Mensajes de validación con parámetros y fallback común
- [ ] UI-06 — Componente envoltorio <editable-field>
