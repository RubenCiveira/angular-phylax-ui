---
id: DATA-01
titulo: "Peticiones sin sesión: error 401 en lugar de esperar para siempre"
area: capa-de-datos
epica: EP-DATA-1
paso: 2
prioridad: critica
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 06-capa-de-datos.md
---

# DATA-01 · Peticiones sin sesión: error 401 en lugar de esperar para siempre

**Épica:** [EP-DATA-1 · Cliente HTTP (ClientService)](README.md) — paso 2 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`prepareWithConf` espera al token con `userInfo[identity].pipe(filter(u => !!u.token), take(1))`. Si no hay sesión (o el refresh falló), el observable ni emite ni da error: los indicadores `searching` giran indefinidamente y el usuario no sabe que debe volver a entrar.

## Tareas

- [ ] Añadir `timeout({ first: 5_000, with: () => throwError(() => new HttpErrorResponse({ status: 401, statusText: 'No session' })) })`.
- [ ] Hacer configurable el tiempo (`data.token-wait-ms`).
- [ ] Comprobar que `ErrorService` muestra el aviso y ofrece iniciar sesión.
- [ ] Test: `userInfo` sin token → la petición falla con 401 tras el timeout.

## Criterios de aceptación

- [ ] Sin sesión, la lista muestra un error con "Iniciar sesión" en ≤ 5 s.

## Ficheros afectados

- `src/app/shared/data/api/client.service.ts`

## Relacionado

**Desbloquea:**
- [CTX-25](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-25-user-info-sin-token.md) — UserInfo como interfaz y sin token en el estado de UI *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*

**Recomendación de origen:** [06 · Capa de datos](../../../recomendaciones/06-capa-de-datos.md) → *data/api/client.service.ts*
