import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://olatzgoti.site',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'eus'],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          es: 'es',
          en: 'en',
          fr: 'fr',
          eus: 'eus',
        },
        routing: {
          prefixDefaultLocale: false
        }
      },
    }),
    robotsTxt(),
  ],
});
