import Arrow from './arrow.jsx'

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card${index === 0 ? ' project-featured' : ''}`}>
      <figure className="project-figure">
        <div className="project-visual">
          <img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" />
        </div>
        <figcaption>{project.caption}</figcaption>
      </figure>
      <div className="project-content">
        <div className="project-meta">
          <h3>{project.title}</h3>
          <p>{project.type}</p>
        </div>
        <div className="project-details">
          <p>{project.description}</p>
          <ul className="project-stack" aria-label={`${project.title} technologies`}>
            {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <details className="project-overview">
            <summary>
              {project.caseStudy ? 'Read the case study' : 'Project overview'}
              <span className="details-plus" aria-hidden="true" />
            </summary>
            {project.caseStudy ? (
              <dl className="project-overview-content project-case-study">
                {project.caseStudy.map(({ title, description }) => (
                  <div key={title}>
                    <dt>{title}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <div className="project-overview-content">
                <p>{project.overview}</p>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
            )}
          </details>
          {project.href ? (
            <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository`}>
              View repository <Arrow />
            </a>
          ) : (
            <a className="project-link" href="#contact" aria-label={`Ask Christian about ${project.title}`}>
              Ask about this project <Arrow />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
export default ProjectCard
