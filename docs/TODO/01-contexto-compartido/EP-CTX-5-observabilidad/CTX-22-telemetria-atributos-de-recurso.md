---
id: CTX-22
titulo: "Telemetría: atributos útiles y nombres correctos"
area: contexto-compartido
epica: EP-CTX-5
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [SHELL-23]
origen: 05-contexto-compartido.md
---

# CTX-22 · Telemetría: atributos útiles y nombres correctos

**Épica:** [EP-CTX-5 · Logger y telemetría](README.md) — paso 2 de 2

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El `Resource` solo lleva `service.name` (hay un `TODO: ¿podemos añadir usuario, device...?`). El token se llama `APP_INSTRUMETATION` (errata) y `buildInstrumentation` envuelve la configuración sin aportar nada.

## Tareas

- [ ] Añadir `service.version`, `deployment.environment` y `session.id` (aleatorio por pestaña).
- [ ] Añadir `app.tenant` como atributo de span dinámico. Nunca email ni nombre.
- [ ] Renombrar `APP_INSTRUMETATION` y eliminar `buildInstrumentation`.

## Criterios de aceptación

- [ ] Los spans en el colector muestran versión, entorno, sesión y tenant.

## Ficheros afectados

- `src/app/shared/context/observability/instrumentation.service.ts`

## Relacionado

**Depende de:**
- [SHELL-23](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/SHELL-23-environment-con-version.md) — Renombrar enviroment y añadir versión de build *(épica [EP-SHELL-6](../../07-shell-y-layout/EP-SHELL-6-ficheros-de-bootstrap/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/observability/instrumentation.service.ts*
