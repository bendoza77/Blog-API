import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { featuredArticles } from '../data/articles'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const ArticleCard = ({ article, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden card-lift group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={article.cover}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,6,14,0.6) 0%, transparent 60%)' }} />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {article.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="section-label">{article.category}</span>
          <span className="text-ghost" style={{ fontSize: '0.65rem' }}>·</span>
          <span className="flex items-center gap-1 text-ghost" style={{ fontSize: '0.65rem' }}>
            <Clock className="h-3 w-3" /> {article.time}
          </span>
        </div>
        <h3 className="font-display font-bold text-lg text-main leading-snug">{article.title}</h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary pt-1 group-hover:gap-3 transition-all duration-200">
          Read article <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </motion.article>
  )
}

const FeaturedGrid = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-12"
      >
        <div className="space-y-3">
          <span className="section-label">Latest explorations</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-main">
            Craft your design playbook
          </h2>
        </div>
        <button
          onClick={() => navigate('/journal')}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-primary transition-colors duration-200"
        >
          View all articles <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredArticles.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedGrid
