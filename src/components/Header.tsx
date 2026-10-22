import { useEffect, useRef, useState } from 'react'
import type { Language, PortfolioCopy } from '../i18n'

interface HeaderProps {
  copy: PortfolioCopy
  language: Language
  onLanguageChange: (language: Language) => void
}

function Header({ copy, language, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navigationGroupOpen, setNavigationGroupOpen] = useState(false)
  const navigationGroupRef = useRef<HTMLDivElement>(null)
  const navigationGroupButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen && !navigationGroupOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      if (navigationGroupOpen) {
        setNavigationGroupOpen(false)
        navigationGroupButtonRef.current?.focus()
      }
      setMenuOpen(false)
    }

    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !navigationGroupRef.current?.contains(event.target)) {
        setNavigationGroupOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [menuOpen, navigationGroupOpen])

  function closeNavigation() {
    setMenuOpen(false)
    setNavigationGroupOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Jephte Iniki, accueil">
        JI<span aria-hidden="true">.</span>
      </a>
      <nav
        className={menuOpen ? 'main-navigation is-open' : 'main-navigation'}
        id="main-navigation"
        aria-label={copy.navigationLabel}
      >
        {copy.navigation.map(({ href, label }) => (
          <a href={href} key={href} onClick={closeNavigation}>
            {label}
          </a>
        ))}
        <div className="navigation-dropdown" ref={navigationGroupRef}>
          <button
            className="navigation-dropdown-toggle"
            type="button"
            ref={navigationGroupButtonRef}
            aria-expanded={navigationGroupOpen}
            aria-controls="navigation-group-menu"
            aria-label={navigationGroupOpen ? copy.navigationGroupCloseLabel : copy.navigationGroupToggleLabel}
            onClick={() => setNavigationGroupOpen((open) => !open)}
          >
            {copy.navigationGroupLabel}
            <span className="navigation-dropdown-chevron" aria-hidden="true" />
          </button>
          <div
            className="navigation-dropdown-menu"
            id="navigation-group-menu"
            hidden={!navigationGroupOpen}
          >
            {copy.navigationGroup.map(({ href, label }) => (
              <a href={href} key={href} onClick={closeNavigation}>{label}</a>
            ))}
          </div>
        </div>
        <a className="header-contact-link" href="#contact" onClick={closeNavigation}>
          {copy.headerContact}
        </a>
      </nav>
      <div className="header-actions">
        <span className="availability">{copy.availability}</span>
        <div className="language-switch" role="group" aria-label={copy.languageLabel}>
          <button
            className={language === 'fr' ? 'language-button is-active' : 'language-button'}
            type="button"
            aria-pressed={language === 'fr'}
            onClick={() => onLanguageChange('fr')}
          >
            FR
          </button>
          <button
            className={language === 'en' ? 'language-button is-active' : 'language-button'}
            type="button"
            aria-pressed={language === 'en'}
            onClick={() => onLanguageChange('en')}
          >
            EN
          </button>
        </div>
        <button
          className={menuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
          type="button"
          aria-label={menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => {
            setMenuOpen((open) => !open)
            setNavigationGroupOpen(false)
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
