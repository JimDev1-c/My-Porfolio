import type { PortfolioCopy } from '../i18n'

function Projects({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="content-section projects-section" id="projets" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="section-kicker">{copy.projectsKicker}</p>
        <h2 id="projects-title">{copy.projectsTitle}</h2>
      </div>
      <p className="section-copy">{copy.projectsIntro}</p>
      <div
        className="project-grid"
        role="region"
        aria-label={copy.projectsScrollLabel}
        aria-describedby="projects-scroll-hint"
        tabIndex={0}
      >
        {copy.projects.map((project, index) => (
          <article className={`project-card project-card-${index + 1}`} key={project.name}>
            <ProjectPreview
              mark={project.mark}
              name={project.name}
              label={project.previewLabel}
              image={project.image ?? undefined}
            />
            <div className="project-body">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-problem">
                <strong>{copy.projectGoalLabel} :</strong>{' '}
                {project.problem}
              </p>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label={project.name}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {project.url ? (
                <div className="project-actions">
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.action} <span aria-hidden="true">↗</span>
                  </a>
                  {project.sourceUrl && (
                    <a
                      className="project-source-link"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.sourceAction} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              ) : (
                <span className="project-status">{project.action}</span>
              )}
              <p className="project-scope">{project.status}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="project-scroll-hint" id="projects-scroll-hint">
        {copy.projectsScrollHint}
      </p>
    </section>
  )
}

function ProjectPreview({
  mark,
  name,
  label,
  image,
}: {
  mark: string
  name: string
  label: string
  image?: string
}) {
  return (
    <div className={`project-art${image ? ' project-art-has-image' : ''}`} role="img" aria-label={label}>
      <span className="preview-caption">{name}</span>
      {image ? (
        <img className="project-art-image" src={image} alt="" loading="lazy" decoding="async" />
      ) : mark === 'SmartResto' ? (
        <div className="restaurant-preview" aria-hidden="true">
          <div className="restaurant-preview-header"><span /><span /><span /></div>
          <div className="restaurant-preview-columns">
            <div><b /><i /><i /></div>
            <div><b /><i /><i /></div>
            <div><b /><i /><i /></div>
          </div>
        </div>
      ) : mark === 'Refresh Game' ? (
        <div className="dice-preview" aria-hidden="true">
          <span className="preview-die preview-die-one">⚄</span>
          <span className="preview-versus">VS</span>
          <span className="preview-die preview-die-two">⚅</span>
        </div>
      ) : (
        <div className="app-preview" aria-hidden="true">
          <div className="preview-sidebar"><span /><span /><span /></div>
          <div className="preview-window">
            <span className="preview-window-title" />
            <span className="preview-window-subtitle" />
            <div className="preview-task"><i /><span /><b /></div>
            <div className="preview-task"><i /><span /><b /></div>
            <div className="preview-task"><i /><span /><b /></div>
          </div>
        </div>
      )}
      <span className="preview-mark" aria-hidden="true">{mark}</span>
    </div>
  )
}

export default Projects
