import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://olatzgoti.github.io',
  base: '/minimalist-resume',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  
    routing: {
      prefixDefaultLocale: false
    }
  },

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
});
