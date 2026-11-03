# 01 · Configuración, build y tooling

[← Índice](README.md)

---

## `Makefile` · 🔴 Crítico · 📄 Local / 🧩 Plantilla

**Estado actual**
- La línea 4 contiene un token real de SonarQube: `SONAR_TOKEN=sqa_…` (aquí aparece redactado a propósito).
- El objetivo `lint` llama a `npm run lint`, pero ese script no existe en `package.json` (el propio Makefile lo reconoce con `|| echo "Linting no disponible"`).
- `docker-build` usa `src/docker/Dockerfile` y `docker-run` monta `./src/docker/env.local/conf`, un directorio que no existe en el repositorio.
- `clean` ejecuta `npm cache clean --force`, aunque el proyecto usa **pnpm** (`pnpm-lock.yaml`).

**Qué cambiar**
1. Revocar el token en SonarQube y quitarlo del fichero. Leerlo del entorno: `SONAR_TOKEN ?= $(shell echo $$SONAR_TOKEN)`.
2. Añadir un linter real (ver `package.json`) o eliminar el objetivo `lint`.
3. Usar el gestor de paquetes que corresponde (`pnpm store prune` o nada).
4. Documentar o crear `src/docker/env.local/conf/phylax-config.json` como ejemplo (`*.example.json`).

**Qué aporta**
- Quita una credencial filtrada (sigue en el historial de git hasta que se revoque).
- Los objetivos del Makefile pasan a funcionar y a reflejar el flujo real.

**Cómo enfocarlo**
- Revocar primero (el historial de git conserva el token aunque se borre). Valorar `git filter-repo` si el repositorio es o será público.
- En el generador, la plantilla del Makefile debe tomar **siempre** los secretos de variables de entorno o de un `.env` ignorado por git.

---

## `sonar-project.properties` · 🔴 Crítico · 🧩 Plantilla

**Estado actual**
Repite el mismo token en `sonar.token=…` y fija `sonar.host.url=http://localhost:9000`. Lee la cobertura de `coverage/lcov.info`, pero `karma-coverage` no está configurado para generar lcov (ver `karma.config.js`).

**Qué cambiar**
- Borrar `sonar.token` y `sonar.host.url`. Se pasan por CLI o por entorno (`SONAR_TOKEN`, `SONAR_HOST_URL`), como ya hace el Makefile.
- Añadir `sonar.exclusions` para `public/assets/monaco/**` y `public/assets/editorjs/**` (código de terceros minificado).
- Configurar el reporter `lcov` en el test runner.

**Qué aporta**
Nada sensible en el repositorio. El análisis no tiene en cuenta los 21 MB de código de terceros y la métrica de cobertura pasa a ser real.

**Cómo enfocarlo**
Cambiarlo en la plantilla del generador. Se puede hacer junto con la limpieza del Makefile.

---

## `.scannerwork/` (versionado) · ⚪ Bajo · 📄 Local

**Estado actual**
`.scannerwork/.sonar_lock` y `.scannerwork/report-task.txt` están en git. Son artefactos del scanner.

**Qué cambiar**
`git rm -r --cached .scannerwork` y añadir `.scannerwork/` a `.gitignore`.

**Qué aporta**
Menos ruido en los diffs y no se filtran URLs internas del servidor Sonar.

**Cómo enfocarlo**
Un commit de limpieza junto con `.gitignore`.

---

## `.gitignore` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
Solo contiene `node_modules`, `.angular` y `dist`. Faltan `.DS_Store` (hay uno en la raíz), `coverage/`, `.scannerwork/`, `.env*` y ficheros del IDE.

**Qué cambiar**
```gitignore
node_modules/
.angular/
dist/
coverage/
.scannerwork/
.env
.env.*
!.env.example
.DS_Store
*.log
```

**Qué aporta**
Evita que se cuelen artefactos y secretos (justo lo que ya ha pasado con `.scannerwork`).

**Cómo enfocarlo**
Plantilla del generador. Cambio sin riesgo.

---

## `package.json` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- `"name": "phylaxui"` y `"version": "0.0.0"`.
- El script `pretify` (con errata) usa el glob `{public,src/{app,shared,features}}/**`, pero `src/shared` y `src/features` no existen: están en `src/app/…`. Además, al incluir `public` formatea también el código vendorizado de Monaco y Editor.js.
- No hay `lint`, `format:check`, `typecheck` ni `e2e`.
- El script `analyze` usa `webpack-bundle-analyzer` sobre `stats.json`, pero el builder `application` (esbuild) no produce ese formato y el paquete no está instalado.
- Dependencias que se pueden eliminar o diferir (detalle en [03-dependencias.md](03-dependencias.md)): `@angular/animations`, `uuid` y `@types/uuid`, los 11 paquetes `@opentelemetry/*` (con versiones mezcladas: `0.202`, `0.208`, `2.0`, `2.2`, `1.38`) y `@angular/platform-browser-dynamic` (no se usa con `bootstrapApplication`).
- Falta `@angular-architects/module-federation`, aunque `webpack.config.js` lo importa.
- No hay campo `engines` ni `packageManager`, y Angular 20 exige Node ≥ 20.19.

