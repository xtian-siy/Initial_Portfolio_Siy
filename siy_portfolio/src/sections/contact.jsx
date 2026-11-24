import Arrow from '../components/arrow.jsx'
import SocialLinks from '../components/social_links.jsx'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-top">
        <p>Have a role, project, or question in mind?</p>
      </div>
      <div className="contact-main">
        <h2>Let's talk.</h2>
        <a className="contact-button" href="https://www.linkedin.com/in/christian-siy-661760379/" target="_blank" rel="noopener noreferrer">
          Message me on LinkedIn <Arrow />
        </a>
      </div>
      <SocialLinks />
    </section>
  )
}

export default Contact
