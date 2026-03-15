import { NavLink, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/navigation'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const { toggle, scheme } = useTheme()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-muted hover:text-main'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-edge' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-display text-sm font-bold tracking-[0.25em] uppercase text-main"
        >
          ÆTHER
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="glass rounded-full p-2.5 text-muted hover:text-main transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {scheme === 'dark'
              ? <Sun className="h-4 w-4" />
              : <Moon className="h-4 w-4" />
            }
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="btn-primary hidden md:inline-flex text-xs py-2.5 px-5"
          >
            Start a project
          </button>

          <button
            className="md:hidden text-muted hover:text-main transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden glass2 border-t border-edge"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `py-3 text-base font-medium border-b border-edge last:border-0 transition-colors ${
                      isActive ? 'text-primary' : 'text-muted'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => { setOpen(false); navigate('/contact') }}
                className="btn-primary mt-4 justify-center"
              >
                Start a project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
