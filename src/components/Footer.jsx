import Logo from './Logo'
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, SERVICE_AREA } from '../config'

export default function Footer() {
  return (
    <footer className="bg-char pb-10 pt-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 border-b border-cream/10 pb-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo tone="cream" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
              A movement &amp; wellness experience. Community, fitness, pop-ups and private
              events. {SERVICE_AREA}.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-8 sm:gap-20">
            <div>
              <p className="eyebrow text-cream/40">Explore</p>
              <ul className="mt-5 space-y-3 text-sm text-cream/70">
                <li>
                  <a href="#experience" className="hover:text-gold">
                    The Experience
                  </a>
                </li>
                <li>
                  <a href="#micro" className="hover:text-gold">
                    The Micro
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-gold">
                    Events &amp; Pricing
                  </a>
                </li>
                <li>
                  <a href="#prep" className="hover:text-gold">
                    Before You Come
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <p className="eyebrow text-cream/40">Connect</p>
              <ul className="mt-5 space-y-3 text-sm text-cream/70 [overflow-wrap:anywhere]">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">
                    {/* prefer wrapping at the @ rather than mid-word */}
                    {CONTACT_EMAIL.split('@')[0]}
                    <wbr />@{CONTACT_EMAIL.split('@')[1]}
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li>
                  <a href="#book" className="hover:text-gold">
                    Book an event
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Ember Society. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">Find Your Spark</p>
        </div>
      </div>
    </footer>
  )
}
