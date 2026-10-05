// Paste your full profile URLs into the empty url fields below.
const socials = [
  { label: 'GitHub', url: 'https://github.com/xtian-siy' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/christian-siy-661760379/' },
  { label: 'Instagram', url: 'https://www.instagram.com/x_tiyaan/' },
]

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {socials.map(({ label, url }) => url ? (
        <a href={url} key={label} target="_blank" rel="noopener noreferrer">
          {label} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="social-placeholder" key={label}>{label}</span>
      ))}
    </div>
  )
}

export default SocialLinks
