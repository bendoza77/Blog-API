import { insights } from '../data/articles'
import { motion } from 'framer-motion'

const InsightsBar = () => (
  <section className="mx-auto max-w-6xl px-6 py-12">
    <div className="grid gap-6 rounded-3xl border border-white/30 bg-gradient-to-r from-[#7c3aed] via-[#5b21b6] to-[#0ea5e9] px-8 py-10 text-white shadow-[0_35px_120px_-60px_rgba(91,33,182,0.8)] md:grid-cols-4">
      {insights.map((item, index) => (
        <motion.button
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.6 }}
          onClick={() => (window.location.href = '/contact')}
          className="text-left"
        >
          <p className="text-4xl font-semibold">{item.metric}</p>
          <p className="mt-2 text-sm text-white/80">{item.label}</p>
        </motion.button>
      ))}
    </div>
  </section>
)

export default InsightsBar
