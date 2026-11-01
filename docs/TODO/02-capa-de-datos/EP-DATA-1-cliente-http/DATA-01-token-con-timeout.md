---
id: DATA-01
titulo: "Peticiones sin sesión: error 401 en lugar de esperar para siempre"
area: capa-de-datos
epica: EP-DATA-1
paso: 2
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-01 · Peticiones sin sesión: error 401 en lugar de esperar para siempre

**Épica:** [EP-DATA-1 · Cliente HTTP (ClientService)](README.md) — paso 2 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`prepareWithConf` espera al token con `userInfo[identity].pipe(filter(u => !!u.token), take(1))`. Si no hay sesión (o el refresh falló), el observable ni emite ni da error: los indicadores `searching` giran indefinidamente y el usuario no sabe que debe volver a entrar.

## Tareas

- [x] Añadir `timeout({ first: 5_000, with: () => throwError(() => new HttpErrorResponse({ status: 401, statusText: 'No session' })) })`.
- [x] Hacer configurable el tiempo (`data.token-wait-ms`). *Por defecto 2 000 ms (no 5 000): `ErrorService` retrasa el aviso 2 s y el diálogo tarda ~0,4 s en pintarse; con 3 000 ms se midieron 5,4 s. Valores ausentes, no numéricos o ≤ 0 → valor por defecto.*
- [x] Comprobar que `ErrorService` muestra el aviso y ofrece iniciar sesión. *`ClientService` anota en todo 401 (timeout o servidor) la identidad de la petición (`error.identity`); `ErrorService` pasa al modal una acción `login` que llama a `IdentityService.login(identity)`, y `ErrorModalComponent` proyecta el botón "Iniciar sesión" (`auth.unauthorized.login`) en las acciones de `app-page-error`. La ruta actual ya la guarda `AuthorizationAccessService`, así que tras el login se vuelve a la lista.*
- [x] Test: `userInfo` sin token → la petición falla con 401 tras el timeout.

## Criterios de aceptación

- [ ] Sin sesión, la lista muestra un error con "Iniciar sesión" en ≤ 5 s. *Verificado en navegador (Playwright + OIDC real en `localhost:8090`): con la lista abierta, el access token caduca y su refresh falla → al refrescar la lista, el modal con "Iniciar sesión" aparece a los ~4,35 s; el botón lleva al login OIDC y se vuelve a `/es/main/tenant` con la lista cargada. Un 401 del servidor muestra el mismo modal a los ~2,3 s. Nota: entrando ya sin sesión, el guard `isAuthenticated` redirige antes a `/unauthorized` (que tiene su propio botón), así que este modal cubre la pérdida de sesión con la página abierta.*

## Ficheros afectados

- `src/app/shared/data/api/client.service.ts`

## Relacionado

**Desbloquea:**
- [CTX-25](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-25-user-info-sin-token.md) — UserInfo como interfaz y sin token en el estado de UI *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/api/client.service.ts*
