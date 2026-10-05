function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-reveal>
      <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
        {project.visual === 'type' && (
          <>
            <span className="type-a">{project.visualMark}</span>
            <span className="type-slash">/</span>
            <span className="type-grid">0{index + 1}&nbsp;&nbsp; {project.visualCaption}</span>
          </>
        )}
        {project.visual === 'orb' && (
          <>
            <span className="orb" />
            <span className="orb-label">{project.visualCaption}</span>
          </>
        )}
        {project.visual === 'lines' && (
          <>
            <span className="line-word">{project.visualMark}</span>
            <span className="line-caption">{project.visualCaption}</span>
          </>
        )}
      </div>

      <div className="project-meta">
        <span className="project-number">0{index + 1}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.type}</p>
        </div>
      </div>

      <div className="project-details">
        <p>{project.description}</p>
        <ul className="project-stack" aria-label={`${project.title} technologies`}>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {project.href && (
          <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
            View repository <span aria-hidden="true">↗</span>
          </a>
        )}
        {!project.href && (
          <a className="project-link" href="#contact">
            Ask about this project <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
