---
id: CTX-11
titulo: "IdentityService: tipado y error explícito si falta el handler"
area: contexto-compartido
epica: EP-CTX-3
paso: 1
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 05-contexto-compartido.md
---

# CTX-11 · IdentityService: tipado y error explícito si falta el handler

**Épica:** [EP-CTX-3 · Identidad y autorización](README.md) — paso 1 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`private map = {} as any` y `bootstrap(name)` hace `this.map[name].bootstrap()`: si el tipo de identidad está mal escrito o la configuración no ha llegado, lanza `TypeError` dentro del guard y la app se queda en "Loading...". Los mensajes de error están en español y la suscripción a la configuración no se cancela.

## Tareas

- [x] Usar `Map<string, IdentityHandler>`.
- [x] `bootstrap()` devuelve `throwError(() => new IdentityNotConfiguredError(name))` si no hay handler.
- [x] Leer la configuración con `take(1)` o reconfigurar solo si cambia. *Se ignora el `null` inicial (microfront) y se reconfigura solo si cambia (`distinctUntilChanged`); `bootstrap()` espera a la primera configuración.*
- [x] Mensajes técnicos en inglés y a través del logger.

## Criterios de aceptación

- [x] Con un `type` inválido en la configuración, la app muestra un error claro en lugar de quedarse cargando. *`AppComponent` captura el error y `BootstrapComponent` muestra `identity.errors.notConfigured`; el timeout y el reintento son de SHELL-11.*

## Ficheros afectados

- `src/app/shared/context/identity/identity.service.ts`

## Relacionado

**Desbloquea:**
- [SHELL-11](../../07-shell-y-layout/EP-SHELL-3-app-component/SHELL-11-bootstrap-identidad-con-timeout.md) — Arranque con timeout y reintento si la identidad no responde *(épica [EP-SHELL-3](../../07-shell-y-layout/EP-SHELL-3-app-component/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/identity/identity.service.ts*
