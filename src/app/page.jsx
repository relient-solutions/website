import Link from 'next/link';
import { ArrowRight, Layers, Bot, Workflow } from 'lucide-react';
import { PageHero, Section, Stats, Tiles, Checks, Steps, ButtonLink, ClosingCTA, Render } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';
import { SERVICE_META } from '@/lib/visuals';
import { CASE_STUDIES_DATA } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'Relient — Custom Software, AI Agents & Workflow Automation',
  description:
    'Relient builds custom software, AI agents and workflow automation for growing businesses. One system instead of spreadsheets, WhatsApp and SaaS tools — built around how you work, owned by you.',
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

const STEPS = [
  { title: 'Talk', desc: 'A free call to map how your team works today.' },
  { title: 'Scope', desc: 'A clear plan and a fixed quote.' },
  { title: 'Build', desc: 'Working software to review every week.' },
  { title: 'Launch', desc: 'Your data moved in, team trained, support after.' },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        label="Custom software & AI · Hyderabad"
        title={
          <>
            Software built around <em>how you work.</em>
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

      <ClosingCTA />
    </>
  );
}
