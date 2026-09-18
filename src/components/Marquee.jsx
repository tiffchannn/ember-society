const words = [
  'Lagree Micro',
  'Private Groups',
  'Pop-Ups',
  'Vendor Events',
  'Community',
  'Strength',
  'Resilience',
]

export default function Marquee() {
  const strip = [...words, ...words]
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-cream py-5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {strip.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10">
            <span className="eyebrow text-ink/55">{word}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
