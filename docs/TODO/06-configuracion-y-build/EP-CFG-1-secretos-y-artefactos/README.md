---
id: EP-CFG-1
titulo: "Secretos y artefactos del repositorio"
area: configuracion-y-build
prioridad: critica
estado: pendiente
issues: [CFG-01, CFG-04, CFG-03]
---

# EP-CFG-1 · Secretos y artefactos del repositorio

**Prioridad máxima:** 🔴 Crítica · **Issues:** 3 · **Esfuerzo estimado:** ~1.5 días

## Objetivo

Ninguna credencial ni artefacto generado en git; Sonar limpio.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [CFG-01](CFG-01-revocar-token-sonar.md) | Revocar el token de SonarQube y sacarlo del repositorio | 🔴 | S | 🧩📄 |
| 2 | [CFG-04](CFG-04-gitignore-y-scannerwork.md) | .gitignore completo y quitar .scannerwork del repositorio | ⚪ | S | 🧩 |
| 3 | [CFG-03](CFG-03-sonar-exclusiones-y-cobertura.md) | Sonar: excluir código de terceros y cobertura real | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `Makefile` | CFG-01 |
| `sonar-project.properties` | CFG-01, CFG-03 |
| `.gitignore` | CFG-04 |
| `.scannerwork/` | CFG-04 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [CFG-11](../EP-CFG-3-build-y-tests/CFG-11-tests-vitest.md) — Migrar los tests de Karma a Vitest (o Jest) *(épica [EP-CFG-3](../EP-CFG-3-build-y-tests/README.md))*

## Coincidencias de ficheros con otras épicas

Estas épicas modifican alguno de los mismos ficheros. Conviene no trabajarlas en paralelo o coordinar los merges:

- [EP-CFG-4](../EP-CFG-4-docker-y-despliegue/README.md) — Docker y despliegue: `Makefile`

## Checklist de la épica

- [ ] CFG-01 — Revocar el token de SonarQube y sacarlo del repositorio
- [ ] CFG-04 — .gitignore completo y quitar .scannerwork del repositorio
- [ ] CFG-03 — Sonar: excluir código de terceros y cobertura real
