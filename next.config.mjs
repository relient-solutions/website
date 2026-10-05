/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/donna', destination: '/products/donna-ai', permanent: true },
      { source: '/products', destination: '/products/donna-ai', permanent: true },
      { source: '/locations', destination: '/locations/hyderabad', permanent: true },
    ];
  },
};

export default nextConfig;
