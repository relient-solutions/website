import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageHero, Section, Stats, Checks, Tiles, Faq, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { SERVICES_DATA, SITE_URL, BRAND_PHONE_INTL } from '@/lib/seoData';
import { SERVICE_META } from '@/lib/visuals';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return {};
  return pageMetadata({ title: service.seoTitle, description: service.description, path: `/services/${slug}` });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) notFound();
  const meta = SERVICE_META[slug] || {};

  const crumbs = [
    { label: 'Services', path: '/services' },
    { label: service.title, path: `/services/${slug}` },
  ];

  const serviceSchema = {
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${slug}#service`,
    name: service.title,
    description: service.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: service.category,
    areaServed: { '@type': 'AdministrativeArea', name: 'Worldwide' },
    offers: {
      '@type': 'Offer',
      price: service.priceStarting.replace(/[^0-9]/g, '') || '15000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/services/${slug}`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.features.map((feat) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: feat } })),
    },
  };

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const related = service.relatedServices
    .filter((s) => SERVICE_META[s])
    .map((s) => ({ title: SERVICE_META[s].name, desc: SERVICE_META[s].line, art: SERVICE_META[s].art, href: `/services/${s}` }));

  const whatsapp = `https://wa.me/${BRAND_PHONE_INTL.replace('+', '')}?text=${encodeURIComponent(`Hi Relient team, I am interested in ${service.title}.`)}`;

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema(crumbs)]} />
      <PageHero crumbs={crumbs} label={service.category} title={meta.name || service.title} lede={service.description} art={meta.art} artAlt={service.title}>
        <div className="btn-row">
          <ButtonLink href={`/contact?service=${encodeURIComponent(service.title)}`}>
            Get a quote <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink ghost external href={whatsapp}>
            WhatsApp us <ArrowUpRight size={15} />
          </ButtonLink>
        </div>
      </PageHero>

      <div className="wrap" style={{ paddingBottom: 40 }}>
        <Stats
          items={[
            { value: service.priceStarting, label: 'Starting price' },
            { value: '1–6 weeks', label: 'Typical delivery' },
            { value: '100%', label: 'Code ownership' },
          ]}
          cols={3}
        />
      </div>

      <Section
        label="What's included"
        title={
          <>
            What you <em>get.</em>
          </>
        }
      >
        <Checks items={service.features.map((f) => f.replace(/\.$/, ''))} />
      </Section>

      <Section
        label="Questions"
        title={
          <>
            Quick <em>answers.</em>
          </>
        }
      >
        <Faq items={service.faqs} />
      </Section>

      {related.length > 0 && (
        <Section label="Often paired with">
          <Tiles items={related} cols={3} />
        </Section>
      )}

      <ClosingCTA
        title={
          <>
            Ready to <em>start?</em>
          </>
        }
        text="Tell us what you need. We'll reply with a clear scope and a fixed price."
        buttonLabel="Get a quote"
        href={`/contact?service=${encodeURIComponent(service.title)}`}
      />
    </>
  );
}
