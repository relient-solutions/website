import { ArrowRight } from 'lucide-react';
import { PageHero, ButtonLink } from '@/components/ui';

export const metadata = {
  title: { absolute: '404 — Page Not Found | Relient Solutions' },
  description: 'The page you are looking for does not exist or has been moved. Explore Relient Solutions services, Donna AI, or contact our engineering team.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageHero
      label="404"
      title={
        <>
          This page <em>doesn&apos;t exist.</em>
        </>
      }
      lede="It may have moved, or the link is wrong."
      art="modules"
    >
      <div className="btn-row">
        <ButtonLink href="/">
          Back home <ArrowRight size={16} />
        </ButtonLink>
        <ButtonLink ghost href="/services">
          Our services
        </ButtonLink>
      </div>
    </PageHero>
  );
}
