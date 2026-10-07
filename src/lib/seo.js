import { SITE_URL, BRAND_NAME } from './seoData';

// Builds the Next.js metadata object for a page (title, description, canonical, social cards).
// Share images come from app/opengraph-image.jsx and app/twitter-image.jsx.
export function pageMetadata({ title, description, path = '/', noindex = false }) {
  const fullTitle = title.includes('Relient') ? title : `${title} | ${BRAND_NAME}`;
  const url = `${SITE_URL}${path}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BRAND_NAME,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

// Schema.org BreadcrumbList for a page's trail (Home is added automatically).
export function breadcrumbSchema(items = []) {
  const all = [{ label: 'Home', path: '/' }, ...items];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  };
}
