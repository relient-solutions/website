import { ArrowRight } from 'lucide-react';
import { PageHero, Section, Stats, Tiles, ButtonLink, ClosingCTA, JsonLd } from '@/components/ui';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { BRAND_NAME, BRAND_PHONE, BRAND_EMAIL, BRAND_ADDRESS, BRAND_GEO, SITE_URL } from '@/lib/seoData';
import { SERVICE_META } from '@/lib/visuals';

export const metadata = pageMetadata({
  title: 'AI & Custom Software Development Company in Hyderabad | Relient Solutions',
  description:
    'Relient Solutions is a software and AI development company headquartered in HITEC City, Hyderabad. Custom software, enterprise ERPs, web apps, and Donna AI telephony agents.',
  path: '/locations/hyderabad',
});

const crumbs = [
  { label: 'Locations', path: '/about' },
  { label: 'Hyderabad', path: '/locations/hyderabad' },
];

const localBusinessSchema = {
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/locations/hyderabad#localbusiness`,
  name: `${BRAND_NAME} - Hyderabad Headquarters`,
  image: `${SITE_URL}/relient-banner.png`,
  telephone: BRAND_PHONE,
  email: BRAND_EMAIL,
  url: `${SITE_URL}/locations/hyderabad`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND_ADDRESS.streetAddress,
    addressLocality: BRAND_ADDRESS.addressLocality,
    addressRegion: BRAND_ADDRESS.addressRegion,
    postalCode: BRAND_ADDRESS.postalCode,
    addressCountry: BRAND_ADDRESS.addressCountry,
  },
  geo: { '@type': 'GeoCoordinates', latitude: BRAND_GEO.latitude, longitude: BRAND_GEO.longitude },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹₹',
  areaServed: ['Hyderabad', 'Cyberabad', 'HITEC City', 'Madhapur', 'Gachibowli', 'Kondapur', 'Jubilee Hills', 'Banjara Hills', 'Telangana', 'Worldwide'],
};

export default function HyderabadPage() {
  const tiles = ['voice-ai', 'custom-software', 'web-development', 'mobile-app-development'].map((s) => ({
    title: SERVICE_META[s].name,
    desc: SERVICE_META[s].line,
    art: SERVICE_META[s].art,
    href: s === 'voice-ai' ? '/products/donna-ai' : `/services/${s}`,
  }));

  return (
    <>
      <JsonLd data={[localBusinessSchema, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        label="Hyderabad · HITEC City"
        title={
          <>
            Software &amp; AI, <em>built in Hyderabad.</em>
          </>
        }
        lede="Our team works from HITEC City, serving local businesses and clients worldwide."
        art="globe"
      >
        <ButtonLink href="/contact?service=Hyderabad%20Consultation">
          Meet us <ArrowRight size={16} />
        </ButtonLink>
      </PageHero>

      <div className="wrap" style={{ paddingBottom: 40 }}>
        <Stats
          cols={3}
          items={[
            { value: BRAND_ADDRESS.streetAddress, label: `${BRAND_ADDRESS.addressLocality} ${BRAND_ADDRESS.postalCode}` },
            { value: BRAND_PHONE, label: BRAND_EMAIL },
            { value: 'Mon–Sat', label: '9am – 7pm IST' },
          ]}
        />
      </div>

      <Section label="What we build here">
        <Tiles items={tiles} cols={2} />
      </Section>

      <ClosingCTA
        title={
          <>
            Let&apos;s meet <em>in person.</em>
          </>
        }
        text="Visit us in HITEC City or book a call."
        href="/contact?service=Hyderabad%20Consultation"
      />
    </>
  );
}
