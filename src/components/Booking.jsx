import { useState } from 'react'
import EmberField from './EmberField'
import Reveal from './Reveal'
import { CONTACT_EMAIL, FORM_ENDPOINT } from '../config'

const eventTypes = [
  'Private event',
  'Vendor or brand partnership',
  'Corporate or team offsite',
  'Not sure yet',
]

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  eventType: eventTypes[0],
  details: '',
}

export default function Booking() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | drafted | error

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const openEmailDraft = () => {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      `Event type: ${form.eventType}`,
      '',
      'Details:',
      form.details || '—',
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Event inquiry — ${form.eventType}`,
    )}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // No form service configured yet: fall back to a prefilled email draft.
    if (!FORM_ENDPOINT) {
      openEmailDraft()
      setStatus('drafted')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          eventType: form.eventType,
          details: form.details,
          _subject: `Event inquiry — ${form.eventType}`,
        }),
      })
      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`)
      setStatus('sent')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
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
              back with availability and a quote.
            </p>
            <p className="mt-8 text-sm text-cream/50">
              Prefer email?{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </Reveal>

          <Reveal delay={120}>
            {status === 'sent' || status === 'drafted' ? (
              <div className="rounded-2xl border border-gold/40 bg-cream/5 p-10 text-center">
                <h3 className="display text-2xl text-gold">
                  {status === 'sent' ? 'Request sent' : 'Your email draft is open'}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-cream/70">
                  {status === 'sent' ? (
                    <>
                      Thanks — we&apos;ll be in touch soon. Keep an eye on your inbox, and
                      check spam if you don&apos;t hear from us.
                    </>
                  ) : (
                    <>
                      Hit send in your mail app and we&apos;ll get back to you soon. If
                      nothing opened, email us directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </>
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="eyebrow mt-8 rounded-full border border-cream/25 px-7 py-3 text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  {status === 'sent' ? 'Send another' : 'Edit the request'}
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
                      className={`${field} mt-2.5 appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-12`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23f6f6e9' stroke-opacity='.6' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
                      }}
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-char">
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="eyebrow text-cream/50">Tell us more</span>
                  <textarea
                    rows={4}
                    value={form.details}
                    onChange={update('details')}
                    className={`${field} mt-2.5 resize-none`}
                    placeholder="When and where you're thinking, roughly how many people, the occasion — whatever you know so far."
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="eyebrow w-full rounded-full bg-gold px-8 py-4.5 text-soot transition-colors hover:bg-gold-soft disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Request'}
                </button>

                {status === 'error' && (
                  <p className="rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-cream/80">
                    That didn&apos;t go through. Try again, or email us directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
