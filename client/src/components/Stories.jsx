import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BookOpen } from 'lucide-react'
import usePosts from '../hooks/usePosts'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const SkeletonCard = () => (
  <div className="glass rounded-2xl p-6 space-y-4 animate-pulse">
    <div className="h-3 rounded-full w-1/3" style={{ background: 'var(--surface2)' }} />
    <div className="h-4 rounded-full w-3/4" style={{ background: 'var(--surface2)' }} />
    <div className="space-y-2">
      <div className="h-3 rounded-full" style={{ background: 'var(--surface2)' }} />
      <div className="h-3 rounded-full w-5/6" style={{ background: 'var(--surface2)' }} />
    </div>
  </div>
)

const Stories = () => {
  const { posts, status } = usePosts()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  if (status === 'error') return null

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 bg-page2 rounded-3xl" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-12"
      >
        <div className="space-y-3">
          <span className="section-label">Live narratives</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-main">
            Recent from the studio
          </h2>
        </div>
        <button
          onClick={() => navigate('/journal')}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-primary transition-colors duration-200"
        >
          Explore more <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {status === 'loading' && [0,1,2].map((i) => <SkeletonCard key={i} />)}

        {(posts || []).map((post, i) => (
          <motion.article
            key={post._id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 card-lift flex flex-col gap-4"
          >
            <div className="w-9 h-9 rounded-xl glass2 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-display font-bold text-lg text-main leading-snug line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed line-clamp-3">
                {post.content}
              </p>
            </div>
            <button
              onClick={() => window.open(`/posts/${post._id}`, '_blank')}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:gap-2.5 transition-all duration-200 self-start"
            >
              View story <ArrowRight className="h-3 w-3" />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Stories
