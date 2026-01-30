import { motion } from 'framer-motion'
import useNavigationActions from '../hooks/useNavigationActions'

const heroText = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Hero = () => {
  const { goToJournal, goToServices } = useNavigationActions()
  return (
  <section className="mx-auto max-w-6xl px-6 pt-16 pb-8">
    <motion.p
      variants={heroText}
      initial="hidden"
      animate="show"
      className="text-xs uppercase tracking-[0.6em] text-[#7c3aed]"
    >
      Creative Systems Studio
    </motion.p>
    <motion.h1
      variants={heroText}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.1 }}
      className="mt-6 text-4xl font-bold leading-tight text-[#161134] md:text-6xl"
    >
      We design immersive product narratives with clarity, motion, and intent.
    </motion.h1>
    <motion.p
      variants={heroText}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.2 }}
      className="mt-6 max-w-2xl text-lg text-[#5f6c80]"
    >
      A hybrid design studio shaping thoughtful interfaces, motion systems, and content strategies for visionary teams.
    </motion.p>
    <motion.div
      variants={heroText}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.3 }}
      className="mt-10 flex flex-wrap gap-4"
    >
      <button
        onClick={goToJournal}
        className="rounded-full bg-gradient-to-r from-[#7c3aed] via-[#5b21b6] to-[#7c3aed] px-6 py-3 text-sm uppercase tracking-[0.3em] text-white shadow-lg"
      >
        Explore journal
      </button>
      <button
        onClick={goToServices}
        className="rounded-full border border-[#7c3aed]/40 px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#7c3aed]"
      >
        View services
      </button>
    </motion.div>
  </section>
)}

export default Hero
