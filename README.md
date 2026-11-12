# Tarjeto Salud

Proyecto escolar independiente para demostrar el desarrollo de una app de salud. No forma parte del Tarjeto oficial ni está vinculado a sus servicios.

## Origen de esta base

Contenido copiado de `tarjeto/tarjeto-landings`, rama `feat/tarjeto-salud-privacidad`, commit `7cac474a63493a26bfd941007fd72680171e5fff`. Este repositorio empieza con historial Git propio. Se eliminó el workflow de sincronización con `frontend-mirror`.

La copia aún contiene páginas, configuración y referencias del sitio original; su adaptación al proyecto escolar está pendiente. La documentación heredada a continuación describe el origen, no un despliegue de Tarjeto Salud.

## Documentación heredada

# Tarjeto Landings

Repositorio de las landing pages de Tarjeto. Un solo proyecto Next.js sirve dos dominios distintos con contenido distinto vía rewrites por host.

| Dominio | Audiencia | Sirve |
|---|---|---|
| `tarjeto.mx` | Clientes finales (usuarios que coleccionan tarjetas) | `app/page.js` |
| `tarjeto.app` | Negocios (dueños que quieren registrar su negocio) | `app/negocios/page.js` (rewriteada a `/`) |

La plataforma de negocios (registro, login, dashboard) vive en otro repo: **`tarjeto-business`** → `app.tarjeto.app`.

---

## Stack

- Next.js 16+ (App Router, **JavaScript**, no TypeScript)
- Tailwind CSS v4 + DaisyUI (tema `tarjeto`)
- Inter + Playfair Display (Google Fonts)
- Framer Motion para animaciones
- `next-sitemap` para sitemap/robots
- pnpm

---

## Cómo correr local

```bash
pnpm install
pnpm dev
```

El servidor abre en `http://localhost:3000`.

**En desarrollo, el rewrite por host se desactiva** — accede a cada landing con paths explícitos:

- `http://localhost:3000/` → landing de clientes
- `http://localhost:3000/negocios` → landing de negocios

En producción, las dos viven en `/` desde la perspectiva del visitante (gracias al rewrite en `proxy.js`).

---

## Estructura

```
app/
  page.js              # Home de clientes (servida en tarjeto.mx)
  layout.js            # Root layout (compartido por las dos landings)
  globals.css          # Estilos globales
  error.js
  not-found.js
  icon.png, apple-icon.png, favicon.ico
  negocios/
    page.js            # Home de negocios (servida en tarjeto.app)

components/            # Componentes compartidos entre las dos landings
  Footer.js
  FAQ.js
  CTA.js
  Hero.js              # Solo clientes
  HeroNegocios.js      # Solo negocios
  ...
  headers/             # Header (clientes), HeaderNegocios (negocios)
  common/              # ButtonPrimary, ButtonGhost, AnimatedLogo, etc.
  feature_sections/
  forms/

libs/seo.js            # Helpers de metadata (getSEOTags, renderSchemaTags)
config.js              # Configuración de marca, dominios, copy
proxy.js               # Multi-dominio: rewrite por host
next-sitemap.config.js # Configuración del sitemap

public/
  fonts/
  icons/
  illustrations/
```

---

## Cómo se sirve cada dominio

`proxy.js` (Next.js 16, antes `middleware.ts`):

- Detecta el `host` del request.
- Si `tarjeto.app`: rewriteea `/<ruta>` a `/negocios/<ruta>` antes de que Next.js renderice. La URL pública sigue siendo `/<ruta>`.
- Si `tarjeto.mx`: pasa tal cual.
- Si la ruta solicitada está fuera del dominio (ej. acceder a `/negocios` desde `tarjeto.mx`): 404.

Por eso el contenido de `app/negocios/page.js` aparece como `tarjeto.app/` para el visitante (no como `tarjeto.app/negocios/`).

---

## Variables de entorno

Crear `.env.local` con:

```env
SITE_URL=http://localhost:3000
NEXT_PUBLIC_PLATFORM_URL=https://app.tarjeto.app
```

En producción cada proyecto Vercel define su propio `SITE_URL` (`https://tarjeto.mx` o `https://tarjeto.app`). El sitemap y los metadatos lo usan para resolver URLs absolutas.

`NEXT_PUBLIC_PLATFORM_URL` es el dominio de la plataforma de negocios — los CTAs "Iniciar sesión" y "Registrarme" deben apuntar ahí.

---

## Pendientes SEO (críticos)

Estos puntos **deben resolverse antes de invertir en marketing** para que las landings posicionen bien. Cada uno está sin hacer hoy:

