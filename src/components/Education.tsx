import type { PortfolioCopy } from '../i18n'

function Education({ copy }: { copy: PortfolioCopy }) {
  return (
    <>
      <section className="content-section" id="parcours" aria-labelledby="education-title">
        <div className="section-heading">
          <p className="section-kicker">{copy.educationKicker}</p>
          <h2 id="education-title">{copy.educationTitle}</h2>
        </div>
        <div className="card-grid">
          {copy.education.map(({ school, years }) => (
            <article className="info-card" key={school}>
              <h3>{school}</h3>
              <p className="card-meta">{years}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="certifications" aria-labelledby="certifications-title">
        <div className="section-heading">
          <p className="section-kicker">{copy.certificationKicker}</p>
          <h2 id="certifications-title">{copy.certificationTitle}</h2>
        </div>
        <div className="certification-carousel">
          <div
            className="certification-window"
            tabIndex={0}
            aria-label={copy.certificationTitle}
          >
            <div className="certification-track">
              {[false, true].map((isDuplicate) => (
                <ul className="certification-list" key={String(isDuplicate)} aria-hidden={isDuplicate || undefined}>
                  {copy.certifications.map(({ title, issuer, date, verificationUrl }) => (
                    <li className="certification-card" key={title}>
                      <span className="certification-title">{title}</span>
                      <span className="certification-meta">
                        {[issuer, date].filter(Boolean).join(' · ')}
                      </span>
                      {verificationUrl && (
                        <a href={verificationUrl} target="_blank" rel="noopener noreferrer" tabIndex={isDuplicate ? -1 : undefined}>
                          {copy.certificationVerifyLabel}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education
