import { ALL_INDEXABLE_ROUTES, SITE_URL } from '@/lib/seoData';

// Generated from the route list, so new pages land in the sitemap automatically.
// No lastModified: we don't track real per-page edit dates, and a build timestamp would mislead crawlers.
export default function sitemap() {
  return ALL_INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.split('/').length > 2 ? 0.8 : 0.9,
  }));
}
