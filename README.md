# deebstore

A production-ready, fully static SvelteKit catalogue for original canvases, drawings, and art objects. It has no database, API, secrets, image CDN, or runtime server.

## Quick start

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Validate and build with:

```bash
npm run check
npm run build
npm run preview
```

The deployable static site is generated in `build/`.

## Add or edit a product

1. Put the product image in `static/art/`. SVG, WebP, AVIF, JPG, and PNG all work. Use a large, optimized image with a consistent 4:5 crop for the catalogue grid
2. Open `src/lib/data.ts`
3. Add one object to the exported `products` array, following the documented `Product` type and existing examples
4. Give it a unique lowercase `slug` such as `blue-room`; its page is generated automatically at `/art/blue-room/`
5. Set `image` to its root-relative local path, such as `/art/blue-room.webp`
6. Write meaningful `alt` text that describes the visible artwork. Set `status` to `sold` to preserve it in the archive
7. Run `npm run check && npm run build`

All catalogue content lives in `src/lib/data.ts`. Images live in `static/art/`, so swapping placeholders does not require editing components. To change the order email, edit `orderEmail` in `data.ts`. Update the placeholder Instagram URL in `src/routes/+layout.svelte` before launch.

## Static deployment

Upload the contents of `build/` to Netlify, Cloudflare Pages, GitHub Pages, Vercel, or any static host. Build command: `npm run build`. Output directory: `build`.

For a project site under a GitHub Pages subpath, set SvelteKit's `paths.base` in `svelte.config.js`; a custom domain needs no change. A fallback `404.html` is generated, though every product route is prerendered.

## StackBlitz, Bolt, and GitHub

This is a standard Node and SvelteKit repository with no native binaries, environment variables, accounts, or unsupported local services. Push the folder to GitHub, then import that repository directly into StackBlitz or Bolt. Use `npm install` and `npm run dev`. Node 20 is recommended. Commit `package-lock.json` for repeatable installs.

## Structure

- `src/lib/data.ts` — catalogue schema, products, categories, price formatter, order email
- `src/lib/ProductCard.svelte` — reusable catalogue card
- `src/routes/+page.svelte` — homepage, search, filters, catalogue, and about section
- `src/routes/art/[slug]/` — statically generated detail pages
- `static/art/` — local artwork assets
- `svelte.config.js` — static adapter configuration

## Pre-launch checklist

Replace placeholder art and copy, confirm prices and dimensions, update the email and Instagram link, add your production canonical URL to SEO metadata, and test the mail link on a phone. Typography is self-hosted from `static/fonts/`, so the deployed site makes no external font, image, API, or CDN requests.
