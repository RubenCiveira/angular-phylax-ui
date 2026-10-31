---
id: CFG-02
titulo: "Makefile coherente con el proyecto"
area: configuracion-y-build
epica: EP-CFG-4
paso: 3
prioridad: media
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-06, CFG-12]
origen: 01-configuracion-y-build.md
---

# CFG-02 · Makefile coherente con el proyecto

**Épica:** [EP-CFG-4 · Docker y despliegue](README.md) — paso 3 de 3

**Prioridad:** 🟡 Media · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`lint` llama a un script que no existe, `clean` usa `npm cache` en un proyecto pnpm y `docker-run` monta `./src/docker/env.local/conf`, que no existe.

## Tareas

- [ ] `lint` → `pnpm lint`.
- [ ] `clean` sin `npm cache`.
- [ ] Crear `src/docker/env.local/conf/phylax-config.example.json` y documentarlo.

## Criterios de aceptación

- [ ] Todos los objetivos del Makefile funcionan en un clon limpio.

## Ficheros afectados

- `Makefile`
- `src/docker/env.local/conf/`

## Relacionado

**Depende de:**
- [CFG-06](../EP-CFG-2-calidad-de-codigo/CFG-06-eslint.md) — Añadir ESLint con reglas para el código generado *(épica [EP-CFG-2](../EP-CFG-2-calidad-de-codigo/README.md))*
- [CFG-12](CFG-12-dockerfile-unico.md) — Un único Dockerfile que funcione

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *Makefile*