**Qué cambiar**
```jsonc
{
  "name": "phylax-ui",
  "packageManager": "pnpm@9.x",
  "engines": { "node": ">=20.19" },
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "format": "prettier --write \"src/**/*.{ts,html,scss,json}\" \"public/{config,i18n}/**/*.json\"",
    "format:check": "prettier --check \"src/**/*.{ts,html,scss,json}\"",
    "analyze": "ng build --stats-json && npx esbuild-visualizer --metadata dist/phylax-ui/stats.json --open",
    "postgenerate": "npm run format"
  }
}
```
- Alinear las versiones de OpenTelemetry o hacerlas opcionales.
- Quitar `@angular/animations`, `@angular/platform-browser-dynamic` y `uuid`.

**Qué aporta**
- `format` funciona sobre el código propio y deja fuera el de terceros.
- Un `lint` real permite detectar en CI regresiones del generador.
- Builds reproducibles (motor y gestor de paquetes fijados).

**Cómo enfocarlo**
1. Añadir `@angular-eslint` con `ng add @angular-eslint/schematics`.
2. Corregir los globs.
3. Hacer que el generador ejecute Prettier al terminar (ver doc 08: el código generado sale sin formatear).

---

## `angular.json` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- El proyecto se llama `"lughauth"` y `outputPath` es `dist/lughauth`: restos de la plantilla de otro proyecto. Los Dockerfiles copian `dist/phylax/browser` o `/app/build`, que no coinciden.
- Usa `@angular-devkit/build-angular:application`. Es correcto, pero ignora por completo `webpack.config.js`.
- `assets` copia **todo** `public/**/*`, incluidos los 21 MB de Monaco y los 648 KB de Editor.js, aunque no se usan. El `dist` actual pesa **38 MB**.
- El presupuesto `anyComponentStyle` es de 4 kB como máximo. `form-layout.component.scss` genera cientos de clases de utilidad (12 columnas × 5 breakpoints × span/start/row/order), así que está cerca del límite o lo supera.
- `styles` solo incluye `src/styles.scss`. Las fuentes e iconos se cargan aparte desde `index.html` (`assets/roboto.css`, `assets/mat.css`).
- No hay `stylePreprocessorOptions.includePaths`, de modo que los parciales SCSS compartidos se importan con rutas relativas (`@use '../grid-utils'`).
- `prefix: "app"`, pero los componentes generados usan prefijos variados (`editable-`, `list-view`, `oauth-client-…`).
- No hay sección `lint`.

**Qué cambiar**
```jsonc
"phylax-ui": {
  "architect": {
    "build": {
      "builder": "@angular/build:application",
      "options": {
        "outputPath": "dist/phylax-ui",
        "assets": [
          { "glob": "**/*", "input": "public", "ignore": ["assets/monaco/**", "assets/editorjs/**"] }
        ],
        "styles": ["src/styles/main.scss"],
        "stylePreprocessorOptions": { "includePaths": ["src/styles"] }
      },
      "configurations": {
        "with-editors": {
          "assets": [{ "glob": "**/*", "input": "public" }]
        }
      }
    }
  }
}
```
- Renombrar el proyecto y `outputPath` a `phylax-ui`.
- Migrar a `@angular/build` (el paquete nuevo y más ligero que sustituye a `@angular-devkit/build-angular`).
- Generar la rejilla **una sola vez** en los estilos globales (ver doc 02) para no tocar el presupuesto por componente.

**Qué aporta**
- `dist` baja de unos 38 MB a menos de 2 MB si no se usan los editores.
- Con `includePaths`, cualquier componente puede hacer `@use 'tokens'` sin rutas relativas: es la base de la personalización (doc 02).
- Los nombres son coherentes y los Dockerfiles funcionan.

**Cómo enfocarlo**
1. Renombrar y alinear los Dockerfiles en el mismo commit.
2. Pasar el `ignore` de assets al generador como opción ("incluir editores: sí/no").
3. `ng update` permite migrar a `@angular/build` de forma automática.

---

