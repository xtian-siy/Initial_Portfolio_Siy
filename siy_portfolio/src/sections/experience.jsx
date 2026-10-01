const experience = [
  ['2024—Now', 'Your current role', 'Company / Independent'],
  ['2022—2024', 'Previous position', 'Company name'],
  ['2020—2022', 'Earlier experience', 'Studio or company'],
]

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading" data-reveal>
        <span className="section-number">03</span>
        <h2>Experience</h2>
        <p>The path so far. Replace these placeholders with your own story.</p>
      </div>

      <div className="experience-list" data-reveal>
        {experience.map(([year, role, company], index) => (
          <div className="experience-row" key={year}>
            <span className="experience-index">0{index + 1}</span>
            <span className="experience-year">{year}</span>
            <h3>{role}</h3>
            <p>{company}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
