import Reveal from './Reveal'

const through = [
  ['Through movement', 'we uncover that resilience.'],
  ['Through challenges', 'we build confidence.'],
  ['Through community', 'we remember that we’re capable of more than we think.'],
]

export default function Story() {
  return (
    <section id="story" className="bg-clay py-28 text-ink md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-ember">Our Story</p>
        </Reveal>

        <Reveal delay={120}>
          <p className="display mt-9 text-3xl leading-[1.35] text-ember sm:text-4xl md:text-5xl md:leading-[1.25]">
            An ember is what remains after you&apos;ve been through the fire.
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl">
            It&apos;s proof that the spark is still there. Resilient, powerful, and capable of
            becoming something bigger.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 h-px w-20 bg-ember/40" />
          <div className="mx-auto mt-14 max-w-xl space-y-5 text-base leading-relaxed text-ink/70">
            <p>
              At Ember Society, we believe strength isn&apos;t about avoiding challenges — it&apos;s
              about discovering what remains after them.
            </p>
            <p>
              Like an ember that continues to glow long after the fire has passed, resilience
              lives within all of us.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink/10 text-left sm:grid-cols-3">
          {through.map(([lead, rest], i) => (
            <Reveal key={lead} delay={i * 110} className="bg-clay p-8">
              <h3 className="display text-lg text-ember">{lead},</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{rest}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="display mx-auto mt-16 max-w-2xl text-2xl leading-snug sm:text-3xl">
            Because the moment you think you&apos;re at your limit is often the moment you
            discover your strength.
          </p>
          <p className="eyebrow mt-10 text-ember">Find your spark</p>
        </Reveal>
      </div>
    </section>
  )
}
