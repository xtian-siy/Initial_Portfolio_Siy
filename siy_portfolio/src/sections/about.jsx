function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading" data-reveal>
        <span className="section-number">02</span>
        <h2>About</h2>
      </div>

      <div className="about-grid" data-reveal>
        <figure className="about-portrait">
          <div className="about-portrait-frame" role="img" aria-label="Portrait photo coming soon">
           <img src="src/assets/CIT09320.jpg" alt="Portrait / Coming soon" width={500} height={500}/>
           
          </div>
          <figcaption>Portrait / Coming soon</figcaption>
        </figure>

        <div className="about-copy">
          <p>
            Hi! I’m a developer focused on creating digital products that are clear,
            considered, and enjoyable to use. I like making complex things feel simple.
          </p>
          <p>
            From the first sketch to the final deployment, I work across design and
            development to keep the experience coherent at every step.
          </p>
          <a className="text-link" href="#contact">More about me <span>↗</span></a>
        </div>
      </div>

    </section>
  )
}

export default About
