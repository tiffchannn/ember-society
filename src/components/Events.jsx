import Reveal from './Reveal'
import { EVENTS } from '../config'

// Events are listed in config.js. Past dates drop off on their own; the whole section
// disappears when nothing is upcoming.
function upcoming() {
  const today = new Date().toISOString().slice(0, 10)
  return EVENTS.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))
}

function formatDate(iso) {
  // parse as local rather than UTC so the date never shifts a day backwards
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  })
}

export default function Events() {
  const events = upcoming()
  if (events.length === 0) return null

  return (
    <section id="events" className="bg-cream pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ember">What&apos;s Coming Up</p>
          <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
            {events.length === 1 ? 'Our next pop-up' : 'Where we\u2019ll be next'}
          </h2>
        </Reveal>

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl bg-ink/10">
          {events.map((event, i) => (
            <Reveal key={`${event.date}-${event.title}`} delay={i * 90} className="bg-cream">
              <article className="flex flex-col gap-6 p-8 sm:p-10 md:flex-row md:items-center md:gap-10">
                <div className="md:w-44 md:shrink-0">
                  <p className="display text-2xl text-ember">{formatDate(event.date)}</p>
                  {event.time && <p className="eyebrow mt-2 text-ink/50">{event.time}</p>}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="display text-xl leading-snug">{event.title}</h3>
                  <p className="mt-2 text-sm text-ink/65">
                    {[event.venue, event.city].filter(Boolean).join(' · ')}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5 md:justify-start md:shrink-0">
                  {event.price && !event.soldOut && (
                    <span className="display whitespace-nowrap text-xl text-ink/70">{event.price}</span>
                  )}
                  {event.soldOut ? (
                    <span className="eyebrow whitespace-nowrap rounded-full border border-ink/20 px-7 py-3.5 text-ink/45">
                      Sold Out
                    </span>
                  ) : event.ticketUrl ? (
                    <a
                      href={event.ticketUrl}
                      className="eyebrow whitespace-nowrap rounded-full bg-gold px-8 py-3.5 text-soot transition-colors hover:bg-gold-soft"
                    >
                      Get Tickets
                    </a>
                  ) : (
                    <a
                      href="#book"
                      className="eyebrow whitespace-nowrap rounded-full border border-ink/25 px-7 py-3.5 text-ink transition-colors hover:border-ember hover:text-ember"
                    >
                      Ask About It
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
