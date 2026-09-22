import { useEffect, useState } from 'react'
import Logo from './Logo'

const links = [
  { href: '#story', label: 'Our Story' },
  { href: '#experience', label: 'The Experience' },
  { href: '#micro', label: 'The Micro' },
  { href: '#instructors', label: 'Instructors' },
  { href: '#pricing', label: 'Events' },
  { href: '#prep', label: 'Before You Come' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-cream/95 py-3 shadow-[0_1px_0_rgba(64,50,61,0.12)] backdrop-blur' : 'py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-10 px-6">
        <a href="#top" onClick={() => setOpen(false)} aria-label="Ember Society home">
          <Logo tone={solid ? 'ink' : 'cream'} compact={solid} />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`eyebrow whitespace-nowrap transition-colors hover:text-gold ${
                solid ? 'text-ink/70' : 'text-cream/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="eyebrow whitespace-nowrap rounded-full bg-gold px-6 py-3 text-soot transition-colors hover:bg-gold-soft"
          >
            Book an Event
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            solid ? 'text-ink' : 'text-cream'
          }`}
        >
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {open && (
        <div className="mt-4 border-t border-ink/10 bg-cream px-6 pb-8 pt-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-ink/75"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="eyebrow mt-2 rounded-full bg-gold px-6 py-3.5 text-center text-soot"
            >
              Book an Event
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
