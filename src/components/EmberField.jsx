import { useMemo } from 'react'

// Drifting embers layer for dark sections.
export default function EmberField({ count = 26, className = '' }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 2 + Math.random() * 5
        return {
          id: i,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size * (0.8 + Math.random() * 0.9)}px`,
          animationDuration: `${9 + Math.random() * 14}s`,
          animationDelay: `${Math.random() * 14}s`,
          '--dx': `${(Math.random() - 0.5) * 120}px`,
          opacity: 0.35 + Math.random() * 0.5,
        }
      }),
    [count],
  )

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map(({ id, ...style }) => (
        <span key={id} className="ember-particle" style={style} />
      ))}
    </div>
  )
}
