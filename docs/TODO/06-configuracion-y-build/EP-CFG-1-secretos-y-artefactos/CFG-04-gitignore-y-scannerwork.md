---
id: CFG-04
titulo: ".gitignore completo y quitar .scannerwork del repositorio"
area: configuracion-y-build
epica: EP-CFG-1
paso: 2
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: []
origen: 01-configuracion-y-build.md
---

# CFG-04 · .gitignore completo y quitar .scannerwork del repositorio

**Épica:** [EP-CFG-1 · Secretos y artefactos del repositorio](README.md) — paso 2 de 3

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

`.gitignore` solo contiene `node_modules`, `.angular` y `dist`. `.scannerwork/` está versionado y hay un `.DS_Store` en la raíz.

## Tareas

- [ ] Añadir `coverage/`, `.scannerwork/`, `.env*` (con `!.env.example`), `.DS_Store`, `*.log`.
- [ ] `git rm -r --cached .scannerwork`.

## Criterios de aceptación

- [ ] `git status` en un clon limpio tras build, test y análisis no muestra artefactos.

## Ficheros afectados

- `.gitignore`
- `.scannerwork/`

## Relacionado

**Recomendación de origen:** [01 · Configuración y build](../../recomendaciones/01-configuracion-y-build.md) → *.gitignore / .scannerwork*
