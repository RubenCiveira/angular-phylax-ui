---
id: EP-I18N-2
titulo: "phylax-config.json"
area: i18n-y-assets
prioridad: alta
estado: pendiente
issues: [I18N-02, I18N-07]
---

# EP-I18N-2 · phylax-config.json

**Prioridad máxima:** 🟠 Alta · **Issues:** 2 · **Esfuerzo estimado:** ~1 días

## Objetivo

Configuración pública limpia, coherente con los idiomas reales y con ejemplo de producción.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [I18N-02](I18N-02-idiomas-disponibles-reales.md) | available-langs solo con idiomas que existen | 🟠 | S | 📄 |
| 2 | [I18N-07](I18N-07-phylax-config-limpio.md) | Limpiar phylax-config.json y publicar un ejemplo de producción | 🟠 | S | 🧩📄 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `public/config/phylax-config.json` | I18N-02, I18N-07 |
| `public/config/phylax-config.example.prod.json` | I18N-07 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-18](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-18-json-schema-configuracion.md) — Publicar phylax-config.schema.json *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*
- [I18N-01](../EP-I18N-1-ficheros-de-traduccion/I18N-01-recolocar-traducciones-en.md) — Mover los en.json a sus carpetas actuales y borrar las huérfanas *(épica [EP-I18N-1](../EP-I18N-1-ficheros-de-traduccion/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CTX-2](../../01-contexto-compartido/EP-CTX-2-proveedor-oidc/README.md) — Proveedor OIDC: `public/config/phylax-config.json`
- [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md) — Configuración en runtime: `public/config/phylax-config.json`
- [EP-DATA-2](../../02-capa-de-datos/EP-DATA-2-api-service-y-provider/README.md) — ApiService y ApiProvider: `public/config/phylax-config.json`
- [EP-STY-3](../../03-estilos-y-theming/EP-STY-3-marca-y-shell/README.md) — Marca configurable y estilos del shell: `public/config/phylax-config.json`

## Checklist de la épica

- [ ] I18N-02 — available-langs solo con idiomas que existen
- [ ] I18N-07 — Limpiar phylax-config.json y publicar un ejemplo de producción
