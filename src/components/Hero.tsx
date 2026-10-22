import portrait from '../assets/Jephte.jpg'
import type { PortfolioCopy } from '../i18n'

function Hero({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="hero-copy">
        <p className="eyebrow">{copy.heroEyebrow}</p>
        <h1 id="page-title">
          {copy.heroTitleLead} <span>{copy.heroTitleAccent}</span>
        </h1>
        <p className="hero-intro">{copy.heroIntro}</p>
        <div className="hero-actions">
          <a className="button" href="#contact">{copy.contactAction} <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="#projets">{copy.profileAction}</a>
        </div>
      </div>
      <figure className="portrait-frame">
        <div className="portrait-image-wrap">
          <img
            className="portrait"
            src={portrait}
            alt={copy.portraitAlt}
            width="400"
            height="500"
            fetchPriority="high"
          />
        </div>
        <figcaption>{copy.portraitCaption}</figcaption>
      </figure>
    </section>
  )
}

export default Hero
