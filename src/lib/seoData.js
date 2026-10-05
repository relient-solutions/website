/**
 * Relient Solutions — Centralized SEO & Structured Data Entity Catalog
 * Powers dynamic SEO Head tags, Schema.org JSON-LD, sitemap generation, and llms.txt.
 */

export const SITE_URL = 'https://relient.solutions';
export const BRAND_NAME = 'Relient Solutions';
export const BRAND_LEGAL_NAME = 'Relient Solutions Technologies';
export const BRAND_PHONE = '+91 83098 04884';
export const BRAND_PHONE_INTL = '+918309804884';
export const BRAND_EMAIL = 'relient.solutions@gmail.com';
export const BRAND_FOUNDED = '2024';
export const BRAND_ADDRESS = {
  streetAddress: 'HITEC City, Madhapur',
  addressLocality: 'Hyderabad',
  addressRegion: 'Telangana',
  postalCode: '500081',
  addressCountry: 'IN',
};
export const BRAND_GEO = {
  latitude: 17.4483,
  longitude: 78.3742,
};
export const BRAND_SOCIALS = [
  'https://wa.me/918309804884',
  'https://instagram.com',
];

// Organization Schema (reused across all pages with @id)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: BRAND_NAME,
  legalName: BRAND_LEGAL_NAME,
  alternateName: [
    'Relient',
    'RelientSolutions',
    'Relient Solutions Technologies',
    'Relient Technologies',
    'Relient Solutins',
  ],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/relient-brand-full.png`,
    caption: 'Relient Solutions Logo',
    width: '512',
    height: '512',
  },
  image: `${SITE_URL}/relient-banner.png`,
  description:
    'Relient Solutions is an engineering, software, and AI transformation company building custom web applications, enterprise software, AI automation pipelines, and autonomous voice agents including Donna AI.',
  email: BRAND_EMAIL,
  telephone: BRAND_PHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND_ADDRESS.streetAddress,
    addressLocality: BRAND_ADDRESS.addressLocality,
    addressRegion: BRAND_ADDRESS.addressRegion,
    postalCode: BRAND_ADDRESS.postalCode,
    addressCountry: BRAND_ADDRESS.addressCountry,
  },
  sameAs: BRAND_SOCIALS,
  knowsAbout: [
    'Artificial Intelligence',
    'AI Voice Agents',
    'Custom Software Engineering',
    'Enterprise Resource Planning (ERP)',
    'Full-Stack Web Development',
    'Mobile Application Development',
    'Business Process Automation',
    'Cloud Architecture & Telemetry',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: BRAND_PHONE,
      contactType: 'customer service',
      email: BRAND_EMAIL,
      areaServed: ['IN', 'US', 'GB', 'AE', 'Worldwide'],
      availableLanguage: ['English', 'Hindi', 'Telugu'],
    },
    {
      '@type': 'ContactPoint',
      telephone: BRAND_PHONE,
      contactType: 'sales',
      email: BRAND_EMAIL,
      areaServed: ['IN', 'US', 'GB', 'AE', 'Worldwide'],
      availableLanguage: ['English', 'Hindi', 'Telugu'],
    },
  ],
};

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BRAND_NAME,
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  inLanguage: 'en-US',
  description: 'Technology built around your business. Custom software, AI voice agents, web applications, and automation systems.',
};

// Services Data Dictionary
export const SERVICES_DATA = {
  'web-development': {
    slug: 'web-development',
    title: 'Custom Web Application & Website Development',
    seoTitle: 'Custom Web Development & Modern Web Apps | Relient Solutions',
    description:
      'High-performance web applications, portals, and conversion-engineered marketing websites built with React, Next.js, and modern cloud architecture.',
    category: 'Web Engineering',
    badge: 'Engineering & Portals',
    priceStarting: '₹15,000',
    targetAudience:
      'Emerging brands, growing businesses, and modern enterprises seeking ultra-fast, responsive web platforms that convert visitors into paying clients.',
    problemsSolved: [
      'Slow, bloated legacy websites that lose mobile visitors and fail Core Web Vitals.',
      'Inflexible page-builder themes that cannot scale with custom database workflows.',
      'Poor technical SEO architecture preventing search engines from ranking service offerings.',
      'Fragmented customer inquiry pipelines that drop leads without automated alerts.',
    ],
    features: [
      'Server-side rendering and edge caching for sub-second page loads.',
      'Mobile-first responsive architecture designed for all screen viewports.',
      'Custom user authentication, customer portals, and role-based access control.',
      'Seamless headless CMS and SQL/NoSQL database integration.',
      'Payment gateway integrations (Stripe, Razorpay) and webhook automations.',
      'Rigorous technical SEO, semantic HTML5, and Schema.org structured data built-in.',
    ],
    useCases: [
      {
        title: 'Corporate Client Portals',
        desc: 'Secure authenticated dashboards where clients can review documents, track service milestones, and pay invoices.',
      },
      {
        title: 'High-Converting Marketing Websites',
        desc: 'Fast, animated, brand-aligned websites engineered to turn organic search traffic into qualified discovery calls.',
      },
      {
        title: 'SaaS Front-Ends & Dashboards',
        desc: 'Interactive web applications with data visualization, analytics tables, and responsive mobile layouts.',
      },
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind / Modern CSS', 'Docker', 'Vercel / Cloudflare'],
    faqs: [
      {
        q: 'How long does a custom web development project take?',
        a: 'Standard responsive business websites typically launch in 1 to 2 weeks. Complex web applications with user authentication and custom databases take between 3 to 6 weeks.',
      },
      {
        q: 'Do I own the source code upon project completion?',
        a: 'Yes, 100%. Relient provides full source code ownership, deployment scripts, and database credentials with zero vendor lock-in.',
      },
      {
        q: 'Will my website be optimized for mobile and SEO?',
        a: 'Every web project engineered by Relient adheres to strict mobile-first responsive guidelines, sub-second performance budgets, clean semantic HTML, and complete Schema.org JSON-LD markup.',
      },
    ],
    relatedServices: ['mobile-app-development', 'custom-software', 'ai-automation'],
    relatedIndustries: ['healthcare', 'retail', 'real-estate', 'education'],
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    title: 'Mobile App Development (iOS & Android)',
    seoTitle: 'Mobile App Development iOS & Android | Relient Solutions',
    description:
      'Native-feel cross-platform mobile apps for iOS and Android with offline-first synchronization, push notifications, and robust cloud backends.',
    category: 'Mobile Engineering',
    badge: 'iOS & Android',
    priceStarting: '₹60,000',
    targetAudience:
      'Founders validating new MVPs, logistics operators coordinating field teams, and consumer brands requiring seamless mobile engagement.',
    problemsSolved: [
      'Expensive duplicate development costs when building separate native Swift and Kotlin teams.',
      'Poor offline reliability for field workers operating in low-connectivity areas.',
      'High churn rates from slow mobile rendering, unoptimized asset loading, and crashes.',
      'Complex app store compliance and submission rejections on Apple App Store & Google Play.',
    ],
    features: [
      'Unified cross-platform codebase delivering native 60fps performance on iOS and Android.',
      'Offline-first SQLite/IndexedDB caching with background server reconciliation.',
      'Biometric authentication (FaceID / Fingerprint) and secure JWT credential storage.',
      'Push notifications, geofencing, and real-time WebSockets communication.',
      'Direct camera, thermal printer, and Bluetooth telemetry hardware integrations.',
      'Complete handling of App Store and Google Play review and publishing lifecycle.',
    ],
    useCases: [
      {
        title: 'Field Operations & Dispatch',
        desc: 'Driver and technician mobile apps providing real-time job queues, turn-by-turn routing, and instant digital proof-of-delivery.',
      },
      {
        title: 'Customer On-Demand Apps',
        desc: 'Booking, ordering, and subscription management apps with one-tap payment processing and live order tracking.',
      },
      {
        title: 'Internal Workforce Tools',
        desc: 'Attendance tracking, shift scheduling, inventory scanning, and expense logging tools for frontline employees.',
      },
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Node.js', 'Firebase / Supabase', 'PostgreSQL', 'Fastify', 'Push APIs'],
    faqs: [
      {
        q: 'Do you develop for both iOS and Android simultaneously?',
        a: 'Yes. We utilize modern cross-platform frameworks (React Native / Flutter) to deliver unified, native-performance applications across both iOS and Android from a single robust codebase.',
      },
      {
        q: 'Do you handle the App Store and Google Play submission process?',
        a: 'Yes, we manage the entire publishing pipeline including certificates, privacy policies, screenshot assets, store listings, and compliance reviews.',
      },
      {
        q: 'Can the app work without an internet connection?',
        a: 'Yes, we design apps with offline-first local persistence, allowing users to capture data that automatically synchronizes once connection is restored.',
      },
    ],
    relatedServices: ['web-development', 'custom-software', 'voice-ai'],
    relatedIndustries: ['logistics', 'healthcare', 'restaurants', 'retail'],
  },

  'custom-software': {
    slug: 'custom-software',
    title: 'Custom Software & Business Systems',
    seoTitle: 'Custom Software Development Company | Relient Solutions',
    description:
      'Bespoke software platforms built around your unique business operations. Relational database architectures, automated workflows, and zero operational friction.',
    category: 'Software Architecture',
    badge: 'Tailored Systems',
    priceStarting: '₹75,000',
    targetAudience:
      'Growing businesses, distributors, and organizations that have outgrown generic off-the-shelf software or cumbersome Excel spreadsheets.',
    problemsSolved: [
      'Chaotic business operations running on disconnected spreadsheets, causing data errors.',
      'Paying thousands in monthly recurring SaaS subscriptions for tools that only fulfill 40% of requirements.',
      'Inability to customize critical business workflows to match unique operational nuances.',
      'Lack of centralized audit trails and role-based data privacy controls.',
    ],
    features: [
      'Custom schema design optimized for ACID transactional integrity and high-speed queries.',
      'Granular role-based access control (RBAC) protecting sensitive financial and client records.',
      'Automated PDF generation (quotes, invoices, bills of lading, purchase orders).',
      'Two-way API synchronizations with banking, accounting, and communication tools.',
      'Real-time administrative control centers and operational KPI telemetry.',
      'Full deployment to dedicated secure cloud infrastructure with automated daily snapshots.',
    ],
    useCases: [
      {
        title: 'Centralized Operational Back-Office',
        desc: 'Consolidated system uniting customer records, supplier catalogs, job statuses, and billing ledgers under one roof.',
      },
      {
        title: 'B2B Wholesale Ordering Systems',
        desc: 'Custom ordering portals with tiered client pricing, credit limit approvals, and automated GST-compliant billing.',
      },
      {
        title: 'Compliance & Audit Platforms',
        desc: 'Strict document management systems tracking revisions, digital signatures, and inspection logs.',
      },
    ],
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'React', 'Docker', 'REST & GraphQL APIs', 'AWS / DigitalOcean'],
    faqs: [
      {
        q: 'Why should I choose custom software over off-the-shelf SaaS?',
        a: 'Off-the-shelf tools charge recurring per-user fees and force your business to adapt to their rigid constraints. Custom software is 100% owned by you, scales without extra license penalties, and adapts perfectly to your exact workflows.',
      },
      {
        q: 'Can custom software migrate our existing Excel or legacy database data?',
        a: 'Yes. We build automated data migration pipelines that cleanse, transform, and validate your historical spreadsheets and legacy databases into the new platform.',
      },
      {
        q: 'How do you ensure data security in custom software?',
        a: 'We implement industry-standard encryption at rest and in transit, strict RBAC authorization matrices, automated daily database backups, and isolated VPC cloud hosting.',
      },
    ],
    relatedServices: ['enterprise-software', 'ai-automation', 'web-development'],
    relatedIndustries: ['manufacturing', 'retail', 'logistics', 'healthcare'],
  },

  'enterprise-software': {
    slug: 'enterprise-software',
    title: 'Enterprise Software & Distributed ERP Systems',
    seoTitle: 'Enterprise Software Development & Custom ERP | Relient Solutions',
    description:
      'Mission-critical ERP systems, distributed inventory ledgers, and multi-facility operational software engineered for high-throughput business reliability.',
    category: 'Enterprise Engineering',
    badge: 'ERP & High Scale',
    priceStarting: '₹1,50,000',
    targetAudience:
      'Mid-market and enterprise companies with multi-warehouse footprints, complex supply chains, or high-volume daily transactional demands.',
    problemsSolved: [
      'Inventory mismatch across multiple warehouses, godowns, and physical retail storefronts.',
      'Billing bottlenecks during peak business hours causing checkout delays and lost revenue.',
      'Manual, error-prone end-of-day tally reconciliation and GST compliance reporting.',
      'System lockups and latency spikes when handling concurrent orders from multiple channels.',
    ],
    features: [
      'Distributed ledger architecture guaranteeing real-time stock synchronization across all godowns.',
      'High-speed POS billing engine with thermal printer and barcode telemetry support.',
      'Automated multi-tier purchase order approvals and supplier lead-time prediction.',
      'Instant GST-compliant e-invoicing, e-way bill generation, and financial ledger exports.',
      'Zero-data-loss failover architectures with automated database replication.',
      'Enterprise SLA support and ongoing dedicated engineering maintenance.',
    ],
    useCases: [
      {
        title: 'Multi-Godown Inventory & ERP Ledger',
        desc: 'Real-time inventory tracking across 4+ warehouses with barcode scanner telemetry and automated replenishment triggers.',
      },
      {
        title: 'High-Throughput Distribution Billing',
        desc: 'Sub-second POS checkout interface capable of printing hundreds of multi-item invoices per hour without lag.',
      },
      {
        title: 'Manufacturing Material Requirement Planning',
        desc: 'Bills of materials (BOM) tracking component depletion as finished products pass quality inspections.',
      },
    ],
    techStack: ['Go', 'Node.js', 'PostgreSQL', 'Redis', 'Next.js', 'Docker', 'Kubernetes', 'Fastify', 'Kafka / RabbitMQ'],
    faqs: [
      {
        q: 'Can your ERP platform handle real-time inventory across multiple physical locations?',
        a: 'Yes. Our systems use distributed database clustering and atomic locking to ensure stock levels remain accurate to 99.98% across all warehouses and POS terminals.',
      },
      {
        q: 'Does the software integrate with government GST and tax portals?',
        a: 'Yes, we integrate direct API endpoints for automated GST tax calculation, e-invoice generation, and e-way bill synchronization.',
      },
      {
        q: 'What level of uptime and support is provided?',
        a: 'Enterprise systems are architected for 99.9% uptime with automated health checks, self-healing Docker containers, and dedicated SLA response windows.',
      },
    ],
    relatedServices: ['custom-software', 'ai-automation', 'voice-ai'],
    relatedIndustries: ['manufacturing', 'retail', 'logistics', 'restaurants'],
  },

  'ai-development': {
    slug: 'ai-development',
    title: 'AI Development & Custom Knowledge Systems',
    seoTitle: 'AI Development Company | Custom AI Solutions | Relient Solutions',
    description:
      'Practical enterprise AI solutions: Retrieval-Augmented Generation (RAG), private document intelligence, autonomous agents, and custom LLM integrations.',
    category: 'Applied AI',
    badge: 'LLMs & Intelligence',
    priceStarting: '₹25,000',
    targetAudience:
      'Organizations looking to automate routine cognitive work, extract knowledge from dense documentation, and deploy intelligent business assistants.',
    problemsSolved: [
      'Customer support teams answering the exact same 30 repetitive inquiries all day long.',
      'Employees spending hours manually hunting through thousands of PDFs and internal policies.',
      'Generic chatbots hallucinating incorrect data, confusing clients, and harming brand credibility.',
      'Data privacy concerns when sharing confidential business records with public AI platforms.',
    ],
    features: [
      'Custom RAG (Retrieval-Augmented Generation) grounded exclusively on your verified business facts.',
      'Strict guardrails and prompt engineering preventing hallucinations and off-topic responses.',
      'Automated document extraction parsing PDF contracts, invoices, and clinic reports into structured JSON.',
      'Private LLM deployments within isolated Virtual Private Clouds (VPC) for complete data sovereignty.',
      'Tool-calling capabilities enabling AI to look up live database records and update CRM tickets.',
      'Continuous telemetry tracking accuracy, latency, and conversation sentiment.',
    ],
    useCases: [
      {
        title: 'Internal Operational Knowledge Copilot',
        desc: 'Instant internal assistant allowing staff to query standard operating procedures, technical manuals, and product specs in natural language.',
      },
      {
        title: 'Automated Invoice & Document Parser',
        desc: 'Extracting line items, vendor tax IDs, and totals from uploaded PDF invoices directly into accounting ledgers.',
      },
      {
        title: 'Intelligent Customer Support Agent',
        desc: 'Web and WhatsApp AI assistant answering customer questions, resolving basic tickets, and escalating complex inquiries.',
      },
    ],
    techStack: ['Python', 'FastAPI', 'LangChain / LlamaIndex', 'OpenAI / Claude / Gemini APIs', 'pgvector / Qdrant', 'Node.js', 'React'],
    faqs: [
      {
        q: 'How do you prevent the AI from making up false information?',
        a: 'We implement Retrieval-Augmented Generation (RAG) with deterministic source citation. The model is constrained to answer only from your vetted internal documents; if the answer is not present, it gracefully escalates to human staff.',
      },
      {
        q: 'Is our company data kept private and secure?',
        a: 'Yes. We utilize enterprise API agreements that do not train on customer data, or deploy self-hosted open-source models (Llama 3 / Mistral) within your private VPC.',
      },
      {
        q: 'Can the AI interact with our existing database or CRM?',
        a: 'Yes, through secure tool-calling APIs, the assistant can check appointment availability, query order status, or submit new lead records automatically.',
      },
    ],
    relatedServices: ['voice-ai', 'ai-automation', 'custom-software'],
    relatedIndustries: ['healthcare', 'education', 'real-estate', 'logistics'],
  },

  'ai-automation': {
    slug: 'ai-automation',
    title: 'Business Process Automation & Workflow Pipelines',
    seoTitle: 'AI Process Automation & Workflow Engineering | Relient Solutions',
    description:
      'Connect applications, databases, and communication channels to eliminate manual data entry, reduce human error, and accelerate business operations.',
    category: 'Automation',
    badge: 'Pipelines & Workflows',
    priceStarting: '₹15,000',
    targetAudience:
      'Operations managers and business owners seeking to connect disparate software tools and streamline high-volume repetitive tasks.',
    problemsSolved: [
      'Staff manually copy-pasting customer inquiries from forms into CRMs, WhatsApp, and Google Sheets.',
      'Delayed follow-ups resulting in lost leads and missed revenue opportunities.',
      'Unsynchronized accounting and payment systems requiring days of manual end-of-month reconciliations.',
      'Brittle automation scripts that fail silently without notifying the operations team.',
    ],
    features: [
      'End-to-end integration between website forms, CRM systems (HubSpot, Zoho), and databases.',
      'Automated WhatsApp, SMS, and email alerts triggered by client actions and milestones.',
      'Custom webhook transformation engines with automated retry queues and error notification.',
      'Payment event reconciliation syncing Razorpay/Stripe transactions directly with invoicing ledgers.',
      'Zero-data-loss failover architecture preventing dropped requests during traffic spikes.',
      'Comprehensive logging dashboard with real-time pipeline telemetry.',
    ],
    useCases: [
      {
        title: 'Lead Capture & Immediate Multi-Channel Routing',
        desc: 'Instant notification dispatched to the sales manager on WhatsApp while the customer receives a tailored email introduction in <5 seconds.',
      },
      {
        title: 'Automated Invoicing & Payment Reconciliation',
        desc: 'Customer payment triggers automated GST invoice PDF creation, email delivery, and accounting ledger update.',
      },
      {
        title: 'E-Commerce Order Fulfillment Pipeline',
        desc: 'Synchronizing store orders with third-party logistics APIs, generating shipping labels, and emailing tracking numbers to buyers.',
      },
    ],
    techStack: ['Node.js', 'Python', 'Redis BullMQ', 'Fastify', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Docker'],
    faqs: [
      {
        q: 'What happens if a third-party API goes down temporarily?',
        a: 'Our automation architecture uses persistent queue buffers (Redis BullMQ) with exponential backoff retries and alert fallbacks, ensuring zero data loss during external downtime.',
      },
      {
        q: 'Can automation connect to our legacy software that lacks modern APIs?',
        a: 'Yes, we can engineer custom database pollers, secure SFTP synchronization, or lightweight headless microservices to bridge legacy systems.',
      },
      {
        q: 'How quickly can an automation pipeline be deployed?',
        a: 'Standard 2-to-3 tool workflows typically deploy within 3 to 5 business days, including testing and edge-case validation.',
      },
    ],
    relatedServices: ['ai-development', 'custom-software', 'voice-ai'],
    relatedIndustries: ['retail', 'logistics', 'healthcare', 'real-estate'],
  },

  'voice-ai': {
    slug: 'voice-ai',
    title: 'Telephony Voice AI & Autonomous Agents (Donna AI)',
    seoTitle: 'AI Voice Agents & Telephony Automation | Donna AI by Relient',
    description:
      'Deploy autonomous AI voice agents capable of answering phone calls 24/7, qualifying leads, booking calendar appointments, and resolving customer inquiries.',
    category: 'Telephony AI',
    badge: 'Voice AI & Donna AI',
    priceStarting: '₹4,999/mo',
    targetAudience:
      'Clinics, dental practices, logistics dispatchers, field service firms, and customer service teams overwhelmed by inbound phone calls.',
    problemsSolved: [
      'Missing up to 35% of patient or client calls during lunch breaks, busy hours, and after business hours.',
      'Receptionist burnout and high front-desk staff turnover from repetitive phone questions.',
      'Unqualified sales calls consuming valuable staff time instead of high-intent prospects.',
      'Lost customer inquiries that went straight to voicemail and never received a callback.',
    ],
    features: [
      'Sub-250ms ultra-low latency voice response for natural, human-like telephone cadence.',
      'Automated calendar scheduling synchronized with Google Calendar, Cal.com, or custom CRM.',
      'Intelligent lead qualification asking custom screening questions before booking.',
      'Warm call transfers routing high-priority VIPs directly to staff mobile numbers.',
      'Instant post-call SMS confirmations and email summaries containing audio recordings and transcripts.',
      'Direct integration with Donna AI, Relient’s proprietary enterprise telephony voice system.',
    ],
    useCases: [
      {
        title: '24/7 Medical & Dental Clinic Receptionist',
        desc: 'Answering patient calls at midnight, answering clinic hours and location FAQs, and booking confirmed consultation slots.',
      },
      {
        title: 'Logistics After-Hours Dispatch Agent',
        desc: 'Qualifying freight cargo dimensions, pickup locations, and scheduling dispatch drivers outside regular business hours.',
      },
      {
        title: 'Home Services & Real Estate Lead Qualifier',
        desc: 'Screening prospective property buyers or service requests and transferring qualified leads straight to senior agents.',
      },
    ],
    techStack: ['Donna AI', 'WebSockets', 'Fastify', 'Python', 'Twilio / SIP Telephony', 'Deepgram / ElevenLabs', 'Whisper', 'CRM APIs'],
    faqs: [
      {
        q: 'What is Donna AI?',
        a: 'Donna AI is Relient Solutions’ proprietary autonomous telephony voice agent engineered to handle business phone calls with natural conversational speech, sub-second latency, and direct CRM/calendar integration.',
      },
      {
        q: 'Can Donna AI use our existing business phone number?',
        a: 'Yes. You can forward unanswered or after-hours calls to your dedicated Donna AI line, or assign Donna AI as your primary inbound receptionist.',
      },
      {
        q: 'How does Donna AI sound to callers?',
        a: 'Donna AI speaks with smooth, natural human cadence, understands conversational interruptions, asks clarifying questions, and eliminates robotic pauses.',
      },
    ],
    relatedServices: ['ai-development', 'ai-automation', 'custom-software'],
    relatedIndustries: ['healthcare', 'logistics', 'restaurants', 'real-estate'],
  },
};

// Target Industries Data Dictionary
export const INDUSTRIES_DATA = {
  healthcare: {
    slug: 'healthcare',
    title: 'Healthcare, Medical & Dental Clinics',
    seoTitle: 'Healthcare Software Development & Clinic AI Voice Agents | Relient Solutions',
    description:
      'Digital solutions for hospitals, diagnostic centers, and clinics: automated patient appointment booking, Donna AI telephone receptionists, and secure report delivery.',
    badge: 'Healthcare & Clinics',
    problems: [
      'Clinics lose up to 35% of patient consultations due to unanswered phone calls during busy hours.',
      'High front-desk staff burden handling repetitive questions about doctor schedules, fees, and directions.',
      'Patient no-shows causing wasted consultation slots and lost clinic revenue.',
      'Manual, fragmented distribution of diagnostic laboratory test results.',
    ],
    solutions: [
      'Donna AI 24/7 autonomous telephony receptionist booking patient slots and answering clinic FAQs.',
      'Automated WhatsApp and SMS appointment confirmation and reminder workflows reducing no-shows by 40%.',
      'HIPAA-conscious unified patient portal with instant, secure PDF diagnostic lab report delivery.',
      'Doctor calendar synchronization preventing double-bookings across multiple clinic locations.',
    ],
    workflows: [
      'Patient calls clinic phone number → Donna AI answers immediately → verifies requested specialist & open slot → confirms booking in doctor calendar → sends WhatsApp confirmation with location pin.',
      'Diagnostic lab completes blood test → system securely renders PDF report → triggers encrypted WhatsApp download link to patient phone.',
    ],
    relevantServices: ['voice-ai', 'web-development', 'ai-automation', 'custom-software'],
    stats: '40% reduction in appointment no-shows and 100% after-hours call capture.',
  },

  restaurants: {
    slug: 'restaurants',
    title: 'Restaurants, Cafes & Hospitality',
    seoTitle: 'Restaurant Software, Table Booking & Voice AI | Relient Solutions',
    description:
      'Custom restaurant digital solutions: Donna AI automated phone table reservations, digital QR menus, multi-location inventory, and customer loyalty workflows.',
    badge: 'Restaurants & Hospitality',
    problems: [
      'Loud dining rooms prevent staff from hearing phone calls, resulting in lost table bookings.',
      'Third-party delivery platforms taking 25–30% in commission fees on repeat neighborhood customers.',
      'Stock wastage and inventory leakage across perishable raw ingredients.',
      'Fragmented customer data preventing targeted loyalty promotions.',
    ],
    solutions: [
      'Donna AI voice agent answering restaurant phone lines, booking reservations, and noting dietary preferences.',
      'Direct commission-free online ordering web portal integrated with kitchen thermal receipt printers.',
      'Real-time recipe-based ingredient depletion tracking with automated vendor reorder alerts.',
      'Automated SMS/WhatsApp re-engagement messaging for weekend specials and birthdays.',
    ],
    workflows: [
      'Customer calls on Saturday at 7 PM → Donna AI answers, checks table availability for 4 guests at 8:30 PM → reserves table in POS → sends SMS confirmation.',
      'Direct online takeout order submitted → kitchen printer prints kitchen ticket → customer receives live WhatsApp status updates.',
    ],
    relevantServices: ['voice-ai', 'web-development', 'custom-software', 'enterprise-software'],
    stats: 'Zero missed phone reservations and 20%+ direct order margin recovery.',
  },

  retail: {
    slug: 'retail',
    title: 'Retail, Wholesale & E-Commerce',
    seoTitle: 'Retail POS Software, Multi-Warehouse ERP & Billing | Relient Solutions',
    description:
      'High-speed POS billing, multi-godown real-time inventory ledgers, GST e-invoicing, and omnichannel e-commerce storefronts engineered for retail enterprises.',
    badge: 'Retail & Distribution',
    problems: [
      'Inventory count discrepancies between physical godowns, retail counters, and online channels.',
      'Slow billing checkouts during holiday surges causing impatient customer drop-offs.',
      'Time-consuming manual entry for GST reconciliations, e-way bills, and tax returns.',
      'Lack of real-time visibility into fast-moving vs slow-moving stock across branch locations.',
    ],
    solutions: [
      'Distributed inventory ledger maintaining 99.98% accurate stock counts across all locations.',
      'Sub-second POS billing software supporting thermal receipt printing and barcode telemetry.',
      'Automated GST-compliant invoicing, tax summaries, and one-click accountant data exports.',
      'High-converting mobile-responsive e-commerce web platform synchronized with store inventory.',
    ],
    workflows: [
      'Retail customer brings items to counter → barcode scanner telemetry adds items in milliseconds → payment collected → thermal receipt printed and inventory deducted across all branches simultaneously.',
      'Stock drops below safety threshold in Godown 2 → automated vendor purchase order generated for manager approval.',
    ],
    relevantServices: ['enterprise-software', 'custom-software', 'web-development', 'ai-automation'],
    stats: '10x faster checkout billing and 99.98% inventory tracking accuracy.',
  },

  manufacturing: {
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial Operations',
    seoTitle: 'Manufacturing ERP & Supply Chain Management Software | Relient Solutions',
    description:
      'Custom manufacturing execution software: raw material inventory telemetry, bills of materials (BOM), multi-tier purchase order approvals, and shop floor tracking.',
    badge: 'Manufacturing & Industry',
    problems: [
      'Production line shutdowns caused by sudden, untracked raw material stockouts.',
      'Fragmented vendor purchasing ledgers with delayed purchase order sign-offs.',
      'Inability to trace component batch defects back to specific supplier shipments.',
      'Paper-based shop floor job tracking leading to inaccurate machine utilization metrics.',
    ],
    solutions: [
      'Cloud-based Material Requirement Planning (MRP) portal with automated re-order triggers.',
      'Multi-tier digital purchase order approval workflows accessible from mobile devices.',
      'End-to-end component batch traceability from inbound receiving to finished goods dispatch.',
      'Shop floor machine maintenance schedules and operator logging interfaces.',
    ],
    workflows: [
      'Production manager schedules component run → system checks bill of materials against warehouse stock → flags shortage → automatically submits purchase requisition to pre-approved supplier.',
      'Quality inspection flags batch anomaly → system locks downstream shipping and isolates affected serial numbers immediately.',
    ],
    relevantServices: ['custom-software', 'enterprise-software', 'ai-automation'],
    stats: '28% reduction in material stockouts and full digital audit traceability.',
  },

  logistics: {
    slug: 'logistics',
    title: 'Logistics, Supply Chain & Field Services',
    seoTitle: 'Logistics Software & Dispatch AI Voice Agents | Relient Solutions',
    description:
      'Fleet dispatch portals, real-time driver mobile apps, proof-of-delivery telemetry, and Donna AI 24/7 after-hours freight intake agents.',
    badge: 'Logistics & Supply Chain',
    problems: [
      'High-intent freight inquiries received outside business hours go straight to voicemail and are lost.',
      'Disorganized driver coordination via phone calls and disjointed messaging apps.',
      'Disputed delivery claims due to missing or illegible paper delivery slips.',
      'Slow billing cycles caused by waiting days for physical delivery receipts to reach the billing office.',
    ],
    solutions: [
      'Donna AI autonomous telephone agent answering after-hours freight calls, capturing cargo dimensions, and scheduling dispatch.',
      'Cross-platform driver mobile app with live job queues, turn-by-turn routing, and barcode scanning.',
      'Digital Proof of Delivery (e-POD) with photo capture, GPS coordinates, and recipient signatures.',
      'Instant billing pipeline generating invoices immediately upon package delivery confirmation.',
    ],
    workflows: [
      'Commercial client calls at 11 PM for emergency cargo quote → Donna AI answers, captures pickup & drop-off pincodes, weight, and urgency → sends quote estimate and alerts on-duty dispatcher.',
      'Driver arrives at drop-off → recipient signs on mobile screen → photo uploaded → system marks order delivered and triggers billing invoice automatically.',
    ],
    relevantServices: ['voice-ai', 'mobile-app-development', 'custom-software', 'enterprise-software'],
    stats: '85% first-call query resolution and sub-second delivery status verification.',
  },

  education: {
    slug: 'education',
    title: 'Education, Academies & EdTech',
    seoTitle: 'Education Portals & Student Admission AI Systems | Relient Solutions',
    description:
      'Student admissions lead qualification, parent communication portals, automated fee notification workflows, and modern learning management systems.',
    badge: 'Education & Training',
    problems: [
      'Admissions teams overwhelmed with hundreds of parent phone inquiries during enrollment season.',
      'Uncollected student tuition fees and awkward manual phone calls to remind parents.',
      'Disconnected communication channels between teachers, students, and parents.',
      'Slow, confusing student registration and document submission processes.',
    ],
    solutions: [
      'Donna AI admissions assistant answering parent questions regarding curriculum, fees, and campus visits 24/7.',
      'Automated WhatsApp and SMS fee reminder workflows with direct payment gateway links.',
      'Intuitive student and parent portal for attendance tracking, exam timetables, and report cards.',
      'Digital admission application portal with PDF document verification and receipt generation.',
    ],
    workflows: [
      'Prospective parent inquires about grade 6 admissions → Donna AI qualifies requirements, shares brochure via WhatsApp, and schedules campus tour.',
      'Tuition due date approaches → system dispatches personalized WhatsApp message with single-click Razorpay payment link → receipt generated instantly upon payment.',
    ],
    relevantServices: ['voice-ai', 'web-development', 'ai-automation', 'custom-software'],
    stats: '3x increase in admissions inquiry conversions and 95% on-time fee collection.',
  },

  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate & Property Management',
    seoTitle: 'Real Estate Software & Property AI Voice Agents | Relient Solutions',
    description:
      'Automated property lead qualification, Donna AI inbound caller screening, site visit scheduling, and custom real estate CRM platforms.',
    badge: 'Real Estate & Property',
    problems: [
      'Real estate ad campaigns generating hundreds of unqualified inquiries that exhaust sales agents.',
      'Missing calls from high-net-worth buyers during weekends and evening hours.',
      'Delayed brochure delivery causing interested prospects to look at competing properties.',
      'Disorganized property listings and agent performance tracking across multiple project sites.',
    ],
    solutions: [
      'Donna AI voice receptionist screening incoming property callers by budget, preferred location, and timeline.',
      'Instant automated WhatsApp delivery of verified project floor plans, pricing sheets, and location videos.',
      'Automated site visit scheduling directly synchronized with field sales agents’ calendars.',
      'Centralized property CRM tracking lead source, agent follow-up history, and deal stage progression.',
    ],
    workflows: [
      'Prospective buyer calls property billboard number → Donna AI verifies budget (e.g. ₹1.5 Cr+), unit preference (3 BHK), and purpose (investment vs self-use) → sends project PDF via WhatsApp → books site tour with sales agent.',
      'Site visit completed → sales agent logs feedback on mobile app → automated drip campaign nurtures buyer through final closing.',
    ],
    relevantServices: ['voice-ai', 'web-development', 'custom-software', 'ai-automation'],
    stats: 'Zero lost after-hours property leads and 65% faster lead qualification cycles.',
  },
};

// Case Studies Data
export const CASE_STUDIES_DATA = [
  {
    id: '01',
    slug: 'smart-healthcare-platform',
    title: 'Smart Healthcare & Patient Consultation Platform',
    client: 'Multi-Specialty Clinic Network',
    industry: 'Healthcare & Diagnostics',
    problem:
      'Clinic network was losing up to 35% of patient consultations due to manual phone bookings, high receptionist hold times, and fragmented diagnostic lab report distribution.',
    challenge:
      'Build a secure, HIPAA-conscious booking and patient records platform that integrates with busy doctor schedules and disparate laboratory diagnostics software without causing front-desk friction.',
    solution:
      'Architected a unified responsive web booking portal paired with an automated WhatsApp/SMS notifications engine, doctor Google Calendar synchronization, and an encrypted PDF laboratory report distribution system.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Twilio APIs', 'Docker', 'Redis'],
    implementation:
      'Engineered in 4 weeks with iterative sprint demos. Deployed isolated database schemas with encrypted patient identifiers, sub-second search indexes, and automatic daily offsite backups.',
    outcome: '40% reduction in appointment no-shows, zero lost diagnostic records, and sub-second patient lookup times across 12,000+ monthly visits.',
    relatedServices: ['web-development', 'ai-automation', 'custom-software'],
  },
  {
    id: '02',
    slug: 'custom-billing-erp-system',
    title: 'Custom Billing & Distributed Warehouse ERP',
    client: 'Regional Wholesale & Retail Distributor',
    industry: 'Wholesale & Retail Distribution',
    problem:
      'Warehouse operations suffered persistent stock mismatches across 4 physical godowns, resulting in checkout bottlenecks and 15+ hours wasted each week on manual GST reconciliations.',
    challenge:
      'Replace brittle spreadsheet workarounds with a sub-second, multi-terminal POS software system that guarantees zero inventory divergence under high-volume counter footfall.',
    solution:
      'Engineered a real-time distributed inventory ledger with thermal receipt printing, barcode scanner telemetry, and instant GST-compliant invoicing with automated e-way bill generation.',
    technologies: ['Next.js', 'Go / Node.js', 'PostgreSQL', 'Redis', 'Tailored CDN', 'Fastify'],
    implementation:
      'Executed a seamless 3-stage migration of 14,000 historical SKU records. Conducted on-site staff training and stress-tested checkout speed to over 600 invoices per hour.',
    outcome: '10x faster checkout billing, 99.98% inventory tracking accuracy across all godowns, and automated end-of-day tally generation.',
    relatedServices: ['enterprise-software', 'custom-software', 'ai-automation'],
  },
  {
    id: '03',
    slug: 'donna-ai-logistics-voice-agent',
    title: 'Donna AI Autonomous Telephony Voice Agent in Logistics',
    client: 'Express Cargo & Field Freight Fleet',
    industry: 'Logistics & Field Services',
    problem:
      'Customer freight inquiries received outside standard business hours went straight to voicemail, causing the company to lose valuable high-intent commercial shipping contracts to competitors.',
    challenge:
      'Deploy an autonomous voice agent capable of understanding conversational callers, verifying shipment weight/dimensions, quoting rates, and booking dispatch slots in real time.',
    solution:
      'Deployed Donna AI, Relient’s proprietary telephony voice agent, capable of sub-250ms conversational speech, cargo qualification, and instant calendar booking with dispatch alerts.',
    technologies: ['Donna AI', 'Fastify', 'WebSockets', 'Python', 'Audio Streaming', 'CRM Integrations'],
    implementation:
      'Configured dedicated SIP trunking and prompt engineering for logistics freight terminology. Integrated webhooks into the company’s internal dispatch database for live scheduling.',
    outcome: '85% first-call query resolution, 3x increase in captured after-hours bookings, with sub-220ms natural voice response latency.',
    relatedServices: ['voice-ai', 'ai-development', 'ai-automation'],
  },
  {
    id: '04',
    slug: 'inventory-supply-chain-portal',
    title: 'Automated Supply Chain & Inventory Procurement Portal',
    client: 'Precision Component Manufacturer',
    industry: 'Manufacturing & Industrial Operations',
    problem:
      'Production line shutdowns were repeatedly triggered by untracked raw material depletion and delayed vendor purchase order approvals across multi-level management.',
    challenge:
      'Create an automated Material Requirement Planning system with digital sign-offs, vendor lead-time telemetry, and automated replenishment triggers.',
    solution:
      'Built a cloud-based supply chain management portal with automated re-order triggers, multi-tier PO digital approvals, and supplier delivery tracking.',
    technologies: ['React', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    implementation:
      'Integrated real-time threshold monitoring that monitors consumption rates and alerts procurement teams 72 hours before critical depletion occurs.',
    outcome: '28% reduction in material stockouts, 100% audit traceability across component batches, and 3-day faster vendor PO cycles.',
    relatedServices: ['custom-software', 'enterprise-software', 'ai-automation'],
  },
];

// Master FAQ Repository for AEO (Answer Engine Optimization)
export const MASTER_FAQS = [
  {
    q: 'What is Relient Solutions?',
    a: 'Relient Solutions is an engineering, software, and AI transformation company headquartered in Hyderabad, India. Relient specializes in building custom web applications, mobile apps, enterprise software, AI process automation, and autonomous voice agents, including our proprietary flagship product Donna AI.',
    category: 'Company',
  },
  {
    q: 'What services does Relient provide?',
    a: 'Relient provides 7 core engineering services: 1) Custom Web Application & Website Development, 2) Mobile App Development (iOS & Android), 3) Custom Software & Business Systems, 4) Enterprise Software & Distributed ERP Systems, 5) AI Development & RAG Systems, 6) AI Business Process Automation, and 7) Telephony Voice AI & Donna AI Integration.',
    category: 'Services',
  },
  {
    q: 'What is Donna AI and who develops it?',
    a: 'Donna AI is a proprietary enterprise autonomous telephony voice agent developed by Relient Solutions. Donna AI answers incoming business phone calls 24/7 with human-like speech cadence, qualifies customer leads, schedules calendar appointments, and updates CRM databases in real time with sub-second response latency.',
    category: 'Donna AI',
  },
  {
    q: 'Can Donna AI integrate with our existing business phone number and CRM?',
    a: 'Yes. Donna AI connects seamlessly to your existing business phone line through call-forwarding or dedicated SIP trunking. It integrates directly with Google Calendar, Cal.com, HubSpot, Salesforce, Zoho, and custom internal REST APIs.',
    category: 'Donna AI',
  },
  {
    q: 'Where does Relient operate?',
    a: 'Relient operates from Hyderabad, Telangana, India (HITEC City / Madhapur) and provides remote engineering and deployment services to clients across India, the United States, the United Kingdom, the United Arab Emirates, and internationally.',
    category: 'Company',
  },
  {
    q: 'Who does Relient serve?',
    a: 'Relient serves founders, operations leaders, and growing companies across healthcare, retail, manufacturing, logistics, restaurants, education, and real estate who need reliable, high-performance digital systems without unnecessary software bloat.',
    category: 'Company',
  },
  {
    q: 'How much does custom software or web development cost at Relient?',
    a: 'Relient offers transparent baseline rates: Responsive business websites start from ₹15,000; cross-platform mobile apps start from ₹60,000; custom software systems start from ₹75,000; enterprise ERP platforms start from ₹1,50,000; and Donna AI voice agent plans start from ₹4,999/month. Fixed milestone quotes are provided after a technical discovery call.',
    category: 'Pricing',
  },
  {
    q: 'How does Relient’s development process work?',
    a: 'Relient follows a problem-first 5-step engineering process: 1) Understand & Scope (operational bottleneck analysis), 2) Architecture & UI Design, 3) Build & Sprints (weekly updates with working code), 4) Test & Production Deployment, and 5) Long-Term Partnership & SLA Support.',
    category: 'Process',
  },
  {
    q: 'Does Relient offer ongoing maintenance and support?',
    a: 'Yes. Relient offers ongoing post-launch maintenance, security patches, uptime monitoring, and SLA agreements starting from ₹3,000/month for web assets and customized support plans for enterprise software.',
    category: 'Support',
  },
  {
    q: 'How can a customer contact Relient Solutions?',
    a: 'Customers can contact Relient directly via WhatsApp at +91 83098 04884, email at contact@relient.solutions, or book a free 30-minute discovery call directly on the website at https://relient.solutions/contact.',
    category: 'Contact',
  },
];

// All Canonical Indexable Routes
export const ALL_INDEXABLE_ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/web-development',
  '/services/mobile-app-development',
  '/services/custom-software',
  '/services/enterprise-software',
  '/services/ai-development',
  '/services/ai-automation',
  '/services/voice-ai',
  '/products/donna-ai',
  '/industries',
  '/industries/healthcare',
  '/industries/restaurants',
  '/industries/retail',
  '/industries/manufacturing',
  '/industries/logistics',
  '/industries/education',
  '/industries/real-estate',
  '/case-studies',
  '/pricing',
  '/faq',
  '/locations/hyderabad',
  '/contact',
];
