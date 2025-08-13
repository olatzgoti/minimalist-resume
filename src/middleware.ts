// src/middleware.js
import { defineMiddleware } from 'astro:middleware';
import { getRelativeLocaleUrl } from 'astro:i18n';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  const base = '/resume';
  
  // Redirigir /es a /minimalist-resume/es/
  if (pathname.startsWith('/es') && !pathname.startsWith(base)) {
    const newPath = base + pathname;
    return context.redirect(newPath, 301);
  }
  
  return next();
});