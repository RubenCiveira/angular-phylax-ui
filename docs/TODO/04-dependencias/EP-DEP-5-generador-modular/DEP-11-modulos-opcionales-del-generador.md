---
id: DEP-11
titulo: "Módulos opcionales en el generador y política de dependencias"
area: dependencias
epica: EP-DEP-5
paso: 1
prioridad: media
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: []
origen: 03-dependencias.md
---

# DEP-11 · Módulos opcionales en el generador y política de dependencias

**Épica:** [EP-DEP-5 · Generador modular](README.md) — paso 1 de 1

**Prioridad:** 🟡 Media · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Todos los proyectos generados reciben OIDC, telemetría, editores y configuración de MFE, los usen o no.

## Tareas

- [ ] Definir un `generator.config.json` (o equivalente) con flags `oidc`, `telemetry: none|lazy|eager`, `editors.code`, `editors.richtext`, `mfe: none|host|remote`.
- [ ] Documentar el núcleo obligatorio (`@angular/*`, `rxjs`, `tslib`, transloco, Material/CDK).
- [ ] Configurar Renovate con grupos para `@angular/*` y `@opentelemetry/*`.

## Criterios de aceptación

- [ ] Un proyecto generado con todo desactivado no incluye OIDC, OpenTelemetry ni editores.

## Ficheros afectados

- `generator.config.json`
- `renovate.json`
- `README.md`

## Relacionado

**Recomendación de origen:** [03 · Dependencias](../../../recomendaciones/03-dependencias.md) → *Política de dependencias*
