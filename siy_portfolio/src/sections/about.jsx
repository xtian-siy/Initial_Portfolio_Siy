import Arrow from '../components/arrow.jsx'
import portrait from '../assets/CIT09320.jpg'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <h2>About</h2>
      </div>

      <div className="about-grid">
        <figure className="about-portrait">
          <div className="about-portrait-frame">
            <img src={portrait} alt="Christian Siy" width={4596} height={2629} loading="lazy" />
          </div>
          <figcaption>Portrait / Christian Siy</figcaption>
        </figure>

        <div className="about-copy">
          <p>
            I’m Christian, a developer based in the Philippines. I build web and
            mobile experiences for practical needs, from campus commerce to
            document requests and community websites.
          </p>
          <p>
            I care about clear interfaces, dependable workflows, and code that
            another person can understand and improve.
          </p>
          <a className="text-link" href="#contact">Get in touch <Arrow /></a>
        </div>
      </div>

    </section>
  )
}

export default About
