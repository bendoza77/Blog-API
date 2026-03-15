import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [scheme, setScheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  )

  useEffect(() => {
    // Dark is default (no class). Light mode adds the 'light' class.
    document.documentElement.classList.toggle('light', scheme === 'light')
  }, [scheme])

  const toggle = () => setScheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ scheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
