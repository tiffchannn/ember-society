import { useState } from 'react'
import EmberField from './EmberField'
import Reveal from './Reveal'
import WaiverModal from './WaiverModal'
import { CONTACT_EMAIL } from '../config'

const eventTypes = [
  'Private group event',
  'Vendor / pop-up event',
  'Corporate or team offsite',
  'Not sure yet',
]

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  eventType: eventTypes[0],
  date: '',
  headcount: '',
  location: '',
  details: '',
}

export default function Booking() {
  const [form, setForm] = useState(emptyForm)
  const [waiver, setWaiver] = useState(false)
  const [showWaiver, setShowWaiver] = useState(false)
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      `Event type: ${form.eventType}`,
      `Preferred date: ${form.date || 'flexible'}`,
      `Headcount: ${form.headcount || 'TBD'}`,
      `Location: ${form.location || 'TBD'}`,
      '',
      'Details:',
      form.details || '—',
      '',
      'Liability waiver acknowledged: yes',
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Event inquiry — ${form.eventType}`,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    'w-full rounded-lg border border-cream/20 bg-cream/5 px-4 py-3.5 text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-gold focus:outline-none'

  return (
    <section id="book" className="relative overflow-hidden bg-soot py-28 text-cream md:py-36">
      <EmberField count={18} className="opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20">
          <Reveal className="md:sticky md:top-32 md:self-start">
            <p className="eyebrow text-gold">Book an Event</p>
            <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
              Tell us about your event
            </h2>
            <p className="mt-7 text-base leading-relaxed text-cream/70">
              Send us the shape of it — who, when, where and roughly how many. We&apos;ll come
              back with availability and a quote within 48 hours.
            </p>
            <p className="mt-8 text-sm text-cream/50">
              Prefer email?{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="rounded-2xl border border-gold/40 bg-cream/5 p-10 text-center">
                <h3 className="display text-2xl text-gold">Your email draft is open</h3>
                <p className="mt-5 text-sm leading-relaxed text-cream/70">
                  Hit send in your mail app and we&apos;ll get back to you within 48 hours. If
                  nothing opened, email us directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="eyebrow mt-8 rounded-full border border-cream/25 px-7 py-3 text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  Edit the request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow text-cream/50">Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      className={`${field} mt-2.5`}
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-cream/50">Email</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className={`${field} mt-2.5`}
                      placeholder="you@email.com"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow text-cream/50">Phone (optional)</span>
                    <input
                      value={form.phone}
                      onChange={update('phone')}
                      className={`${field} mt-2.5`}
                      placeholder="(000) 000-0000"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-cream/50">Event type</span>
                    <select
                      value={form.eventType}
                      onChange={update('eventType')}
                      className={`${field} mt-2.5`}
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-char">
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <label className="block">
                    <span className="eyebrow text-cream/50">Date</span>
                    <input
                      type="date"
                      value={form.date}
                      onChange={update('date')}
                      className={`${field} mt-2.5`}
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-cream/50">Headcount</span>
                    <input
                      type="number"
                      min="1"
                      value={form.headcount}
                      onChange={update('headcount')}
                      className={`${field} mt-2.5`}
                      placeholder="12"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-cream/50">Location</span>
                    <input
                      value={form.location}
                      onChange={update('location')}
                      className={`${field} mt-2.5`}
                      placeholder="City or venue"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="eyebrow text-cream/50">Tell us more</span>
                  <textarea
                    rows={4}
                    value={form.details}
                    onChange={update('details')}
                    className={`${field} mt-2.5 resize-none`}
                    placeholder="Indoor or outdoor, the occasion, timing, anything else we should know."
                  />
                </label>

                <label className="flex cursor-pointer items-start gap-4 rounded-lg border border-cream/15 bg-cream/5 p-5">
                  <input
                    required
                    type="checkbox"
                    checked={waiver}
                    onChange={(e) => setWaiver(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#d1ac65]"
                  />
                  <span className="text-sm leading-relaxed text-cream/70">
                    I have read and agree to the{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        setShowWaiver(true)
                      }}
                      className="text-gold underline underline-offset-4 hover:text-gold-soft"
                    >
                      liability waiver
                    </button>{' '}
                    on behalf of myself and my guests, and understand every participant confirms it
                    before class.
                  </span>
                </label>

                <button
                  type="submit"
                  className="eyebrow w-full rounded-full bg-gold px-8 py-4.5 text-soot transition-colors hover:bg-gold-soft"
                >
                  Send Request
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>

      {showWaiver && <WaiverModal onClose={() => setShowWaiver(false)} />}
    </section>
  )
}
