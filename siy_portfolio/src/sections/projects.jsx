import ProjectCard from '../components/project_card.jsx'

const projects = [
  { title: 'Project One', type: 'Web application · Development', year: '2026', visual: 'type' },
  { title: 'Project Two', type: 'Product design · Frontend', year: '2026', visual: 'orb' },
  { title: 'Project Three', type: 'Creative development · Identity', year: '2025', visual: 'lines' },
]

function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-heading" data-reveal>
        <span className="section-number">01</span>
        <h2>Selected work</h2>
        <p>A small selection of things I’ve designed, built, and shipped.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
