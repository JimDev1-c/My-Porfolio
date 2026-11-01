import type { PortfolioCopy } from '../i18n'

function Skills({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="content-section" id="competences" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-kicker">{copy.skillsKicker}</p>
        <h2 id="skills-title">{copy.skillsTitle}</h2>
      </div>
      <div className="toolkit-grid">
        {copy.skillGroups.map((group) => (
          <article className="toolkit-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="toolkit-tags">
              {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              {group.progressItems.map((skill) => (
                <li className="is-in-progress" key={skill}>
                  <span>{skill}</span>
                  <span className="skill-status">{copy.skillProgressLabel}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
