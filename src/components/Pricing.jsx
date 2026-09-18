import Reveal from './Reveal'

const offerings = [
  {
    title: 'Private Group Events',
    price: 'Custom',
    unit: 'quoted per event',
    body: 'Birthdays, bachelorettes, team offsites, client appreciation, backyard classes — we bring the Micros to your space and build the class around your group.',
    includes: [
      'Priced by headcount and duration',
      'Machines, instruction and playlist included',
      'Indoor or outdoor, your location',
      'All levels coached in the same room',
    ],
    cta: 'Request a Quote',
    featured: true,
  },
  {
    title: 'Vendor & Pop-Up Events',
    price: '$60',
    unit: 'per participant',
    body: 'Markets, storefronts, wellness fairs and brand activations. Guests book a spot on a Micro and get a full Lagree class in the middle of the event.',
    includes: [
      'Flat per-person rate',
      'Great fit for markets and activations',
      'Beginner-friendly format',
      'Liability waiver collected at booking',
    ],
    cta: 'Book a Spot',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-clay/30 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ember">Events &amp; Pricing</p>
          <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
            Gather your people. We&apos;ll bring the fire.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 130}>
              <div
                className={`flex h-full flex-col rounded-2xl p-9 sm:p-11 ${
                  item.featured
                    ? 'bg-ink text-cream'
                    : 'border border-ink/12 bg-cream text-ink'
                }`}
              >
                <h3 className="display text-2xl">{item.title}</h3>

                <div className="mt-7 flex items-baseline gap-3">
                  <span className={`display text-5xl ${item.featured ? 'text-gold' : 'text-ember'}`}>
                    {item.price}
                  </span>
                  <span
                    className={`eyebrow ${item.featured ? 'text-cream/50' : 'text-ink/45'}`}
                  >
                    {item.unit}
                  </span>
                </div>

                <p
                  className={`mt-6 text-sm leading-relaxed ${
                    item.featured ? 'text-cream/70' : 'text-ink/65'
                  }`}
                >
                  {item.body}
                </p>

                <ul className="mt-8 space-y-3.5">
                  {item.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                          item.featured ? 'bg-gold' : 'bg-ember'
                        }`}
                      />
                      <span className={item.featured ? 'text-cream/80' : 'text-ink/70'}>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`eyebrow mt-10 rounded-full px-8 py-4 text-center transition-colors ${
                    item.featured
                      ? 'bg-gold text-soot hover:bg-gold-soft'
                      : 'border border-ink/25 text-ink hover:border-ember hover:text-ember'
                  }`}
                >
                  {item.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-ink/55">
            Travel outside our standard radius, extended durations and add-ons are quoted
            individually — just ask.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
