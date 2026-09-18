import EmberField from './EmberField'
import Reveal from './Reveal'

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-char py-28 text-cream md:py-36">
      <EmberField count={16} className="opacity-70" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-gold">What Ember Means</p>
        </Reveal>

        <Reveal delay={120}>
          <p className="display mt-9 text-2xl leading-[1.5] text-cream/95 sm:text-3xl md:text-[2.4rem] md:leading-[1.45]">
            The strength that remains after the challenge. The resilience that keeps burning.
            The belief that your spark is always there — waiting to be found and nurtured.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-12 h-px w-20 bg-gold/60" />
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/60">
            Ember Society was built on the moment in a hold when it feels like you can&apos;t stay
            there any longer — and then you do. Challenge is where we find out what we&apos;re
            capable of, and that strength carries far beyond the workout.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <p className="display mt-14 text-3xl text-gold sm:text-4xl">Find your spark.</p>
        </Reveal>
      </div>
    </section>
  )
}
