import { motion } from 'framer-motion'
import { featuredArticles } from '../data/articles'

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const FeaturedGrid = () => (
  <section className="mx-auto max-w-6xl px-6 py-16">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.5em] text-[#7c3aed]">Latest explorations</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#161134]">
          Craft your design playbook
        </h2>
      </div>
      <button
        onClick={() => (window.location.href = '/journal')}
        className="text-sm uppercase tracking-[0.3em] text-[#5f6c80]"
      >
        View all articles →
      </button>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {featuredArticles.map((article, index) => (
        <motion.article
          key={article.id}
          custom={index}
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="group rounded-3xl border border-white/50 bg-white/80 p-5 shadow-[0_35px_100px_-60px_rgba(124,58,237,0.4)] backdrop-blur-2xl transition hover:-translate-y-1"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={article.cover}
              alt={article.title}
              className="h-48 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
          <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#7c3aed]">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.time}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-[#161134]">{article.title}</h3>
          <p className="mt-2 text-sm text-[#5f6c80]">{article.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-[#7c3aed]">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#7c3aed]/30 px-3 py-1 text-[#7c3aed]">
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
)

export default FeaturedGrid
