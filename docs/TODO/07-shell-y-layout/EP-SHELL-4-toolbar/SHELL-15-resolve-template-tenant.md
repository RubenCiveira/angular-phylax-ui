---
id: SHELL-15
titulo: "Helper compartido para URLs con {{tenant}}"
area: shell-y-layout
epica: EP-SHELL-4
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 04-shell-y-layout.md
---

# SHELL-15 · Helper compartido para URLs con {{tenant}}

**Épica:** [EP-SHELL-4 · Toolbar](README.md) — paso 2 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El reemplazo de `{{tenant}}` se hace a mano en OIDC, toolbar y configuración.

## Tareas

- [ ] Crear `resolveTemplate(url, vars)` en `shared/context/config`.
- [ ] Usarlo en los tres sitios.

## Criterios de aceptación

- [ ] No queda ningún `.replace('{{tenant}}'` fuera del helper.

## Ficheros afectados

- `src/app/bootstrap/layout/toolbar/toolbar.component.ts`
- `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts`

## Relacionado

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *toolbar.component.ts / .html*
