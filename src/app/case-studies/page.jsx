import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero, Section, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { CASE_STUDIES_DATA, SITE_URL } from '@/lib/seoData';
import { SERVICE_META } from '@/lib/visuals';

export const metadata = pageMetadata({
  title: 'Case Studies: Real Estate CRM & Agency Client Portal | Relient Solutions',
  description:
    'Custom software we have built: a custom CRM for Amacs India (real estate, Mysuru), and a client portal for agencies. The same approach works for any business.',
  path: '/case-studies',
});

const crumbs = [{ label: 'Case Studies', path: '/case-studies' }];

const pageSchema = {
  '@type': 'WebPage',
  '@id': `${SITE_URL}/case-studies#webpage`,
  name: 'Relient Solutions Case Studies',
  description:
    'A custom real estate CRM and an agency client portal.',
  isPartOf: { '@id': `${SITE_URL}/#website` },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        label="Our work"
        title={
          <>
            Real problems. <em>Real systems.</em>
          </>
        }
        lede="What we've built, and the problems behind it. Different industries, same idea: one system instead of many tools."
        art="server"
      />

      <Section>
        <div className="case-list">
          {CASE_STUDIES_DATA.map((cs) => (
            <article className="card case" key={cs.slug} id={cs.slug}>
              <div>
                <span className="label">
                  {cs.industry} · {cs.status}
                </span>
                <h3>{cs.title}</h3>
                <div className="client">{cs.client}</div>
              </div>
              <div className="case-body">
                <div className="case-result">{cs.outcome}</div>
                <span className="label">The problem</span>
                <p>{cs.problem}</p>
                <span className="label">What we built</span>
                <p>{cs.solution}</p>
                <div className="btn-row" style={{ gap: 18 }}>
                  <Link href={`/case-studies/${cs.slug}`} className="text-link">
                    Read the case study <ArrowRight size={13} />
                  </Link>
                  {cs.relatedServices
                    .filter((s) => SERVICE_META[s])
                    .map((s) => (
                      <Link key={s} href={`/services/${s}`} className="text-link">
                        {SERVICE_META[s].name} <ArrowRight size={13} />
                      </Link>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ClosingCTA
        title={
          <>
            Your business <em>could be next.</em>
          </>
        }
      />
    </>
  );
}
