import Logo from './Logo'
import { CONTACT_EMAIL } from '../config'

// Version 1.0, 30 September 2026 — as finalised by counsel. Edit only with their sign-off,
// and bump the version line below when the text changes.
const sections = [
  {
    title: 'Assumption of Risk',
    body: [
      'Lagree is a high-intensity form of exercise performed on spring-loaded equipment. Participation carries inherent risks, including muscle strain, sprains, falls, and in rare cases, serious injury. Some risks cannot be removed no matter how carefully a class is run. By taking part in an Ember Society class or event, you accept those risks voluntarily and confirm that you are choosing to participate.',
      'These risks include, without limitation, those arising from the ordinary negligence of Ember Society, its instructors, or others involved in the operation of the class or event.',
    ],
  },
  {
    title: 'Health and Medical Acknowledgement',
    body: [
      'You confirm that you are in good enough physical health to take part, and that you have considered any condition, injury, surgery, or pregnancy that may affect your participation. If you are unsure, speak with a medical professional before class. Tell your instructor about anything relevant before class begins so movements can be adjusted for you. Stop immediately and tell an instructor if you feel pain, dizziness, faintness, or shortness of breath. Ember Society does not provide medical advice, and our instructors are not acting as medical professionals.',
      'You confirm that you are not under the influence of alcohol, drugs, or any substance that may impair your ability to safely participate, and that you have not withheld any information regarding your physical condition that could affect your participation.',
    ],
  },
  {
    title: 'Following Instructions and Using the Equipment',
    body: [
      'Every class begins with a walkthrough of the machine. You agree to follow your instructor’s directions, to use the equipment only as demonstrated, and to ask if you are unsure how something works. Grip socks are required. You are responsible for using the machine within your own limits and for choosing to modify or stop at any point.',
      'You accept full responsibility for any injury or damage resulting from use of equipment in a manner contrary to the instructor’s directions or demonstrated use.',
    ],
  },
  {
    title: 'Venues and Locations',
    body: [
      'Our classes take place at locations we do not own or control, including private homes, offices, rooftops, storefronts, markets, and outdoor spaces. Surfaces may be uneven, weather may change, and conditions vary from event to event. You agree to follow any rules of the venue we are hosted by, and to take reasonable care for your own safety in the space around you. We may adjust, pause, relocate, or cancel a class where conditions make it unsafe to continue.',
      'You acknowledge that Ember Society does not control these locations and is not responsible for conditions arising from third parties or environmental factors beyond its reasonable control.',
    ],
  },
  {
    title: 'Emergency Medical Treatment',
    body: [
      'If you are injured or become unwell at an event, you consent to us seeking emergency medical care on your behalf, and to receiving treatment from emergency responders. You are responsible for the cost of any treatment or transport.',
      'You release Ember Society from any liability arising out of or related to such emergency care or the decision to seek it.',
    ],
  },
  {
    title: 'Photography and Media',
    body: [
      'By attending, you grant Ember Society the irrevocable right to use your name, image, likeness, voice, and appearance in photographs, video, or other media for promotional, marketing, and commercial purposes, without compensation.',
      'If you prefer not to be included, you must notify us prior to the start of the event, including at check-in. We will honor all opt-out requests and take reasonable steps to avoid capturing or using your image.',
    ],
  },
  {
    title: 'Conduct',
    body: [
      'We ask everyone to treat instructors, guests, vendors, venue staff, and equipment with respect. We may ask anyone behaving unsafely or disruptively to leave an event, without a refund.',
      'We may refuse or limit participation for anyone who does not meet the requirements in these terms or whom an instructor reasonably believes cannot participate safely.',
    ],
  },
  {
    title: 'Age Requirement',
    body: [
      'Ember Society classes and events are for participants aged 18 and over. By signing, you confirm that you are at least 18 years old. We may ask for identification.',
    ],
  },
  {
    title: 'Release of Liability',
    body: [
      'To the fullest extent permitted by law, you release and discharge Ember Society, its founders, instructors, contractors, partners, vendors, and venue hosts (together, the “Released Parties”) from any and all claims, demands, liabilities, damages, or causes of action arising out of or related to your participation in a class or event, including those arising from the active or passive negligence of Ember Society or others. You further agree not to sue any Released Party for any claim released under this clause.',
      'This release does not apply to gross negligence, recklessness, or willful misconduct, and nothing here limits any right that cannot be waived under California law.',
    ],
  },
  {
    title: 'Booking, Cancellations and Refunds',
    body: [
      'Tickets to our events are non-refundable and non-transferable, except where required by applicable law. They cannot be cancelled, rescheduled, or moved to a different date, so please be sure before you book.',
      'If we have to cancel an event, we will either move you to a rescheduled date or refund your ticket. Private bookings are quoted individually, and any deposit or cancellation terms are agreed with you as part of that quote.',
    ],
  },
  {
    title: 'Changes to these Terms',
    body: [
      'We may update or modify these terms from time to time. The version in effect at the time of participation will apply. Each version will be dated, and participants will be required to acknowledge and sign the then-current version.',
    ],
  },
  {
    title: 'Indemnification',
    body: [
      'You agree to defend, indemnify, and hold harmless the Released Parties from and against any third-party claims, demands, damages, liabilities, costs, or expenses (including reasonable attorneys’ fees) arising out of or related to: your breach of these terms, or your acts or omissions, including any negligent or wrongful conduct, at any event.',
    ],
  },
  {
    title: 'Governing Law and Venue',
    body: [
      'These terms are governed by the laws of the State of California, without regard to conflict-of-law principles. Any dispute arising out of or related to these terms or your participation in an event shall be brought exclusively in the state or federal courts located in Los Angeles County, California, and you consent to the personal jurisdiction of such courts.',
    ],
  },
  {
    title: 'Severability',
    body: [
      'If any provision of these terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect.',
    ],
  },
  {
    title: 'Participant Acknowledgment and Agreement',
    body: [
      'By signing, you confirm that: you have read and understood these Terms & Liability Waiver in full; you understand that you are giving up certain legal rights, including the right to sue; you voluntarily agree to be bound by these terms; and you are at least 18 years of age.',
      'You acknowledge that this agreement is intended to be as broad and inclusive as permitted under California law.',
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
                    className="text-sm leading-relaxed text-ink/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 space-y-4 border-t border-ink/10 pt-10">
          <p className="text-sm italic leading-relaxed text-ink/70">
            I have read and fully understand this liability waiver. I understand that I am giving
            up legal rights by signing it, and I sign it freely and voluntarily.
          </p>
          <p className="text-sm leading-relaxed text-ink/60">
            Participants sign this agreement, along with an emergency contact name and phone
            number, before taking part.
          </p>
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
            Version 1.0 — September 30, 2026 · &copy; {new Date().getFullYear()} Ember Society.
          </p>
        </div>
      </main>
    </div>
  )
}
