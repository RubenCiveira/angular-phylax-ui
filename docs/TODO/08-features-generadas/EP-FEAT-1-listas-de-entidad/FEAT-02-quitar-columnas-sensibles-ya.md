---
id: FEAT-02
titulo: "Quitar ya las columnas con secretos de las listas"
area: features-generadas
epica: EP-FEAT-1
paso: 1
prioridad: critica
esfuerzo: S
ambito: local
estado: pendiente
depende_de: []
origen: 08-features-generadas.md
---

# FEAT-02 · Quitar ya las columnas con secretos de las listas

**Épica:** [EP-FEAT-1 · Listas de entidad](README.md) — paso 1 de 6

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 📄 Local (este proyecto)

## Contexto

Las listas tienen columnas con secretos y su valor llega al DOM:
- oauth-client: `secretOauth`, `registrationAccessToken`
- user: `password`, `temporalPassword`
- smtp-outbound-config: `password`
- resource-server: `apiKey`

## Tareas

- [ ] Borrar esas `<ng-template listViewColumn>` de las 4 plantillas.
- [ ] Revisar el detalle de esas entidades y no mostrar el valor.
- [ ] Anotar el cambio manual para que FEAT-03 lo haga permanente.

## Criterios de aceptación

- [ ] Ningún secreto aparece en el DOM de las listas ni del detalle.

## Ficheros afectados

- `src/app/features/access/oauth-client/components/oauth-client-view-list/oauth-client-view-list.component.html`
- `src/app/features/identity/user/components/user-view-list/user-view-list.component.html`
- `src/app/features/notification/smtp-outbound-config/components/smtp-outbound-config-view-list/smtp-outbound-config-view-list.component.html`
- `src/app/features/access/resource-server/components/resource-server-view-list/resource-server-view-list.component.html`

## Relacionado

**Desbloquea:**
- [FEAT-03](FEAT-03-metadatos-de-campo.md) — Metadatos de campo en el generador (sensitive, list, group…)

**Recomendación de origen:** [08 · Features generadas](../../../recomendaciones/08-features-generadas.md) → *components/*-view-list/*.component.html (columnas)*
