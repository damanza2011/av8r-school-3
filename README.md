# AV8R School — AVIA8TR-3 (Fase 1: Portal de Bienvenida)

Portal bilingüe (ES / EN) de bienvenida para **AV8R School**, diseñado para conectar a cada visitante con los tres destinos principales:

1. **Comunidad y aulas virtuales (Skool):** `https://skool.com/av8rschool`
2. **Tienda oficial (Shopify — Próximamente):** `www.av8rschool.com/store`
3. **Canales de YouTube:** `@av8rschool` y `@thereal_n3570r`

---

## Cómo administrar textos, fases, enlaces y la tienda sin tocar diseño

Todo el contenido editable y los interruptores de publicación viven en un solo archivo:

- [`src/config/site.config.js`](src/config/site.config.js)

### Cómo activar secciones progresivamente (`release`)
En `SITE_CONFIG.release`:
- `mode: 'phase1_welcome'` (activo por defecto hoy): muestra solo la página de bienvenida (Hero, los 3 destinos principales + `/store` en modo *Próximamente*, y la sección **Quiénes somos / Contacto directo**).
- Puedes ir encendiendo módulos uno por uno cambiando a `true` en `release.sections` (`path`, `programs`, `faa`, `community`, `alliances`, `assistant`, `faq`, `apply`), o activar todo cambiando `mode` a `'full_portal'`.

### Cuando la tienda de Shopify esté lista:
1. Abre `src/config/site.config.js`.
2. En `store`, cambia `mode: 'coming_soon'` por `mode: 'live'` y pega el enlace en `shopifyUrl`.
3. Opcionalmente, cuando `www.av8rschool.com` esté conectado en Vercel, agrega este bloque `"redirects"` dentro de `vercel.json`:
   ```json
   "redirects": [
     {
       "source": "/store",
       "destination": "https://TU-TIENDA.myshopify.com",
       "permanent": false
     }
   ]
   ```

---

## Assets requeridos (Logos oficiales)

Coloca los dos logos oficiales dentro de `public/assets/img/`:
- `public/assets/img/av8r-white.png` (Modo Oscuro)
- `public/assets/img/av8r-black.png` (Modo Claro)

---

## Despliegue en GitHub (`damanza2011`) y Vercel (`adso-tic`)

1. Sube esta carpeta al repositorio `damanza2011/AVIA8TR-3` en GitHub.
2. En Vercel (`https://vercel.com/adso-tic`) haz clic en **Add New → Project**, importa `damanza2011/AVIA8TR-3`, deja **Framework Preset** en `Other` (sin Build Command ni Output Directory) y pulsa **Deploy**.
3. Cuando tengas acceso DNS al dominio `av8rschool.com`, entra a **Settings → Domains** en Vercel y agrega `www.av8rschool.com` y `av8rschool.com`.
