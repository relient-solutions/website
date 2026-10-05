import Link from 'next/link';
import { BRAND_PHONE, BRAND_PHONE_INTL, BRAND_EMAIL, BRAND_ADDRESS } from '@/lib/seoData';
import BrandMark from '@/components/BrandMark';

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Websites', href: '/services/web-development' },
      { label: 'Mobile Apps', href: '/services/mobile-app-development' },
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'Enterprise & ERP', href: '/services/enterprise-software' },
      { label: 'AI Development', href: '/services/ai-development' },
      { label: 'Automation', href: '/services/ai-automation' },
      { label: 'Voice AI', href: '/services/voice-ai' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Donna AI', href: '/products/donna-ai' },
      { label: 'Industries', href: '/industries' },
      { label: 'Our Work', href: '/case-studies' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Hyderabad', href: '/locations/hyderabad' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: BRAND_EMAIL, href: `mailto:${BRAND_EMAIL}` },
      { label: BRAND_PHONE, href: `tel:${BRAND_PHONE_INTL}` },
      { label: 'WhatsApp', href: `https://wa.me/${BRAND_PHONE_INTL.replace('+', '')}` },
      { label: 'Contact page', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <BrandMark />
              Relient
            </Link>
            <p>
              Software, built <em className="metal-text">around</em> your business.
            </p>
            <div className="status">
              <i /> Taking new projects · {BRAND_ADDRESS.addressLocality}, India
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('/') ? <Link href={l.href}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="wordmark" aria-hidden="true">
        Relient
      </div>
      <div className="footer-legal">© {new Date().getFullYear()} Relient Solutions Technologies</div>
    </footer>
  );
}
