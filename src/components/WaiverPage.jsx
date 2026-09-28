import Logo from './Logo'
import { CONTACT_EMAIL } from '../config'

const sections = [
  {
    title: 'Assumption of risk',
    body: [
      'Lagree is a high-intensity form of exercise performed on spring-loaded equipment. Participation carries inherent risks, including muscle strain, sprains, falls, and in rare cases serious injury. Some risks cannot be removed no matter how carefully a class is run.',
      'By taking part in an Ember Society class or event, you accept those risks voluntarily and confirm that you are choosing to participate.',
    ],
  },
  {
    title: 'Health and medical acknowledgement',
    body: [
      'You confirm that you are in good enough physical health to take part, and that you have considered any condition, injury, surgery, or pregnancy that may affect your participation. If you are unsure, speak with a medical professional before class.',
      'Tell your instructor about anything relevant before class begins so movements can be adjusted for you. Stop immediately and tell an instructor if you feel pain, dizziness, faintness, or shortness of breath.',
      'Ember Society does not provide medical advice, and our instructors are not acting as medical professionals.',
    ],
  },
  {
    title: 'Following instruction and using the equipment',
    body: [
      'Every class begins with a walkthrough of the machine. You agree to follow your instructor’s directions, to use the equipment only as demonstrated, and to ask if you are unsure how something works.',
      'Grip socks are required. You are responsible for using the machine within your own limits and for choosing to modify or stop at any point.',
    ],
  },
  {
    title: 'Venues and locations',
    body: [
      'Our classes take place at locations we do not own or control, including private homes, offices, rooftops, storefronts, markets, and outdoor spaces. Surfaces may be uneven, weather may change, and conditions vary from event to event.',
      'You agree to follow any rules of the venue we are hosted by, and to take reasonable care for your own safety in the space around you. We may adjust, pause, relocate, or cancel a class where conditions make it unsafe to continue.',
    ],
  },
  {
    title: 'Emergency medical treatment',
    body: [
      'If you are injured or become unwell at an event, you consent to us seeking emergency medical care on your behalf, and to receiving treatment from emergency responders. You are responsible for the cost of any treatment or transport.',
    ],
  },
  {
    title: 'Photography and media',
    body: [
      'Photography and video are sometimes captured at our events for promotional use. By attending, you agree that we may use images in which you appear.',
      'If you would prefer not to be photographed, tell an instructor before class begins and we will accommodate you.',
    ],
  },
  {
    title: 'Conduct',
    body: [
      'We ask everyone to treat instructors, guests, vendors, venue staff, and equipment with respect. We may ask anyone behaving unsafely or disruptively to leave an event, without a refund.',
    ],
  },
  {
    title: 'Participants under 18',
    body: [
      'PLACEHOLDER — policy not yet decided. Either state a minimum age, or require a parent or guardian to sign on behalf of a minor and be present at the event.',
    ],
    flagged: true,
  },
  {
    title: 'Release of liability',
    body: [
      'To the fullest extent permitted by law, you release Ember Society, its founders, instructors, contractors, partners, vendors, and venue hosts from claims, demands, and causes of action arising out of your participation in a class or event, including those arising from ordinary negligence.',
      'This release does not apply to gross negligence, recklessness, or willful misconduct, and nothing here limits any right that cannot be waived under California law.',
    ],
  },
  {
    title: 'Booking, cancellations and refunds',
    body: [
      'PLACEHOLDER — terms not yet decided. Needs to cover: whether tickets are refundable, how far ahead a guest can cancel, whether spots can be transferred to someone else, what happens if we cancel or reschedule an event, and deposit terms for private bookings.',
    ],
    flagged: true,
  },
  {
    title: 'How long this agreement lasts',
    body: [
      'This agreement applies to the event you are signing for and to any Ember Society class or event you attend afterwards, so you do not need to sign again each time. It stays in effect until you withdraw it in writing.',
    ],
  },
  {
    title: 'Changes to these terms',
    body: [
      'We may update these terms as our events change. The version published here at the time of your event is the one that applies.',
    ],
  },
]

export default function WaiverPage() {
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
        <h1 className="display mt-5 text-4xl leading-tight sm:text-5xl">
          Terms &amp; Liability Waiver
        </h1>

        <div className="mt-8 rounded-2xl border border-ember/40 bg-ember/10 p-6">
          <p className="eyebrow text-ember">Draft — not yet in effect</p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            This text is a working draft awaiting review by a lawyer. It is not a binding agreement
            and should not be relied on until that review is complete.
          </p>
        </div>

        <p className="mt-10 text-base leading-relaxed text-ink/70">
          These terms apply to everyone who takes part in an Ember Society class or event, whether
          you bought a ticket yourself or were booked in as part of a private group. Please read
          them before you attend.
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
                    className={`text-sm leading-relaxed ${
                      section.flagged
                        ? 'rounded-lg border border-ember/30 bg-ember/5 p-4 text-ember'
                        : 'text-ink/70'
                    }`}
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
            Questions about any of this? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ember hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <p className="mt-6 text-xs text-ink/40">
            &copy; {new Date().getFullYear()} Ember Society.
          </p>
        </div>
      </main>
    </div>
  )
}
