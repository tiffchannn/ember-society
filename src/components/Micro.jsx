import Reveal from './Reveal'
import microPhoto from '../assets/micro.jpg'

const specs = [
  { value: '71"', label: 'Length' },
  { value: '18.5"', label: 'Width' },
  { value: '53 lb', label: 'Weight' },
]

export default function Micro() {
  return (
    <section id="micro" className="bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Meet the Micro</p>
            <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl">
              Anywhere becomes a studio
            </h2>
            <p className="mt-7 text-base leading-relaxed text-cream/75">
              The Micro isn&apos;t just Lagree&apos;s smallest machine. It&apos;s the machine that
              makes Lagree possible anywhere.
            </p>
            <p className="mt-5 text-base leading-relaxed text-cream/60">
              It is the smallest and most portable machine Lagree makes: light enough to carry
              in, compact enough to line up a full class in a space that was never meant to be a
              studio. It travels in the back of a car and sets up in
              minutes, so the class can meet people where they already are.
            </p>

            <dl className="mt-11 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="eyebrow text-cream/45">{spec.label}</dt>
                  <dd className="display mt-2 text-2xl text-gold sm:text-3xl">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140}>
            {/* bg matches the photo's studio backdrop so the edges disappear */}
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-[#f0f0f0] px-6">
              <img
                src={microPhoto}
                alt="The Lagree Micro machine, side view"
                className="w-full"
                loading="lazy"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent), linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
                  maskComposite: 'intersect',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent), linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
                  WebkitMaskComposite: 'source-in',
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
