import Link from 'next/link';
import { BRAND_PHONE, BRAND_PHONE_INTL, BRAND_EMAIL, BRAND_ADDRESS } from '@/lib/seoData';
import BrandMark from '@/components/BrandMark';

const COLUMNS = [
  {
    title: 'What we build',
    links: [
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'AI Agents', href: '/services/ai-agents' },
      { label: 'Workflow Automation', href: '/services/ai-automation' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
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
              <span className="brand-name">Relient</span>
              <span className="brand-sub">Solutions</span>
            </Link>
            <p>
              Custom software &amp; AI, built around <em className="metal-text">how you work.</em>
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
      <div className="footer-legal">© {new Date().getFullYear()} Relient Solutions</div>
    </footer>
  );
}
