# 03 · Reducción de dependencias

[← Índice](README.md)

## Inventario actual

| Dependencia | Peso / alcance | Uso real | Propuesta |
|---|---|---|---|
| `public/assets/monaco/` (vendorizado) | **21 MB**, 103 ficheros versionados | `editable-sourcecode`: **0 usos** en features | Sacar de la base; opcional bajo demanda |
| `public/assets/editorjs/` (vendorizado) | 648 KB, 7 ficheros | `editable-markdown`: **0 usos** | Sacar de la base; opcional |
| `@opentelemetry/*` (11 paquetes) | ~150–250 KB min en el bundle **inicial** | Telemetría opcional según configuración | Carga diferida + alinear versiones |
| `uuid` + `@types/uuid` | ~4 KB | Solo `generateComb()` | `crypto.randomUUID()` |
| `@angular/animations` | ~60 KB | `provideAnimations()` | `provideAnimationsAsync()` → retirar |
| `@angular/platform-browser-dynamic` | — | No se usa | Eliminar |
| `angular-oauth2-oidc` | ~40 KB | Login OIDC + step-up | Mantener, aislado tras la interfaz `IdentityProvider` |
| `@jsverse/transloco` | ~15 KB | i18n en runtime | Mantener |
| `@angular/material` + `@angular/cdk` | 25 módulos distintos | Toolkit + features | Mantener, con acceso solo desde el toolkit |
| `zone.js` | ~35 KB | Detección de cambios | Medio plazo: zoneless |
| `karma*`, `jasmine*` (dev) | 7 paquetes | Tests | Vitest/Jest (doc 01) |
| `@angular-architects/module-federation` | **no instalado** | `webpack.config.js` (ignorado) | Decidir MFE (doc 01) |
| Google Fonts / Material Icons (CDN) | 2 dominios externos | Fuentes e iconos | Autoalojar o SVG (doc 02) |

---

## `public/assets/monaco/**` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
Hay una copia completa de Monaco Editor (21 MB, NLS de 9 idiomas, todos los `basic-languages`) versionada en git y copiada a `dist` en cada build. `editable-sourcecode.component.ts` la carga con un `<script>` desde `assetsPath = '/assets/monaco/vs'` (ruta absoluta, que **se rompe con `APP_ROOT` ≠ `/`**). Ninguna feature generada usa `<editable-sourcecode>`.

**Qué cambiar**
- Sacarla de la base. Si un proyecto la necesita:
  - **A)** dependencia npm `monaco-editor` + `glob` de assets en `angular.json` (`{ "glob": "**/*", "input": "node_modules/monaco-editor/min/vs", "output": "assets/monaco/vs" }`), solo si el generador detecta campos de tipo `sourcecode`, o
  - **B)** CDN configurable en `phylax-config.json` (`editors.monaco.url`).
- Usar una ruta relativa al `base href` (`assets/monaco/vs` sin `/` inicial, o `inject(APP_BASE_HREF)`).
- Plantearse **CodeMirror 6** (~150 KB, modular, ESM, se carga con `import()`) como alternativa más ligera para JSON, HTML o plantillas.

**Qué aporta**
- El repositorio pierde unos 21 MB y `dist` pasa de 38 MB a ~2 MB.
- Builds y despliegues más rápidos, y el análisis de Sonar se limpia.
- Funciona bajo subrutas.

**Cómo enfocarlo**
1. Borrar la carpeta con `git rm -r`.
2. Que el generador añada el glob de assets **solo** cuando el modelo tenga un campo `sourcecode`.
3. Si se pasa a CodeMirror, el componente usa `import('codemirror')` dentro de `ngAfterViewInit`, con lo que Angular crea un chunk separado automáticamente.

---

## `public/assets/editorjs/**` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
Editor.js + plugins + `markdown-it.min.js` vendorizados (648 KB). Los carga `editable-markdown` mediante `<script>` (con el mismo problema de ruta absoluta). No tiene usos.

**Qué cambiar**
Mismo enfoque que Monaco: opcional, como dependencia npm (`@editorjs/editorjs`, `markdown-it`) cargada con `import()` dinámico. Si solo se necesita Markdown, basta un `<textarea>` con vista previa (`marked` ~30 KB), sin editor de bloques.

**Qué aporta**
Sin código de terceros versionado y con actualizaciones de seguridad vía `pnpm audit`.

**Cómo enfocarlo**
Igual que Monaco. Vale la pena porque Editor.js es poco habitual en back-offices.

---

