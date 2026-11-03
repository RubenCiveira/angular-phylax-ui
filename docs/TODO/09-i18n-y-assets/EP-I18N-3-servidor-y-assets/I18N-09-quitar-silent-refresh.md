---
id: I18N-09
titulo: "Quitar silent-refresh.html"
area: i18n-y-assets
epica: EP-I18N-3
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CTX-09]
origen: 09-i18n-y-assets-publicos.md
---

# I18N-09 · Quitar silent-refresh.html

**Épica:** [EP-I18N-3 · Caché del servidor y assets](README.md) — paso 2 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`silent-refresh.html` no se usa (`useSilentRefresh` está comentado) y el silent refresh por iframe falla en navegadores que bloquean cookies de terceros.

## Tareas

- [ ] Borrarlo.
- [ ] Incluirlo en el generador solo con `identity.silent-refresh: true`.

## Criterios de aceptación

- [ ] El fichero no existe y la sesión se renueva con refresh token.

## Ficheros afectados

- `public/silent-refresh.html`

## Relacionado

**Depende de:**
- [CTX-09](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-09-oidc-refresco-unico.md) — OIDC: un único mecanismo de refresco de token *(épica [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md))*

**Recomendación de origen:** [09 · i18n y assets públicos](../../recomendaciones/09-i18n-y-assets-publicos.md) → *public/silent-refresh.html*
