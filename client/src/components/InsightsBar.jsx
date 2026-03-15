import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { insights } from '../data/articles'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const InsightsBar = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-6xl px-6 py-10" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-3xl p-10 md:p-14"
        style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 40%, #8b5cf6 70%, #a78bfa 100%)' }}
      >
        {/* Background glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #818cf8, transparent)', filter: 'blur(60px)' }} />

        <div className="relative grid gap-10 md:grid-cols-4">
          {insights.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.1 }}
              onClick={() => navigate('/contact')}
              className="text-left group"
            >
              <p className="font-display font-bold text-4xl md:text-5xl text-white">{item.metric}</p>
              <p className="mt-2 text-sm text-white/70 group-hover:text-white/90 transition-colors">{item.label}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default InsightsBar
