import PageShell from '../components/PageShell'
import { useForm } from 'react-hook-form'
import useInquiry from '../hooks/useInquiry'

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      focus: 'clarity',
      message: '',
    },
  })
  const { submitInquiry, status, message } = useInquiry()

  const onSubmit = async (values) => {
    await submitInquiry(values)
    reset()
  }

  return (
  <PageShell className="mx-auto max-w-5xl px-6 py-16">
    <div className="rounded-[32px] border border-white/40 bg-white/85 p-10 shadow-[0_40px_120px_-80px_rgba(91,33,182,0.45)]">
      <div className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-[#7c3aed]">Collaborate</p>
        <h1 className="text-4xl font-semibold text-[#161134]">
          Let’s design the next chapter
        </h1>
        <p className="text-base text-[#5f6c80]">
          Tell us about your product, your ritual, and what success looks like.
        </p>
      </div>

      <form className="mt-10 grid gap-6 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.4em] text-[#7c3aed]/80">Name</label>
          <input
            {...register('name', { required: true })}
            className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3"
            placeholder="Nora Castillo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.4em] text-[#7c3aed]/80">Email</label>
          <input
            {...register('email', { required: true })}
            className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3"
            placeholder="hello@studio.com"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.4em] text-[#7c3aed]/80">Company</label>
          <input
            {...register('company')}
            className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3"
            placeholder="Studio / team"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.4em] text-[#7c3aed]/80">Focus</label>
          <select
            {...register('focus')}
            className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3"
          >
            <option value="clarity">Clarity</option>
            <option value="motion">Motion</option>
            <option value="intent">Intent</option>
            <option value="strategy">Strategy</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs uppercase tracking-[0.4em] text-[#7c3aed]/80">Project vision</label>
          <textarea
            rows="4"
            {...register('message', { required: true })}
            className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3"
            placeholder="Product, timeline, rituals, or any inspirations."
          ></textarea>
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-gradient-to-r from-[#7c3aed] via-[#5b21b6] to-[#0ea5e9] px-7 py-3 text-xs uppercase tracking-[0.4em] text-white shadow-lg disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending…' : 'Share brief'}
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-6 text-center text-sm text-[#5f6c80]">{message}</p>
      )}

      <div className="mt-12 grid gap-4 text-sm uppercase tracking-[0.3em] text-[#5f6c80] md:grid-cols-3">
        <div className="rounded-2xl border border-white/40 px-4 py-4">
          <p className="text-xs text-[#7c3aed]/70">Response time</p>
          <p className="text-lg text-[#161134]">48 hrs</p>
        </div>
        <div className="rounded-2xl border border-white/40 px-4 py-4">
          <p className="text-xs text-[#7c3aed]/70">Current availability</p>
          <p className="text-lg text-[#161134]">April 2025</p>
        </div>
        <div className="rounded-2xl border border-white/40 px-4 py-4">
          <p className="text-xs text-[#7c3aed]/70">Studios</p>
          <p className="text-lg text-[#161134]">Remote / NYC</p>
        </div>
      </div>
    </div>
  </PageShell>
)}

export default Contact
