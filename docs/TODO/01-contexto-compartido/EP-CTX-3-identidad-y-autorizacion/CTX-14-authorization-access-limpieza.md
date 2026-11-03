---
id: CTX-14
titulo: "AuthorizationAccess: menos escrituras y pantalla de redirección"
area: contexto-compartido
epica: EP-CTX-3
paso: 4
prioridad: media
esfuerzo: S
ambito: plantilla
estado: hecho
depende_de: [SHELL-07]
origen: 05-contexto-compartido.md
---

# CTX-14 · AuthorizationAccess: menos escrituras y pantalla de redirección

**Épica:** [EP-CTX-3 · Identidad y autorización](README.md) — paso 4 de 5

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

- El servicio escribe la última ruta en `localStorage` en cuatro eventos por navegación (`ResolveStart`, `ResolveEnd`, `NavigationEnd`, `NavigationCancel`).
- La ruta por defecto es `['en-EN', 'main']`, fijada.
- `/login-redirect` pinta `<h1>Home</h1>` mientras se procesa el código y su suscripción no se cancela.

## Tareas

- [x] Guardar solo en `NavigationEnd` y usar `sessionStorage` (la última ruta es por pestaña).
- [x] Leer la ruta por defecto de `DefaultsService`. *A través de `AppStateService`, que toma sus valores iniciales de `DefaultsService`: sin elección del usuario es la ruta por defecto, y si eligió otro idioma o tenant se respeta.*
- [x] Plantilla con spinner y texto `auth.redirecting`; usar `takeUntilDestroyed()`.
- [x] Registrar `login-redirect` y `unauthorized` con el mismo mecanismo `ROUTES` que el resto de rutas.

## Criterios de aceptación

- [x] Una navegación produce una única escritura.
- [x] Dos pestañas no comparten la "última ruta".

## Ficheros afectados

- `src/app/shared/context/authorization-access/authorization-access.service.ts`
- `src/app/shared/context/authorization-access/authorization-access.component.ts`
- `src/app/shared/context/authorization-access/authorization-access.provider.ts`

## Relacionado

**Depende de:**
- [SHELL-07](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/SHELL-07-defaults-service.md) — Idioma y tenant por defecto en un único sitio *(épica [EP-SHELL-2](../../07-shell-y-layout/EP-SHELL-2-arranque-y-rutas/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../recomendaciones/05-contexto-compartido.md) → *authorization-access.service.ts / .component.ts / .provider.ts*
