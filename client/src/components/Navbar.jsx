import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/navigation'
import { useTheme } from '../context/ThemeContext'
import { Menu, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const linkStyles = ({ isActive }) =>
  `relative text-sm tracking-wide transition ${
    isActive ? 'text-slate-900 dark:text-black' : 'text-slate-500 dark:text-slate-400'
  }`

const Navbar = () => {
  const { toggle, scheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-semibold tracking-[0.3em] text-xs uppercase">
          ÆTHER
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={linkStyles}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="rounded-full border border-black/10 bg-white/60 p-2 shadow-sm transition hover:scale-105"
            aria-label="toggle theme"
          >
            {scheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => {
              setOpen(false)
              window.location.href = '/contact'
            }}
            className="hidden rounded-full bg-[#0f172a] px-5 py-2 text-xs uppercase tracking-wide text-white md:block"
          >
            Start a project
          </button>
          <button className="md:hidden" onClick={() => setOpen((s) => !s)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/70 backdrop-blur-lg dark:bg-slate-900/80">
          <div className="flex flex-col gap-3 px-6 py-6 text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={linkStyles} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                window.location.href = '/contact'
              }}
              className="rounded-full border border-black/10 px-5 py-2 text-xs"
            >
              Start a project
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
