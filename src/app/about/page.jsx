import { ArrowRight, Target, Wrench, MessageSquare, KeyRound } from 'lucide-react';
import { PageHero, Section, Stats, Tiles, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { BRAND_ADDRESS, BRAND_FOUNDED, SITE_URL } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'About Relient Solutions — Custom Software Studio, Hyderabad',
  description:
    'Relient Solutions is a Hyderabad studio building custom software, AI agents and workflow automation for growing businesses.',
  path: '/about',
});

const crumbs = [{ label: 'About Relient', path: '/about' }];

const aboutSchema = {
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: 'About Relient Solutions',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  mainEntity: { '@id': `${SITE_URL}/#organization` },
};

const PRINCIPLES = [
  { title: 'Problem first', desc: 'We understand your business before we write code.', icon: Target },
  { title: 'Proven tools', desc: 'Reliable technology, not hype.', icon: Wrench },
  { title: 'Direct contact', desc: 'You talk to the engineers building it.', icon: MessageSquare },
  { title: 'You own it', desc: 'All code and access is yours. No lock-in.', icon: KeyRound },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[aboutSchema, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        label="About"
        title={
          <>
            Software built <em>around</em> how you work.
          </>
        }
        lede={`A small software and AI studio in ${BRAND_ADDRESS.addressLocality}. We build custom software, AI agents and automation for growing businesses — so they run on one system instead of ten tools.`}
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
            { value: '1', label: 'Team, start to finish' },
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
