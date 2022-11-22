import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    sanity({
      projectId: 'c8t53sw6',
      dataset: 'production',
      apiVersion: '2021-10-21',
      useCdn: true,
    }),
  ],
});
