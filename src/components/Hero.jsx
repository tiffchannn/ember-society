import EmberField from './EmberField'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-soot text-cream"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 105%, #7a3a18 0%, #3a1f1c 34%, #1b1218 62%, #120c11 100%)',
        }}
      />
      <EmberField count={34} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-soot to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow reveal reveal-in text-[0.6rem] tracking-[0.25em] text-gold sm:text-[0.6875rem] sm:tracking-[0.32em]">
          Lagree · Pop-ups · Private Events
        </p>

        <h1 className="display reveal reveal-in mt-7 text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: '120ms' }}>
          Ember Society
        </h1>

        <p
          className="reveal reveal-in mt-6 text-sm font-extralight tracking-[0.42em] text-cream/70 uppercase"
          style={{ animationDelay: '240ms' }}
        >
          movement &amp; wellness
        </p>

        <p
          className="reveal reveal-in mx-auto mt-10 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          style={{ animationDelay: '360ms' }}
        >
          We bring the Lagree Micro to you — private group events, pop-ups and vendor
          activations. Anywhere becomes a studio.
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
      </div>

      <a
        href="#manifesto"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream/40 transition-colors hover:text-gold md:flex"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="h-12 w-px bg-current" />
      </a>
    </section>
  )
}
