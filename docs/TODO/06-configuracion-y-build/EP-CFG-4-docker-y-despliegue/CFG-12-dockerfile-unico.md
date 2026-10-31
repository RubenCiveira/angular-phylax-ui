---
id: CFG-12
titulo: "Un único Dockerfile que funcione"
area: configuracion-y-build
epica: EP-CFG-4
paso: 1
prioridad: alta
esfuerzo: M
ambito: plantilla
estado: pendiente
depende_de: [CFG-07]
origen: 01-configuracion-y-build.md
---

# CFG-12 · Un único Dockerfile que funcione

**Épica:** [EP-CFG-4 · Docker y despliegue](README.md) — paso 1 de 3

**Prioridad:** 🟠 Alta · **Esfuerzo:** M (0,5–2 días) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`Dockerfile` y `_no_Dockerfile` son idénticos y usan `node:18` (no compatible con Angular 20), `npm install` con lockfile de pnpm, `--prod` y la ruta `dist/phylax/browser`. `src/docker/Dockerfile` copia `package-lock.json` (no existe) y copia `/app/build` en lugar de `/app/build/browser`.

## Tareas

- [ ] Borrar `_no_Dockerfile` y el `Dockerfile` de la raíz.
- [ ] `src/docker/Dockerfile`: `node:22-alpine`, `corepack enable`, `pnpm install --frozen-lockfile`, copiar `dist/phylax-ui/browser`.
- [ ] Construir y arrancar la imagen en CI.

## Criterios de aceptación

- [ ] `make docker-build && make docker-run` sirve la aplicación.

## Ficheros afectados

- `Dockerfile`
- `_no_Dockerfile`
- `src/docker/Dockerfile`

## Relacionado

**Depende de:**
- [CFG-07](../EP-CFG-3-build-y-tests/CFG-07-renombrar-proyecto-angular.md) — Renombrar el proyecto de angular.json (lughauth → phylax-ui) *(épica [EP-CFG-3](../EP-CFG-3-build-y-tests/README.md))*

**Desbloquea:**
- [CFG-02](CFG-02-makefile-coherente.md) — Makefile coherente con el proyecto
- [CFG-13](CFG-13-nginx-conf-y-cache.md) — nginx.conf propio: caché correcta y cabeceras de seguridad

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *Dockerfile (raíz) y _no_Dockerfile / src/docker/Dockerfile*
