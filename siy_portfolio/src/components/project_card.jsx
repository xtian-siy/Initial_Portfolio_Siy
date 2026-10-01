function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-reveal>
      <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
        {project.visual === 'type' && (
          <>
            <span className="type-a">A</span>
            <span className="type-slash">/</span>
            <span className="type-grid">001&nbsp;&nbsp; DIGITAL<br />SYSTEMS &amp; IDENTITY</span>
          </>
        )}
        {project.visual === 'orb' && (
          <>
            <span className="orb" />
            <span className="orb-label">Explore<br />the unseen</span>
          </>
        )}
        {project.visual === 'lines' && (
          <>
            <span className="line-word">FORM</span>
            <span className="line-caption">Structure in motion</span>
          </>
        )}
      </div>



      <div className="project-meta">
        <span className="project-number">0{index + 1}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.type}</p>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
    </article>
  )
}

export default ProjectCard
