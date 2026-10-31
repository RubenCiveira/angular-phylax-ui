---
id: EP-CFG-4
titulo: "Docker y despliegue"
area: configuracion-y-build
prioridad: alta
estado: pendiente
issues: [CFG-12, CFG-13, CFG-02]
---

# EP-CFG-4 · Docker y despliegue

**Prioridad máxima:** 🟠 Alta · **Issues:** 3 · **Esfuerzo estimado:** ~2.5 días

## Objetivo

Una imagen que se construye, sirve la app y no cachea la configuración.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CFG-12](CFG-12-dockerfile-unico.md) | Un único Dockerfile que funcione | 🟠 | M | 🧩 |
| 2 | [CFG-13](CFG-13-nginx-conf-y-cache.md) | nginx.conf propio: caché correcta y cabeceras de seguridad | 🟠 | S | 🧩 |
| 3 | [CFG-02](CFG-02-makefile-coherente.md) | Makefile coherente con el proyecto | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `Dockerfile` | CFG-12 |
| `_no_Dockerfile` | CFG-12 |
| `src/docker/Dockerfile` | CFG-12, CFG-13 |
| `src/docker/nginx.conf` | CFG-13 |
| `src/docker/entrypoint.sh` | CFG-13 |
| `Makefile` | CFG-02 |
| `src/docker/env.local/conf/` | CFG-02 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CFG-06](../EP-CFG-2-calidad-de-codigo/CFG-06-eslint.md) — Añadir ESLint con reglas para el código generado *(épica [EP-CFG-2](../EP-CFG-2-calidad-de-codigo/README.md))*
- [CFG-07](../EP-CFG-3-build-y-tests/CFG-07-renombrar-proyecto-angular.md) — Renombrar el proyecto de angular.json (lughauth → phylax-ui) *(épica [EP-CFG-3](../EP-CFG-3-build-y-tests/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CFG-1](../EP-CFG-1-secretos-y-artefactos/README.md) — Secretos y artefactos del repositorio: `Makefile`

## Checklist de la épica

- [ ] CFG-12 — Un único Dockerfile que funcione
- [ ] CFG-13 — nginx.conf propio: caché correcta y cabeceras de seguridad
- [ ] CFG-02 — Makefile coherente con el proyecto
