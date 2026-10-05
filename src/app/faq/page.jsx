import { PageHero, Section, Faq, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { MASTER_FAQS, SITE_URL } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'Frequently Asked Questions (FAQ) & Company Facts | Relient Solutions',
  description:
    'Find direct, verified answers to common questions about Relient Solutions, our engineering services, custom software, pricing models, and Donna AI telephony voice agents.',
  path: '/faq',
});

const crumbs = [{ label: 'FAQ', path: '/faq' }];

const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/faq#faqpage`,
  mainEntity: MASTER_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        label="FAQ"
        title={
          <>
            Questions, <em>answered.</em>
          </>
        }
        lede="How we work, what we build and what it costs."
        art="core"
      />
      <Section>
        <Faq items={MASTER_FAQS} />
      </Section>
      <ClosingCTA
        title={
          <>
            Still have <em>a question?</em>
          </>
        }
        text="Ask us directly. We usually reply within a few hours."
        buttonLabel="Ask us"
      />
    </>
  );
}
