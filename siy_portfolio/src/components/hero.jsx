function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-kicker" data-reveal>
        <span>Portfolio / 2026</span>
        <span>Based in the Philippines</span>
      </div>

      <div className="hero-title-wrap" data-reveal>
        <p className="hero-role">Full-stack developer<br />&amp; design enthusiast</p>
        <h1>
          I build digital things<br />
          that feel <em>obvious.</em>
        </h1>
      </div>

      <div className="hero-bottom" data-reveal>
        <a className="round-link" href="#work" aria-label="Scroll to selected work">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v15M6 13l6 6 6-6" />
          </svg>
        </a>
        <p>
          I turn ideas into thoughtful, reliable experiences—balancing clean code,
          useful interaction, and a sharp eye for detail.
        </p>
        <span className="hero-index">(01—05)</span>
      </div>
    </section>
  )
}

export default Hero