## `src/app/shared/context/observability/instrumentation.service.ts` (OpenTelemetry) · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- Importa **de forma estática** `WebTracerProvider`, `getWebAutoInstrumentations`, `OTLPTraceExporter`, `OTLPLogExporter`, `LoggerProvider`, `ZoneContextManager`… El servicio se inyecta en `AppComponent`, así que **todo OpenTelemetry va en el bundle inicial**, aunque `telemetry.name` no esté configurado y la telemetría quede desactivada.
- Las versiones están desalineadas (`sdk-logs@0.208` con `exporter-logs-otlp-http@0.202`, `resources@2.2` con `sdk-trace-web@2.0`). En OpenTelemetry JS eso puede dar errores de tipos o de runtime, porque los paquetes `0.x` se publican juntos.
- `getWebAutoInstrumentations` incluye todas las instrumentaciones (document-load, user-interaction, fetch, XHR), aunque luego solo se configuran cuatro.

**Qué cambiar**
```ts
public activate() {
  this.conf['telemetry'].pipe(take(1)).subscribe(async (conf) => {
    if (!conf?.name) return;
    const otel = await import('./otel-bootstrap'); // chunk separado
    otel.start(conf, this.router);
  });
}
```
- Mover todos los imports de `@opentelemetry/sdk-*`, `exporter-*`, `instrumentation*` y `context-zone` a `otel-bootstrap.ts`.
- Mantener solo `@opentelemetry/api` (~10 KB) en el bundle principal, porque `ClientService` y `ErrorService` lo usan para `trace`/`propagation` y es no-op si no hay un provider registrado.
- Sustituir `getWebAutoInstrumentations` por las instrumentaciones concretas (`@opentelemetry/instrumentation-fetch`, `-xml-http-request`, `-document-load`).
- Alinear las versiones (todas las `0.x` iguales y todas las `2.x` iguales) con un `pnpm.overrides` o actualizando juntas.

**Qué aporta**
- Bundle inicial 150–250 KB más pequeño en despliegues sin telemetría.
- La telemetría pasa a ser un *plug-in* real: si un proyecto generado no la quiere, no paga su peso.

**Cómo enfocarlo**
1. Opción del generador `telemetry: none | lazy | eager`.
2. Con `none`, no se emiten los paquetes ni el servicio. `ClientService` y `ErrorService` dependen solo de `@opentelemetry/api` o de una interfaz propia `Telemetry` con implementación no-op.

---

## `src/app/shared/data/repository/repository.service.ts` (`uuid`) · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
```ts
import { v4 as uuidv4 } from 'uuid';
generateComb(): string {
  const guid = uuidv4().split('-'); … }
```

**Qué cambiar**
```ts
const guid = crypto.randomUUID().split('-');
```
y quitar `uuid` y `@types/uuid` de `package.json`.

**Qué aporta**
Dos dependencias menos. `crypto.randomUUID` es nativo en todos los navegadores actuales (requiere contexto seguro: HTTPS o `localhost`).

**Cómo enfocarlo**
Cambio de una línea en la plantilla. Si se necesitan IDs ordenables por tiempo, plantearse **UUIDv7** generado a mano (unas 15 líneas) en lugar del "comb" que se construye ahora sobre una v4.

---

## `src/app/app.config.ts` (`@angular/animations`) · 🟡 Medio · 🧩 Plantilla

**Estado actual**
`provideAnimations()` carga el motor de animaciones de forma síncrona. Este provider está marcado como deprecado en las versiones recientes de Angular, y Angular Material ha ido migrando sus componentes a animaciones CSS nativas.

**Qué cambiar**
1. Pasar ya a `provideAnimationsAsync()` (carga diferida del motor).
2. Comprobar con `ng build` y una prueba manual de diálogos, menús, expansion panels y snackbars si la versión instalada de Material sigue necesitando `@angular/animations`. Si no, quitar el provider y la dependencia.

**Qué aporta**
~60 KB menos en el bundle inicial.

**Cómo enfocarlo**
Cambio en la plantilla de `app.config.ts`, con verificación visual.

---

## `@angular/platform-browser-dynamic` (package.json) · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Aparece en las dependencias, pero el arranque usa `bootstrapApplication` de `@angular/platform-browser`. No se importa en ningún sitio.

**Qué cambiar**
Quitarlo de `package.json`.

**Qué aporta**
Una dependencia menos.

**Cómo enfocarlo**
Directo.

---

## `src/app/shared/context/identity/oidc-identity/*` (`angular-oauth2-oidc`) · 🟡 Medio · 🧩 Plantilla

