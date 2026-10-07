import { BRAND_NAME } from '@/lib/seoData';

export default function manifest() {
  return {
    name: BRAND_NAME,
    short_name: 'Relient',
    description: 'Custom software, AI agents and workflow automation built around how your business works.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
