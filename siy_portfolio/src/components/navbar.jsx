import { useEffect, useState } from 'react'
import logo from '../assets/XtianSiyLogo.png'

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light' }
    catch { return 'light' }
  })
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#191917' : '#f0efeb')
    try { localStorage.setItem('portfolio-theme', theme) }
    catch { /* The toggle still works when storage is unavailable. */ }
  }, [theme])

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        document.querySelector('.menu-button')?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        else setActiveSection((current) => current === `#${entry.target.id}` ? '' : current)
      })
    }, { rootMargin: '-75px 0px -55% 0px', threshold: 0 })
    links.forEach(([, href]) => {
      const section = document.querySelector(href)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Back to top" onClick={closeMenu}>
        <img src={logo} alt="Christian Siy" className="logo" />
      </a>
      <nav id="primary-navigation" aria-label="Primary navigation" className={isOpen ? 'nav-links is-open' : 'nav-links'}>
        {links.map(([label, href]) => (
          <a href={href} key={href} aria-current={activeSection === href ? 'location' : undefined} onClick={closeMenu}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} aria-pressed={theme === 'dark'} onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}>
          <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 4a8 8 0 0 0 0 16Z" fill="currentColor" /></svg>
          <span>{theme === 'light' ? 'Night mode' : 'Light mode'}</span>
        </button>
      </div>
      <button className="menu-button" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((open) => !open)}>{isOpen ? 'Close' : 'Menu'}</button>
    </header>
  )
}
export default Navbar
