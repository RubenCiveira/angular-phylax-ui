---
id: CFG-06
titulo: "Añadir ESLint con reglas para el código generado"
area: configuracion-y-build
epica: EP-CFG-2
paso: 3
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-06 · Añadir ESLint con reglas para el código generado

**Épica:** [EP-CFG-2 · package.json y calidad de código](README.md) — paso 3 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

No hay linter: no se detectan regresiones del generador ni imports con `app/...`.

## Tareas

- [ ] `ng add @angular-eslint/schematics`.
- [ ] Reglas: `no-restricted-imports` (`app/*`), `no-console` (salvo en el logger), `@angular-eslint/prefer-on-push-component-change-detection` (warning).
- [ ] Script `lint` y paso en CI.

## Criterios de aceptación

- [ ] `pnpm lint` se ejecuta en CI.

## Ficheros afectados

- `eslint.config.js`
- `package.json`
- `angular.json`

## Relacionado

**Desbloquea:**
- [DEP-08](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-08-eslint-material-solo-en-toolkit.md) — Regla de lint: Material solo desde el toolkit y el shell *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*
- [CFG-09](CFG-09-tsconfig-alias.md) — tsconfig: alias coherentes y sin experimentalDecorators
- [CFG-02](../EP-CFG-4-docker-y-despliegue/CFG-02-makefile-coherente.md) — Makefile coherente con el proyecto *(épica [EP-CFG-4](../EP-CFG-4-docker-y-despliegue/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../recomendaciones/01-configuracion-y-build.md) → *package.json*
