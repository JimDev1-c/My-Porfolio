import type { PortfolioCopy } from '../i18n'

function About({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="content-section" id="profil" aria-labelledby="profil-title">
      <div className="section-heading">
        <p className="section-kicker">{copy.aboutKicker}</p>
        <h2 id="profil-title">{copy.aboutTitle}</h2>
      </div>
      <div className="about-layout">
        <p className="section-copy">{copy.aboutCopy}</p>
        <ul className="about-highlights">
          {copy.aboutHighlights.map((highlight) => (
            <li key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
