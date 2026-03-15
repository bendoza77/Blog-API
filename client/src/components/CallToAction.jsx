import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const CallToAction = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  const downloadDeck = () => window.open('https://www.figma.com/community', '_blank')

  return (
    <section className="mx-auto max-w-5xl px-6 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
        className="relative overflow-hidden rounded-3xl px-10 py-16 md:px-16 md:py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)', border: '1px solid rgba(129,140,248,0.2)' }}
      >
        {/* Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent)', filter: 'blur(60px)' }} />

        <div className="relative space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="section-label"
          >
            Now booking Q2 residencies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="font-display font-bold text-3xl md:text-5xl text-main leading-tight"
          >
            Let's craft your next<br />
            <span className="gradient-text">meaningful ritual</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="text-muted text-base max-w-md mx-auto"
          >
            Studio, sprint, or advisory partnership — we design the playbook made for your flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <button onClick={() => navigate('/contact')} className="btn-primary">
              Book a workshop <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={downloadDeck} className="btn-ghost">
              <Download className="h-4 w-4" /> Download deck
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CallToAction
