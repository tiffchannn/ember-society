import Reveal from './Reveal'

const pillars = [
  {
    n: '01',
    title: 'Low Impact, High Intensity',
    body: 'Lagree is slow, controlled and constant — 45 minutes of time under tension that builds strength without pounding your joints.',
  },
  {
    n: '02',
    title: 'Every Body Welcome',
    body: 'Every move is scalable. First-timers train beside regulars, and we coach modifications out loud so nobody is guessing.',
  },
  {
    n: '03',
    title: 'The Room Carries You',
    body: 'Shaking through a hold is easier when the whole room is shaking with you. Community is the part people come back for.',
  },
  {
    n: '04',
    title: 'We Come to You',
    body: 'Backyards, rooftops, offices, studios, storefronts and markets. If there is floor space, there can be a class.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start">
            <Reveal>
              <p className="eyebrow text-gold">The Experience</p>
              <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
                A class that meets you where you are
              </h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ink/70">
                Ember Society is a travelling movement and wellness experience. We bring the
                equipment, the playlist and the coaching — you bring the people and the place.
                Lagree is where we start; breathwork, mat Pilates and more are on the way.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.n} delay={i * 90} className="bg-cream p-8 sm:p-9">
                <span className="display text-sm text-gold">{pillar.n}</span>
                <h3 className="display mt-5 text-xl leading-snug">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
