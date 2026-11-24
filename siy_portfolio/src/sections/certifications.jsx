import Arrow from '../components/arrow.jsx'

const certifications = [
  {
    title: 'IT Specialist - Cybersecurity',
    issuer: 'Certiport, a Pearson VUE Business',
    issued: 'October 2026',
    badgeUrl: 'https://www.credly.com/badges/9e818e1d-5cc0-425e-b4f6-98baf0c6488f/public_url',
  },
  {
    title: 'MongoDB Indexing Design Fundamentals',
    issuer: 'MongoDB',
    issued: 'October 2026',
    badgeUrl: 'https://www.credly.com/badges/04624564-055d-4978-b519-7822ef4070f5/public_url',
  },
]

function Certifications() {
  return (
    <section className="section" id="certifications" aria-labelledby="certifications-heading">
      <div className="section-heading">
        <h2 id="certifications-heading">Certifications</h2>
      </div>
      <ul className="certification-list" role="list">
        {certifications.map(({ title, issuer, issued, badgeUrl }) => (
          <li className="certification-item" key={badgeUrl}>
            <div className="certification-details">
              <h3>{title}</h3>
              <p>{issuer} · {issued}</p>
            </div>
            <a className="project-link" href={badgeUrl} target="_blank" rel="noopener noreferrer" aria-label={`View public badge for ${title} (opens in a new tab)`}>
              View public badge <Arrow />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications
