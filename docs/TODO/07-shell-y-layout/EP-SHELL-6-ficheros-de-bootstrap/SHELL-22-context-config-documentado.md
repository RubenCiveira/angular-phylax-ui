---
id: SHELL-22
titulo: "Documentar context.config.ts como punto de extensión"
area: shell-y-layout
epica: EP-SHELL-6
paso: 2
prioridad: baja
esfuerzo: S
ambito: ambos
estado: pendiente
depende_de: [FEAT-17]
origen: 04-shell-y-layout.md
---

# SHELL-22 · Documentar context.config.ts como punto de extensión

**Épica:** [EP-SHELL-6 · Ficheros de bootstrap](README.md) — paso 2 de 2

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

`contextProviders()` devuelve `{}` y no explica que sirve para añadir filtros globales a la toolbar.

## Tareas

- [ ] JSDoc con un ejemplo (`{ tenant: inject(TenantRepository).selectorProvider() }`).
- [ ] Marcar como `@generated-once`.

## Criterios de aceptación

- [ ] Regenerar no sobrescribe el fichero.

## Ficheros afectados

- `src/app/bootstrap/context.config.ts`

## Relacionado

**Depende de:**
- [FEAT-17](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/FEAT-17-marcas-de-generacion-y-extension.md) — Contrato de regeneración: @generated, @generated-once y extensiones *(épica [EP-FEAT-7](../../08-features-generadas/EP-FEAT-7-contrato-del-generador/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *context.config.ts*
