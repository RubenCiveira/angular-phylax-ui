---
id: EP-SHELL-5
titulo: "Páginas de carga y 404"
area: shell-y-layout
prioridad: media
estado: pendiente
issues: [SHELL-17, SHELL-18]
---

# EP-SHELL-5 · Páginas de carga y 404

**Prioridad máxima:** 🟡 Media · **Issues:** 2 · **Esfuerzo estimado:** ~1 días

## Objetivo

Pantallas de sistema accesibles y con salida.

## Orden de trabajo

Los issues están ordenados para respetar sus dependencias y tocar cada fichero el menor número de veces. Se recomienda **una rama y un PR por épica** (o un PR por paso si la épica es grande).

| Paso | Issue | Título | Prioridad | Esfuerzo | Ámbito |
|---|---|---|---|---|---|
| 1 | [SHELL-17](SHELL-17-pantalla-de-carga.md) | Pantalla de carga accesible | 🟡 | S | 🧩 |
| 2 | [SHELL-18](SHELL-18-pagina-404.md) | Página 404 con salida | 🟡 | S | 🧩 |

## Ficheros que toca la épica

| Fichero | Issues |
|---|---|
| `src/app/bootstrap/layout/pages/bootstrap/bootstrap.component.ts` | SHELL-17 |
| `src/app/bootstrap/layout/pages/unknown/unknown.component.ts` | SHELL-18 |

## Antes de empezar

Issues de otras épicas de los que depende:

- [UI-19](../../05-toolkit-ui/EP-UI-6-paginas-de-error/UI-19-error-page-traducida.md) — Página de error traducida y útil *(épica [EP-UI-6](../../05-toolkit-ui/EP-UI-6-paginas-de-error/README.md))*

## Checklist de la épica

- [ ] SHELL-17 — Pantalla de carga accesible
- [ ] SHELL-18 — Página 404 con salida
