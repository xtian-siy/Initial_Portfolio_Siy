import ProjectCard from '../components/project_card.jsx'
import shopImage from '../assets/projects/bulldogex-login.webp'
import verificationImage from '../assets/projects/verifitor-login.webp'
import choirImage from '../assets/projects/amicorum-home.webp'

const projects = [
  {
    title: 'BulldogEx Shop',
    type: 'Full-stack commerce · React / Express',
    description: 'A campus storefront with a product catalog, cart, orders, and separate customer and admin experiences.',
    stack: ['React', 'Express', 'MongoDB'],
    image: shopImage,
    imageAlt: 'BulldogEx Shop sign-in form next to a photo of the National University campus',
    imageWidth: 1440, imageHeight: 900,
    caption: 'Campus commerce / Sign-in screen',
    caseStudy: [
      {
        title: 'From catalog to order',
        description: 'Students browse campus merch, add items to a cart, and place an order for campus pickup. They can then find it in their order history.',
      },
      {
        title: 'My contribution',
        description: 'I added the React cart and order history and connected checkout to the Express order API backed by MongoDB.',
      },
      {
        title: 'Sign-in at checkout',
        description: 'I kept browsing and cart editing open to guests. The shop asks students to sign in when they’re ready to order, then brings them back to the cart with their items still there.',
      },
    ],
    href: 'https://github.com/xtian-siy/siy-webprog-longexam',
  },
  {
    title: 'verifiTOR',
    type: 'Document verification · Web platform',
    description: 'A document request and verification system with role-based dashboards, transaction records, and a public validation flow.',
    stack: ['React', 'Express', 'MongoDB'],
    image: verificationImage,
    imageAlt: 'VerifiTOR administrator sign-in form beside the project’s branded illustration',
    imageWidth: 1440, imageHeight: 900,
    caption: 'Document verification / Admin sign-in screen',
    overview: 'A document workflow spanning requests, transaction records, and public validation.',
    features: ['Role-based dashboards', 'Document requests and transaction records', 'Public validation flow'],
  },
  {
    title: 'Amicorum Chorus',
    type: 'Community website · Frontend',
    description: 'A responsive website for a choir, bringing its events, music, gallery, and membership information together.',
    stack: ['React', 'Vite', 'Responsive design'],
    image: choirImage,
    imageAlt: 'Amicorum Chorus homepage with the choir’s hero image and site navigation',
    imageWidth: 1440, imageHeight: 900,
    caption: 'Community website / Homepage',
    overview: 'A responsive home for the choir’s music, community, and membership information.',
    features: ['Events and music', 'Gallery', 'Membership information'],
    href: 'https://github.com/xtian-siy/Amicorum_Chorus',
  },
]

function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-heading">
        <h2>Selected work</h2>
        <p>Selected projects across commerce, document workflows, and community websites.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  )
}
export default Projects
