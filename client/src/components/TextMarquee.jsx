const row1 = ['Research', 'Strategy', 'Design', 'Motion', 'Narrative', 'Systems', 'Interface', 'Clarity']
const row2 = ['Typography', 'Product', 'Identity', 'Interaction', 'Vision', 'Structure', 'Rhythm', 'Intent']

const Dot = () => (
  <span className="text-primary opacity-50 mx-3 md:mx-5 text-xs">✦</span>
)

const Row = ({ words, reverse = false, big = false }) => {
  const doubled = [...words, ...words]
  return (
    <div className="marquee-wrap">
      <div className={reverse ? 'marquee-track-rev' : 'marquee-track'}>
        {doubled.map((w, i) => (
          <span
            key={i}
            className={`flex items-center whitespace-nowrap ${
              big
                ? 'font-display font-bold text-3xl md:text-5xl text-ghost px-3 md:px-5'
                : 'text-xs tracking-[0.3em] uppercase font-semibold text-ghost px-2 md:px-4'
            }`}
          >
            {w}<Dot />
          </span>
        ))}
      </div>
    </div>
  )
}

const TextMarquee = () => (
  <section className="py-8 border-y border-edge overflow-hidden">
    <Row words={row1} big />
    <div className="mt-2">
      <Row words={row2} reverse />
    </div>
  </section>
)

export default TextMarquee
