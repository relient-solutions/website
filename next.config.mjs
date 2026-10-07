/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/locations', destination: '/locations/hyderabad', permanent: true },
      // Retired pages from earlier versions of the site.
      { source: '/pricing', destination: '/contact', permanent: true },
      { source: '/donna', destination: '/services/ai-agents', permanent: true },
      { source: '/products/:path*', destination: '/services/ai-agents', permanent: true },
      { source: '/services/:slug(custom-crm|client-portals|enterprise-software|web-development|mobile-app-development)', destination: '/services/custom-software', permanent: true },
      { source: '/services/:slug(ai-development|voice-ai)', destination: '/services/ai-agents', permanent: true },
      { source: '/industries/real-estate', destination: '/case-studies/real-estate-crm', permanent: true },
      { source: '/industries/agencies', destination: '/case-studies/agency-client-portal', permanent: true },
      { source: '/industries/:path*', destination: '/case-studies', permanent: true },
    ];
  },
};

export default nextConfig;
