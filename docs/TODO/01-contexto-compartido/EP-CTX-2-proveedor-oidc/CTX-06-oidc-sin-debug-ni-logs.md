---
id: CTX-06
titulo: "OIDC: no volcar información de depuración ni eventos a los logs"
area: contexto-compartido
epica: EP-CTX-2
paso: 1
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-06 · OIDC: no volcar información de depuración ni eventos a los logs

**Épica:** [EP-CTX-2 · Proveedor OIDC](README.md) — paso 1 de 4

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`showDebugInformation: true` está fijado y hay un `console.log('EVENTO OIDC', e)` para cada evento no manejado. Como `InstrumentationService` intercepta `console.log`, esta información (incluidos claims) **se envía al colector de logs**.

## Tareas

- [ ] `showDebugInformation: isDevMode() && setup['debug'] === true`.
- [ ] Quitar `console.log('EVENTO OIDC', e)` y `console.log('ERROR, token expires')` (o pasarlos a `logger.debug` cuando exista CTX-21).

## Criterios de aceptación

- [ ] En un build de producción, el flujo de login no escribe nada en la consola.

## Ficheros afectados

- `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts`

## Relacionado

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *oidc-identity-provider.service.ts*
