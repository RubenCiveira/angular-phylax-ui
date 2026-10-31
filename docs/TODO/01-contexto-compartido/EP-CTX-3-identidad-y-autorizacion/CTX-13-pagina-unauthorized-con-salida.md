---
id: CTX-13
titulo: "Página de acceso denegado con acciones (401/403)"
area: contexto-compartido
epica: EP-CTX-3
paso: 3
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CTX-12, UI-19]
origen: 05-contexto-compartido.md
---

# CTX-13 · Página de acceso denegado con acciones (401/403)

**Épica:** [EP-CTX-3 · Identidad y autorización](README.md) — paso 3 de 5

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`UnauthorizedComponent` pinta `<h1>unauthorized</h1>`: no hay botón para iniciar sesión ni explicación. Es una pantalla sin salida.

## Tareas

- [ ] Usar `ErrorPageComponent` con la imagen `error-401.png` / `error-403.png`.
- [ ] Con `reason=401`: botón "Iniciar sesión" (`identity.login('main')`).
- [ ] Con `reason=403`: botones "Volver al inicio" y "Cambiar de cuenta".
- [ ] Textos `auth.unauthorized.*` en el i18n global.

## Criterios de aceptación

- [ ] Desde `/unauthorized` el usuario puede iniciar sesión o volver al inicio con un clic.

## Ficheros afectados

- `src/app/shared/context/authorization-access/unauthorized.component.ts`

## Relacionado

**Depende de:**
- [CTX-12](CTX-12-guards-return-url-y-permisos.md) — Guards: returnUrl y guard por permiso
- [UI-19](../../05-toolkit-ui/EP-UI-6-paginas-de-error/UI-19-error-page-traducida.md) — Página de error traducida y útil *(épica [EP-UI-6](../../05-toolkit-ui/EP-UI-6-paginas-de-error/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *context/authorization-access/unauthorized.component.ts*
