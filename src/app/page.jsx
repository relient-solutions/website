import Link from 'next/link';
import { ArrowRight, Layers, Bot, Workflow } from 'lucide-react';
import { PageHero, Section, Stats, Tiles, Checks, Steps, Faq, ButtonLink, ClosingCTA, Render, JsonLd } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';
import { SERVICE_META } from '@/lib/visuals';
import { CASE_STUDIES_DATA, MASTER_FAQS, SERVICES_DATA, SITE_URL, BRAND_NAME, BRAND_PHONE, BRAND_EMAIL, BRAND_ADDRESS, BRAND_GEO } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'Custom Software Development Company in Hyderabad | Relient',
  description:
    'Relient Solutions builds custom software, CRMs, AI agents and workflow automation for growing businesses in Hyderabad and beyond — built around how you work.',
  path: '/',
});

const OFFER = [
  { label: 'Custom Software', icon: Layers },
  { label: 'AI Agents', icon: Bot },
  { label: 'Workflow Automation', icon: Workflow },
];

const SERVICES = Object.entries(SERVICE_META).map(([slug, m]) => ({
  title: m.name,
  desc: m.line,
  art: m.art,
  href: `/services/${slug}`,
}));

const PAINS = [
  'Work spread across Excel, WhatsApp, email and five different apps',
  'Follow-ups and reminders that depend on someone remembering',
  'Staff copy-pasting the same data between tools',
  'Paying per user for software your team only half uses',
];

const PROMISES = [
  { value: '1', label: 'system instead of many tools' },
  { value: 'Weekly', label: 'demos of working software' },
  { value: '100%', label: 'code and data ownership' },
];

const HOME_FAQS = MASTER_FAQS.filter((f) =>
  ['What does Relient Solutions do?', 'Why custom software instead of an off-the-shelf tool?', 'What can AI agents and automations do for my business?', 'How long does a build take?', 'Do we own the software and data?'].includes(f.q)
);

const homeSchema = [
  {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    telephone: BRAND_PHONE,
    email: BRAND_EMAIL,
    address: { '@type': 'PostalAddress', ...BRAND_ADDRESS },
    geo: { '@type': 'GeoCoordinates', latitude: BRAND_GEO.latitude, longitude: BRAND_GEO.longitude },
    areaServed: ['Hyderabad', 'India', 'Worldwide'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Custom software, AI agents and workflow automation',
      itemListElement: Object.values(SERVICES_DATA).map((sv) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: sv.title, description: sv.description, url: `${SITE_URL}/services/${sv.slug}` },
      })),
    },
  },
  // No FAQPage here: these questions are marked up once, on /faq, as Google asks for repeated FAQs.
];

const STEPS = [
  { title: 'Talk', desc: 'A free call to map how your team works today.' },
  { title: 'Scope', desc: 'A clear plan and a fixed quote.' },
  { title: 'Build', desc: 'Working software to review every week.' },
  { title: 'Launch', desc: 'Your data moved in, team trained, support after.' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <PageHero
        label="Custom software & AI · Hyderabad"
        title={
          <>
            Custom software built around <em>how you work.</em>
          </>
        }
        lede="We build custom software, AI agents and automation for growing businesses — so you run on one system instead of spreadsheets, WhatsApp and tools that don't fit. You own all of it."
        art="stack"
      >
        <div className="btn-row">
          <ButtonLink href="/contact">
            Book a free call <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink ghost href="/case-studies">
            See our work
          </ButtonLink>
        </div>
        <div className="tags">
          {OFFER.map(({ label, icon: Icon }) => (
            <span className="tag" key={label}>
              <Icon size={14} strokeWidth={1.7} /> {label}
            </span>
          ))}
        </div>
      </PageHero>

      <div className="wrap" style={{ paddingBottom: 40 }}>
        <Stats items={PROMISES} cols={3} />
      </div>

      <Section
        label="Sound familiar?"
        title={
          <>
            Too many tools, <em>not one system.</em>
          </>
        }
      >
        <Checks items={PAINS} />
      </Section>

      <Section
        label="What we build"
        title={
          <>
            Three parts, <em>one system.</em>
          </>
        }
        action={
          <Link href="/services" className="text-link">
            How it fits together <ArrowRight size={14} />
          </Link>
        }
      >
        <Tiles items={SERVICES} cols={3} />
      </Section>

      <section className="section">
        <div className="wrap split">
          <div style={{ maxWidth: 460 }}>
            <Render name="server" alt="Custom CRM and client portal" />
          </div>
          <div>
            <div className="label">Our work</div>
            <h2>
              Built for <em>real teams.</em>
            </h2>
            <p className="lede">Different industries, same problem: too many tools, not one system.</p>
            <ul className="checks" style={{ marginBottom: 24 }}>
              {CASE_STUDIES_DATA.map((cs) => (
                <li key={cs.slug}>
                  <ArrowRight size={16} />
                  <span>
                    <Link href={`/case-studies/${cs.slug}`} className="text-link">
                      {cs.title}
                    </Link>{' '}
                    — {cs.summary}
                  </span>
                </li>
              ))}
            </ul>
            <ButtonLink ghost href="/case-studies">
              All case studies <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section
        label="How it works"
        title={
          <>
            Simple, <em>start to finish.</em>
          </>
        }
      >
        <Steps items={STEPS} />
      </Section>

      <Section
        label="Questions"
        title={
          <>
            Quick <em>answers.</em>
          </>
        }
        action={
          <Link href="/faq" className="text-link">
            All questions <ArrowRight size={14} />
          </Link>
        }
      >
        <Faq items={HOME_FAQS} />
      </Section>

      <ClosingCTA />
    </>
  );
}