### Bloqueantes para indexación

- [x] **Convertir `app/negocios/page.js` a Server Component** — hoy es `"use client"`, lo que mata el SEO porque Google indexa HTML vacío. Mover la interactividad (toggles, animaciones que requieran cliente) a hijos `"use client"` específicos.
- [x] **Verificar que `app/page.js` se renderice como Server Component** — sí lo es hoy, mantener.
- [x] **Metadata por página**: cada `page.js` exporta `metadata` vía `getSEOTags` con `title`, `description`, `alternates.canonical`, `openGraph` y `twitter` para `/`, `/negocios` y `/tos`.
- [x] **`metadataBase` correcto por dominio**: `getSEOTags` ahora resuelve `metadataBase`, canonical y URLs OG desde el `host` real del request y normaliza `/negocios` a `/` cuando la landing se sirve en `tarjeto.app`.
- [x] **JSON-LD Schema.org**: `Organization` ahora se inyecta en `layout`, y cada landing agrega su JSON-LD específico por dominio (`WebSite` + `SoftwareApplication` en clientes; `Service` + `SoftwareApplication` en negocios) con URLs públicas correctas.
- [x] **OG image por dominio**: se agregaron `app/opengraph-image.tsx` y `app/negocios/opengraph-image.tsx` como metadata routes de Next.js para servir previews específicos por dominio sin binarios estáticos.

### Sitemaps y robots

- [x] **Sitemap dual**: `app/sitemap.js` ahora usa la API nativa de Next.js y resuelve rutas distintas por host: `tarjeto.mx` lista páginas de clientes, `tarjeto.app` lista la landing de negocios, y en localhost expone ambas para pruebas.
- [x] **`robots.txt` permitiendo indexación**, con `Sitemap:` apuntando al sitemap del dominio correspondiente.
- [ ] **Submit a Google Search Console** y Bing Webmaster Tools una vez en producción.

### Performance / Core Web Vitals

- [x] **`next/image`** en todas las imágenes (varios componentes usan `<img>` directo).
- [x] **`priority`** en imágenes del hero (LCP): la imagen principal del hero de clientes y las capturas principales del hero de negocios ahora usan alta prioridad, mientras que las imágenes posteriores siguen lazy para no competir con LCP.
- [x] **`next/font`** para Inter y Playfair Display en lugar de `<link>` en `globals.css`.
- [ ] **Auditoría Lighthouse** post-deploy. Meta: >90 en SEO + Performance + Accessibility en ambas landings.

### Otras mejoras

- [x] **Headers semánticos**: un solo `<h1>` por página, `<h2>`/`<h3>` jerárquicos.
- [x] **`alt`** en todas las imágenes.
- [ ] **Redirect `www` → apex** configurado en Vercel (para `www.tarjeto.app` y `www.tarjeto.mx`).
- [x] **Términos y privacy-policy** redactados para cada dominio: crear `app/privacy-policy/page.js`, `app/terms/page.js` (clientes) y `app/negocios/privacy-policy/page.js`, `app/negocios/terms/page.js` (negocios). Hoy no existen — la plataforma linkea a `tarjeto.app/terms` y `tarjeto.app/privacy-policy` (rotos hasta que se creen).

---

## Pendientes de código

- [x] Resolver imports rotos: `useMovieData` referenciado en algún componente, pero `hooks/useMovieData` no existe.
- [x] Limpiar referencias de boilerplate ShipFast en `libs/seo.js` y `app/privacy-policy/` (cuando se cree).
- [ ] Eliminar webpack rules de MongoDB en `next.config.js` (boilerplate residual).
- [ ] Decidir si TypeScript se va a adoptar (hoy `tsconfig.json` está configurado pero todo el código es JS).

---

## Deploy

- **Vercel**, un solo proyecto con dos dominios asignados:
  - `tarjeto.mx` (apex) + `www.tarjeto.mx`
  - `tarjeto.app` (apex) + `www.tarjeto.app`
- Variables: `SITE_URL` distinta por dominio (Vercel permite definir env vars condicional por dominio).
- Build: `pnpm build` (`postbuild` corre `next-sitemap`).

---

## Scripts

- `pnpm dev` — servidor de desarrollo
- `pnpm build` — build de producción
- `pnpm start` — sirve el build
- `pnpm lint` — linter
- `pnpm lint:fix` — lint + auto-fix

---

## Repos relacionados

- `tarjeto-business` — plataforma de negocios (registro, login, dashboard) — `app.tarjeto.app`
- API backend — `api.tarjeto.app`
