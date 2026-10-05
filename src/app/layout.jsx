import { Inter, Instrument_Serif, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { JsonLd } from '@/components/ui';
import { SITE_URL, BRAND_NAME, organizationSchema, websiteSchema } from '@/lib/seoData';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND_NAME} — Build. Automate. Grow.`,
  description:
    'Relient Solutions builds websites, mobile apps, custom business software, AI solutions and Donna AI voice agents for growing businesses.',
  applicationName: BRAND_NAME,
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
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
