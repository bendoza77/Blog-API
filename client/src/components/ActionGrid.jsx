import { useNavigate } from 'react-router-dom'
import { actionCards } from '../data/actions'
import { motion } from 'framer-motion'

const ActionGrid = () => {
  const navigate = useNavigate()
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.6em] text-[#7c3aed]">We design with</p>
        <h2 className="text-3xl font-semibold text-[#161134]">Clarity, motion, and intent</h2>
        <p className="text-sm text-[#5f6c80]">
          Every engagement unlocks these pillars through collaborative rituals, immersive storytelling, and measurable outcomes.
        </p>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {actionCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-2xl shadow-[0_30px_90px_-60px_rgba(91,33,182,0.4)]"
          >
            <h3 className="text-xl font-semibold text-[#161134]">{card.title}</h3>
            <p className="mt-3 text-sm text-[#5f6c80]">{card.description}</p>
            <button
              onClick={() => navigate(card.route)}
              className="mt-6 rounded-full border border-[#7c3aed]/40 px-5 py-2 text-xs uppercase tracking-[0.4em] text-[#7c3aed]"
            >
              {card.cta}
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ActionGrid
