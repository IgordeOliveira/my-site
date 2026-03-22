// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// Production URL — override with SITE for preview/CI if needed
const site = process.env.SITE || 'https://igoroliveira.dev';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    domains: ['avatars.githubusercontent.com', 'flagcdn.com'],
  },
});