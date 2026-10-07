import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Plus } from 'lucide-react';
import { BRAND_EMAIL } from '@/lib/seoData';
import LiveRender from '@/components/LiveRender';

/* Server-rendered building blocks shared by every page. */

export function JsonLd({ data }) {
  const graph = { '@context': 'https://schema.org', '@graph': Array.isArray(data) ? data : [data] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export function Crumbs({ items }) {
  const all = [{ label: 'Home', path: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="crumbs">
        {all.map((c, i) =>
          i === all.length - 1 ? (
            <li key={c.label} aria-current="page">
              {c.label}
            </li>
          ) : (
            <li key={c.label}>
              <Link href={c.path}>{c.label}</Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export function Render({ name, alt = '', priority = false, interactive = true, sizes = '(max-width: 960px) 360px, 520px' }) {
  return (
    <LiveRender variant={name} interactive={interactive}>
      <Image className="render" draggable={false} src={`/renders/${name}.png`} alt={alt} width={1100} height={1100} priority={priority} sizes={sizes} />
    </LiveRender>
  );
}

export function PageHero({ crumbs, label, title, lede, art, artAlt, children }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          {crumbs && <Crumbs items={crumbs} />}
          {label && <div className="label">{label}</div>}
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
          {children}
        </div>
        {art && (
          <div className="hero-art">
            <Render name={art} alt={artAlt || ''} priority />
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({ label, title, lede, action, children, id }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        {(label || title) &&
          (action ? (
            <div className="head-row">
              <div>
                {label && <div className="label">{label}</div>}
                {title && <h2>{title}</h2>}
              </div>
              {action}
            </div>
          ) : (
            <div className="head">
              {label && <div className="label">{label}</div>}
              {title && <h2>{title}</h2>}
              {lede && <p>{lede}</p>}
            </div>
          ))}
        {children}
      </div>
    </section>
  );
}

export function ButtonLink({ href, ghost = false, external = false, children }) {
  const cls = `btn ${ghost ? 'btn-ghost' : 'btn-metal'}`;
  if (external || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a className={cls} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}

export function Stats({ items, cols }) {
  return (
    <div className="stats" style={cols ? { '--cols': cols } : undefined}>
      {items.map((s) => (
        <div className="stat" key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

// Cards in a grid. Each item may carry a rendered image (art), an icon, a link and a kicker.
export function Tiles({ items, cols = 3 }) {
  return (
    <div className="tiles" style={{ '--cols': cols }}>
      {items.map((it) => {
        const Icon = it.icon;
        const body = (
          <>
            {it.art && (
              <div className="tile-art">
                <Render name={it.art} sizes="260px" />
              </div>
            )}
            {Icon && (
              <span className="icon-chip" aria-hidden="true">
                <Icon size={20} strokeWidth={1.6} />
              </span>
            )}
            {it.kicker && <span className="label">{it.kicker}</span>}
            <h3>{it.title}</h3>
            {it.desc && <p>{it.desc}</p>}
            {it.href && (
              <span className="more">
                {it.cta || 'Learn more'} <ArrowRight size={14} />
              </span>
            )}
          </>
        );
        return it.href ? (
          <Link key={it.title} href={it.href} className="card tile">
            {body}
          </Link>
        ) : (
          <div key={it.title} className="card tile">
            {body}
          </div>
        );
      })}
    </div>
  );
}

export function Checks({ items }) {
  return (
    <ul className="checks">
      {items.map((t) => (
        <li key={t}>
          <Check size={16} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map((s, i) => (
        <li className="card step" key={s.title}>
          <span className="label">Step {String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            <span>{f.q}</span>
            <Plus size={18} />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ClosingCTA({ title, text, buttonLabel = 'Book a free call', href = '/contact' }) {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="cta-panel">
          <h2>
            {title || (
              <>
                Let&apos;s build <em>what&apos;s next.</em>
              </>
            )}
          </h2>
          <p>{text || "Tell us what's slowing your business down. We'll tell you what to build."}</p>
          <div className="btn-row">
            <ButtonLink href={href}>
              {buttonLabel} <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink ghost href={`mailto:${BRAND_EMAIL}`}>
              {BRAND_EMAIL} <ArrowUpRight size={15} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
