---
id: EP-I18N-3
titulo: "Caché del servidor y assets"
area: i18n-y-assets
prioridad: alta
estado: pendiente
issues: [I18N-08, I18N-09, I18N-10]
---

# EP-I18N-3 · Caché del servidor y assets

**Prioridad máxima:** 🟠 Alta · **Issues:** 3 · **Esfuerzo estimado:** ~2.5 días

## Objetivo

Cambios de configuración visibles al instante e imágenes ligeras y tematizables.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [I18N-08](I18N-08-htaccess-cache.md) | .htaccess: caché larga solo para ficheros con hash | 🟠 | S | 🧩 |
| 2 | [I18N-09](I18N-09-quitar-silent-refresh.md) | Quitar silent-refresh.html | ⚪ | S | 🧩 |
| 3 | [I18N-10](I18N-10-imagenes-svg-y-favicon.md) | Ilustraciones y logo en SVG adaptables al tema | 🟡 | M | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `public/.htaccess` | I18N-08 |
| `public/silent-refresh.html` | I18N-09 |
| `public/assets/img/**` | I18N-10 |
| `public/favicon.ico` | I18N-10 |
| `src/index.html` | I18N-10 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-09](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/CTX-09-oidc-refresco-unico.md) — OIDC: un único mecanismo de refresco de token *(épica [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md))*
- [STY-06](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/STY-06-theming-en-runtime.md) — Theming en runtime desde la configuración (por despliegue y tenant) *(épica [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-STY-2](../../03-estilos-y-theming/EP-STY-2-index-fuentes-e-iconos/README.md) — index.html, fuentes e iconos: `src/index.html`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `src/index.html`

## Checklist de la épica

- [ ] I18N-08 — .htaccess: caché larga solo para ficheros con hash
- [ ] I18N-09 — Quitar silent-refresh.html
- [ ] I18N-10 — Ilustraciones y logo en SVG adaptables al tema
