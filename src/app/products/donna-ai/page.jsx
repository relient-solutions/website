import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Stats, Steps, Plans, Faq, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/seoData';
import { DONNA_PLANS } from '@/lib/plans';

export const metadata = pageMetadata({
  title: 'Donna AI — Autonomous Enterprise Telephony Voice Agent | Relient Solutions',
  description:
    'Donna AI is an enterprise autonomous telephony voice agent developed by Relient Solutions. Answers phone calls 24/7, qualifies leads, and books calendar appointments.',
  path: '/products/donna-ai',
});

const crumbs = [
  { label: 'Products', path: '/products/donna-ai' },
  { label: 'Donna AI', path: '/products/donna-ai' },
];

const STEPS = [
  { title: 'Calls come in', desc: 'Forward your existing number to Donna.' },
  { title: 'Donna answers', desc: 'A natural voice, in under 250ms.' },
  { title: 'She gets it done', desc: 'Books, answers questions or transfers.' },
  { title: 'You get a summary', desc: 'Recording, transcript and next steps.' },
];

const FAQS = [
  {
    q: 'What is Donna AI and who develops it?',
    a: 'Donna AI is a proprietary enterprise autonomous telephony AI voice agent engineered and operated by Relient Solutions. It answers incoming business phone calls 24/7 with natural conversational speech, qualifies leads, and schedules appointments in real time.',
  },
  {
    q: 'Can Donna AI use our existing business phone number?',
    a: 'Yes. You can forward unanswered or after-hours phone calls directly to your dedicated Donna AI line, or assign Donna AI as your primary front-desk receptionist line using standard carrier forwarding or SIP trunking.',
  },
  {
    q: 'Can Donna AI book appointments directly into our calendar?',
    a: 'Yes. Donna AI features live tool-calling integrations with Google Calendar, Cal.com, HubSpot, Zoho, and custom CRM databases, checking open slots in real time and confirming bookings.',
  },
  {
    q: 'Do we get recordings and transcripts of all calls?',
    a: 'Yes. Within seconds of call completion, Donna AI delivers structured summaries, action items, complete audio recordings, and full text transcripts to your email, SMS, or CRM.',
  },
];

const donnaSchema = {
  '@type': ['SoftwareApplication', 'Product'],
  '@id': `${SITE_URL}/products/donna-ai#product`,
  name: 'Donna AI',
  alternateName: 'Donna AI Voice Agent',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Telephony, Cloud, Web, VoIP, SIP',
  description:
    'Enterprise autonomous telephony AI voice agent developed by Relient Solutions. Handles business calls 24/7, qualifies leads, books calendar appointments, and syncs data to CRMs with sub-250ms latency.',
  brand: { '@id': `${SITE_URL}/#organization` },
  author: { '@id': `${SITE_URL}/#organization` },
  provider: { '@id': `${SITE_URL}/#organization` },
  url: `${SITE_URL}/products/donna-ai`,
  offers: [
    { '@type': 'Offer', name: 'Donna Starter', price: '4999', priceCurrency: 'INR', billingDuration: 'P1M' },
    { '@type': 'Offer', name: 'Donna Business', price: '9999', priceCurrency: 'INR', billingDuration: 'P1M' },
    { '@type': 'Offer', name: 'Donna Enterprise', price: '19999', priceCurrency: 'INR', billingDuration: 'P1M' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function DonnaPage() {
  return (
    <>
      <JsonLd data={[donnaSchema, faqSchema, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        label="Donna AI · by Relient"
        title={
          <>
            Never miss <em>a call again.</em>
          </>
        }
        lede="Donna is an AI receptionist for your business phone. She answers, books appointments and sends you a summary — day and night."
        art="voice"
        artAlt="Donna AI voice agent"
      >
        <div className="btn-row">
          <ButtonLink href="/contact?service=Donna%20AI">
            Get Donna <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink ghost href="#pricing">
            See plans
          </ButtonLink>
        </div>
      </PageHero>

      <div className="wrap" style={{ paddingBottom: 40 }}>
        <Stats
          items={[
            { value: '24/7', label: 'Always answering' },
            { value: '<250ms', label: 'Response time' },
            { value: 'Live', label: 'Calendar & CRM sync' },
            { value: '₹4,999', label: 'Per month, from' },
          ]}
        />
      </div>

      <Section
        label="How it works"
        title={
          <>
            Four steps. <em>Zero</em> missed calls.
          </>
        }
      >
        <Steps items={STEPS} />
      </Section>

      <Section
        id="pricing"
        label="Pricing"
        title={
          <>
            Simple <em>monthly</em> plans.
          </>
        }
      >
        <Plans plans={DONNA_PLANS} />
      </Section>

      <Section
        label="Questions"
        title={
          <>
            About <em>Donna.</em>
          </>
        }
      >
        <Faq items={FAQS} />
      </Section>

      <ClosingCTA
        title={
          <>
            Let Donna take <em>the calls.</em>
          </>
        }
        text="We set her up on your number, trained on your business, in days."
        buttonLabel="Get Donna"
        href="/contact?service=Donna%20AI"
      />
    </>
  );
}
