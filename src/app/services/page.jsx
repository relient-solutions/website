import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Tiles, Checks, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { SERVICE_META } from '@/lib/visuals';

export const metadata = pageMetadata({
  title: 'Custom Software, AI Agents & Workflow Automation | Relient Solutions',
  description:
    'Custom software, AI agents and workflow automation — three parts of one system built around how your business works.',
  path: '/services',
});

const crumbs = [{ label: 'Services', path: '/services' }];

export default function ServicesPage() {
  const tiles = Object.entries(SERVICE_META).map(([slug, m]) => ({
    title: m.name,
    desc: m.line,
    art: m.art,
    href: `/services/${slug}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        label="Services"
        title={
          <>
            Three parts, <em>one system.</em>
          </>
        }
        lede="Software shaped around your process, AI agents that do the repetitive thinking, and automation that connects it all. Start with one, add the rest when you need it."
        art="modules"
      >
        <div className="btn-row">
          <ButtonLink href="/contact">
            Book a free call <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink ghost href="/case-studies">
            See our work
          </ButtonLink>
        </div>
      </PageHero>

      <Section label="Our services">
        <Tiles items={tiles} cols={3} />
      </Section>

      <Section
        label="Every project"
        title={
          <>
            What you <em>always</em> get.
          </>
        }
      >
        <Checks items={['Fixed quote, agreed up front', 'You own all the code', 'Talk directly to engineers', 'Support after launch']} />
      </Section>

      <ClosingCTA />
    </>
  );
}
