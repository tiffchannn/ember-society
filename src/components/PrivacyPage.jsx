import Logo from './Logo'
import { CONTACT_EMAIL } from '../config'

const sections = [
  {
    title: 'Who we are',
    body: [
      'Ember Society is a movement and wellness business running Lagree pop-ups, private events and brand activations in Greater Los Angeles. This policy explains what personal information we collect through embersociety.la, why we collect it, and what we do with it.',
    ],
  },
  {
    title: 'What we collect',
    body: [
      'When you send an inquiry through our booking form: your name, email address, phone number if you choose to give one, the type of event you are asking about, and whatever you write in your message.',
      'When you buy a ticket: your name, email address, phone number and billing details. Payment card details are entered directly with our payment processor and never reach us.',
      'When you sign our waiver: your name, email address, date of birth, and your signature, along with anything you tell an instructor about injuries or health conditions.',
      'If you join our mailing list: your email address, and your phone number if you opt in to text messages.',
    ],
  },
  {
    title: 'Why we collect it',
    body: [
      'To answer your inquiry and quote your event. To sell you a ticket and get you into the right class. To keep you safe by knowing about injuries or conditions before you train. To contact you if an event changes. To send you news about upcoming events, if you asked us to.',
      'We do not sell your personal information, and we do not share it for anyone else’s advertising.',
    ],
  },
  {
    title: 'Who processes it for us',
    body: [
      'We use a small number of third-party services to run the business, and your information passes through them: Stripe for payments, Formspree for booking inquiries submitted through this site, Google for our email, and a waiver service for signed waivers. Each holds your information under its own privacy policy.',
      'We may also share information where we are required to by law, or where it is necessary to respond to a medical emergency at an event.',
    ],
  },
  {
    title: 'Photography at events',
    body: [
      'We sometimes photograph or film our events for promotional use, which may include images of you. You can ask an instructor not to photograph you before class begins, and you can ask us to remove an image we have already published by emailing us.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'Inquiries are kept while we are in conversation with you and for a reasonable period afterwards. Signed waivers and payment records are kept for as long as we may need them for insurance, tax or legal reasons. Mailing list details are kept until you unsubscribe.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can unsubscribe from our emails at any time using the link in any message, and reply STOP to any text message to stop receiving them.',
      'You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Email us and we will respond. Some records, such as signed waivers, we may need to keep even after a deletion request.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'This site does not use tracking cookies or third-party analytics. Our payment processor and waiver service may set cookies on their own pages as part of providing those services.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Our classes and events are for participants aged 18 and over, and this site is not directed at children. We do not knowingly collect personal information from anyone under 18.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this policy as the business changes. The version published here is the one that applies.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="border-b border-ink/10 bg-cream">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
          <a href="/" aria-label="Ember Society home">
            <Logo tone="ink" compact />
          </a>
          <a href="/" className="eyebrow text-ink/50 transition-colors hover:text-ember">
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="eyebrow text-ember">Ember Society</p>
        <h1 className="display mt-5 text-4xl leading-tight sm:text-5xl">Privacy Policy</h1>

        <p className="mt-10 text-base leading-relaxed text-ink/70">
          We collect as little as we need to run our events, and we treat what you give us with
          care. This page sets out exactly what that means.
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section, i) => (
            <section key={section.title}>
              <h2 className="display flex items-baseline gap-4 text-xl">
                <span className="text-sm text-ember">{String(i + 1).padStart(2, '0')}</span>
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 pl-9">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-sm leading-relaxed text-ink/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-8">
          <p className="text-sm leading-relaxed text-ink/60">
            Questions, or want us to delete your information? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ember hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <p className="mt-6 text-xs text-ink/40">
            Last updated September 2026 · &copy; {new Date().getFullYear()} Ember Society.
          </p>
        </div>
      </main>
    </div>
  )
}
