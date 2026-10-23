import type { PortfolioCopy } from '../i18n'

function About({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="content-section" id="profil" aria-labelledby="profil-title">
      <div className="section-heading">
        <p className="section-kicker">{copy.aboutKicker}</p>
        <h2 id="profil-title">{copy.aboutTitle}</h2>
      </div>
      <div className="about-layout">
        <div className="about-biography">
          {copy.aboutParagraphs.map((paragraph) => (
            <p className="about-paragraph" key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="about-philosophy" aria-labelledby="about-philosophy-title">
          <p className="about-philosophy-label" id="about-philosophy-title">{copy.aboutPhilosophyTitle}</p>
          <blockquote>{copy.aboutPhilosophyQuote}</blockquote>
          <p className="about-philosophy-tags">{copy.aboutPhilosophyTags}</p>
        </aside>
      </div>
    </section>
  )
}

export default About
