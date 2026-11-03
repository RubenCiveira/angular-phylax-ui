---
id: FEAT-12
titulo: "Una sola convención de claves i18n en las plantillas (verificar primero)"
area: features-generadas
epica: EP-FEAT-5
paso: 1
prioridad: critica
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [CTX-19]
origen: 08-features-generadas.md
---

# FEAT-12 · Una sola convención de claves i18n en las plantillas (verificar primero)

**Épica:** [EP-FEAT-5 · i18n de las features](README.md) — paso 1 de 2

**Prioridad:** 🔴 Crítica · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

En una misma entidad conviven `'access.oauth-client.list.filter.button'` (95 usos en oauth-client, con punto) y `'access/oauth-client.action.delete.title'` (26 usos, con barra = alias del scope). Transloco aplana las traducciones del scope con el prefijo `<alias>.`, así que probablemente solo resuelve la forma con barra y las listas y formularios muestran claves.

## Tareas

- [ ] Verificar en el navegador la lista y el formulario de oauth-client en `es`.
- [ ] Elegir convención (alias sin barras, p. ej. `oauthClient`, o alias con puntos `access.oauth-client`).
- [ ] Aplicarla en todas las plantillas del generador y en `provideTranslocoScope`.
- [ ] Añadir `transloco-keys-manager` en CI.

## Criterios de aceptación

- [ ] Lista, formulario y acciones de oauth-client muestran textos traducidos.
- [ ] CI detecta claves inexistentes.

## Ficheros afectados

- `src/app/features/**/*.html`
- `src/app/features/**/*.module.ts`

## Relacionado

**Depende de:**
- [CTX-19](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/CTX-19-i18n-loader-tolerante.md) — i18n loader: tolerar ficheros ausentes y prodMode real *(épica [EP-CTX-7](../../01-contexto-compartido/EP-CTX-7-cargador-i18n/README.md))*

**Desbloquea:**
- [FEAT-14](../EP-FEAT-6-standalone-y-paginas/FEAT-14-standalone-onpush.md) — Generar componentes standalone con OnPush y rutas sin NgModule *(épica [EP-FEAT-6](../EP-FEAT-6-standalone-y-paginas/README.md))*

**Recomendación de origen:** [08 · Features generadas](../../recomendaciones/08-features-generadas.md) → *i18n de las plantillas generadas (claves)*
