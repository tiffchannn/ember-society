import Reveal from './Reveal'

const offerings = [
  {
    title: 'Ticketed Events',
    price: 'From $60',
    unit: 'per ticket',
    body: 'Open classes we host alongside brand activations and vendors. Guests buy a ticket, claim a Micro, and stay for the community that builds around it.',
    includes: [
      'Single ticket, no membership',
      'Vendors and brand partners on site',
      'All fitness levels welcome',
      '45 minutes on the Micro',
    ],
    cta: 'Ask About Upcoming Events',
    featured: false,
  },
  {
    title: 'Private Events',
    price: 'Custom',
    unit: 'quoted per event',
    body: 'You choose the place — your home, an office, a rooftop, a venue you have already booked — and we arrive with the Micros and run the class for your group.',
    includes: [
      'Quoted to your group size, timing and location',
      'We set up at your location',
      'Machines and instruction included',
      'Built for mixed-level groups',
    ],
    cta: 'Request a Quote',
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-clay/30 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ember">Events &amp; Pricing</p>
          <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
            Find us at an event — or bring us to yours
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 130}>
              <div
                className={`flex h-full flex-col rounded-2xl p-9 sm:p-11 ${
                  item.featured ? 'bg-ink text-cream' : 'border border-ink/12 bg-cream text-ink'
                }`}
              >
                <h3 className="display text-2xl">{item.title}</h3>

                <div className="mt-7 flex items-baseline gap-3">
                  <span className={`display text-5xl ${item.featured ? 'text-gold' : 'text-ember'}`}>
                    {item.price}
                  </span>
                  <span className={`eyebrow ${item.featured ? 'text-cream/50' : 'text-ink/45'}`}>
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
            Based in the San Gabriel Valley and travelling throughout LA County — Orange County
            and the Inland Empire on request. Group size, duration and travel all factor into a
            quote, so tell us what you have in mind.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
