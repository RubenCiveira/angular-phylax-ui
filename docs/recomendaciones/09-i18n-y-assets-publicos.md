# 09 · i18n y assets públicos (`public/`)

[← Índice](README.md)

---

## `public/i18n/**` (estructura de carpetas) · 🔴 Crítico · 🧩 Plantilla

**Estado actual**
- Hay **26 carpetas huérfanas** que no corresponden a ningún scope declarado en las features:
  - `access/{tenant, user, consent-purpose, tenant-config, tenant-login-provider, tenant-terms-of-use, user-federated-identity, user-role-assignament (errata), relying-party, trusted-client}`
  - `document/*` (10 carpetas)
  - `templating/*` (3 carpetas)
  - `identity/{user-group-membership, user-role-assignment}`
- **17 de los 26 scopes activos solo tienen `es.json`** (todo `identity/*` y `template/*`). `access/security-domain` no tiene ningún fichero.
- Las traducciones al inglés **existen, pero en la carpeta antigua**: las entidades cambiaron de dominio (`access/tenant` → `identity/tenant`, `document/template` → `template/template`…) y el generador solo escribió `es.json` en la ruta nueva. Por ejemplo, `access/tenant/` tiene `en.json` + `es.json` y `identity/tenant/` solo `es.json`, con las mismas claves de primer nivel.
- `I18nLoaderService` pide **siempre** el idioma por defecto además del activo (`langsPath` → `['es', 'en']`) y los combina con `forkJoin`. Si `en.json` no existe, el 404 hace fallar el `forkJoin` entero: **es probable que ese scope tampoco cargue en español** (a verificar en el navegador, en la pestaña Network).
- `phylax-config.json` declara `available-langs: ["es","pt","fr","de"]`, pero no hay ningún fichero `pt`, `fr` ni `de` en todo `public/i18n`.

**Qué cambiar**
1. **Ya:** mover los `en.json` de las carpetas antiguas a las nuevas (`git mv public/i18n/access/tenant/en.json public/i18n/identity/tenant/en.json`, etc.), comprobar que las claves coinciden y borrar las 26 carpetas huérfanas.
2. Hacer el loader tolerante: `this.http.get(url).pipe(catchError(() => of({})))` para cada parte, de modo que la falta de un fichero no rompa los demás.
3. `available-langs` solo con los idiomas que existen de verdad (`["es","en"]`) hasta que haya traducciones.
4. En el generador: al renombrar o mover una entidad, **mover** sus traducciones (no crear otras nuevas) y generar siempre un fichero por cada idioma de `available-langs`, aunque sea con *fallback*.
5. Validación en CI: script que compare los scopes declarados (`provideTranslocoScope`) con las carpetas, y las claves entre idiomas (`transloco-keys-manager` o un script de 30 líneas).

**Qué aporta**
Traducción completa en inglés para todas las entidades, pantallas que no muestran claves técnicas y una carpeta `public/i18n` que refleja el código.

**Cómo enfocarlo**
El paso 1 es mecánico y de alto impacto. El 2 es una línea en `i18n-loader.service.ts` (doc 05). Los pasos 4 y 5 evitan que vuelva a pasar.

---

## `public/i18n/{es,en}.json` (global) · 🟠 Alto · 🧩 Plantilla

**Estado actual**
Los dos ficheros contienen solo `{"info": "Module"}`. No hay claves para el shell (menú, toolbar, carga, skip link), el toolkit (errores de formulario genéricos, "sin resultados", selector de columnas), las páginas de error (`app.layout.errorpage.*`) ni textos comunes de acciones.

**Qué cambiar**
Generar un i18n global con secciones fijas:
```json
{
  "shell":   { "skip": "Saltar al contenido", "nav": "Menú principal", "toggleNav": "Mostrar u ocultar menú", "loading": "Cargando…" },
  "menu":    { "identity": { "_": "Identidad", "tenant": "Tenants", "user": "Usuarios" }, "access": { … } },
  "common":  { "refresh": "Actualizar", "showFilters": "Mostrar filtros", "hideFilters": "Ocultar filtros",
               "noResults": "Sin resultados", "empty": "No hay elementos", "clearFilters": "Limpiar filtros",
               "action": { "delete": { "title": "Eliminar {{entity}}", "ok": "Eliminar", "cancel": "Cancelar" } } },
  "errors":  { "401": { "title": "…", "message": "…" }, "403": { … }, "404": { … }, "5xx": { … }, "unknown": { … } },
  "validation": { "required": "Campo obligatorio", "minlength": "Mínimo {{requiredLength}} caracteres", "email": "Email no válido" }
}
```
- Los editables usan `validation.<key>` como *fallback* cuando no hay `<label>.error.<key>`, así que solo hace falta traducir los mensajes específicos.

