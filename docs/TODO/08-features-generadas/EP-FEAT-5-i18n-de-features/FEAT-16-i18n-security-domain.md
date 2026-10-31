---
id: FEAT-16
titulo: "Traducciones para access/security-domain"
area: features-generadas
epica: EP-FEAT-5
paso: 2
prioridad: media
esfuerzo: S
ambito: ambos
estado: pendiente
depende_de: []
origen: 08-features-generadas.md
---

# FEAT-16 · Traducciones para access/security-domain

**Épica:** [EP-FEAT-5 · i18n de las features](README.md) — paso 2 de 2

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

El scope `access/security-domain` no tiene ficheros en `public/i18n`.

## Tareas

- [ ] Crear `public/i18n/access/security-domain/{es,en}.json` con las claves usadas.
- [ ] Que el generador emita siempre el i18n de cada scope declarado.

## Criterios de aceptación

- [ ] Las acciones de atributos y scopes se ven traducidas.

## Ficheros afectados

- `src/app/features/access/security-domain/**`
- `public/i18n/access/security-domain/`

## Relacionado

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *access/security-domain/***
