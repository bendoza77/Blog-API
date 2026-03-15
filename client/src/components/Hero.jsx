import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
})

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background orbs */}
      <div
        className="orb w-[600px] h-[600px] top-[-10%] right-[-15%] opacity-25"
        style={{ background: 'radial-gradient(circle, #6366f1, #818cf8)' }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-5%] left-[-8%] opacity-15"
        style={{ background: 'radial-gradient(circle, #fbbf24, #f59e0b)', animationDelay: '4s' }}
      />
      <div
        className="orb w-[300px] h-[300px] top-[40%] left-[35%] opacity-10"
        style={{ background: 'radial-gradient(circle, #a78bfa, #c4b5fd)', animationDelay: '2s' }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
        {/* Label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-8">
          <span className="section-label">Creative Systems Studio</span>
          <span className="w-8 h-px" style={{ background: 'var(--primary)' }} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
          className="font-display font-bold leading-[1.05] text-main"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
        >
          We craft
          <br />
          <span className="gradient-text">immersive</span>
          <br />
          digital experiences.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.24)}
          className="mt-8 text-muted text-lg max-w-xl leading-relaxed"
        >
          A hybrid design studio shaping thoughtful interfaces, motion systems,
          and content strategies for visionary teams worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.36)} className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => navigate('/journal')}
            className="btn-primary"
          >
            Explore Journal <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => navigate('/services')}
            className="btn-ghost"
          >
            View Services
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.48)}
          className="mt-16 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-edge"
        >
          {[
            { val: '14+', label: 'Studio clients' },
            { val: '62%', label: 'Avg. uplift' },
            { val: '230k', label: 'Monthly readers' },
            { val: '38',   label: 'Talks delivered' },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="font-display font-bold text-3xl text-main">{val}</p>
              <p className="text-muted text-sm mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="number-tag text-ghost">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--primary), transparent)' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
