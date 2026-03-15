import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const pillars = [
  {
    num: '01',
    title: 'Clarity',
    body: 'We map journeys, align stakeholders, and define rituals so every product decision feels intentional and grounded.',
    cta: 'Start clarity sprint',
    route: '/contact',
  },
  {
    num: '02',
    title: 'Motion',
    body: 'We choreograph motion systems that add meaning to interactions and make interfaces feel alive and responsive.',
    cta: 'See motion work',
    route: '/services',
  },
  {
    num: '03',
    title: 'Intent',
    body: 'We build measurement loops that connect story, design, and business outcomes into a single coherent system.',
    cta: 'Read playbook',
    route: '/journal',
  },
]

const ease = [0.22, 1, 0.36, 1]

const ActionNarrative = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
        {/* Left: headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="space-y-5 md:sticky md:top-32 md:self-start"
        >
          <span className="section-label">Our pillars</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-main leading-tight">
            We design with clarity, motion, and intent.
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Choose a path and we'll guide you from kickoff workshop to measurable launch.
          </p>
          <button onClick={() => navigate('/contact')} className="btn-primary text-xs py-2.5 px-5">
            Start a project <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        {/* Right: pillars */}
        <div className="space-y-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.12 }}
              className="glass rounded-2xl p-7 card-lift"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <span style={{ fontSize: '0.65rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--txt3)' }}>
                    {p.num}
                  </span>
                  <h3 className="font-display font-bold text-xl text-main">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
              <button
                onClick={() => navigate(p.route)}
                className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all duration-200"
              >
                {p.cta} <ArrowRight className="h-3 w-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActionNarrative
