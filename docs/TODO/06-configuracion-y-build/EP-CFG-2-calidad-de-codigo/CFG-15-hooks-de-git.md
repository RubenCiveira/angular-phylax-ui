---
id: CFG-15
titulo: "Hooks de git con lefthook (commitlint y format)"
area: configuracion-y-build
epica: EP-CFG-2
paso: 5
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CFG-05]
origen: 01-configuracion-y-build.md
---

# CFG-15 · Hooks de git con lefthook (commitlint y format)

**Épica:** [EP-CFG-2 · package.json y calidad de código](README.md) — paso 5 de 5

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

Hay `.commitlintrc`, pero nada lo ejecuta.

## Tareas

- [ ] Instalar `lefthook`.
- [ ] `commit-msg` → commitlint; `pre-commit` → `prettier --check` sobre los ficheros en stage.

## Criterios de aceptación

- [ ] Un commit con mensaje no convencional se rechaza.

## Ficheros afectados

- `lefthook.yml`
- `package.json`

## Relacionado

**Depende de:**
- [CFG-05](CFG-05-package-json-scripts.md) — package.json: nombre, engines y scripts útiles

**Recomendación de origen:** [01 · Configuración y build](../../../recomendaciones/01-configuracion-y-build.md) → *.commitlintrc*
