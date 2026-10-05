import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Tiles, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { INDUSTRIES_DATA } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'Industry Solutions & Domain Engineering | Relient Solutions',
  description:
    'Tailored software engineering, AI process automation, and Donna AI voice agents for healthcare, restaurants, retail, manufacturing, logistics, education, and real estate.',
  path: '/industries',
});

const crumbs = [{ label: 'Industries', path: '/industries' }];

export default function IndustriesPage() {
  const tiles = Object.values(INDUSTRIES_DATA).map((ind) => ({
    title: ind.badge,
    desc: ind.stats,
    href: `/industries/${ind.slug}`,
    cta: 'See how',
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        label="Industries"
        title={
          <>
            Built for <em>your</em> industry.
          </>
        }
        lede="Software shaped around how your sector actually works."
        art="globe"
      >
        <ButtonLink href="/contact">
          Talk to us <ArrowRight size={16} />
        </ButtonLink>
      </PageHero>
      <Section label="Who we work with">
        <Tiles items={tiles} cols={3} />
      </Section>
      <ClosingCTA
        title={
          <>
            Don&apos;t see <em>yours?</em>
          </>
        }
        text="We work with any business that runs on processes. Tell us about yours."
      />
    </>
  );
}
