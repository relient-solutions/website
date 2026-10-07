'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { saveInquiryToFirebase } from '@/lib/firebase';
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
    message: preset ? `I'm interested in: ${preset}` : '',
  });
  const [sending, setSending] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    const auditId = 'RELIENT-' + Date.now().toString(16).toUpperCase();
    const now = new Date().toISOString();
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      service: form.service,
      budget: '',
      booking_date: '',
      booking_time: '',
      call_type: '',
      // Team size rides in the message so the existing inquiries schema stays unchanged.
      message: `${form.message}\n\nTeam size: ${form.teamSize}`.trim(),
      terms_accepted: true,
      terms_accepted_at: now,
      client_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      createdAt: now,
    };

    // Save the inquiry everywhere the old form did; each step is best-effort.
    try {
      await saveInquiryToFirebase(payload);
    } catch (err) {
      console.warn('Firebase notice:', err);
    }
    try {
      await supabase.from('inquiries').insert([payload]);
    } catch (err) {
      console.warn('Supabase notice:', err);
    }
    try {
      const existing = JSON.parse(localStorage.getItem('relient_inquiries') || '[]');
      existing.unshift({ ...payload, auditId });
      localStorage.setItem('relient_inquiries', JSON.stringify(existing));
    } catch {
      // storage unavailable
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
