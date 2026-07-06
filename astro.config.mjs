// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://lapetitemaisonsouslespins.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    // @ts-expect-error conflit inoffensif entre les copies de types Vite (Astro vs @tailwindcss/vite).
    plugins: [tailwindcss()],
  },
});
