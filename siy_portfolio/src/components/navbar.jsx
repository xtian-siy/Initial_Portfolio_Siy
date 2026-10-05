import { useEffect, useState } from 'react'
import logo from '../assets/XtianSiyLogo.png'

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', theme === 'dark' ? '#191917' : '#f0efeb',
    )
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The toggle still works if storage is unavailable.
    }
  }, [theme])

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Back to top" onClick={closeMenu}>
        <img src={logo} alt="Christian Siy" className="logo" />
      </a>

      <nav id="primary-navigation" className={isOpen ? 'nav-links is-open' : 'nav-links'}>
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
        >
          <span className="theme-icon" aria-hidden="true">{theme === 'light' ? '◐' : '◑'}</span>
          <span>{theme === 'light' ? 'Night mode' : 'Light mode'}</span>
        </button>
      </div>

      <button
        className="menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  )
}

export default Navbar
