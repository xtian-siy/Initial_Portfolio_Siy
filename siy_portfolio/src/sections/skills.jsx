import SkillCard from '../components/skill_card.jsx'

const skills = ['Artificial Intelligence','React', 'JavaScript', 'Node.js', 'UI / UX', 'APIs', 'Databases', 'Git', 'Next.js', 'Tailwind CSS', 'Figma']

function Skills() {
  return (
    <section className="section skills-section">
      <div className="section-heading" data-reveal>
        <span className="section-number">04</span>
        <h2>Tools &amp; capabilities</h2>
      </div>

      <div className="skills-grid" data-reveal>
        {skills.map((skill, index) => <SkillCard key={skill} name={skill} index={index} />)}
      </div>
    </section>
  )
}

export default Skills
