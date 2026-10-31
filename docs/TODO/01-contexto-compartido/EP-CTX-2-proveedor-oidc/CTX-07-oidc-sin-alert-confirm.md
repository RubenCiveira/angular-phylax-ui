---
id: CTX-07
titulo: "OIDC: sustituir alert/confirm por diálogos traducidos"
area: contexto-compartido
epica: EP-CTX-2
paso: 4
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [DEP-09]
origen: 05-contexto-compartido.md
---

# CTX-07 · OIDC: sustituir alert/confirm por diálogos traducidos

**Épica:** [EP-CTX-2 · Proveedor OIDC](README.md) — paso 4 de 4

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Los errores de identidad se muestran con diálogos nativos bloqueantes y sin traducir: `confirm('Error with the profile. Remove credentials')`, `alert('Wrong response')` y `confirm('UNABLE TO LOAD OIDC. Remove credentials')`.

## Tareas

- [ ] Definir la interfaz `IdentityUiPort` (`confirmResetCredentials(reason)`, `notifyError(reason)`) con un `InjectionToken`.
- [ ] Implementación por defecto con `ConfirmDialogService`/`NotifyService` y claves `identity.errors.profile`, `identity.errors.discovery`, `identity.errors.code`.
- [ ] Sustituir los tres `alert`/`confirm`.

## Criterios de aceptación

- [ ] No hay `alert(` ni `confirm(` en `src/app/shared/context`.
- [ ] Los mensajes aparecen en el idioma activo.

## Ficheros afectados

- `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts`
- `src/app/shared/context/identity/identity-provider.interface.ts`

## Relacionado

**Depende de:**
- [DEP-09](../../04-dependencias/EP-DEP-4-encapsular-material/DEP-09-servicios-confirm-y-notify.md) — Crear ConfirmDialogService y NotifyService en el toolkit *(épica [EP-DEP-4](../../04-dependencias/EP-DEP-4-encapsular-material/README.md))*

**Recomendación de origen:** [05 · Contexto compartido](../../../recomendaciones/05-contexto-compartido.md) → *oidc-identity-provider.service.ts*
