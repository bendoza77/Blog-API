import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { featuredArticles } from '../data/articles'
import PageShell from '../components/PageShell'

const ease = [0.22, 1, 0.36, 1]

const Journal = () => {
  useEffect(() => { document.title = 'Journal — ÆTHER' }, [])
  return (
  <PageShell>
    {/* Hero */}
    <section className="mx-auto max-w-6xl px-6 pt-36 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="space-y-5 max-w-2xl"
      >
        <span className="section-label">Journal</span>
        <h1 className="font-display font-bold leading-tight text-main"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          Essays, frameworks &amp; visual notes
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          Deep dives into product rituals, motion systems, and creative technology from the ÆTHER studio.
        </p>
      </motion.div>
    </section>

    {/* Divider */}
    <div className="hr" />

    {/* Articles */}
    <section className="mx-auto max-w-6xl px-6 py-16 space-y-5">
      {featuredArticles.map((article, i) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: i * 0.1 }}
          className="glass rounded-2xl p-7 card-lift group"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            {/* Image */}
            <div className="md:w-48 md:flex-shrink-0 overflow-hidden rounded-xl">
              <img
                src={article.cover}
                alt={article.title}
                className="w-full h-36 md:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="section-label">{article.category}</span>
                <span className="text-ghost text-xs">·</span>
                <span className="flex items-center gap-1 text-ghost text-xs">
                  <Clock className="h-3 w-3" /> {article.time}
                </span>
              </div>

              <h2 className="font-display font-bold text-xl text-main leading-snug">{article.title}</h2>
              <p className="text-muted text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>

              <div className="flex flex-wrap items-center gap-3">
                {article.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 tag">
                    <Tag className="h-2.5 w-2.5" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => window.open(`https://blog.example.com/${article.id}`, '_blank')}
              className="flex-shrink-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all duration-200"
            >
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.article>
      ))}
    </section>
  </PageShell>
  )
}

export default Journal
