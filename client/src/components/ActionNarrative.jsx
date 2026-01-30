import { motion } from 'framer-motion'
import useNavigationActions from '../hooks/useNavigationActions'

const items = [
  {
    title: 'Clarity',
    body: 'We map journeys, align stakeholders, and define rituals so every product decision feels intentional.',
    action: 'Start clarity sprint',
    handler: 'startProject',
  },
  {
    title: 'Motion',
    body: 'We choreograph motion systems that add meaning to interactions and make interfaces feel alive.',
    action: 'See motion work',
    handler: 'viewMotion',
  },
  {
    title: 'Intent',
    body: 'We build measurement loops that connect story, design, and business outcomes.',
    action: 'Read playbook',
    handler: 'goToJournal',
  },
]

const ActionNarrative = () => {
  const actions = useNavigationActions()
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-[40px] border border-white/40 bg-white/80 p-10 shadow-[0_40px_120px_-80px_rgba(91,33,182,0.35)]">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12">
          <div className="md:w-1/3 space-y-4">
            <p className="text-xs uppercase tracking-[0.6em] text-[#7c3aed]">Our pillars</p>
            <h2 className="text-3xl font-semibold text-[#161134]">
              We design immersive product narratives with clarity, motion, and intent.
            </h2>
            <p className="text-sm text-[#5f6c80]">
              Choose a path and we’ll guide you from kickoff workshop to measurable launch.
            </p>
          </div>
          <div className="flex-1 space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-2xl border border-white/40 bg-white/70 p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#161134]">{item.title}</h3>
                    <p className="text-sm text-[#5f6c80]">{item.body}</p>
                  </div>
                  <button
                    onClick={actions[item.handler]}
                    className="self-start rounded-full border border-[#7c3aed]/40 px-5 py-2 text-xs uppercase tracking-[0.4em] text-[#7c3aed]"
                  >
                    {item.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionNarrative
