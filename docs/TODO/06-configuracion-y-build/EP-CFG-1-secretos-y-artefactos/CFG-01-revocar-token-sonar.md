---
id: CFG-01
titulo: "Revocar el token de SonarQube y sacarlo del repositorio"
area: configuracion-y-build
epica: EP-CFG-1
paso: 1
prioridad: critica
esfuerzo: S
ambito: ambos
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-01 · Revocar el token de SonarQube y sacarlo del repositorio

**Épica:** [EP-CFG-1 · Secretos y artefactos del repositorio](README.md) — paso 1 de 3

**Prioridad:** 🔴 Crítica · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩📄 Plantilla + local

## Contexto

`Makefile` (línea 4) y `sonar-project.properties` contienen un token real de SonarQube (prefijo `sqa_`). Sigue en el historial de git aunque se borre del fichero.

## Tareas

- [ ] Revocar el token en SonarQube y generar uno nuevo.
- [ ] Makefile: `SONAR_TOKEN ?= $(shell echo $$SONAR_TOKEN)`.
- [ ] Borrar `sonar.token` y `sonar.host.url` de `sonar-project.properties`.
- [ ] Si el repositorio es o será público, limpiar el historial con `git filter-repo`.
- [ ] Plantilla del generador: secretos siempre desde entorno o `.env` ignorado.

## Criterios de aceptación

- [ ] El token antiguo no funciona.
- [ ] `git grep sqa_` no devuelve nada en la rama principal.

## Ficheros afectados

- `Makefile`
- `sonar-project.properties`

## Relacionado

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *Makefile*
