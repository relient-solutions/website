import { pool } from '@/lib/db';

const LIMITS = { name: 120, email: 200, phone: 40, company: 160, service: 80, teamSize: 40, message: 4000, timezone: 80, page: 300 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (body.website) return Response.json({ ok: true, ref: 'RELIENT-OK' });

  const data = Object.fromEntries(Object.entries(LIMITS).map(([k, max]) => [k, clean(body[k], max)]));
  if (!data.name || !EMAIL_RE.test(data.email)) {
    return Response.json({ error: 'Please add your name and a valid email.' }, { status: 400 });
  }

  const ref = 'RELIENT-' + Date.now().toString(16).toUpperCase();
  try {
    await pool.query(
      `insert into public.inquiries
         (ref, name, email, phone, company, service, team_size, message, terms_accepted_at, client_timezone, page)
       values ($1, $2, $3, $4, $5, $6, $7, $8, now(), $9, $10)`,
      [ref, data.name, data.email, data.phone || null, data.company || null, data.service || null, data.teamSize || null, data.message || null, data.timezone || null, data.page || null]
    );
  } catch (err) {
    console.error('Inquiry insert failed:', err.message);
    return Response.json({ error: 'Could not save your message. Please WhatsApp us instead.' }, { status: 500 });
  }

  return Response.json({ ok: true, ref });
}
