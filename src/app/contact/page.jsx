import { Suspense } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, Section, JsonLd } from '@/components/ui';
import ContactForm from '@/components/ContactForm';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_INTL, BRAND_EMAIL, BRAND_ADDRESS, SITE_URL } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'Contact Relient Solutions | Book a Discovery Call',
  description:
    'Get in touch with Relient Solutions. Book a free 30-minute technical discovery call, chat directly on WhatsApp at +91 83098 04884, or submit project requirements.',
  path: '/contact',
});

const crumbs = [{ label: 'Contact', path: '/contact' }];

const contactSchema = {
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contactpage`,
  name: `Contact ${BRAND_NAME}`,
  description: `Connect directly with the engineering team at ${BRAND_NAME}. Schedule a discovery call, send an inquiry, or message on WhatsApp.`,
  mainEntity: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
};

const CHANNELS = [
  { label: 'WhatsApp', value: BRAND_PHONE, note: 'Fastest reply', href: `https://wa.me/${BRAND_PHONE_INTL.replace('+', '')}` },
  { label: 'Email', value: BRAND_EMAIL, note: 'For detailed briefs', href: `mailto:${BRAND_EMAIL}` },
  { label: 'Call', value: BRAND_PHONE, note: 'Mon–Sat, 9am–7pm IST', href: `tel:${BRAND_PHONE_INTL}` },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactSchema, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        label="Contact"
        title={
          <>
            Let&apos;s <em>talk.</em>
          </>
        }
        lede={`Tell us what you need. You'll hear back from an engineer, usually within a few hours. ${BRAND_ADDRESS.streetAddress}, ${BRAND_ADDRESS.addressLocality}.`}
        art="ring"
      />

      <div className="wrap" style={{ paddingBottom: 24 }}>
        <div className="channels">
          {CHANNELS.map((c) => (
            <a key={c.label} className="card channel" href={c.href}>
              <span className="label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {c.label} <ArrowUpRight size={14} />
              </span>
              <strong>{c.value}</strong>
              <span>{c.note}</span>
            </a>
          ))}
        </div>
      </div>

      <Section
        label="Send a message"
        title={
          <>
            Start your <em>project.</em>
          </>
        }
      >
        <Suspense fallback={<div className="card form" style={{ minHeight: 420 }} />}>
          <ContactForm />
        </Suspense>
      </Section>
    </>
  );
}
