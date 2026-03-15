import { motion } from 'framer-motion'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import CallToAction from '../components/CallToAction'
import PageShell from '../components/PageShell'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const process = [
  { num: '01', title: 'Discovery', desc: 'Deep dive into your product, team dynamics, and market position.' },
  { num: '02', title: 'Strategy',  desc: 'Craft a narrative framework that aligns design with business intent.' },
  { num: '03', title: 'Design',    desc: 'Build the interface, motion, and identity systems hand-in-hand.' },
  { num: '04', title: 'Launch',    desc: 'Ship with confidence, measure impact, iterate with clarity.' },
]

const perks = [
  'Dedicated studio team', 'Weekly async reviews', 'Figma source files',
  'Motion specs & tokens', 'Post-launch support', 'NDA on request',
]

const ServicesPage = () => {
  const navigate = useNavigate()

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-36 pb-20 overflow-hidden">
        <div className="orb w-96 h-96 -top-24 -right-24 opacity-20"
          style={{ background: 'radial-gradient(circle, #6366f1, #818cf8)' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl space-y-6"
        >
          <span className="section-label">Capabilities</span>
          <h1 className="font-display font-bold leading-tight text-main"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Full-stack design partner
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-xl">
            We embed with your team to build design languages, motion systems, and narrative frameworks that scale with your product.
          </p>
          <button onClick={() => navigate('/contact')} className="btn-primary">
            Start a project <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </section>

      <div className="hr" />

      {/* Services */}
      <Services />

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 space-y-3">
          <span className="section-label">How we work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-main">Our process</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {process.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 space-y-3"
            >
              <span style={{ fontSize: '0.65rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--primary)' }}>
                {step.num}
              </span>
              <h3 className="font-display font-bold text-xl text-main">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="glass rounded-3xl p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-5">
              <span className="section-label">What's included</span>
              <h2 className="font-display font-bold text-3xl text-main">Every engagement includes</h2>
              <p className="text-muted text-sm leading-relaxed">
                We believe great design partnerships start with transparency and end with measurable results.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-main text-sm">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <CallToAction />
    </PageShell>
  )
}

export default ServicesPage
