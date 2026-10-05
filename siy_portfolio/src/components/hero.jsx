function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-kicker" data-reveal>
        <span>Christian Siy / Software developer</span>
        <span>Based in the Philippines</span>
      </div>

      <div className="hero-title-wrap" data-reveal>
        <p className="hero-role">Web, mobile &amp;<br />useful workflows</p>
        <h1>
          I build software<br />
          that feels <em>clear.</em>
        </h1>
      </div>

      <div className="hero-bottom" data-reveal>
        <p>
          I use React, Node.js, and Flutter to make complex tasks easier to navigate.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">View projects <span aria-hidden="true">↗</span></a>
          <a className="button-secondary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Hero
