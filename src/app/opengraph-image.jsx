import { ImageResponse } from 'next/og';
import { OgMark } from '@/lib/ogMark';

// Default social share card for every page (Open Graph and Twitter/X).
export const alt = 'Relient Solutions — custom software, AI agents and workflow automation, Hyderabad';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: '#ededed',
          background:
            'radial-gradient(900px 600px at 100% 0%, rgba(86,124,190,0.38), transparent 70%), radial-gradient(700px 500px at 0% 100%, rgba(86,124,190,0.18), transparent 70%), #000',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <OgMark size={64} />
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            Relient<span style={{ fontWeight: 400, color: '#a1a1a6', marginLeft: 12 }}>Solutions</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Custom software, AI agents &amp; automation — built around how you work.
          </div>
          <div style={{ fontSize: 30, color: '#a1a1a6' }}>CRMs · Client portals · Internal tools · Hyderabad, India</div>
        </div>
      </div>
    ),
    size
  );
}
