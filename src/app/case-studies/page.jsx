import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero, Section, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { CASE_STUDIES_DATA, SITE_URL } from '@/lib/seoData';
import { SERVICE_META } from '@/lib/visuals';

export const metadata = pageMetadata({
  title: 'Case Studies & Engineering Architecture | Relient Solutions',
  description:
    'Explore real engineering case studies: healthcare scheduling systems, high-speed POS ERP ledgers, Donna AI telephony voice agents, and supply chain portals.',
  path: '/case-studies',
});

const crumbs = [{ label: 'Case Studies', path: '/case-studies' }];

const pageSchema = {
  '@type': 'WebPage',
  '@id': `${SITE_URL}/case-studies#webpage`,
  name: 'Relient Solutions Case Studies & Engineering Architecture',
  description:
    'Practical engineering case studies: smart healthcare booking portals, distributed warehouse ERP billing ledgers, Donna AI voice agents, and supply chain automation.',
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
            Real problems. <em>Real results.</em>
          </>
        }
        lede="A few systems we've built, and what changed for the business."
        art="server"
      />

      <Section>
        <div className="case-list">
          {CASE_STUDIES_DATA.map((cs) => (
            <article className="card case" key={cs.slug} id={cs.slug}>
              <div>
                <span className="label">{cs.industry}</span>
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
