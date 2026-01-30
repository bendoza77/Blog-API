import { motion } from 'framer-motion'
import usePosts from '../hooks/usePosts'

const Stories = () => {
  const { posts, status } = usePosts()

  if (status === 'error') return null

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.6em] text-[#7c3aed]">Live narratives</p>
          <h2 className="text-3xl font-semibold text-[#161134]">Recent launches from the studio</h2>
        </div>
        <a href="/journal" className="text-xs uppercase tracking-[0.4em] text-[#5f6c80]">
          Explore more →
        </a>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {(posts || []).map((post, index) => (
          <motion.article
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border border-white/50 bg-white/80 p-5 shadow-[0_30px_90px_-60px_rgba(91,33,182,0.35)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#7c3aed]">{post.title}</p>
            <p className="mt-3 text-sm text-[#5f6c80] line-clamp-3">{post.content}</p>
            <button
              onClick={() => window.open(`/posts/${post._id}`, '_blank')}
              className="mt-6 rounded-full border border-[#7c3aed]/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#7c3aed]"
            >
              View story
            </button>
          </motion.article>
        ))}
        {status === 'loading' && (
          <p className="text-sm text-[#5f6c80]">Loading stories…</p>
        )}
      </div>
    </section>
  )
}

export default Stories
