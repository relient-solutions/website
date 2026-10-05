import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, Layers, Cpu, Workflow, PhoneCall } from 'lucide-react';
import { PageHero, Section, Stats, Tiles, Steps, ButtonLink, ClosingCTA, Render } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Relient — Build. Automate. Grow. | Custom Software, AI & Voice Agents',
  description:
    'From websites and mobile apps to custom software, enterprise ERPs, and Donna AI telephony voice agents — Relient helps businesses turn operational bottlenecks into high-performance software.',
  path: '/',
});

const OFFER = [
  { label: 'Websites', icon: Globe },
  { label: 'Mobile Apps', icon: Smartphone },
  { label: 'Business Software', icon: Layers },
  { label: 'AI', icon: Cpu },
  { label: 'Automation', icon: Workflow },
  { label: 'Voice Agents', icon: PhoneCall },
];

const SERVICES = [
  { title: 'Websites', desc: 'Fast websites and customer portals.', art: 'browser', href: '/services/web-development' },
  { title: 'Business Software', desc: 'Billing, inventory and ERP built for you.', art: 'modules', href: '/services/custom-software' },
  { title: 'AI & Automation', desc: 'AI tools and workflows that save hours.', art: 'gears', href: '/services/ai-automation' },
];

const RESULTS = [
  { value: '40%', label: 'fewer missed appointments' },
  { value: '10×', label: 'faster billing' },
  { value: '85%', label: 'calls solved first time' },
  { value: '100%', label: 'code ownership for clients' },
];

const STEPS = [
  { title: 'Talk', desc: 'A free call to understand your problem.' },
  { title: 'Plan', desc: 'A clear scope and fixed price.' },
  { title: 'Build', desc: 'Weekly demos as we build.' },
  { title: 'Launch', desc: 'Go live, with support after.' },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        label="Software & AI studio · Hyderabad"
        title={
          <>
            We build the software your business <em>runs on.</em>
          </>
        }
        lede="Websites, apps, business software and AI — designed, built and supported by one team."
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
        <Stats items={RESULTS} />
      </div>

      <Section
        label="What we do"
        title={
          <>
            Three things, <em>done well.</em>
          </>
        }
        action={
          <Link href="/services" className="text-link">
            All services <ArrowRight size={14} />
          </Link>
        }
      >
        <Tiles items={SERVICES} cols={3} />
      </Section>

      <section className="section">
        <div className="wrap split">
          <div style={{ maxWidth: 460 }}>
            <Render name="voice" alt="Donna AI voice agent" />
          </div>
          <div>
            <div className="label">Our product</div>
            <h2>
              Donna answers <em>every call.</em>
            </h2>
            <p className="lede">An AI receptionist for your phone line. She answers, books appointments and sends you a summary — 24/7.</p>
            <ButtonLink ghost href="/products/donna-ai">
              Meet Donna <ArrowRight size={16} />
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
