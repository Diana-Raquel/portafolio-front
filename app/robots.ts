import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['*/admin/*', '*/api/*'],
    },
    sitemap: 'https://cruzcruzx2-portafolio.vercel.app/sitemap.xml',
  };
}
