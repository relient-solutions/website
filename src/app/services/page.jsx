import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Tiles, Checks, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { SERVICE_META } from '@/lib/visuals';

export const metadata = pageMetadata({
  title: 'Services & Engineering Directory | Relient Solutions',
  description:
    "Explore Relient's complete engineering services: Web Development, Mobile Apps, Custom Software, Enterprise ERPs, AI Automation, and Donna AI Voice Agents.",
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
            Everything your business <em>runs on.</em>
          </>
        }
        lede="Pick what you need. One team builds it all."
        art="modules"
      >
        <div className="btn-row">
          <ButtonLink href="/contact">
            Book a free call <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink ghost href="/pricing">
            See pricing
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
        <Checks items={['Fixed price, agreed up front', 'You own all the code', 'Talk directly to engineers', 'Support after launch']} />
      </Section>

      <ClosingCTA />
    </>
  );
}
