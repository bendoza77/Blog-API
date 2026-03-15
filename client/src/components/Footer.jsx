import { NavLink } from 'react-router-dom'
import { navLinks, socialLinks } from '../data/navigation'

const Footer = () => (
  <footer className="border-t border-edge mt-8">
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <p className="font-display font-bold tracking-[0.25em] text-sm uppercase text-main">ÆTHER</p>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            A hybrid design studio crafting immersive interfaces, motion systems, and content strategies.
          </p>
        </div>

        {/* Nav */}
        <div className="space-y-4">
          <p className="section-label">Navigation</p>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="text-muted text-sm hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <p className="section-label">Connect</p>
          <div className="flex flex-col gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted text-sm hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="hr mt-12" />

      <div className="mt-8 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <p className="text-ghost text-xs">
          © {new Date().getFullYear()} ÆTHER Studio. All rights reserved.
        </p>
        <p className="text-ghost text-xs">
          Crafted for teams building meaningful experiences.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
