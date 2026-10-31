---
id: EP-FEAT-7
titulo: "Contrato del generador"
area: features-generadas
prioridad: alta
estado: pendiente
issues: [FEAT-17, FEAT-18]
---

# EP-FEAT-7 · Contrato del generador

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~4.5 días

## Objetivo

Regenerar sin perder personalizaciones y con código formateado.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [FEAT-17](FEAT-17-marcas-de-generacion-y-extension.md) | Contrato de regeneración: @generated, @generated-once y extensiones | 🟠 | L | 🧩 |
| 2 | [FEAT-18](FEAT-18-formatear-al-generar.md) | Formatear el código al terminar de generar | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `(generador)` | FEAT-17, FEAT-18 |
| `README.md` | FEAT-17 |
| `src/app/features/**` | FEAT-18 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CFG-05](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-05-package-json-scripts.md) — package.json: nombre, engines y scripts útiles *(épica [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md))*
- [CFG-14](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/CFG-14-prettier-lf.md) — Prettier con finales de línea LF *(épica [EP-CFG-2](../../06-configuracion-y-build/EP-CFG-2-calidad-de-codigo/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-DEP-5](../../04-dependencias/EP-DEP-5-generador-modular/README.md) — Generador modular: `README.md`
- [EP-CFG-5](../../06-configuracion-y-build/EP-CFG-5-documentacion/README.md) — Documentación del proyecto: `README.md`
- [EP-FEAT-4](../EP-FEAT-4-acciones-generadas/README.md) — Acciones generadas: `src/app/features/**`
- [EP-I18N-1](../../09-i18n-y-assets/EP-I18N-1-ficheros-de-traduccion/README.md) — Ficheros de traducción: `(generador)`

## Desbloquea

- [CFG-16](../../06-configuracion-y-build/EP-CFG-5-documentacion/CFG-16-readme.md) — README del proyecto *(épica [EP-CFG-5](../../06-configuracion-y-build/EP-CFG-5-documentacion/README.md))*
- [SHELL-22](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/SHELL-22-context-config-documentado.md) — Documentar context.config.ts como punto de extensión *(épica [EP-SHELL-6](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md))*

## Checklist de la épica

- [ ] FEAT-17 — Contrato de regeneración: @generated, @generated-once y extensiones
- [ ] FEAT-18 — Formatear el código al terminar de generar
