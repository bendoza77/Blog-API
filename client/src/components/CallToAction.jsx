import useNavigationActions from '../hooks/useNavigationActions'

const CallToAction = () => {
  const { bookWorkshop, downloadDeck } = useNavigationActions()
  return (
  <section className="mx-auto max-w-4xl px-6 pb-20">
    <div className="rounded-[32px] border border-white/30 bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#0ea5e9] px-8 py-12 text-white shadow-[0_50px_120px_-70px_rgba(91,33,182,0.85)]">
      <div className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-white/50">Now booking Q2 residencies</p>
        <h2 className="text-3xl font-semibold md:text-4xl">
          Let’s craft your next meaningful product ritual
        </h2>
        <p className="text-sm text-white/80">
          Studio, sprint, or advisory partnership—we design the playbook made for your flow.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.4em]">
          <button onClick={bookWorkshop} className="rounded-full bg-white px-6 py-3 text-[#5b21b6]">Book a workshop</button>
          <button onClick={downloadDeck} className="rounded-full border border-white/40 px-6 py-3">Download deck</button>
        </div>
      </div>
    </div>
  </section>
)}

export default CallToAction
