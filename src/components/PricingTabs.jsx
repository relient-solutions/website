'use client';

import { useState } from 'react';

// Client-side tab switcher. All panels are server-rendered into the HTML; tabs only toggle visibility.
export default function PricingTabs({ tabs, children }) {
  const [active, setActive] = useState(tabs[0].id);
  const panels = Array.isArray(children) ? children : [children];

  return (
    <>
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t.id} type="button" role="tab" aria-selected={active === t.id} aria-controls={`panel-${t.id}`} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div key={tabs[i].id} id={`panel-${tabs[i].id}`} role="tabpanel" hidden={active !== tabs[i].id}>
          {panel}
        </div>
      ))}
    </>
  );
}
