import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Next.js writes prerendered pages to .next/server/app/<route>.html
const distDir = path.resolve(__dirname, '..', '.next', 'server', 'app');

import { ALL_INDEXABLE_ROUTES, SITE_URL } from '../src/lib/seoData.js';

console.log('🔍 Running Enterprise SEO & Metadata Validation Check...\n');

let totalChecks = 0;
let passedChecks = 0;
let errors = [];

const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();

for (const route of ALL_INDEXABLE_ROUTES) {
  const filePath = route === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, ...route.slice(1).split('/')) + '.html';

  totalChecks++;
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing pre-rendered file for route [${route}]: expected at ${filePath}`);
    continue;
  }
  passedChecks++;

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Title
  totalChecks++;
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    errors.push(`Missing or empty <title> in route [${route}]`);
  } else {
    const t = titleMatch[1].trim();
    if (titles.has(t)) {
      errors.push(`Duplicate <title> detected in route [${route}]: "${t}"`);
    } else {
      titles.add(t);
      passedChecks++;
    }
  }

  // 2. Meta description
  totalChecks++;
  const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"\s*\/?>/);
  if (!descMatch || !descMatch[1].trim()) {
    errors.push(`Missing or empty meta description in route [${route}]`);
  } else {
    const d = descMatch[1].trim();
    if (descriptions.has(d)) {
      errors.push(`Duplicate meta description in route [${route}]: "${d}"`);
    } else {
      descriptions.add(d);
      passedChecks++;
    }
  }

  // 3. Canonical URL
  totalChecks++;
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"\s*\/?>/);
  if (!canonicalMatch || !canonicalMatch[1].trim()) {
    errors.push(`Missing canonical link in route [${route}]`);
  } else {
    const expectedCanonical = `${SITE_URL}${route === '/' ? '/' : route}`;
    const c = canonicalMatch[1].trim();
    // Next.js renders the root canonical without a trailing slash; both forms are equivalent.
    if (c !== expectedCanonical && !(route === '/' && c === SITE_URL)) {
      errors.push(`Canonical mismatch in route [${route}]: expected ${expectedCanonical}, got ${c}`);
    } else {
      canonicals.add(c);
      passedChecks++;
    }
  }

  // 4. Schema.org JSON-LD
  totalChecks++;
  const schemaBlocks = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (schemaBlocks.length === 0) {
    errors.push(`Missing Schema.org JSON-LD script in route [${route}]`);
  } else {
    try {
      const graphs = schemaBlocks.map((m) => JSON.parse(m[1]));
      if (graphs.some((g) => !g['@context'] || !g['@graph'])) {
        errors.push(`Invalid Schema.org graph structure in route [${route}]`);
      } else {
        passedChecks++;
      }
    } catch (e) {
      errors.push(`JSON-LD parse error in route [${route}]: ${e.message}`);
    }
  }

  // 5. Semantic H1 Heading
  totalChecks++;
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);
  if (!h1Match || !h1Match[1].trim()) {
    errors.push(`Missing or empty <h1> in route [${route}]`);
  } else {
    passedChecks++;
  }

  console.log(`  ✓ Route Verified: [${route}] — Title: "${titleMatch ? titleMatch[1].slice(0, 45) + '...' : ''}"`);
}

// Check robots.txt, sitemap.xml, llms.txt, llms-full.txt
const publicFiles = ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt'];
for (const file of publicFiles) {
  totalChecks++;
  const pubPath = path.resolve(__dirname, '..', 'public', file);
  if (fs.existsSync(pubPath) && fs.statSync(pubPath).size > 0) {
    passedChecks++;
    console.log(`  ✓ Static File Verified: [/${file}] (${fs.statSync(pubPath).size} bytes)`);
  } else {
    errors.push(`Missing or empty public file: [/${file}]`);
  }
}

console.log(`\n==================================================`);
console.log(`VALIDATION RESULTS:`);
console.log(`Total checks run: ${totalChecks}`);
console.log(`Passed checks: ${passedChecks}`);
console.log(`Errors encountered: ${errors.length}`);

if (errors.length > 0) {
  console.error('\n❌ ERRORS DETECTED:');
  errors.forEach((err) => console.error('  - ' + err));
  process.exit(1);
} else {
  console.log('✅ ALL ENTERPRISE SEO VALIDATION CHECKS PASSED WITH 100% ACCURACY!');
  console.log('==================================================\n');
}
