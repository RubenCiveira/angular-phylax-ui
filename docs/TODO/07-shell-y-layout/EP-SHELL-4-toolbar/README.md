---
id: EP-SHELL-4
titulo: "Toolbar"
area: shell-y-layout
prioridad: alta
estado: pendiente
issues: [SHELL-13, SHELL-15, SHELL-14]
---

# EP-SHELL-4 · Toolbar

**Prioridad máxima:** 🟠 Alta · **Issues:** 3 · **Esfuerzo estimado:** ~2.5 días

## Objetivo

Cabecera con título de página y preferencias de usuario.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [SHELL-13](SHELL-13-toolbar-limpia.md) | Toolbar: sin console.log, con título de página y textos traducidos | 🟠 | S | 🧩 |
| 2 | [SHELL-15](SHELL-15-resolve-template-tenant.md) | Helper compartido para URLs con {{tenant}} | ⚪ | S | 🧩 |
| 3 | [SHELL-14](SHELL-14-menu-de-usuario-preferencias.md) | Menú de usuario con idioma, tenant y tema | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/bootstrap/layout/toolbar/toolbar.component.ts` | SHELL-13, SHELL-14, SHELL-15 |
| `src/app/bootstrap/layout/toolbar/toolbar.component.html` | SHELL-13, SHELL-14 |
| `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts` | SHELL-15 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [STY-04](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-04-modo-claro-oscuro-forzable.md) — Permitir forzar modo claro u oscuro *(épica [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md) — Proveedor OIDC: `src/app/shared/context/identity/oidc-identity/oidc-identity-provider.service.ts`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `src/app/bootstrap/layout/toolbar/toolbar.component.html`
- [EP-SHELL-3](../EP-SHELL-3-app-component/README.md) — AppComponent: `src/app/bootstrap/layout/toolbar/toolbar.component.html`

## Checklist de la épica

- [ ] SHELL-13 — Toolbar: sin console.log, con título de página y textos traducidos
- [ ] SHELL-15 — Helper compartido para URLs con {{tenant}}
- [ ] SHELL-14 — Menú de usuario con idioma, tenant y tema
