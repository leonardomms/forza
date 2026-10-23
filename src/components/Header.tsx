import { useEffect, useState } from 'react'
import logo from '../../assets/Type=Black.svg'
import { Button } from './Action'
import type { LinkKey } from '../App'

type Props = { destinations: Partial<Record<LinkKey, string>> }

export function Header({ destinations }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 8)
    const closeDesktopMenu = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', closeDesktopMenu)
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', closeDesktopMenu)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header${isScrolled || isMenuOpen ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <img className="site-header__logo" src={logo} alt="Forza Flex" width="297.5" height="40" />
        <button
          className="site-header__menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="primary-navigation" className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`} aria-label="Navegação principal">
          <Button href={destinations.home ?? '#top'} onClick={closeMenu}>Início</Button>
          <Button href={destinations.solutions ?? '#applications-title'} onClick={closeMenu}>Soluções</Button>
          <Button href={destinations.contact ?? '#contact-title'} onClick={closeMenu}>Contato</Button>
          <Button href={destinations.quote ?? '#quote-title'} variant="primary" onClick={closeMenu}>Orçamento</Button>
        </nav>
      </div>
    </header>
  )
}
