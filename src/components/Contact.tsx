import type { PortfolioCopy } from '../i18n'
import SocialIcon from './SocialIcon'

function Contact({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="content-section" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="section-kicker">{copy.contactKicker}</p>
        <h2 id="contact-title">{copy.contactTitle}</h2>
      </div>
      <p className="section-copy">
        {copy.contactCopy}
      </p>
      <div className="contact-layout">
        <div className="contact-panel">
          <a className="contact-email" href="mailto:inikijephte5@gmail.com">
            <span>
              <span className="contact-email-label">{copy.emailLabel}</span>
              <span className="contact-email-value">inikijephte5@gmail.com</span>
            </span>
            <span className="contact-email-action">
              {copy.emailAction} <span aria-hidden="true">↗</span>
            </span>
          </a>
          <div className="contact-footer">
            <address className="contact-details">
              <a className="contact-detail" href="tel:+243840058468">
                <span className="contact-detail-label">{copy.phoneLabel}</span>
                <span>+243 84 00 58 468</span>
              </a>
              <span className="contact-detail">
                <span className="contact-detail-label">{copy.locationLabel}</span>
                <span>{copy.location}</span>
              </span>
            </address>
            <nav className="contact-socials" aria-label={copy.socialLabel}>
              <a href="https://www.linkedin.com/in/jephte-iniki-mr-jim-00302b398/" target="_blank" rel="noopener noreferrer">
                <SocialIcon name="linkedin" />
                {copy.linkedin}
              </a>
              <a href="https://github.com/JimDev1-c" target="_blank" rel="noopener noreferrer">
                <SocialIcon name="github" />
                {copy.github}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
