---
id: CFG-13
titulo: "nginx.conf propio: caché correcta y cabeceras de seguridad"
area: configuracion-y-build
epica: EP-CFG-4
paso: 2
prioridad: alta
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-12]
origen: 01-configuracion-y-build.md
---

# CFG-13 · nginx.conf propio: caché correcta y cabeceras de seguridad

**Épica:** [EP-CFG-4 · Docker y despliegue](README.md) — paso 2 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

La configuración de nginx se genera con `echo` en el Dockerfile y cachea todo `.json` 6 meses: los cambios en `config/phylax-config.json` e `i18n/*.json` no llegan a los usuarios. No hay gzip ni cabeceras de seguridad.

## Tareas

- [ ] Ficheros `src/docker/nginx.conf` y `src/docker/entrypoint.sh` (en `/docker-entrypoint.d/`).
- [ ] `no-cache` para `/config/` y `/i18n/`; caché larga solo para ficheros con hash.
- [ ] `gzip on`, `X-Content-Type-Options`, `Referrer-Policy` y una CSP básica.

## Criterios de aceptación

- [ ] Tras cambiar el JSON montado, una recarga normal muestra el cambio.

## Ficheros afectados

- `src/docker/nginx.conf`
- `src/docker/entrypoint.sh`
- `src/docker/Dockerfile`

## Relacionado

**Depende de:**
- [CFG-12](CFG-12-dockerfile-unico.md) — Un único Dockerfile que funcione

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *src/docker/Dockerfile*
