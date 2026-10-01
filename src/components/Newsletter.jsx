import { useState } from 'react'
import Reveal from './Reveal'
import { KIT_FORM_ID } from '../config'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  // Nothing to submit to yet — don't ship a form that goes nowhere.
  if (!KIT_FORM_ID) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email_address: email }),
      })
      if (!response.ok) throw new Error(`Kit returned ${response.status}`)
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="border-t border-cream/10 bg-char py-16 text-cream md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow text-gold">Stay in the loop</p>
            <h2 className="display mt-4 text-2xl leading-snug sm:text-3xl">
              Know when the next one drops
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">
              Upcoming pop-ups, where we&apos;ll be, and when tickets go live. No more than that.
            </p>
          </div>

          {status === 'done' ? (
            <p className="rounded-lg border border-gold/40 bg-cream/5 p-6 text-sm leading-relaxed text-cream/80">
              You&apos;re on the list. Check your inbox to confirm your email — we&apos;ll see you
              at the next one.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex-1">
                  <span className="sr-only">Email address</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-full border border-cream/20 bg-cream/5 px-6 py-3.5 text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-gold focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="eyebrow rounded-full bg-gold px-8 py-3.5 text-soot transition-colors hover:bg-gold-soft disabled:opacity-60"
                >
                  {status === 'sending' ? 'Adding…' : 'Sign Up'}
                </button>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-cream/40">
                Event news only, and you can unsubscribe any time. See our{' '}
                <a href="/privacy/" className="text-cream/60 underline underline-offset-4">
                  privacy policy
                </a>
                .
              </p>

              {status === 'error' && (
                <p className="mt-4 text-sm text-gold">
                  That didn&apos;t go through. Please try again in a moment.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
