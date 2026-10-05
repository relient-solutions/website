import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Plans, Checks, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import PricingTabs from '@/components/PricingTabs';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { SERVICE_PLANS, DONNA_PLANS } from '@/lib/plans';

export const metadata = pageMetadata({
  title: 'Transparent Pricing Matrix | Relient Solutions',
  description:
    'Review transparent, fixed-milestone pricing for websites, mobile apps, custom software, ERP systems, Donna AI telephony voice agents, and ongoing engineering SLAs.',
  path: '/pricing',
});

const crumbs = [{ label: 'Pricing', path: '/pricing' }];

const byId = Object.fromEntries(SERVICE_PLANS.map((s) => [s.id, s.plans]));
const TABS = [
  { id: 'web', label: 'Websites', plans: byId.web },
  { id: 'apps', label: 'Mobile Apps', plans: byId.apps },
  { id: 'software', label: 'Software', plans: byId.software },
  { id: 'ai', label: 'AI', plans: byId.ai },
  { id: 'automation', label: 'Automation', plans: byId.automation },
  { id: 'donna', label: 'Donna AI', plans: DONNA_PLANS },
  { id: 'support', label: 'Support', plans: byId.maintenance },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        label="Pricing"
        title={
          <>
            Clear prices. <em>No surprises.</em>
          </>
        }
        lede="Starting prices for every service. Fixed scope, fixed price."
        art="discs"
      >
        <ButtonLink href="/contact?service=Custom%20Quote">
          Get a custom quote <ArrowRight size={16} />
        </ButtonLink>
      </PageHero>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <PricingTabs tabs={TABS.map(({ id, label }) => ({ id, label }))}>
            {TABS.map((t) => (
              <Plans key={t.id} plans={t.plans} />
            ))}
          </PricingTabs>
        </div>
      </section>

      <Section
        label="On every plan"
        title={
          <>
            How we <em>charge.</em>
          </>
        }
      >
        <Checks items={['Pay per approved milestone', 'You own the code', 'No hidden fees', 'Talk directly to engineers']} />
      </Section>

      <ClosingCTA
        title={
          <>
            Need something <em>custom?</em>
          </>
        }
        text="Book a 30-minute call. We'll send a fixed quote."
        href="/contact?service=Custom%20Quote"
      />
    </>
  );
}
