import Reveal from './Reveal'

const bring = [
  {
    title: 'Grip socks',
    body: 'Required on the Micro — the carriage moves, and grip socks keep you steady. Bring your own pair.',
  },
  {
    title: 'Water',
    body: 'Bring a full bottle. Forty-five minutes of time under tension is thirstier than it looks.',
  },
  {
    title: 'Activewear',
    body: 'Whatever you feel good moving in. Fitted or loose, it\u2019s a workout — comfort matters more than anything else.',
  },
  {
    title: 'Arrive 30 minutes early',
    body: 'Enough time to check in, settle in and get familiar with your machine and your space before the first move.',
  },
]

const expect = [
  ['45 minutes', 'A full-body class — slow, controlled, and constant.'],
  ['Zero experience needed', 'Every move has a modification, and we coach them out loud.'],
  ['The shake is the point', 'Muscles shaking means you are in the right place. Stay with it.'],
  ['You set the spring', 'Lighter or heavier, we adjust with you mid-class. Nothing is one-size.'],
]

export default function Prep() {
  return (
    <section id="prep" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ember">Before You Come</p>
          <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
            Class prep &amp; what to expect
          </h2>
          <p className="mt-7 text-base leading-relaxed text-ink/70">
            New to Lagree, or just new to this machine? Every class starts with a walkthrough
            from your instructor — we never assume what you&apos;ve done before. Here&apos;s
            everything else you need.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="eyebrow text-ink/50">What to bring</h3>
            <div className="mt-8 space-y-px overflow-hidden rounded-2xl bg-ink/10">
              {bring.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="bg-cream p-7">
                  <h4 className="display text-lg">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-ink/50">What to expect</h3>
            <dl className="mt-8 space-y-8">
              {expect.map(([term, def], i) => (
                <Reveal key={term} delay={i * 80}>
                  <dt className="display flex items-baseline gap-4 text-lg">
                    <span className="text-sm text-ember">0{i + 1}</span>
                    {term}
                  </dt>
                  <dd className="mt-3 pl-9 text-sm leading-relaxed text-ink/65">{def}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={360}>
              <div className="mt-12 rounded-2xl border border-gold/40 bg-gold/10 p-7">
                <p className="eyebrow text-ember">Heads up</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  Every guest signs a liability waiver before class. You&apos;ll check it off when
                  you book, so there&apos;s nothing to fill out on the day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
