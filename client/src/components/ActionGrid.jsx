import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Zap, Layers, Target } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const cards = [
  {
    icon: Zap,
    num: '01',
    title: 'Clarity Workshops',
    description: 'Immersive sprint sessions that align product vision, team rituals, and storytelling frameworks in three focused days.',
    cta: 'Book session',
    route: '/contact',
    accent: '#818cf8',
  },
  {
    icon: Layers,
    num: '02',
    title: 'Motion Systems',
    description: 'Signature transitions and micro-interactions choreographed into a living design system that scales across your product.',
    cta: 'View work',
    route: '/services',
    accent: '#fbbf24',
  },
  {
    icon: Target,
    num: '03',
    title: 'Intent Labs',
    description: 'Analytics-driven narrative loops that connect design decisions to measurable business outcomes and user behaviors.',
    cta: 'Read more',
    route: '/journal',
    accent: '#34d399',
  },
]

const ActionGrid = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-12 space-y-3"
      >
        <span className="section-label">We design with</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-main">
          Clarity, motion, and intent
        </h2>
        <p className="text-muted text-sm max-w-xl leading-relaxed">
          Every engagement unlocks these pillars through collaborative rituals, immersive storytelling, and measurable outcomes.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card, i) => {
          const Icon = card.icon
          return (
            <motion.article
              key={card.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.12 }}
              className="glass rounded-2xl p-7 card-lift flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${card.accent}18`, border: `1px solid ${card.accent}30` }}
                >
                  <Icon className="h-5 w-5" style={{ color: card.accent }} />
                </div>
                <span style={{ fontSize: '0.65rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--txt3)' }}>
                  {card.num}
                </span>
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="font-display font-bold text-xl text-main">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.description}</p>
              </div>

              <button
                onClick={() => navigate(card.route)}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all duration-200 self-start"
              >
                {card.cta} <ArrowRight className="h-3 w-3" />
              </button>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default ActionGrid
