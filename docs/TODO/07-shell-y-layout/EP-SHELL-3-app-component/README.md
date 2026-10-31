---
id: EP-SHELL-3
titulo: "AppComponent"
area: shell-y-layout
prioridad: alta
estado: pendiente
issues: [SHELL-10, SHELL-11, SHELL-12, SHELL-16]
---

# EP-SHELL-3 · AppComponent

**Prioridad máxima:** 🟠 Alta · **Issues:** 4 · **Esfuerzo estimado:** ~2 días

## Objetivo

Estado del layout con signals, arranque resiliente, skip link y pie configurable.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [SHELL-10](SHELL-10-app-component-signals.md) | AppComponent: estado del nav con signals y persistido | 🟡 | S | 🧩 |
| 2 | [SHELL-11](SHELL-11-bootstrap-identidad-con-timeout.md) | Arranque con timeout y reintento si la identidad no responde | 🟠 | S | 🧩 |
| 3 | [SHELL-12](SHELL-12-skip-link-y-aria.md) | Skip link y botón de menú accesible | 🟠 | S | 🧩 |
| 4 | [SHELL-16](SHELL-16-footer-configurable.md) | Pie de página configurable u oculto | ⚪ | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/app.component.ts` | SHELL-10, SHELL-11 |
| `src/app/app.component.html` | SHELL-11, SHELL-12, SHELL-16 |
| `src/app/bootstrap/layout/toolbar/toolbar.component.html` | SHELL-12 |
| `src/app/bootstrap/layout/footer/footer.component.html` | SHELL-16 |
| `src/app/bootstrap/layout/footer/footer.component.ts` | SHELL-16 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-11](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/CTX-11-identity-service-robusto.md) — IdentityService: tipado y error explícito si falta el handler *(épica [EP-CTX-3](../../01-contexto-compartido/EP-CTX-3-identidad-y-autorizacion/README.md))*
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*
- [STY-05](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/STY-05-base-accesible.md) — Estilos base de accesibilidad (foco y movimiento reducido) *(épica [EP-STY-1](../../03-estilos-y-theming/EP-STY-1-fundamentos-de-estilos/README.md))*
- [STY-10](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-10-layout-raiz-con-tokens.md) — Layout raíz con tokens (corrige el nav móvil en modo oscuro) *(épica [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `src/app/app.component.ts`, `src/app/bootstrap/layout/toolbar/toolbar.component.html`
- [EP-SHELL-4](../EP-SHELL-4-toolbar/README.md) — Toolbar: `src/app/bootstrap/layout/toolbar/toolbar.component.html`

## Checklist de la épica

- [ ] SHELL-10 — AppComponent: estado del nav con signals y persistido
- [ ] SHELL-11 — Arranque con timeout y reintento si la identidad no responde
- [ ] SHELL-12 — Skip link y botón de menú accesible
- [ ] SHELL-16 — Pie de página configurable u oculto
