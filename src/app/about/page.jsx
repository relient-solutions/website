import { ArrowRight, Target, Wrench, MessageSquare, KeyRound } from 'lucide-react';
import { PageHero, Section, Stats, Tiles, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { BRAND_ADDRESS, BRAND_FOUNDED } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'About Relient Solutions | Engineering, AI & Software Transformation',
  description:
    'Learn about Relient Solutions, an engineering company building custom software, web platforms, AI process automation, and Donna AI telephony voice agents.',
  path: '/about',
});

const crumbs = [{ label: 'About Relient', path: '/about' }];

const PRINCIPLES = [
  { title: 'Problem first', desc: 'We understand your business before we write code.', icon: Target },
  { title: 'Proven tools', desc: 'Reliable technology, not hype.', icon: Wrench },
  { title: 'Direct contact', desc: 'You talk to the engineers building it.', icon: MessageSquare },
  { title: 'You own it', desc: 'All code and access is yours. No lock-in.', icon: KeyRound },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        label="About"
        title={
          <>
            Software built <em>around</em> your business.
          </>
        }
        lede={`A software and AI studio in ${BRAND_ADDRESS.addressLocality}. We build the tools growing companies run on.`}
        art="stack"
      >
        <div className="btn-row">
          <ButtonLink href="/contact">
            Work with us <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink ghost href="/case-studies">
            See our work
          </ButtonLink>
        </div>
      </PageHero>

      <div className="wrap" style={{ paddingBottom: 40 }}>
        <Stats
          items={[
            { value: BRAND_FOUNDED, label: 'Founded' },
            { value: BRAND_ADDRESS.addressLocality, label: 'HITEC City, India' },
            { value: '7', label: 'Industries served' },
            { value: '100%', label: 'Code ownership' },
          ]}
        />
      </div>

      <Section
        label="How we work"
        title={
          <>
            Four <em>principles.</em>
          </>
        }
      >
        <Tiles items={PRINCIPLES} cols={4} />
      </Section>

      <ClosingCTA />
    </>
  );
}
