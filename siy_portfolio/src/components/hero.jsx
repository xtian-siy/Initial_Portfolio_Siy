import artwork from '../assets/hero.png'
import Arrow from './arrow.jsx'

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-title-wrap">
        <div className="hero-heading">
          <h1>Let's transform that<br /> idea to <em>life.</em></h1>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src={artwork} alt="" width="330" height="262" />
          <svg className="signature-line" viewBox="0 0 200 32" fill="none">
            <path d="M8 24C39 8 63 8 94 14s60 11 97-7" />
          </svg>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-intro">
          <p>My projects span student shops, transcript requests, and community websites. I build for web and mobile with React, Node.js, and Flutter.</p>
          <span className="hero-byline">Christian Siy <span aria-hidden="true">/</span> Based in the Philippines</span>
        </div>
        <div className="hero-actions">
          <a className="button-primary" href="#work">View projects <Arrow /></a>
          <a className="button-secondary" href="#contact">Get in touch <Arrow /></a>
        </div>
      </div>
    </section>
  )
}
export default Hero
