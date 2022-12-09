import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://altov2.pages.dev',
  integrations: [
    svelte(),
    tailwind(),
    sitemap(),
    sanity({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: 'production',
      apiVersion: '2021-10-21',
      useCdn: true,
    }),
  ],
});
