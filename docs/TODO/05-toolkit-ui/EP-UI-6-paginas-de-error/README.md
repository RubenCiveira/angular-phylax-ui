---
id: EP-UI-6
titulo: "Páginas y modal de error"
area: toolkit-ui
prioridad: critica
estado: pendiente
issues: [UI-19, UI-20]
---

# EP-UI-6 · Páginas y modal de error

**Prioridad máxima:** 🔴 Crítica · **Issues:** 2 · **Esfuerzo estimado:** ~1 días

## Objetivo

Errores traducidos, con salida y con identificador para soporte.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [UI-19](UI-19-error-page-traducida.md) | Página de error traducida y útil | 🔴 | S | 🧩 |
| 2 | [UI-20](UI-20-error-modal-acciones.md) | Modal de error con acciones y sin código muerto | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/shared/toolkit/error-page/error-page.component.ts` | UI-19 |
| `src/app/shared/toolkit/error-page/error-page.component.html` | UI-19 |
| `src/app/shared/toolkit/error-modal/error-modal.component.ts` | UI-20 |
| `src/app/shared/toolkit/error-modal/error-modal.component.html` | UI-20 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [I18N-05](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/I18N-05-i18n-global.md) — Traducciones globales del shell, toolkit y errores *(épica [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md))*

## Desbloquea

- [CTX-13](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-13-pagina-unauthorized-con-salida.md) — Página de acceso denegado con acciones (401/403) *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*
- [SHELL-18](../../07-shell-y-layout/EP-SHELL-5-paginas-del-layout/SHELL-18-pagina-404.md) — Página 404 con salida *(épica [EP-SHELL-5](../../07-shell-y-layout/EP-SHELL-5-paginas-del-layout/README.md))*

## Checklist de la épica

- [ ] UI-19 — Página de error traducida y útil
- [ ] UI-20 — Modal de error con acciones y sin código muerto
