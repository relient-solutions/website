import { Inter, Instrument_Serif, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { JsonLd } from '@/components/ui';
import { SITE_URL, BRAND_NAME, organizationSchema, websiteSchema } from '@/lib/seoData';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });
const brand = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-brand', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND_NAME} — Custom Software, AI Agents & Automation`,
  description:
    'Custom software, AI agents and workflow automation built around how your business works.',
  applicationName: BRAND_NAME,
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} ${brand.variable}`}>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
