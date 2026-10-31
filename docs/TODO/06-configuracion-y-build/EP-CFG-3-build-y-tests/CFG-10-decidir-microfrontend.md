---
id: CFG-10
titulo: "Decidir sobre micro-frontends (borrar webpack o Native Federation)"
area: configuracion-y-build
epica: EP-CFG-3
paso: 2
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-10 · Decidir sobre micro-frontends (borrar webpack o Native Federation)

**Épica:** [EP-CFG-3 · angular.json, build y tests](README.md) — paso 2 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`webpack.config.js` configura module federation, pero el builder `application` no lo lee y `@angular-architects/module-federation` no está instalado. `main.ts` hace `import('./bootstrap')` (patrón de MFE).

## Tareas

- [ ] Decidir: (A) sin MFE → borrar ambos webpack, juntar `main.ts` y `bootstrap.ts`; (B) con MFE → `@angular-architects/native-federation`.
- [ ] Registrar la decisión (ADR corto).
- [ ] Hacer de MFE una opción del generador (`mfe: none | host | remote`).

## Criterios de aceptación

- [ ] No hay ficheros de configuración que el build ignore.

## Ficheros afectados

- `webpack.config.js`
- `webpack.prod.config.js`
- `src/main.ts`
- `src/bootstrap.ts`

## Relacionado

**Desbloquea:**
- [CTX-17](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-17-app-config-adaptador-mfe.md) — Aislar la lógica de micro-frontend de configuración e i18n *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *webpack.config.js / webpack.prod.config.js*
