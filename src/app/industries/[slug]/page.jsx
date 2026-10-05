import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Checks, Tiles, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { INDUSTRIES_DATA, SITE_URL } from '@/lib/seoData';
import { SERVICE_META } from '@/lib/visuals';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) return {};
  return pageMetadata({ title: industry.seoTitle, description: industry.description, path: `/industries/${slug}` });
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) notFound();

  const crumbs = [
    { label: 'Industries', path: '/industries' },
    { label: industry.title, path: `/industries/${slug}` },
  ];

  const industrySchema = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/industries/${slug}#webpage`,
    url: `${SITE_URL}/industries/${slug}`,
    name: industry.title,
    description: industry.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: {
      '@type': 'Service',
      name: `${industry.title} Software & AI Solutions`,
      provider: { '@id': `${SITE_URL}/#organization` },
    },
  };

  const services = industry.relevantServices
    .filter((s) => SERVICE_META[s])
    .map((s) => ({
      title: SERVICE_META[s].name,
      desc: SERVICE_META[s].line,
      art: SERVICE_META[s].art,
      href: s === 'voice-ai' ? '/products/donna-ai' : `/services/${s}`,
    }));

  return (
    <>
      <JsonLd data={[industrySchema, breadcrumbSchema(crumbs)]} />
      <PageHero crumbs={crumbs} label={industry.badge} title={industry.title} lede={industry.stats} art="globe">
        <ButtonLink href={`/contact?service=${encodeURIComponent(industry.badge)}`}>
          Talk to an engineer <ArrowRight size={16} />
        </ButtonLink>
      </PageHero>

      <Section
        label="What we fix"
        title={
          <>
            How we <em>help.</em>
          </>
        }
      >
        <Checks items={industry.solutions} />
      </Section>

      <Section label="What we use">
        <Tiles items={services} cols={services.length === 4 ? 2 : 3} />
      </Section>

      <ClosingCTA href={`/contact?service=${encodeURIComponent(industry.badge)}`} />
    </>
  );
}
