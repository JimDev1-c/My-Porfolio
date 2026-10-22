import type { PortfolioCopy } from '../i18n'
import SocialIcon from './SocialIcon'

function Footer({ copy }: { copy: PortfolioCopy }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a className="footer-brand" href="#accueil" aria-label="Jephte Iniki, accueil">
            JI<span aria-hidden="true">.</span>
          </a>
          <p>{copy.footerTagline}</p>
        </div>
        <div className="footer-contact">
          <p className="footer-label">{copy.footerPrompt}</p>
          <a href="mailto:inikijephte5@gmail.com">
            {copy.footerContact} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="footer-navigation" aria-label={copy.footerNavigationLabel}>
          {copy.footerLinks.map(({ href, label }) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
    
      </div>
      <div className="footer-bottom">
        <p>{copy.footer}</p>
        <a href="#accueil">{copy.backToTop} <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

export default Footer