## `tsconfig.json` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- Tiene `paths` para `@features/*` y `@shared/*`, pero hay mucho código generado que importa con `app/...` (posible gracias a `baseUrl: "src"`). Ejemplo en `oauth-client-view-list.component.ts`:
  ```ts
  import { OauthClientRepository } from 'app/features/access/oauth-client/repository/...';
  import { Shift } from '@shared/data/repository/repository.model';
  ```
- `experimentalDecorators: true`, que no hace falta en Angular 20.
- `strict: true`, pero el código usa `any` de forma masiva (`as any`, `{} as any`), lo que anula la ventaja.

**Qué cambiar**
- Añadir alias para `@app/*` (bootstrap) y `@styles/*`, y prohibir `app/...` con una regla de ESLint (`no-restricted-imports`).
- Quitar `experimentalDecorators`.
- Plantearse eliminar `baseUrl` (TS 5.x lo desaconseja con `moduleResolution: bundler`) para obligar a usar los alias.

**Qué aporta**
Importaciones coherentes. Las features se pueden mover o extraer a una librería sin reescribir las rutas.

**Cómo enfocarlo**
Cambiar las plantillas del generador para que emitan siempre `@features/…` y `@shared/…`, y regenerar.

---

## `tsconfig.app.json` / `tsconfig.spec.json` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Son correctos, aunque `tsconfig.app.json` tiene `outDir: ./out-tsc/app` mientras que el base usa `./dist/out-tsc`.

**Qué cambiar**
Unificar `outDir`. Si se migra a Vitest o Jest (ver `karma.config.js`), adaptar `types` en spec.

**Qué aporta**
Coherencia. Impacto bajo.

**Cómo enfocarlo**
En el mismo commit que la migración del runner de tests.

---

## `webpack.config.js` / `webpack.prod.config.js` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
Configuran module federation (`name: 'phylax'`, `exposes: './Component'`, `shareAll(...)`), pero:
- el builder `application` no lee estos ficheros;
- el paquete `@angular-architects/module-federation` no está instalado;
- `src/main.ts` hace `import('./bootstrap')`, un patrón propio de module federation que, sin ella, solo añade un salto asíncrono.

Por otro lado, `AppConfigService` (`registerRemote`, `window._remove_mfa_config_url`) e `I18nLoaderService` tienen lógica de micro-frontend que depende de esto.

**Qué cambiar**
Elegir una de estas dos opciones:
- **A) No se usa MFE en este proyecto:** borrar ambos ficheros, poner `bootstrapApplication` directamente en `main.ts` y quitar la lógica de MFE de `app-config.service.ts` e `i18n-loader.service.ts` (o aislarla tras un *feature flag*).
- **B) Sí se usa:** migrar a **Native Federation** (`@angular-architects/native-federation`), que es compatible con esbuild, e instalar la dependencia.

**Qué aporta**
- Opción A: menos código muerto, arranque un poco más rápido y el comportamiento de configuración e i18n se entiende mejor.
- Opción B: MFE operativo con el builder actual.

**Cómo enfocarlo**
Convertirlo en una opción del generador (`microfrontend: none | host | remote`). Las plantillas de `main.ts`, `app-config.service.ts` e `i18n-loader.service.ts` emiten el código de MFE solo cuando hace falta.

---

## `karma.config.js` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
```js
config.set({ logLevel: config.LOG_DEBUG });
```
No es un módulo válido (le falta `module.exports = function (config) {…}`) y `angular.json` no lo referencia. Karma está **deprecado** en Angular desde la v17.

**Qué cambiar**
Borrarlo y migrar a **Vitest** (builder `@angular/build:unit-test`) o a **Jest**, con reporter `lcov` para Sonar.

**Qué aporta**
- Quita 6 devDependencies (`karma*`, `jasmine-core`, `@types/jasmine`).
- Tests más rápidos y en modo headless sin Chrome, que facilita la CI.

**Cómo enfocarlo**
1. Mantener la sintaxis de Jasmine en los `*.spec.ts` (Vitest y Jest la aceptan casi entera).
2. Dejar a Karma en paralelo hasta que todo esté en verde.
3. Revisar los specs duplicados (`route-accesible.service.spec.ts` y `route-accessible.service.spec.ts`).

---

## `Dockerfile` (raíz) y `_no_Dockerfile` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- Los dos ficheros son **idénticos**. `_no_Dockerfile` parece un descarte que se quedó versionado.
- Usan `node:18`, pero Angular 20 exige Node ≥ 20.19, así que el build falla.
- Copian `package*.json` y ejecutan `npm install`, aunque el lockfile es `pnpm-lock.yaml`: la instalación no es reproducible.
- `npm run build --prod`: el flag `--prod` ya no existe y además no se pasa a `ng` (faltaría `--`).
- Copian `/app/dist/phylax/browser`, pero el output real es `dist/lughauth/browser`.

