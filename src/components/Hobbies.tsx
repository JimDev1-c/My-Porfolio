import type { PortfolioCopy } from '../i18n'

function Hobbies({ copy }: { copy: PortfolioCopy }) {
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
            <span className="card-meta">{String(index + 1).padStart(2, '0')}</span>
            <span>{hobby}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hobbies
