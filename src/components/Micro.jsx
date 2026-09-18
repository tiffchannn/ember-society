import Reveal from './Reveal'

const specs = [
  { value: '71"', label: 'Length' },
  { value: '18.5"', label: 'Width' },
  { value: '53 lb', label: 'Weight' },
]

// Spec-drawing stand-in. Swap for <img src="/micro.jpg" /> once a product photo lands in /public.
function MicroIllustration() {
  return (
    <svg
      viewBox="0 0 560 340"
      className="h-full w-full"
      role="img"
      aria-label="Side-profile diagram of the Lagree Micro machine"
    >
      <rect width="560" height="340" fill="#241a22" />

      <g fill="#a8552a" opacity="0.5">
        <circle cx="96" cy="64" r="2.4" />
        <circle cx="430" cy="52" r="1.9" />
        <circle cx="318" cy="88" r="1.5" />
        <circle cx="180" cy="44" r="1.7" />
        <circle cx="500" cy="110" r="1.4" />
      </g>

      <g stroke="#d1ac65" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* handlebars */}
        <g opacity="0.8" strokeWidth="2">
          <path d="M86 150h46M109 150v42" />
          <path d="M428 150h46M451 150v42" />
        </g>
        {/* front and back platforms */}
        <rect x="70" y="192" width="112" height="26" rx="4" strokeWidth="2" opacity="0.85" />
        <rect x="378" y="192" width="112" height="26" rx="4" strokeWidth="2" opacity="0.85" />
        {/* sliding carriage */}
        <rect x="204" y="186" width="152" height="32" rx="5" strokeWidth="2.6" />
        <path d="M228 202h104" strokeWidth="1.2" opacity="0.4" />
        {/* rail + feet */}
        <path d="M60 228h440" strokeWidth="2.6" />
        <path d="M78 228v26M482 228v26M78 254h40M442 254h40" strokeWidth="2.2" opacity="0.8" />
        {/* springs */}
        <path
          d="M356 210l10-6 10 6 10-6 10 6"
          strokeWidth="1.6"
          opacity="0.6"
        />
        <path d="M182 210l-10-6-10 6-10-6-10 6" strokeWidth="1.6" opacity="0.6" />
        {/* travel arrows on the carriage */}
        <g opacity="0.55" strokeWidth="1.4">
          <path d="M252 168h56M252 168l7-5M252 168l7 5M308 168l-7-5M308 168l-7 5" />
        </g>
      </g>

      {/* dimension line */}
      <g stroke="#f6f6e9" opacity="0.35" strokeWidth="1">
        <path d="M60 288h440M60 282v12M500 282v12" />
      </g>
      <text
        x="280"
        y="312"
        textAnchor="middle"
        fill="#f6f6e9"
        fillOpacity="0.45"
        fontSize="11"
        letterSpacing="3"
        fontFamily="Inter, sans-serif"
      >
        71 IN
      </text>
    </svg>
  )
}

export default function Micro() {
  return (
    <section id="micro" className="bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Meet the Micro</p>
            <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
              Anywhere becomes a studio
            </h2>
            <p className="mt-7 text-base leading-relaxed text-cream/75">
              The Micro isn&apos;t just Lagree&apos;s smallest machine. It&apos;s the machine that
              makes Lagree possible anywhere.
            </p>
            <p className="mt-5 text-base leading-relaxed text-cream/60">
              At only 71 inches long, 18.5 inches wide and approximately 53 pounds, the Micro is
              the smallest and most portable Lagree machine — designed for homes, studios, private
              training, outdoor workouts, pop-ups, large-scale events, and virtually anywhere
              movement can happen.
            </p>

            <dl className="mt-11 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="eyebrow text-cream/45">{spec.label}</dt>
                  <dd className="display mt-2 text-2xl text-gold sm:text-3xl">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-2xl border border-cream/10 bg-char">
              <MicroIllustration />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
