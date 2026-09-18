// Wordmark + ember/flame monogram, drawn inline so it scales and recolors cleanly.
export function EmberMark({ className = 'h-10 w-auto', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 48 96" className={className} fill="none" aria-hidden="true">
      <circle cx="24" cy="6" r="1.8" fill={stroke} />
      <circle cx="24" cy="90" r="1.8" fill={stroke} />
      <path d="M24 6v84" stroke={stroke} strokeWidth="0.9" />
      <path
        d="M24 22c-9 8-11 17-5 24 5.6 6.5 5.6 13.5 0 20-5 5.8-4 12 3 18"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M27 26c7 6 9 13 4.5 19.5"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M30 30c5.5 5 6.5 10 3 15"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M20 54c-5 5-5.5 11-1.5 16"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

export default function Logo({ tone = 'ink', compact = false }) {
  const color = tone === 'cream' ? 'text-cream' : 'text-ink'
  return (
    <span className={`inline-flex items-center gap-2.5 ${color}`}>
      <EmberMark className={compact ? 'h-7 w-auto' : 'h-9 w-auto'} />
      <span className="display leading-none whitespace-nowrap">
        <span className={compact ? 'text-base tracking-[0.18em]' : 'text-lg tracking-[0.2em]'}>
          EMBER
        </span>{' '}
        <span
          className={`${compact ? 'text-base' : 'text-lg'} tracking-[0.2em] text-gold`}
        >
          SOCIETY
        </span>
      </span>
    </span>
  )
}
