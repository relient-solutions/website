import { PageHero, Section, Faq, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { MASTER_FAQS, SITE_URL } from '@/lib/seoData';

export const metadata = pageMetadata({
  title: 'FAQ: Custom Software, AI Agents & Automation | Relient Solutions',
  description:
    'Answers to common questions about Relient’s custom software, AI agents and automation: who we work with, timelines, ownership, data migration and support.',
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
        lede="What we build, who it is for and how we work."
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
