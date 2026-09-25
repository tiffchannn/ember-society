import EmberField from './EmberField'
import embersPhoto from '../assets/embers.jpg'
import { SERVICE_AREA } from '../config'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-soot pb-24 pt-36 text-cream"
    >
      <img
        src={embersPhoto}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-soot/35" />
      <EmberField count={22} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-soot to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow reveal reveal-in text-[0.6rem] tracking-[0.25em] text-gold sm:text-[0.6875rem] sm:tracking-[0.32em]">
          Community · Experiences · Connection
        </p>

        <h1 className="display reveal reveal-in mt-7 text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: '120ms' }}>
          Ember Society
        </h1>

        <p
          className="reveal reveal-in mt-6 text-base font-extralight italic tracking-[0.3em] text-cream/75 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          movement &amp; wellness
        </p>

        <p
          className="reveal reveal-in mx-auto mt-10 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          style={{ animationDelay: '360ms' }}
        >
          We bring Lagree to you — pop-ups alongside local vendors, and private events
          wherever you are. Anywhere becomes a studio.
        </p>

        <div
          className="reveal reveal-in mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '480ms' }}
        >
          <a
            href="#book"
            className="eyebrow w-full rounded-full bg-gold px-9 py-4 text-soot transition-colors hover:bg-gold-soft sm:w-auto"
          >
            Book an Event
          </a>
          <a
            href="#experience"
            className="eyebrow w-full rounded-full border border-cream/30 px-9 py-4 text-cream transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            What to Expect
          </a>
        </div>

        <p
          className="reveal reveal-in mt-10 text-[0.7rem] tracking-[0.3em] text-cream/65 uppercase"
          style={{ animationDelay: '600ms' }}
        >
          {SERVICE_AREA}
        </p>
      </div>

      <a
        href="#story"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream/40 transition-colors hover:text-gold md:flex"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="h-12 w-px bg-current" />
      </a>
    </section>
  )
}
