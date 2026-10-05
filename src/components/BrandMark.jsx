/* The Relient "r" mark in the site's chrome palette (replaces the blue PNG). */
export default function BrandMark({ size = 26 }) {
  return (
    <svg width={size} height={(size * 44) / 50} viewBox="0 0 50 44" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="rl-mark-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#e4e6ea" />
          <stop offset="1" stopColor="#a9adb6" />
        </linearGradient>
        <linearGradient id="rl-mark-dot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f5f7" />
          <stop offset="0.45" stopColor="#8d9099" />
          <stop offset="1" stopColor="#d7d9de" />
        </linearGradient>
      </defs>
      <path d="M9.5 40V22.5A13 13 0 0 1 22.5 9.5H32" fill="none" stroke="url(#rl-mark-arc)" strokeWidth="10" />
      <rect x="36" y="4.5" width="10" height="10" rx="2" fill="url(#rl-mark-dot)" />
    </svg>
  );
}