**Estado actual**
La librería se usa detrás de una buena abstracción (`IDENTITY_PROVIDER` / `IdentityHandler`). Pero la configuración (`OAuthModule.forRoot()`, `StepUpInterceptor`, `StepUpService`) se registra siempre mediante `importProvidersFrom(OidcLoginModule)` en `app.config.ts`, aunque `phylax-config.json` defina otro `type` de identidad.

**Qué cambiar**
- Ofrecer `provideOidcIdentity()` (función standalone con `makeEnvironmentProviders`) en lugar del `NgModule`.
- Que el generador solo lo incluya si el proyecto usa OIDC.
- Mantener la librería (es la referencia en Angular), sin acoplar nada fuera de `oidc-identity/`.

**Qué aporta**
Es fácil cambiar de proveedor (por ejemplo, `oidc-client-ts` o un proveedor "API key" para entornos internos) sin tocar el resto del código.

**Cómo enfocarlo**
Ver doc 05 para los cambios funcionales (sustituir `alert`/`confirm`, `showDebugInformation`, etc.).

---

## Angular Material / CDK (uso directo desde las features) · 🟡 Medio · 🧩 Plantilla

**Estado actual**
Hay 25 módulos de Material distintos en el toolkit. Además, **las features importan Material directamente**: cada `*-view-list.module.ts` importa `MatButtonModule`, `MatExpansionModule` y `MatIconModule`, y cada acción importa `MatDialogModule` y `MatSnackBarModule`. Si un día se quiere cambiar de librería de componentes o hacer un tema muy distinto, hay que regenerar 344 módulos.

**Qué cambiar**
- Regla: **solo `shared/toolkit` importa `@angular/material`**. Las features usan componentes del toolkit (`<app-button>`, `<entity-list-layout>`, `ConfirmDialogService`, `NotifyService`).
- Mientras tanto, añadir una regla de ESLint `no-restricted-imports` sobre `@angular/material/*` fuera de `shared/toolkit` y `bootstrap/layout`, para medir cuántos usos quedan.

**Qué aporta**
La librería visual queda **encapsulada**: cambiar el tema o incluso la librería afecta a un solo directorio. Es la adaptabilidad máxima para una base generada.

**Cómo enfocarlo**
Empezar por los servicios (`ConfirmDialogService` y `NotifyService` sustituyen a `MatDialog` y `MatSnackBar` en las 9 acciones por entidad). Es lo que más se repite y lo más fácil de abstraer (ver doc 08).

---

## `zone.js` · 🟡 Medio (medio plazo) · 🧩 Plantilla

**Estado actual**
La app usa `provideZoneChangeDetection({ eventCoalescing: true })`. Hay muchos `setTimeout(() => signal.set(...))` para esquivar errores `ExpressionChanged…` y estado mutable fuera de signals (`navFull`, `navMini`, `bootstrap` en `AppComponent`; mutación de `copy.hidden` en el menú; `column.visible` en `list-view`). Ningún componente usa `ChangeDetectionStrategy.OnPush`.

**Qué cambiar**
Ruta progresiva:
1. Pasar el estado de los componentes a `signal()` y quitar los `setTimeout` de sincronización.
2. Poner `OnPush` en todas las plantillas generadas.
3. Activar `provideZonelessChangeDetection()` y quitar `zone.js` de los polyfills. `ZoneContextManager` de OpenTelemetry pasa a `StackContextManager`.

**Qué aporta**
~35 KB menos, mejor rendimiento en listas grandes y un modelo de reactividad más predecible para quien extienda el código generado.

**Cómo enfocarlo**
Hacerlo **después** de la refactorización a standalone del generador (doc 08). Medir con Angular DevTools (profiler) antes y después.

---

## Política de dependencias (nuevo: `docs/` o README) · ⚪ Bajo · 🧩 Plantilla

**Qué cambiar**
Dejar por escrito en el generador:
- **Núcleo obligatorio:** `@angular/*`, `rxjs`, `tslib`, `@jsverse/transloco`, `@angular/material`/`cdk`.
- **Módulos opcionales**, que el generador activa por configuración: `oidc` (angular-oauth2-oidc), `telemetry` (OpenTelemetry), `editors.code` (Monaco o CodeMirror), `editors.richtext` (Editor.js o alternativa), `mfe` (Native Federation).
- Usar Renovate o Dependabot con `groupName` para `@angular/*` y `@opentelemetry/*`.

**Qué aporta**
Cada proyecto generado incluye solo lo que necesita.

**Cómo enfocarlo**
Introducir un `generator.config.json` o equivalente con estos flags.
