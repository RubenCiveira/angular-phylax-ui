---
id: CTX-22
titulo: "Telemetría: atributos útiles y nombres correctos"
area: contexto-compartido
epica: EP-CTX-5
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [SHELL-23]
origen: 05-contexto-compartido.md
---

# CTX-22 · Telemetría: atributos útiles y nombres correctos

**Épica:** [EP-CTX-5 · Logger y telemetría](README.md) — paso 2 de 2

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El `Resource` solo lleva `service.name` (hay un `TODO: ¿podemos añadir usuario, device...?`). El token se llama `APP_INSTRUMETATION` (errata) y `buildInstrumentation` envuelve la configuración sin aportar nada.

## Tareas

- [x] Añadir `service.version`, `deployment.environment` y `session.id` (aleatorio por pestaña). *Se usa el nombre actual de la convención, `deployment.environment.name`, leído de `telemetry.environment` (cambia por despliegue, no por build). `service.version` sale de `environment.version` (inyectada en el build por SHELL-23; `dev` en `ng serve`). `session.id` vive en `sessionStorage`: sobrevive a recargas, no se comparte entre pestañas.*
- [x] Añadir `app.tenant` como atributo de span dinámico. Nunca email ni nombre. *Un `SpanProcessor` lo pone en `onStart` con el tenant activo de `AppStateService`.*
- [x] Renombrar `APP_INSTRUMETATION` y eliminar `buildInstrumentation`. *Ya resuelto con DEP-03: el servicio usa `inject()` y no hay token.*

## Criterios de aceptación

- [x] Los spans en el colector muestran versión, entorno, sesión y tenant.

## Ficheros afectados

- `src/app/shared/context/observability/instrumentation.service.ts`
- `src/app/shared/context/observability/otel-bootstrap.ts`
- `src/app/shared/context/config/app-config.model.ts`
- `src/app/bootstrap/environment/environment.ts`

## Relacionado

**Depende de:**
- [SHELL-23](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/SHELL-23-environment-con-version.md) — Renombrar enviroment y añadir versión de build *(épica [EP-SHELL-6](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/observability/instrumentation.service.ts*
