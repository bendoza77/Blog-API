import { featuredArticles } from '../data/articles'

import PageShell from '../components/PageShell'

const Journal = () => (
  <PageShell className="mx-auto max-w-5xl space-y-10 px-6 py-16">
    <header>
      <p className="text-xs uppercase tracking-[0.6em] text-[#7c3aed]">Journal</p>
      <h1 className="mt-4 text-4xl font-semibold text-[#161134]">
        Essays, frameworks, and visual notes
      </h1>
      <p className="mt-4 max-w-2xl text-base text-[#5f6c80]">
        Deep dives into product rituals, motion systems, and creative technology.
      </p>
    </header>

    <div className="space-y-8">
      {featuredArticles.map((article) => (
        <article key={article.id} className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(91,33,182,0.4)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-[#7c3aed]">{article.category}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#161134]">
                {article.title}
              </h2>
              <p className="mt-1 text-sm text-[#5f6c80]">{article.excerpt}</p>
            </div>
            <button
              onClick={() => window.open(`https://blog.example.com/${article.id}`, '_blank')}
              className="self-start rounded-full border border-[#7c3aed]/40 px-6 py-3 text-xs uppercase tracking-[0.4em] text-[#7c3aed]"
            >
              Read article
            </button>
          </div>
        </article>
      ))}
    </div>
  </PageShell>
)

export default Journal
