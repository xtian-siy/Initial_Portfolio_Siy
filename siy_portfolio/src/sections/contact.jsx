import SocialLinks from '../components/social_links.jsx'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-top" data-reveal>
        <span className="section-number">04</span>
        <p>Have a role, project, or question in mind?</p>
      </div>
      <div className="contact-main" data-reveal>
        <h2>Let's talk.</h2>
        <a className="contact-button" href="https://www.linkedin.com/in/christian-siy-661760379/" target="_blank" rel="noopener noreferrer">
          Message me on LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
      <SocialLinks />
    </section>
  )
}

export default Contact
