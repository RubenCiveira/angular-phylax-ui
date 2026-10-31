---
id: EP-FEAT-1
titulo: "Listas de entidad"
area: features-generadas
prioridad: critica
estado: pendiente
issues: [FEAT-02, FEAT-03, FEAT-04, FEAT-05, FEAT-07, FEAT-06]
---

# EP-FEAT-1 · Listas de entidad

**Prioridad máxima:** 🔴 Crítica · **Issues:** 6 · **Esfuerzo estimado:** ~10.5 días

## Objetivo

Listas sin secretos, con pocas columnas relevantes, valores legibles, filtros visibles y búsqueda reactiva.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [FEAT-02](FEAT-02-quitar-columnas-sensibles-ya.md) | Quitar ya las columnas con secretos de las listas | 🔴 | S | 📄 |
| 2 | [FEAT-03](FEAT-03-metadatos-de-campo.md) | Metadatos de campo en el generador (sensitive, list, group…) | 🟠 | M | 🧩 |
| 3 | [FEAT-04](FEAT-04-renderizadores-por-tipo.md) | Renderizado de valores por tipo en listas y detalle | 🟠 | M | 🧩 |
| 4 | [FEAT-05](FEAT-05-pantalla-de-lista-usable.md) | Pantalla de lista: textos, estado vacío y filtros visibles | 🟠 | M | 🧩 |
| 5 | [FEAT-07](FEAT-07-lista-busqueda-reactiva-y-url.md) | Lista: búsqueda reactiva, tamaño de página y filtros en la URL | 🟡 | M | 🧩 |
| 6 | [FEAT-06](FEAT-06-entity-list-layout.md) | Componente <entity-list-layout> en el toolkit | 🟡 | L | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/features/access/oauth-client/components/oauth-client-view-list/oauth-client-view-list.component.html` | FEAT-02 |
| `src/app/features/identity/user/components/user-view-list/user-view-list.component.html` | FEAT-02 |
| `src/app/features/notification/smtp-outbound-config/components/smtp-outbound-config-view-list/smtp-outbound-config-view-list.component.html` | FEAT-02 |
| `src/app/features/access/resource-server/components/resource-server-view-list/resource-server-view-list.component.html` | FEAT-02 |
| `(generador) metadatos de entidad` | FEAT-03 |
| `src/app/features/**/components/*-view-list/*.component.html` | FEAT-03, FEAT-04, FEAT-05, FEAT-06 |
| `src/app/features/**/components/*-view-detail/*.component.html` | FEAT-04 |
| `src/app/features/**/components/*-view-list/*.component.ts` | FEAT-05, FEAT-07 |
| `src/app/shared/toolkit/entity-list-layout/**` | FEAT-06 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*
- [DATA-10](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-10-proyecciones-conservan-fechas.md) — Las proyecciones no deben convertir las fechas en strings *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*
- [DATA-15](../../02-capa-de-datos/EP-DATA-3-repositorio/DATA-15-entity-metadata-activo.md) — Activar EntityMetadata y borrar APIs comentadas *(épica [EP-DATA-3](../../02-capa-de-datos/EP-DATA-3-repositorio/README.md))*
- [DATA-18](../../02-capa-de-datos/EP-DATA-5-rutas-locales/DATA-18-local-route-state-sin-navegaciones-fantasma.md) — LocalRouteState: ámbito de componente y sin navegaciones al destruir *(épica [EP-DATA-5](../../02-capa-de-datos/EP-DATA-5-rutas-locales/README.md))*
- [STY-19](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/STY-19-estilos-comunes-de-entidad.md) — Clases globales de pantalla de entidad y fin de los estilos inline *(épica [EP-STY-6](../../03-estilos-y-theming/EP-STY-6-estilos-de-features/README.md))*
- [UI-10](../../05-toolkit-ui/EP-UI-4-list-view/UI-10-list-view-selector-de-columnas.md) — list-view: selector de columnas y columnas visibles por defecto *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*
- [UI-13](../../05-toolkit-ui/EP-UI-4-list-view/UI-13-list-view-estado-vacio-y-error.md) — list-view: estados vacío y de error integrados *(épica [EP-UI-4](../../05-toolkit-ui/EP-UI-4-list-view/README.md))*

## Desbloquea

- [FEAT-13](../EP-FEAT-2-formularios-y-modelos/FEAT-13-formularios-por-secciones.md) — Formularios agrupados por secciones y con tipos semánticos *(épica [EP-FEAT-2](../EP-FEAT-2-formularios-y-modelos/README.md))*

## Checklist de la épica

- [ ] FEAT-02 — Quitar ya las columnas con secretos de las listas
- [ ] FEAT-03 — Metadatos de campo en el generador (sensitive, list, group…)
- [ ] FEAT-04 — Renderizado de valores por tipo en listas y detalle
- [ ] FEAT-05 — Pantalla de lista: textos, estado vacío y filtros visibles
- [ ] FEAT-07 — Lista: búsqueda reactiva, tamaño de página y filtros en la URL
- [ ] FEAT-06 — Componente <entity-list-layout> en el toolkit
