/**
 * Relient Solutions — Centralized SEO & Structured Data Entity Catalog
 * Powers dynamic SEO Head tags, Schema.org JSON-LD, sitemap generation, and llms.txt.
 */

export const SITE_URL = 'https://relient.solutions';
export const BRAND_NAME = 'Relient Solutions';
export const BRAND_LEGAL_NAME = 'Relient Solutions Technologies';
export const BRAND_PHONE = '+91 83098 04884';
export const BRAND_PHONE_INTL = '+918309804884';
export const BRAND_EMAIL = 'admin@relient.solutions';
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
// Official profiles only (LinkedIn, Google Business Profile, Instagram, Clutch…). Add each real URL here — it feeds Organization.sameAs.
export const BRAND_SOCIALS = [];

// One-line positioning, reused across metadata, schema and llms.txt.
export const BRAND_POSITIONING =
  'Relient Solutions builds custom software, AI agents and workflow automation for growing businesses — CRMs, client portals and internal tools shaped around how the business already works, fully owned by the client.';

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
  image: `${SITE_URL}/opengraph-image`,
  description: BRAND_POSITIONING,
  slogan: 'Software built around how you work.',
  foundingDate: BRAND_FOUNDED,
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'Country', name: 'India' },
    'Worldwide',
  ],
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
  ...(BRAND_SOCIALS.length ? { sameAs: BRAND_SOCIALS } : {}),
  knowsAbout: [
    'Custom Software Development',
    'Custom CRM Development',
    'Client Portal Development',
    'AI Agents',
    'Business Workflow Automation',
    'Cloud Architecture',
  ],
  contactPoint: [
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
  inLanguage: 'en-IN',
  description: 'Custom software, AI agents and workflow automation built around how your business works.',
};

