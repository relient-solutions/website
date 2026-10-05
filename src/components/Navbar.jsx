'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import BrandMark from '@/components/BrandMark';

const LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Donna AI', href: '/products/donna-ai' },
  { name: 'Industries', href: '/industries' },
  { name: 'Work', href: '/case-studies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark />
          Relient
        </Link>

        <nav className="nav-links" aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="btn-row" style={{ gap: 6 }}>
          <Link href="/contact" className="btn btn-metal nav-cta nav-desktop">
            Book a call
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-menu" aria-label="Mobile">
          {[...LINKS, { name: 'Contact', href: '/contact' }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.name}
              <ArrowRight size={18} color="#6b6b70" />
            </Link>
          ))}
          <Link href="/contact" className="btn btn-metal" onClick={() => setOpen(false)}>
            Book a free call
          </Link>
        </nav>
      )}
    </header>
  );
}
