const words = ['Research', 'Strategy', 'Design', 'Motion', 'Narrative', 'Systems']

const TextMarquee = () => (
  <div className="overflow-hidden border-y border-white/40 bg-white/70 py-4">
    <div className="flex animate-marquee gap-10 text-sm uppercase tracking-[0.5em] text-[#7c3aed]">
      {[...words, ...words].map((word, index) => (
        <span key={`${word}-${index}`}>{word}</span>
      ))}
    </div>
  </div>
)

export default TextMarquee
