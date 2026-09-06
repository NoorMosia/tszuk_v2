// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Pure static build for Vercel — no deployment adapter (Astro static output is auto-detected).
export default defineConfig({
  site: 'https://tszuk.co.za',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