**Qué aporta**
Todo el texto de la plantilla base queda traducido y los textos comunes no se repiten en 26 entidades.

**Cómo enfocarlo**
Va junto con los cambios de los docs 04, 07 y 08 que empiezan a usar estas claves.

---

## `public/i18n/<dominio>/<entidad>/{es,en}.json` (calidad del contenido) · 🟡 Medio · 🧩 Plantilla

**Estado actual**
Textos generados por traducción automática sin revisar:
- `access/oauth-client/en.json`: `action.delete.title: "Ticket passed"`, `report: " has been cleared."` (con espacio inicial), `disable.tooltip: "Modify the values of an oauth client"` (repetido en varias acciones que no son de modificar);
- `es.json` a medio traducir: `"label": "Delete oauth client"`, `"createButton": "Create"`;
- etiquetas que solo repiten el nombre técnico: `"title": "token endpoint auth method"`, `"tooltip": "token endpoint auth method"` (el tooltip no aporta nada).

**Qué cambiar**
- Revisión manual de las entidades más usadas, empezando por el i18n global y las acciones.
- Plantillas de texto en el generador con interpolación (`"Eliminar {{entity}}"`) en lugar de traducir cada frase por entidad.
- Si el tooltip coincide con el título, no generarlo (o usar la descripción del campo de la especificación OpenAPI, si existe).
- Un glosario por dominio (OAuth/OIDC) para que los términos técnicos (`client_secret_basic`, PKCE, DPoP) se mantengan sin traducir.

**Qué aporta**
Una interfaz profesional y tooltips que ayudan de verdad.

**Cómo enfocarlo**
Revisión continua. Lo más rentable es reducir la cantidad de texto por entidad con los textos comunes.

---

## `public/config/phylax-config.json` · 🟠 Alto · 🧩 Plantilla / 📄 Local

**Estado actual**
- `"url": "http://localhost:8090/oauth/openid//{{tenant}}/.well-known/openid-configuration"`: tiene **doble barra** (`openid//`).
- `"ph-audience"` duplica `"audience"` y no lo lee nadie.
- `"pkce": false` se ignora (PKCE siempre activo, doc 05): la configuración engaña.
- `"meta.title": "config de phylax"` parece un texto de prueba y no se muestra en ningún sitio.
- El fichero versionado tiene valores de **desarrollo** (`localhost`) y no hay ejemplo de producción ni esquema.
- No hay secciones `theme`, `layout`, `data` (page-size, ttl de caché) ni `i18n.default-lang`. Por eso aparecen los cuatro idiomas por defecto distintos (doc 04).

**Qué cambiar**
```jsonc
{
  "$schema": "./phylax-config.schema.json",
  "meta": { "title": "Phylax" },
  "i18n": { "default-lang": "es", "available-langs": ["es", "en"] },
  "tenant": { "default": "main" },
  "api": { "net-civeira-phylax": { "identity": "main", "url": "http://localhost:8090/api" } },
  "identity": { "main": { "type": "oidc", "issuer": "…/oauth/openid/{{tenant}}", "client-id": "phylax-ui",
                           "scope": "openid profile email offline_access", "audience": ["phylax-ui","phylax-api"],
                           "persistent": false, "roles-claim": "groups" } },
  "data": { "page-size": 25, "cache-ttl": 3000 },
  "theme": { "mode": "auto", "logo": "assets/img/logo.svg", "product-name": "PHYLAX", "tokens": {} },
  "layout": { "footer": false, "nav": "full" },
  "telemetry": { "name": "phylax-ui", "logger": { "level": "warn", "capture-console": false }, "exporter": { … } }
}
```
- Corregir la doble barra y quitar `ph-audience` y `pkce`.
- Publicar `phylax-config.schema.json` (doc 05) y un `phylax-config.example.prod.json`.

**Qué aporta**
Toda la adaptación por despliegue (marca, idioma, tenant, paginación, telemetría) en un único sitio validado, sin recompilar.

**Cómo enfocarlo**
El generador emite el esquema y el ejemplo. Las claves nuevas se leen desde los servicios de los docs 02, 04, 05 y 06 a medida que se implementan.

---

