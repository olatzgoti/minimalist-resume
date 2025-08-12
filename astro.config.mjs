import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://olatzgoti.github.io/minimalist-resume/',
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
    robotsTxt(),
  ],
});
