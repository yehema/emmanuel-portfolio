import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolioData'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>EE<span>.</span></a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
