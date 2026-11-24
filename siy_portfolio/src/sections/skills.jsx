const skillGroups = [
  { name: 'Frontend', skills: ['React', 'JavaScript', 'CSS', 'Responsive design'] },
  { name: 'Backend & data', skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB'] },
  { name: 'Mobile & tools', skills: ['Flutter', 'Firebase', 'Git'] },
]

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <h2>Skills &amp; tools</h2>
        <p>Technologies I use across web and mobile projects.</p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
