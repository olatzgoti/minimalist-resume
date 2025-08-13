import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://olatzgoti.github.io' || 'https://olatzgoti.site',
  base:  '/resume',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: 
      'manual',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          es: 'es',
          en: 'en',
        },
        routing: {
          prefixDefaultLocale: false
        }
      },
    }),
    robotsTxt(),
  ],
}});
