---
id: DEP-08
titulo: "Regla de lint: Material solo desde el toolkit y el shell"
area: dependencias
epica: EP-DEP-4
paso: 2
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-06]
origen: 03-dependencias.md
---

# DEP-08 · Regla de lint: Material solo desde el toolkit y el shell

**Épica:** [EP-DEP-4 · Encapsular Angular Material](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Las features importan Material directamente (`MatButtonModule`, `MatExpansionModule`, `MatDialog`, `MatSnackBar`…). Cambiar de librería o hacer un tema muy distinto obligaría a regenerar 344 módulos.

## Tareas

- [ ] Regla `no-restricted-imports` sobre `@angular/material/*` fuera de `shared/toolkit` y `bootstrap/layout`, primero como warning.
- [ ] Medir los usos restantes y enlazarlos con DEP-09 y FEAT-10.

## Criterios de aceptación

- [ ] El lint informa del número de imports de Material en features.

## Ficheros afectados

- `eslint.config.js`

## Relacionado

**Depende de:**
- [CFG-06](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-06-eslint.md) — Añadir ESLint con reglas para el código generado *(épica [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md))*

**Recomendación de origen:** [03 · Dependencias](../../recomendaciones/03-dependencias.md) → *Angular Material / CDK (uso directo desde las features)*
