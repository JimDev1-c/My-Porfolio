import type { PortfolioCopy } from '../i18n'

function Experience({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="section-kicker">{copy.experienceKicker}</p>
        <h2 id="experience-title">{copy.experienceTitle}</h2>
      </div>
      <p className="section-copy">{copy.experienceIntro}</p>
      <ol className="experience-timeline">
        {copy.experiences.map((experience) => (
          <li className="timeline-item" key={`${experience.organization}-${experience.role}`}>
            <span className="timeline-marker" aria-hidden="true" />
            <article className="timeline-card">
              <p className="timeline-organization">{experience.organization}</p>
              <h3>{experience.role}</h3>
              {experience.period && <p className="timeline-period">{experience.period}</p>}
              <p>{experience.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
