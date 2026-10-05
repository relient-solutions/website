'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// three.js is loaded only in the browser, after the page has painted.
const RenderedObject = dynamic(() => import('@/components/RenderedObject'), { ssr: false });

/*
 * The pre-rendered PNG (children) paints immediately and stays in the HTML for SEO and no-JS
 * visitors; the live three.js object fades in over it and the still fades out once it draws.
 */
export default function LiveRender({ variant, interactive = true, children }) {
  const [live, setLive] = useState(false);
  return (
    <div className={`live-render ${live ? 'is-live' : ''}`}>
      {children}
      <div className="live-render-canvas">
        <RenderedObject variant={variant} interactive={interactive} onReady={() => setLive(true)} />
      </div>
    </div>
  );
}