**Qué cambiar**
- Borrar `_no_Dockerfile`.
- Quedarse con **un único** Dockerfile (ver el siguiente apartado).

**Qué aporta**
Una sola forma de construir la imagen, y que funcione.

**Cómo enfocarlo**
Mantener solo `src/docker/Dockerfile` (el que usa el Makefile), corregido.

---

## `src/docker/Dockerfile` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
- `node:20` sin versión menor (Angular 20 necesita ≥ 20.19).
- `COPY package.json package-lock.json` falla porque no hay `package-lock.json`.
- `npm install --legacy-peer-deps` oculta conflictos reales.
- `--output-path=/app/build`: con el builder `application`, los ficheros quedan en `/app/build/browser/`, pero se copia `/app/build` → `index.html` acaba en `browser/index.html` y nginx no lo encuentra.
- La configuración de nginx y el entrypoint se crean con decenas de `echo`, que cuesta leer y mantener.
- No hay cabeceras de seguridad (CSP, `X-Content-Type-Options`, etc.) ni gzip.
- `phylax-config.json` se cachea 6 meses (regla `json`), así que **un cambio de configuración no llega a los usuarios**.

**Qué cambiar**
```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm ng build --base-href=%APP_ROOT%

FROM nginx:1.27-alpine
COPY src/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY src/docker/entrypoint.sh /docker-entrypoint.d/40-app-root.sh
COPY --from=build /app/dist/phylax-ui/browser /usr/share/nginx/html
```
Y en `src/docker/nginx.conf`:
- `location ~* ^/(config|i18n)/ { add_header Cache-Control "no-cache"; }`;
- caché larga **solo** para los ficheros con hash;
- `gzip on`, cabeceras de seguridad y `try_files $uri $uri/ /index.html`.

**Qué aporta**
- Imagen reproducible y más pequeña (alpine).
- La configuración en caliente (`/config/phylax-config.json` montado como volumen) se ve sin que el usuario tenga que limpiar la caché.

**Cómo enfocarlo**
Sacar `nginx.conf` y `entrypoint.sh` a ficheros dentro de la plantilla del generador. Usar el mecanismo nativo de la imagen oficial de nginx (`/docker-entrypoint.d/`).

---

## `.prettierrc` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
`"endOfLine": "crlf"` en un entorno macOS/Linux. Cada `format` convierte los ficheros a CRLF y genera diffs enormes y falsos positivos.

**Qué cambiar**
`"endOfLine": "lf"` (o `"auto"`). Añadir `.editorconfig` y `.gitattributes` (`* text=auto eol=lf`).

**Qué aporta**
Diffs limpios entre el generador y las ediciones manuales.

**Cómo enfocarlo**
Cambiarlo, ejecutar `format` una vez en un commit aislado y añadir ese commit a `.git-blame-ignore-revs`.

---

## `.commitlintrc` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Existe configuración de commitlint, pero no hay `husky` ni `lefthook` que lo ejecute.

**Qué cambiar**
Añadir `lefthook` (ligero) con `commit-msg` → commitlint y `pre-commit` → `prettier --check` sobre los ficheros en stage.

**Qué aporta**
Las convenciones se aplican de verdad.

**Cómo enfocarlo**
Opcional. Útil si el generador se reutiliza en varios proyectos.

---

## `README.md` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
Es el README por defecto de Angular CLI 18.2.7 con título "Vista". No explica la arquitectura, la configuración en runtime (`public/config/phylax-config.json`), cómo añadir una entidad al menú ni cómo personalizar el tema.

**Qué cambiar**
Reescribirlo con:
1. requisitos (Node, pnpm);
2. arranque y configuración en runtime;
3. estructura (`bootstrap/`, `shared/context|data|interaction|toolkit`, `features/`);
4. "Cómo regenerar sin perder cambios" (qué ficheros son `@autogenerated` y cuáles no);
5. "Cómo personalizar el tema" (enlace a doc 02);
6. "Cómo dar de alta una entidad en el menú".

**Qué aporta**
Ayuda mucho a quien llegue nuevo al proyecto y deja claro qué no se debe tocar a mano.

**Cómo enfocarlo**
La plantilla del README debe incluir variables del generador (nombre, entidades generadas, módulos).

---

## `src/main.ts` / `src/bootstrap.ts` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
`main.ts` solo contiene `import('./bootstrap')`. Es el patrón de module federation (ver `webpack.config.js`).

**Qué cambiar**
Sin MFE, juntar ambos en `main.ts`:
```ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
```

**Qué aporta**
Un chunk y un salto de red menos al arrancar.

**Cómo enfocarlo**
Depende de la decisión sobre MFE (ver `webpack.config.js`).
