/* The Relient "r" mark: chrome arc with a brushed steel-blue square. */
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
          <stop offset="0" stopColor="#9fc2f0" />
          <stop offset="0.45" stopColor="#3a63a6" />
          <stop offset="0.8" stopColor="#1d3466" />
          <stop offset="1" stopColor="#4d76b6" />
        </linearGradient>
      </defs>
      <path d="M9.5 40V22.5A13 13 0 0 1 22.5 9.5H32" fill="none" stroke="url(#rl-mark-arc)" strokeWidth="10" />
      <rect x="36" y="4.5" width="10" height="10" rx="2" fill="url(#rl-mark-dot)" />
    </svg>
  );
}