## `public/.htaccess` · 🟠 Alto · 🧩 Plantilla

**Estado actual**
```apache
<FilesMatch "\.(?:js|mjs|css|json|svg|woff2|woff)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
ExpiresByType application/json "access plus 1 year"
```
El comentario dice "assets versionados (Angular pone hash)", pero la regla se aplica a **todos** los `.json`, `.css` y `.js`, también a los que **no llevan hash**:
- `config/phylax-config.json` → un cambio de configuración no llega a los navegadores durante un año;
- `i18n/**/*.json` → las correcciones de traducción tampoco;
- `assets/mat.css`, `assets/roboto.css`, `silent-refresh.html` (este último entra en `ExpiresDefault` de un mes).

Además, `Access-Control-Allow-Origin "*"` para las fuentes es más amplio de lo necesario.

**Qué cambiar**
```apache
# Solo ficheros con hash de contenido (main-ABCD1234.js, styles-ABCD1234.css, chunk-XXXX.js)
<FilesMatch "-[A-Z0-9]{8}\.(?:js|mjs|css)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
# Configuración e i18n: siempre revalidar
<If "%{REQUEST_URI} =~ m#/(config|i18n)/#">
  Header set Cache-Control "no-cache"
</If>
# Resto de assets: caché corta con revalidación
<FilesMatch "\.(?:png|svg|ico|woff2?)$">
  Header set Cache-Control "public, max-age=86400"
</FilesMatch>
```
Aplicar el mismo criterio en `nginx.conf` (doc 01). Añadir cabeceras de seguridad (`X-Content-Type-Options: nosniff`, `Referrer-Policy`, CSP básica).

**Qué aporta**
Las actualizaciones de configuración y traducciones se ven en el siguiente acceso, sin pedir al usuario que vacíe la caché.

**Cómo enfocarlo**
Alternativa más robusta: que el loader añada `?v=<build-hash>` a las URLs de config e i18n (el hash se inyecta en `environment` en el build).

---

## `public/silent-refresh.html` · ⚪ Bajo · 🧩 Plantilla

**Estado actual**
Página para el *silent refresh* por iframe de `angular-oauth2-oidc`, pero `useSilentRefresh` y `silentRefreshRedirectUri` están comentados en `oidc-identity-provider.service.ts`: el fichero no se usa. Además, el *silent refresh* por iframe falla en los navegadores que bloquean cookies de terceros.

**Qué cambiar**
Borrarlo y usar refresh tokens (ya se pide `offline_access`). Si algún proyecto lo necesita, que el generador lo incluya solo con `identity.silent-refresh: true`.

**Qué aporta**
Un fichero muerto menos y un flujo de refresco que funciona en navegadores actuales.

**Cómo enfocarlo**
Plantilla.

---

## `public/assets/img/error/*.png` (600 KB) y `public/assets/img/logo*.png` · 🟡 Medio · 🧩 Plantilla

**Estado actual**
- 15 ilustraciones PNG de error y estado vacío (600 KB en total) con colores fijos: no se adaptan al tema ni al modo oscuro.
- `logo.png` (128 KB) y `logo-75x75.png`, referenciados con ruta fija desde `menu.component.html`.
- `favicon.ico` de 15 KB, sin variante SVG ni `manifest.webmanifest`.

**Qué cambiar**
- Pasar las ilustraciones a **SVG** con `fill="currentColor"` o variables CSS (`var(--mat-sys-primary)`), o al menos a WebP/AVIF.
- Logo en SVG y configurable (`theme.logo`, doc 02), con variante para modo oscuro (`theme.logo-dark`).
- `<link rel="icon" href="favicon.svg" type="image/svg+xml">` + `.ico` como alternativa. Opcionalmente, un `manifest.webmanifest` con `theme_color` para instalar la app como PWA.

**Qué aporta**
Imágenes ~10 veces más ligeras que siguen la marca y el modo oscuro, y un rebranding que solo exige cambiar la configuración.

**Cómo enfocarlo**
Las ilustraciones son 15 ficheros: se pueden sustituir por un set libre (por ejemplo unDraw, que permite elegir el color) o por iconos grandes de Material Symbols.

---

## `public/assets/editorjs/**`, `public/assets/monaco/**`, `public/assets/mat.css`, `public/assets/roboto.css`

Ver [03-dependencias.md](03-dependencias.md) (editores vendorizados) y [02-estilos-y-theming.md](02-estilos-y-theming.md) (fuentes e iconos desde CDN).
