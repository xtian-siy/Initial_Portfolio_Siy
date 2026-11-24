import Arrow from './arrow.jsx'
const socials = [
  { label: 'GitHub', url: 'https://github.com/xtian-siy' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/christian-siy-661760379/' },
  { label: 'Instagram', url: 'https://www.instagram.com/x_tiyaan/' },
]
function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {socials.map(({label, url}) => <a href={url} key={label} target="_blank" rel="noopener noreferrer">{label} <Arrow /></a>)}
    </div>
  )
}
export default SocialLinks
