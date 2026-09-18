import { useEffect } from 'react'

// Placeholder copy — have this reviewed by counsel and replace before taking real bookings.
const clauses = [
  [
    'Assumption of risk',
    'Lagree is a physically demanding, high-intensity form of exercise. I understand that participation involves inherent risks including muscle strain, injury and, in rare cases, serious harm, and I accept those risks voluntarily.',
  ],
  [
    'Physical condition',
    'I confirm that I am physically able to participate, that I have disclosed any injury, condition or pregnancy to my instructor, and that I will stop and seek assistance if I experience pain, dizziness or discomfort.',
  ],
  [
    'Equipment and venue',
    'I agree to follow all instructions regarding safe use of the Lagree Micro and to use the equipment only as directed, and I acknowledge that classes may take place in non-studio venues including outdoor spaces.',
  ],
  [
    'Release of liability',
    'To the fullest extent permitted by law, I release Ember Society, its instructors, partners and venue hosts from claims arising out of my participation, except where caused by gross negligence or willful misconduct.',
  ],
  [
    'Media',
    'Photos or video may be taken at events for promotional use. I may opt out at any time by notifying an instructor before class begins.',
  ],
]

export default function WaiverModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Liability waiver"
      className="fixed inset-0 z-[60] flex items-end justify-center bg-soot/80 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-cream p-8 text-ink sm:p-11"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow text-gold">Ember Society</p>
            <h2 className="display mt-3 text-2xl">Liability Waiver &amp; Release</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close waiver"
            className="text-2xl leading-none text-ink/40 transition-colors hover:text-ink"
          >
            &times;
          </button>
        </div>

        <div className="mt-8 space-y-6">
          {clauses.map(([title, body]) => (
            <div key={title}>
              <h3 className="display text-base">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 border-t border-ink/10 pt-6 text-xs leading-relaxed text-ink/45">
          By checking the waiver box at booking, you acknowledge that you have read and agree to
          these terms on behalf of yourself and any guests you register.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="eyebrow mt-8 w-full rounded-full bg-ink px-8 py-4 text-cream transition-colors hover:bg-char"
        >
          Close
        </button>
      </div>
    </div>
  )
}
