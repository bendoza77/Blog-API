import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ArrowRight, Clock, MapPin, Calendar } from 'lucide-react'
import useInquiry from '../hooks/useInquiry'
import PageShell from '../components/PageShell'

const ease = [0.22, 1, 0.36, 1]

const meta = [
  { icon: Clock,    label: 'Response time',          value: '48 hrs' },
  { icon: Calendar, label: 'Current availability',   value: 'April 2025' },
  { icon: MapPin,   label: 'Studios',                value: 'Remote / NYC' },
]

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: '', email: '', company: '', focus: 'clarity', message: '' },
  })
  const { submitInquiry, status, message } = useInquiry()

  const onSubmit = async (values) => {
    await submitInquiry(values)
    reset()
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 space-y-4 max-w-2xl"
        >
          <span className="section-label">Collaborate</span>
          <h1 className="font-display font-bold text-main leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Let's design the next chapter
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Tell us about your product, your ritual, and what success looks like.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1fr_360px]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="section-label">Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="input-field"
                    placeholder="Nora Castillo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="section-label">Email</label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="input-field"
                    placeholder="hello@studio.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="section-label">Company</label>
                  <input
                    {...register('company')}
                    className="input-field"
                    placeholder="Studio / team name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="section-label">Focus area</label>
                  <select {...register('focus')} className="input-field" style={{ cursor: 'pointer' }}>
                    <option value="clarity">Clarity</option>
                    <option value="motion">Motion</option>
                    <option value="intent">Intent</option>
                    <option value="strategy">Strategy</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="section-label">Project vision</label>
                <textarea
                  rows={5}
                  {...register('message', { required: true })}
                  className="input-field resize-none"
                  placeholder="Describe your product, timeline, goals, or any inspirations…"
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending…' : 'Share brief'}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {message && (
                  <p className="text-sm text-muted">{message}</p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="space-y-4"
          >
            {meta.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl px-6 py-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl glass2 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="section-label">{label}</p>
                  <p className="text-main font-semibold text-lg mt-0.5">{value}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl px-6 py-6 space-y-3">
              <p className="section-label">What to expect</p>
              <ul className="space-y-2">
                {[
                  'Intro call within 48 hours',
                  'Custom proposal in 5 days',
                  'Kickoff workshop within 2 weeks',
                  'Weekly check-ins throughout',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--primary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  )
}

export default Contact
