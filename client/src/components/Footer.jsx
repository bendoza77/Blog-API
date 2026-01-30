import { socialLinks } from '../data/navigation'

const Footer = () => (
  <footer className="border-t border-white/10 py-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-300">
        Crafted for teams exploring meaningful product experiences.
      </p>
      <div className="flex gap-5 text-sm uppercase tracking-[0.3em] text-slate-400">
        {socialLinks.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
