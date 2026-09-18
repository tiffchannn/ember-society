import lockupSrc from '../assets/logo-lockup.png'
import markSrc from '../assets/ember-mark.png'

// The brand artwork is a flat alpha mask, so it takes its color from `currentColor`
// and works on both the dark hero nav and the cream scrolled nav.
const masked = (src, ratio) => ({
  display: 'inline-block',
  aspectRatio: ratio,
  backgroundColor: 'currentColor',
  WebkitMaskImage: `url(${src})`,
  maskImage: `url(${src})`,
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
})

export function EmberMark({ className = 'h-10' }) {
  return <span aria-hidden="true" className={className} style={masked(markSrc, '300 / 776')} />
}

export default function Logo({ tone = 'ink', compact = false }) {
  const color = tone === 'cream' ? 'text-cream' : 'text-ember'
  return (
    <span className={`inline-flex items-center ${color}`}>
      <span
        className={compact ? 'h-12' : 'h-16'}
        style={masked(lockupSrc, '1400 / 544')}
        aria-hidden="true"
      />
      <span className="sr-only">Ember Society</span>
    </span>
  )
}
