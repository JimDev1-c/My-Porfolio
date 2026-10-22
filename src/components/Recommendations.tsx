import type { PortfolioCopy } from '../i18n'

function Recommendations({ copy }: { copy: PortfolioCopy }) {
  return (
    <section
      className="content-section recommendations-section"
      id="recommandations"
      aria-labelledby="recommendations-title"
    >
      <div className="section-heading">
        <p className="section-kicker">{copy.recommendationsKicker}</p>
        <h2 id="recommendations-title">{copy.recommendationsTitle}</h2>
      </div>
      <div className="recommendation-card">
        <span className="recommendation-mark" aria-hidden="true">“</span>
        <p>{copy.recommendationsCopy}</p>
        <a
          className="project-link"
          href="https://www.linkedin.com/in/jephte-iniki-mr-jim-00302b398/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.recommendationsAction} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Recommendations
