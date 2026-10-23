import type { PortfolioCopy } from '../i18n'

function Hobbies({ copy }: { copy: PortfolioCopy }) {
  const hobbyIcons = [
    <><rect x="3" y="7" width="18" height="12" rx="4" /><path d="M7 13h4m-2-2v4m7-2h.01M18 12h.01" /></>,
    <><circle cx="12" cy="12" r="9" /><path d="m12 3 2.5 5.5L20 10l-3 4.5.5 5.5-5.5-2L7 20l.5-5.5L4 10l5.5-1.5L12 3Z" /></>,
    <><circle cx="12" cy="12" r="9" /><path d="M7 4.5c2.5 2 3 4 2 7s-1 5 1 8m6-15c-2 2-2 4-1 6s1 5-1 8M4 10c3 1.5 5 1.5 8 0s5-1.5 8 0" /></>,
    <><circle cx="12" cy="12" r="9" /><path d="M8 4.5 16 19.5M4.5 8l15 8m-15 0 15-8M8 19.5l8-15" /></>,
    <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12Z" /><path d="M4 5.5v12A2.5 2.5 0 0 1 6.5 15H20M8 7h8" /></>,
    <><path d="M4 5h16v12H9l-5 4V5Z" /><path d="M8 10h.01M12 10h.01M16 10h.01" /></>,
  ]

  return (
    <section className="content-section" id="loisirs" aria-labelledby="hobbies-title">
      <div className="section-heading">
        <p className="section-kicker">{copy.hobbiesKicker}</p>
        <h2 id="hobbies-title">{copy.hobbiesTitle}</h2>
      </div>
      <p className="section-copy">
        {copy.hobbiesCopy}
      </p>
      <p className="hobby-scroll-hint">{copy.hobbiesScrollHint}</p>
      <ul className="hobby-grid" tabIndex={0} aria-label={copy.hobbiesScrollHint}>
        {copy.hobbies.map((hobby, index) => (
          <li className="hobby-card" key={hobby}>
            <span className="hobby-card-top">
              <span className="card-meta">{String(index + 1).padStart(2, '0')}</span>
              <svg className="hobby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                {hobbyIcons[index % hobbyIcons.length]}
              </svg>
            </span>
            <span className="hobby-name">{hobby}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hobbies
