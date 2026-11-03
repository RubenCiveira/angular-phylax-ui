---
id: CTX-02
titulo: "Step-up: no guardar el cuerpo de la petición y avisar al usuario"
area: contexto-compartido
epica: EP-CTX-1
paso: 3
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: hecho
depende_de: [CTX-01, DEP-09]
origen: 05-contexto-compartido.md
---

# CTX-02 · Step-up: no guardar el cuerpo de la petición y avisar al usuario

**Épica:** [EP-CTX-1 · Step-up e interceptores HTTP](README.md) — paso 3 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`StepUpService.start()` guarda en `sessionStorage` el método, la URL y el **cuerpo** de la petición (que puede incluir contraseñas o `secretOauth`), y redirige sin avisar. Al volver, `resumeIfPending()` repite la petición con `.subscribe()` y descarta el resultado: el usuario no sabe si la operación se completó.

## Tareas

- [x] Guardar solo `{ method, url, returnUrl }` (sin body).
- [x] Antes de redirigir, mostrar un diálogo traducido ("Esta operación requiere verificación adicional") con Continuar / Cancelar, vía `ConfirmDialogService`.
- [x] Al volver, navegar a `returnUrl` y notificar con `NotifyService` que debe repetir la acción (o, si se reanuda una petición sin body, mostrar el resultado). *No se reanuda ninguna petición: las lecturas se repiten solas al recargar la página (aviso «verificación completada») y las escrituras piden repetir la acción.*
- [x] Añadir claves `identity.stepUp.*` al i18n global.

## Criterios de aceptación

- [x] No queda ningún cuerpo de petición en `sessionStorage`. *Cubierto por test unitario.*
- [x] El usuario ve un aviso antes de salir y un mensaje al volver. *Cubierto por test unitario.*

## Ficheros afectados

- `src/app/shared/context/identity/oidc-identity/step-up.service.ts`
- `public/i18n/es.json`
- `public/i18n/en.json`

## Relacionado

**Depende de:**
- [CTX-01](CTX-01-interceptor-step-up-funcional.md) — Hacer que el interceptor de step-up se ejecute
- [DEP-09](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) — Crear ConfirmDialogService y NotifyService en el toolkit *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *step-up.interceptor.ts + step-up.service.ts*
