import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const services = [
  {
    num: '01',
    title: 'Product Narrative',
    pill: 'Strategy',
    description: 'Comprehensive brand, product, and story systems that keep teams aligned across every launch and sprint cycle.',
    color: '#818cf8',
  },
  {
    num: '02',
    title: 'Interface Design',
    pill: 'Design Ops',
    description: 'Responsive, component-driven design languages built for performance, accessibility, and developer handoff.',
    color: '#34d399',
  },
  {
    num: '03',
    title: 'Motion Systems',
    pill: 'Motion',
    description: 'Signature transitions, micro-interactions, and narrative motion choreographed to feel effortless and meaningful.',
    color: '#fbbf24',
  },
]

const Services = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section id="motion" className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.num}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: i * 0.12 }}
            className="glass rounded-2xl px-7 py-8 card-lift flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <span
                className="tag"
                style={{ color: s.color, borderColor: `${s.color}30`, background: `${s.color}10` }}
              >
                {s.pill}
              </span>
              <span style={{ fontSize: '0.65rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--txt3)' }}>
                {s.num}
              </span>
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="font-display font-bold text-2xl text-main">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.description}</p>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all duration-200 self-start"
            >
              Partner up <ArrowRight className="h-3 w-3" />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Services