// Services Data Dictionary — one offer: custom software with AI agents and automation built in.
export const SERVICES_DATA = {
  'custom-software': {
    slug: 'custom-software',
    title: 'Custom Software Development',
    seoTitle: 'Custom Software Development: CRMs & Portals | Relient',
    description:
      'CRMs, client portals, dashboards and internal tools built around how your business works — replacing spreadsheets, WhatsApp and SaaS that never quite fit.',
    category: 'Custom Software',
    targetAudience:
      'Growing businesses that have outgrown spreadsheets and generic SaaS, and need one system shaped around their own process.',
    problemsSolved: [
      'Work is spread across Excel, WhatsApp, email and several SaaS tools, and nobody has the full picture.',
      'Off-the-shelf tools force the team to change how it works, and charge per user every month.',
      'Owners cannot see what is happening without asking someone.',
      'The same data is entered in two or three places.',
    ],
    features: [
      'A system designed around your actual process, stages and roles.',
      'CRMs, client portals, dashboards, booking and internal tools — whatever your workflow needs.',
      'Role-based access, so each person sees only what they should.',
      'Owner dashboards with the numbers you care about.',
      'Your existing Excel or old-tool data imported and cleaned.',
      'Full ownership of the source code and data, with no lock-in.',
    ],
    useCases: [
      {
        title: 'Custom CRM',
        desc: 'Every lead from every source in one pipeline, with assignment, stages and follow-up reminders.',
      },
      {
        title: 'Client portal',
        desc: 'Clients see timelines, deliverables and updates in one place instead of messaging you.',
      },
      {
        title: 'Internal tools & dashboards',
        desc: 'Replace shared spreadsheets with a system that has history, permissions and a live view for owners.',
      },
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Cloud hosting'],
    faqs: [
      {
        q: 'Why custom software instead of an off-the-shelf tool?',
        a: 'Off-the-shelf tools make your team adapt to them and usually charge per user, every month. Custom software follows the way you already work, includes only what you use, and is owned by you.',
      },
      {
        q: 'Can you bring in our existing data?',
        a: 'Yes. We import and clean your data from Excel, Google Sheets or your current tool as part of the build.',
      },
      {
        q: 'Do I own the software and data?',
        a: 'Yes. You own the source code and all data. There is no lock-in.',
      },
    ],
    relatedServices: ['ai-agents', 'ai-automation'],
  },

  'ai-agents': {
    slug: 'ai-agents',
    title: 'AI Agents for Business',
    seoTitle: 'Custom AI Agents for Business | Relient Solutions',
    description:
      'AI agents that work inside your business — replying to enquiries, qualifying leads and drafting updates, with a person approving wherever you want.',
    category: 'AI Agents',
    targetAudience:
      'Teams spending hours on repetitive replies, qualification and write-ups that an AI agent can handle reliably.',
    problemsSolved: [
      'New enquiries wait hours for a first reply.',
      'Staff answer the same questions again and again.',
      'Information is buried in documents and old chats.',
      'Reports and client updates are written by hand every week.',
    ],
    features: [
      'Agents that reply to and qualify new enquiries on WhatsApp, email or your website.',
      'Answers grounded in your own documents and data, not guesses.',
      'Agents that read and update your CRM or database through secure tools.',
      'AI-drafted reports, summaries and client updates for review.',
      'Human approval steps wherever you want them.',
      'Private handling of your data with enterprise AI APIs.',
    ],
    useCases: [
      {
        title: 'Lead qualification agent',
        desc: 'Replies to every new enquiry in seconds, asks your qualifying questions and hands a summary to your team.',
      },
      {
        title: 'Knowledge assistant',
        desc: 'Your team asks questions in plain language and gets answers from your own documents.',
      },
      {
        title: 'Update & report writer',
        desc: 'Drafts weekly client updates or internal reports from your system’s data for you to review and send.',
      },
    ],
    techStack: ['Python', 'Node.js', 'OpenAI / Claude APIs', 'Vector search', 'WhatsApp Business API', 'PostgreSQL'],
    faqs: [
      {
        q: 'Will the AI send things to customers without checking?',
        a: 'Only if you want it to. Most teams start with the agent drafting and a person approving, then automate fully once they trust it.',
      },
      {
        q: 'How do you stop the AI from making things up?',
        a: 'Agents answer from your own documents and data, and hand over to a person when the answer is not there.',
      },
      {
        q: 'Is our data kept private?',
        a: 'Yes. We use enterprise AI APIs that do not train on your data, and keep your data in your own systems.',
      },
    ],
    relatedServices: ['custom-software', 'ai-automation'],
  },

  'ai-automation': {
    slug: 'ai-automation',
    title: 'Workflow Automation',
    seoTitle: 'Business Workflow Automation | Relient Solutions',
    description:
      'Automations that connect your forms, CRM, WhatsApp, email and sheets — so reminders go out, data moves itself and nobody copy-pastes between tools.',
    category: 'Automation',
    targetAudience:
      'Businesses whose staff spend hours a week on copy-paste work, manual reminders and keeping tools in sync.',
    problemsSolved: [
      'Staff copy enquiries from forms and portals into sheets, CRMs and WhatsApp by hand.',
      'Follow-ups and payment reminders depend on someone remembering.',
      'Tools do not talk to each other, so data is entered twice.',
      'Scripts and zaps break silently and nobody notices.',
    ],
    features: [
      'Integrations between your forms, CRM, WhatsApp, email, sheets and payment tools.',
      'Automatic reminders for follow-ups, payments and deadlines.',
      'New leads routed to the right person instantly.',
      'Documents, invoices and notifications generated automatically.',
      'Queues and retries when a connected tool is down.',
      'Alerts when an automation fails, so nothing breaks silently.',
    ],
    useCases: [
      {
        title: 'Lead routing',
        desc: 'A new enquiry lands in the CRM, the right person is notified and the lead gets a reply — in seconds.',
      },
      {
        title: 'Follow-up engine',
        desc: 'Reminders go to your team and your customers automatically, based on stage and last contact.',
      },
      {
        title: 'Tool sync',
        desc: 'Data entered once flows to every tool that needs it.',
      },
    ],
    techStack: ['Node.js', 'Python', 'Webhooks', 'WhatsApp Business API', 'Queues & retries', 'PostgreSQL'],
    faqs: [
      {
        q: 'Can you automate around the tools we already use?',
        a: 'Yes. We can connect your existing tools, or build automations into a custom system — whichever fits better.',
      },
      {
        q: 'What happens if a connected tool goes down?',
        a: 'Automations queue and retry, and your team gets an alert if something needs attention.',
      },
      {
        q: 'How quickly can an automation go live?',
        a: 'Simple automations between a few tools usually go live within days. We confirm the timeline on the first call.',
      },
    ],
    relatedServices: ['custom-software', 'ai-agents'],
  },
};

// Case Studies Data — only real work. Keep outcomes factual; add numbers only when the client confirms them.
export const CASE_STUDIES_DATA = [
  {
    id: '01',
    slug: 'real-estate-crm',
    status: 'Delivered',
    title: 'Custom CRM for Amacs India',
    shortTitle: 'Amacs India CRM',
    client: 'Amacs India · Mysuru',
    industry: 'Real Estate',
    summary: 'From a monthly CRM subscription to one system they own: leads, property, employees and attendance.',
    description:
      'How we replaced Amacs India’s monthly LeadRat subscription with a one-time custom CRM for leads, property management and camera-verified attendance.',
    problem:
      'Amacs India, a real estate company in Mysuru, was using LeadRat CRM and paying for it every month. It handled leads, but not the rest of how they work: they also wanted to track employee attendance and manage properties.',
    problems: [
      'A recurring monthly fee for an off-the-shelf CRM.',
      'A generic CRM, not built for their use case.',
      'No way to track employee attendance alongside leads.',
      'Leads, properties and staff were managed in different places.',
    ],
    solution:
      'We built a one-time custom CRM around Amacs India’s use case. It brings leads, property management and their team into one system — including an attendance system that captures a photo from the camera when each employee logs in and logs out.',
    built: [
      'Lead management built around their sales process.',
      'Property management in the same system as the leads.',
      'Attendance on login and logout, with a camera photo captured each time.',
      'Employee tracking alongside lead activity, so management sees everything in one place.',
      'A one-time build they own — no monthly CRM subscription.',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Camera capture', 'Cloud hosting'],
    outcome: 'Amacs India now runs leads, properties and employee attendance from one CRM they own — with no monthly subscription.',
    relatedServices: ['custom-software', 'ai-automation'],
  },
  {
    id: '02',
    slug: 'agency-client-portal',
    status: 'In build · early access',
    title: 'Client Portal for Agencies',
    shortTitle: 'Agency Client Portal',
    client: 'Built with agency owners',
    industry: 'Agencies',
    summary: 'One portal where clients see progress, without messaging you.',
    description:
      'A client portal for agencies that puts timelines, deliverables and updates in one place — shaped by agency owners juggling Trello, Drive and ClickUp.',
    problem:
      'Agency owners we spoke with manage clients through a mix of Trello boards, shared Google Drive folders, Asana or ClickUp, email reports and calls. It works, but clients need a nudge to check those tools and keep messaging the owner directly for updates.',
    problems: [
      'Client updates spread across Trello, Google Drive, Asana/ClickUp, email and calls.',
      'Clients need a nudge to check those tools, so they message the owner instead.',
      'Hours go into status updates and reports every week.',
      'Onboarding each new client is manual and scattered.',
    ],
    solution:
      'A client portal that brings timelines, deliverables and updates into one simple, branded place for each client — with automatic notifications so clients know when something changes without asking.',
    built: [
      'A branded portal per client with timelines, deliverables and updates.',
      'Approvals and feedback inside the portal instead of email threads.',
      'Automatic notifications when something changes.',
      'An internal view to manage every client from one place.',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'File storage', 'Email & WhatsApp notifications'],
    outcome: 'Shaped by conversations with agency owners. Early version rolling out to agencies now.',
    relatedServices: ['custom-software', 'ai-agents', 'ai-automation'],
  },
];

// Master FAQ Repository for AEO (Answer Engine Optimization)
export const MASTER_FAQS = [
  {
    q: 'What does Relient Solutions do?',
    a: 'Relient builds custom software — CRMs, client portals, dashboards and internal tools — with AI agents and automation built in. We replace scattered spreadsheets, WhatsApp threads and ill-fitting SaaS tools with one system built around how your business already works.',
    category: 'Company',
  },
  {
    q: 'Who do you work with?',
    a: 'Growing businesses that have outgrown spreadsheets and off-the-shelf tools. Our work so far includes a custom CRM for Amacs India, a real estate company in Mysuru, and a client portal for agencies.',
    category: 'Company',
  },
  {
    q: 'Why custom software instead of an off-the-shelf tool?',
    a: 'Off-the-shelf tools make your team change how it works and charge per user every month. A custom system follows your process, includes only what you need, and is fully owned by you.',
    category: 'Services',
  },
  {
    q: 'What can AI agents and automations do for my business?',
    a: 'Reply to new enquiries instantly, qualify and summarise leads, answer questions from your documents, send reminders, draft reports and updates, and move data between your forms, CRM, WhatsApp and email — with a person approving wherever you want.',
    category: 'Services',
  },
  {
    q: 'How long does a build take?',
    a: 'A focused first version is usually live within a few weeks. We agree the scope and timeline on the first call and show working software every week.',
    category: 'Process',
  },
  {
    q: 'How is pricing decided?',
    a: 'Every system is scoped to your workflow, so we share a fixed quote after a free discovery call — no surprises later.',
    category: 'Process',
  },
  {
    q: 'Can you import our existing data?',
    a: 'Yes. We import and clean your existing records from Excel, Google Sheets or your current tool as part of the build.',
    category: 'Process',
  },
  {
    q: 'Do we own the software and data?',
    a: 'Yes. You own the source code and all data. There is no lock-in.',
    category: 'Company',
  },
  {
    q: 'Do you support the system after launch?',
    a: 'Yes. We stay on for fixes, improvements and new features after launch.',
    category: 'Support',
  },
  {
    q: 'Where is Relient based?',
    a: 'Relient is based in HITEC City, Hyderabad, India, and works with clients across India and internationally.',
    category: 'Company',
  },
  {
    q: 'How do I get started?',
    a: `Book a free discovery call at ${SITE_URL}/contact, message us on WhatsApp at ${BRAND_PHONE}, or email ${BRAND_EMAIL}.`,
    category: 'Contact',
  },
];

// All Canonical Indexable Routes
export const ALL_INDEXABLE_ROUTES = [
  '/',
  '/about',
  '/services',
  ...Object.keys(SERVICES_DATA).map((s) => `/services/${s}`),
  '/case-studies',
  ...CASE_STUDIES_DATA.map((cs) => `/case-studies/${cs.slug}`),
  '/faq',
  '/locations/hyderabad',
  '/contact',
];
