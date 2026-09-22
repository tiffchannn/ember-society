import Reveal from './Reveal'
import { EmberMark } from './Logo'

const instructors = [
  {
    name: 'Estefany',
    initial: 'E',
    role: 'Co-Founder · Lagree Instructor',
    quote: 'Challenge is where we discover what we are truly capable of.',
    paragraphs: [
      'Estefany is a Lagree instructor who found more than movement when she discovered Lagree — she found a deeper understanding of her own strength and resilience.',
      'Through movement, she learned that challenge is where we discover what we’re truly capable of, and that the strength we find in those moments carries far beyond the workout. Lagree also brought her a community of people who share that same desire to grow, challenge themselves, and become better.',
      'To Estefany, Ember represents the strength that remains after the challenge, the resilience that continues to burn within us, and the belief that our spark is always there, waiting to be found and nurtured.',
    ],
  },
  {
    name: 'Tiffany',
    initial: 'T',
    role: 'Co-Founder · Lagree Instructor',
    quote: 'The second in a hold when it feels like you can’t stay there — and then you do.',
    paragraphs: [
      'Tiffany is a Lagree instructor who fell in love with the method for more than just the strength it builds — it was the sense of community found in a room full of people pushing through class together.',
      'As an instructor, what she loves most is watching that exact moment happen for her clients — the second in a hold when it feels like you can’t stay there any longer, and then you do.',
      'Tiffany found Lagree during a season of real change, and movement became her therapeutic outlet through life’s ebbs and flows. That’s exactly what Ember Society represents to her: even when things don’t go as planned, you don’t just recover — you rise, together, stronger than before. Like an ember, the lowest moments can still hold the spark for something bigger than yourself.',
    ],
  },
]

export default function Instructors() {
  return (
    <section id="instructors" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ember">Meet Your Instructors</p>
          <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
            Two instructors, one spark
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {instructors.map((person, i) => (
            <Reveal key={person.name} delay={i * 140}>
              <article className="flex h-full flex-col">
                {/* Replace this panel with a portrait: <img className="aspect-[4/5] w-full rounded-2xl object-cover" ... /> */}
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-clay/45">
                  <span className="display text-[7rem] text-ember/40 sm:text-[9rem]">
                    {person.initial}
                  </span>
                  <EmberMark className="absolute bottom-6 right-6 h-16 text-ember/40" />
                </div>

                <h3 className="display mt-8 text-2xl">{person.name}</h3>
                <p className="eyebrow mt-3 text-ink/50">{person.role}</p>

                <p className="display mt-6 border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink/80">
                  &ldquo;{person.quote}&rdquo;
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
                  {person.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
