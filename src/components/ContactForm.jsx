'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_PHONE_INTL } from '@/lib/seoData';
import TermsModal from './TermsModal';
import Select from './Select';

const SERVICES = ['Custom Software', 'AI Agents', 'Workflow Automation', 'Not sure yet'];

const TEAM_SIZES = ['Just me', '2–10 people', '11–50 people', '50+ people'];

export default function ContactForm() {
  const params = useSearchParams();
  const preset = params.get('plan') || params.get('service') || '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: SERVICES.find((s) => preset && s.toLowerCase().includes(preset.toLowerCase().split(' ')[0])) || SERVICES[0],
    teamSize: TEAM_SIZES[1],
    website: '',
    message: preset ? `I'm interested in: ${preset}` : '',
  });
  const [sending, setSending] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Saved server-side to Postgres (src/app/api/inquiries/route.js). If that fails,
    // the WhatsApp hand-off below still delivers the lead.
    let auditId = 'RELIENT-' + Date.now().toString(16).toUpperCase();
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          teamSize: form.teamSize,
          message: form.message,
          website: form.website,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
          page: window.location.pathname + window.location.search,
        }),
      });
      const result = await res.json();
      if (res.ok && result.ref) auditId = result.ref;
      else console.warn('Inquiry not saved:', result.error);
    } catch (err) {
      console.warn('Inquiry not saved:', err);
    }

    const text =
      `*New Project Inquiry for Relient*\n` +
      `• *Name:* ${form.name}\n` +
      `• *Email:* ${form.email}\n` +
      `• *Phone:* ${form.phone || 'Not specified'}\n` +
      `• *Company:* ${form.company || 'Not specified'}\n` +
      `• *Service:* ${form.service}\n` +
      `• *Team size:* ${form.teamSize}\n` +
      `• *Message:* ${form.message || 'Ready to build'}\n` +
      `• *Ref ID:* ${auditId}`;
    const phone = BRAND_PHONE_INTL.replace('+', '');
    const encoded = encodeURIComponent(text);
    try {
      window.location.href = `whatsapp://send?phone=${phone}&text=${encoded}`;
    } catch {
      window.open(`https://api.whatsapp.com/send/?phone=${phone}&text=${encoded}`, '_blank');
    }

    setSending(false);
    setReceipt({ id: auditId, url: `https://api.whatsapp.com/send/?phone=${phone}&text=${encoded}` });
  };

  if (receipt) {
    return (
      <div className="card form">
        <div className="form-done">
          <CheckCircle2 size={36} color="#d9dbe0" style={{ margin: '0 auto' }} />
          <h3>Thanks — we&apos;ve got it.</h3>
          <p>
            We&apos;ll reply within a few hours. Reference <span className="label">{receipt.id}</span>
          </p>
          <a className="btn btn-ghost" href={receipt.url} target="_blank" rel="noreferrer">
            Open WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="card form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" required value={form.name} onChange={set('name')} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required value={form.email} onChange={set('email')} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" value={form.company} onChange={set('company')} autoComplete="organization" />
      </div>
      <Select id="service" label="What do you need?" value={form.service} options={SERVICES} onChange={(v) => setForm((f) => ({ ...f, service: v }))} />
      <Select id="teamSize" label="Team size" value={form.teamSize} options={TEAM_SIZES} onChange={(v) => setForm((f) => ({ ...f, teamSize: v }))} />
      {/* Honeypot for bots — hidden from people and screen readers. */}
      <input type="text" name="website" value={form.website} onChange={set('website')} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <div className="field full">
        <label htmlFor="message">What tools do you use today, and what's not working?</label>
        <textarea id="message" value={form.message} onChange={set('message')} />
      </div>
      <div className="form-foot">
        <small>
          By sending, you agree to our{' '}
          <button type="button" onClick={() => setShowTerms(true)}>
            terms
          </button>
          .
        </small>
        <button type="submit" className="btn btn-metal" disabled={sending}>
          {sending ? 'Sending…' : 'Send message'} <ArrowRight size={16} />
        </button>
      </div>
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} onAccept={() => setShowTerms(false)} />
    </form>
  );
}
