import ProjectCard from '../components/project_card.jsx'

const projects = [
  {
    title: 'BulldogEx Shop',
    type: 'Full-stack commerce · React / Express',
    description: 'A campus storefront with a product catalog, cart, orders, and separate customer and admin experiences.',
    stack: ['React', 'Express', 'MongoDB'],
    visual: 'type',
    visualMark: 'B',
    visualCaption: 'CAMPUS COMMERCE',
    href: 'https://github.com/xtian-siy/siy-webprog-longexam',
  },
  {
    title: 'verifiTOR',
    type: 'Document verification · Web platform',
    description: 'A document request and verification system with role-based dashboards, transaction records, and a public validation flow.',
    stack: ['React', 'Express', 'MongoDB'],
    visual: 'orb',
    visualCaption: <>Proof<br />with purpose</>,
  },
  {
    title: 'Amicorum Chorus',
    type: 'Community website · Frontend',
    description: 'A responsive website for a choir, bringing its events, music, gallery, and membership information together.',
    stack: ['React', 'Vite', 'Responsive design'],
    visual: 'lines',
    visualMark: 'VOICE',
    visualCaption: 'A place for every voice',
    href: 'https://github.com/xtian-siy/Amicorum_Chorus',
  },
]

function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-heading" data-reveal>
        <span className="section-number">01</span>
        <h2>Selected work</h2>
        <p>Selected projects across commerce, document workflows, and community websites.</p>
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
