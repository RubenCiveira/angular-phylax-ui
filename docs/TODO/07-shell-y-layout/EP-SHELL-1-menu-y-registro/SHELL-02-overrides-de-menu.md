---
id: SHELL-02
titulo: "Personalización del menú separada de lo generado"
area: shell-y-layout
epica: EP-SHELL-1
paso: 5
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [SHELL-01]
origen: 04-shell-y-layout.md
---

# SHELL-02 · Personalización del menú separada de lo generado

**Épica:** [EP-SHELL-1 · Registro de features y menú](README.md) — paso 5 de 7

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Hoy personalizar el menú implica editar un fichero que el generador sobrescribe.

## Tareas

- [ ] `menu.config.ts` pasa a ser manual (`@generated-once`) con `MENU_OVERRIDES` (`order`, `hidden`, `extra`).
- [ ] El menú final combina registro y overrides.

## Criterios de aceptación

- [ ] Ocultar una entidad u ordenar grupos sobrevive a una regeneración.

## Ficheros afectados

- `src/app/bootstrap/menu.config.ts`

## Relacionado

**Depende de:**
- [SHELL-01](SHELL-01-registro-de-features.md) — Registro único de features: todas las entidades en rutas y menú

**Recomendación de origen:** [04 · Shell y layout](../../../recomendaciones/04-shell-y-layout.md) → *src/app/bootstrap/menu.config.ts*
