const socials = ['GitHub', 'LinkedIn', 'Instagram']

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {socials.map((social) => (
        <a href="#contact" key={social}>{social} <span>↗</span></a>
      ))}
    </div>
  )
}

export default SocialLinks
