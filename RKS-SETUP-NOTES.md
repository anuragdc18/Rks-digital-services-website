# RKS Digital Services — website setup notes

This is the SuperAI Business Portal template customised for **RKS Digital Services, Rajahmundry**
from the client's Drive folder (Business Information, Contact Information, Founder, Logo & Branding,
Social Media docs + Logo.png + founder photo). Deployment steps are unchanged — see `README.md`.

## What is already filled in

| Item | Value used | Where it lives |
| --- | --- | --- |
| Business name | RKS Digital Services | `src/api/lib/site-schema.ts` → `DEFAULT_SITE` |
| Tagline | Your Needs. Our Solutions. | same |
| Logo | Client's logo, background removed, embedded so it shows on first load | `src/api/lib/brand-logo.ts` (header), `public/images/logo.png` (full size), `public/images/logo-mark.png` (RKS monogram) |
| Favicon / touch icon / share image | Generated from the logo | `public/favicon.ico`, `public/apple-touch-icon.png`, `public/og-image.png` |
| Brand colours | Navy `#0D234F`, royal `#1E46B4`, gold `#B5801A` (sampled from the logo) | `DEFAULT_SITE.colors` + `src/web/styles.css` |
| Phone / WhatsApp | +91 93981 28825 / 919398128825 | `DEFAULT_SITE` |
| Email | rksdigitalservices26@gmail.com | `DEFAULT_SITE` |
| City | Rajahmundry, Andhra Pradesh | `DEFAULT_SITE.city`, SEO locality/region in `content-schema.ts` |
| Working hours | Mon–Sat, 9 AM – 8 PM (see assumptions) | `DEFAULT_SITE.hours`, SEO opening hours |
| Social links (main) | Facebook `facebook.com/share/1EjqG8qJn8/`, Instagram `@rks_digitalservices26`, YouTube `@rksdigitalservices` | `DEFAULT_SITE.socials` |
| Social links (RKS Creations) | Instagram `@rks_creations4`, Facebook "RKS Creations", YouTube `@rkscreations_4` — shown as "Also find us" in the footer and contact page | `DEFAULT_CONTENT.seo.sameAs` (Admin → SEO & Google → Other profiles) |
| Founder section | Rajeswari D — photo, profile, vision, expertise (home page "About us" block + Google structured data) | `src/web/lib/about.ts`, `public/images/founder.jpg` |
| Page title / description | Home title + description tuned for Rajahmundry searches | `index.html`, `DEFAULT_CONTENT.seo.pages["/"]` |
| Chatbot | Welcome text, quick buttons, fallback and 3 extra FAQs (office visit, founder, AI videos/songs); knows all new services | `DEFAULT_BOT` in `site-schema.ts`, `src/web/lib/bot/knowledge.ts` |
| Admin login | admin / `Welcome@123!!!` — **change it after first login** | — |

## Services

All template categories and services were kept (the client asked that nothing from the list be removed)
and RKS-specific services were added:

- **Registration & Legal Documentation**: + Legal Documentation Support, Project Reports & Business Documents
- **Logo & Branding**: + Digital Visiting Card
- **Design & Printing**: + Wedding & Event Invitations, Festival & Greeting Creatives
- **Social Media & Digital Marketing**: + Google Business Profile, WhatsApp Marketing, YouTube Channel Setup
- **Website Development**: + Portfolio & Personal Website
- **AI Content & Automation** (now the lead category): + AI Promo & Ad Videos, AI Brand Song & Jingle, Invitation & Greeting Videos, AI-Powered Content Creation, AI Image & Poster Generation
- **Microsoft Training & Certifications**: + Microsoft Office Training (Word, Excel, PowerPoint), Digital Skills & AI Tools Training

Hero slides, "Most Popular Services", "Why choose us" and the 3-step process were rewritten for RKS.
Services can be renamed / hidden later in Admin → Services.

## Extra home-page blocks added for RKS

- **Banner switcher pills** — the hero slider now shows one named pill per banner (AI & Digital Services · Logo & Branding · Registration & Legal · Microsoft Training) instead of dots. Labels are the `label` field of `SLIDES` in `src/web/lib/site.ts`.
- **"Who we help" section** (after the service categories) — six customer types from the client's document (shops & local businesses, startups & entrepreneurs, professionals & freelancers, content creators, students & learners, individuals & families), each with a photo, a one-line promise and the 4 services people like them usually start with. Data: `src/web/lib/audiences.ts`; photos reuse the template images (replace via Admin → Banners & Images). The handwritten "Not listed? We still help — just ask!" note uses the bundled Caveat font.

## Still needed from the client (left blank or as template samples)

1. **Full office address + Google Maps link** — add in Admin → Contact Info (addresses) and Admin → SEO & Google (street, PIN, map, lat/long).
2. **Domain name** — set `WEBSITE_URL` in hosting environment variables (sitemap + canonical links).
3. **Google rating, number of reviews, clients served, years in business** — the home page trust strip still shows the template's sample `4.8` / `1,000+` (`TRUST` in `src/web/pages/index.tsx`); the reviews block shows sample rating `4.8` (Admin → Reviews).
4. **Real customer reviews** — three *sample* reviews are in place (Admin → Reviews). Replace before going live; keep "Add review stars to Google" off until they are real.
5. **Starting prices** — Admin → Chat Bot → Service Prices (the bot otherwise offers a quote on a call) and Admin → Packages (three sample packages with indicative prices are shown).
6. **Photos** — the client's folder has videos only (brand song, service video, product ads). Template category/banner photos are kept. Upload their own via Admin → Banners & Images; add work samples in Admin → Gallery. Video embedding is not part of the template — the simplest route is to upload the videos to the RKS YouTube channel and link them from blog posts or the gallery.
7. **Founding year** — Admin → SEO & Google if they want it in structured data.

## Assumptions to confirm

- Working days: the client gave only "9 AM to 8 PM"; **Mon–Sat** was assumed (change in Admin → Contact Info and SEO hours).
- Main vs secondary accounts: the "RKS Digital Services" handles were treated as primary and "RKS Creations" as secondary.
- Facebook primary link is the share link the client supplied (`facebook.com/share/1EjqG8qJn8/`); a direct page URL would be nicer if they have one.

## Running locally

```bash
npm install
npm run dev        # http://localhost:4200
npm run build && npm start   # production build (port 4200, or PORT env)
```

`npm run typecheck` and `npm run build` both pass on this version; the GitHub Pages demo build (`VITE_DEMO=1`) also passes.
