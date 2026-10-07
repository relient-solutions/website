-- Contact-form inquiries. Written only by the site's server (src/app/api/inquiries/route.js).
create table if not exists public.inquiries (
  id bigint generated always as identity primary key,
  ref text not null unique,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  service text,
  team_size text,
  message text,
  terms_accepted_at timestamptz,
  client_timezone text,
  page text
);

create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);

-- Supabase exposes the public schema over its REST API; with RLS on and no policies,
-- the anon/authenticated keys can't read or write leads. The server connects as the owner.
alter table public.inquiries enable row level security;
