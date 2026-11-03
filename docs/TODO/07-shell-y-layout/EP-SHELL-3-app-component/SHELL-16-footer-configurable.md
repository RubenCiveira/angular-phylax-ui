---
id: SHELL-16
titulo: "Pie de página configurable u oculto"
area: shell-y-layout
epica: EP-SHELL-3
paso: 4
prioridad: baja
esfuerzo: S
ambito: plantilla
estado: pendiente
depende_de: [CTX-15]
origen: 04-shell-y-layout.md
---

# SHELL-16 · Pie de página configurable u oculto

**Épica:** [EP-SHELL-3 · AppComponent](README.md) — paso 4 de 4

**Prioridad:** ⚪ Baja · **Esfuerzo:** S (< 0,5 día) · **Ámbito:** 🧩 Plantilla del generador

## Contexto

El pie muestra `<p>Footer</p>` en producción, el SCSS dice `/* some css */` y hay imports sin uso.

## Tareas

- [ ] `layout.footer: false | { text, links[] }` en la configuración.
- [ ] Mostrar versión (`environment.version`) si está activo.
- [ ] Quitar imports sin uso.

## Criterios de aceptación

- [ ] Con la configuración por defecto no se ve el texto "Footer".

## Ficheros afectados

- `src/app/bootstrap/layout/footer/footer.component.html`
- `src/app/bootstrap/layout/footer/footer.component.ts`
- `src/app/app.component.html`

## Relacionado

**Depende de:**
- [CTX-15](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/CTX-15-app-config-tipado.md) — Configuración en runtime tipada (APP_CONFIG) *(épica [EP-CTX-6](../../01-contexto-compartido/EP-CTX-6-configuracion-en-runtime/README.md))*

**Recomendación de origen:** [04 · Shell y layout](../../recomendaciones/04-shell-y-layout.md) → *footer.component.**
