import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Checks, Tiles, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { CASE_STUDIES_DATA, SITE_URL } from '@/lib/seoData';
import { SERVICE_META } from '@/lib/visuals';

export const dynamicParams = false;

const bySlug = (slug) => CASE_STUDIES_DATA.find((cs) => cs.slug === slug);

export function generateStaticParams() {
  return CASE_STUDIES_DATA.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = bySlug(slug);
  if (!cs) return {};
  return pageMetadata({ title: `Case Study: ${cs.title} | Relient Solutions`, description: cs.description, path: `/case-studies/${slug}` });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = bySlug(slug);
  if (!cs) notFound();

  const crumbs = [
    { label: 'Case Studies', path: '/case-studies' },
    { label: cs.shortTitle, path: `/case-studies/${slug}` },
  ];

  const pageSchema = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/case-studies/${slug}#webpage`,
    url: `${SITE_URL}/case-studies/${slug}`,
    name: cs.title,
    description: cs.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  const services = cs.relatedServices
    .filter((s) => SERVICE_META[s])
    .map((s) => ({ title: SERVICE_META[s].name, desc: SERVICE_META[s].line, art: SERVICE_META[s].art, href: `/services/${s}` }));

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema(crumbs)]} />
      <PageHero crumbs={crumbs} label={`${cs.industry} · ${cs.status}`} title={cs.title} lede={cs.summary} art="server">
        <ButtonLink href={`/contact?service=${encodeURIComponent('Custom Software')}`}>
          Build something like this <ArrowRight size={16} />
        </ButtonLink>
      </PageHero>

      <Section
        label="The problem"
        title={
          <>
            What wasn&apos;t <em>working.</em>
          </>
        }
        lede={cs.problem}
      >
        <Checks items={cs.problems} />
      </Section>

      <Section
        label="What we built"
        title={
          <>
            One system, <em>built around them.</em>
          </>
        }
        lede={cs.solution}
      >
        <Checks items={cs.built} />
      </Section>

      <Section label="Where it stands" title={cs.outcome} />

      <Section label="What it used">
        <Tiles items={services} cols={services.length} />
      </Section>

      <ClosingCTA
        title={
          <>
            Your business <em>could be next.</em>
          </>
        }
        text="Not in this industry? It doesn't matter. Tell us how your team works today and we'll show you what we'd build."
      />
    </>
  );
}
