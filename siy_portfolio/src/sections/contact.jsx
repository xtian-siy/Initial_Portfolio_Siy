import SocialLinks from '../components/social_links.jsx'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-top" data-reveal>
        <span className="section-number">05</span>
        <p>Have a project, idea, or just want to say hello?</p>
      </div>
      <div className="contact-main" data-reveal>
        <h2>Let's Connect!<br /></h2>
        <a className="contact-button" href="mailto:hello@yourname.dev">
          Start a conversation <span>↗</span>
        </a>
      </div>
      <SocialLinks />
    </section>
  )
}

export default Contact
