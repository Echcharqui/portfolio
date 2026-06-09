const projects = [
  {
    number:  'PROJECT 01',
    name:    'Arsenal FC Platform',
    meta:    'Enterprise Sports Technology',
    tags:    ['API', 'ARCH', 'EDA', 'MICROSERVICES', 'AZURE'],
    description:
      'Contributed to the delivery of a large-scale sports technology platform through NTT DATA. Worked across backend services, integrations, event-driven communication, and production-grade engineering systems supporting modern digital experiences.',
    contribution: [
      'Backend service development using Node.js and TypeScript.',
      'API integrations across distributed systems.',
      'Event-driven communication between services.',
      'BullMQ-based task orchestration and background processing.',
      'Production-focused engineering and deployment workflows.',
    ],
  },
  {
    number:  'PROJECT 02',
    name:    'NTT DATA Enterprise Systems',
    meta:    'Enterprise Engineering',
    tags:    ['NODE', 'TYPESCRIPT', 'API', 'CLOUD', 'AZURE'],
    description:
      'Enterprise software delivery across international teams and large-scale production environments. Contributed to backend architecture, service design, cloud infrastructure, and frontend development.',
    contribution: [
      'RESTful and service-oriented API development.',
      'Azure cloud integrations.',
      'Microservice architecture implementation.',
      'React frontend delivery.',
      'Production-grade engineering practices.',
    ],
  },
  {
    number:  'PROJECT 03',
    name:    'Beebs Marketplace',
    meta:    'Marketplace Platform',
    tags:    ['MARKETPLACE', 'API', 'REACT', 'NODE'],
    description:
      'Marketplace product engineering supporting user-facing commerce workflows, backend APIs, and modern web application delivery.',
    contribution: [
      'Backend API development.',
      'Product-facing frontend implementation.',
      'Integration of platform services.',
      'Cross-functional product delivery.',
      'Full-stack feature ownership.',
    ],
  },
  {
    number:  'PROJECT 04',
    name:    'HiHello Platform',
    meta:    'Digital Identity Platform',
    tags:    ['SAAS', 'API', 'REACT', 'NODE'],
    description:
      'Contribution to a modern digital business card and professional networking platform focused on usability, scalability, and product experience.',
    contribution: [
      'Frontend and backend development.',
      'API integration and service communication.',
      'Feature delivery across product workflows.',
      'Full-stack engineering collaboration.',
    ],
  },
  {
    number:  'PROJECT 05',
    name:    'Consortium Mobile Platform',
    meta:    'Mobile Product Engineering',
    tags:    ['MOBILE', 'REACT-NATIVE', 'API', 'FULLSTACK'],
    description:
      'Mobile application delivery combining React Native interfaces with backend services and API integrations for production use cases.',
    contribution: [
      'React Native mobile development.',
      'API integration.',
      'Backend service implementation.',
      'End-to-end feature delivery.',
      'Product-focused engineering execution.',
    ],
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__label">PROJECTS / DEPLOYMENTS</div>

      <div className="projects__intro">
        <h2 className="projects__heading">
          Selected systems, products, and platforms delivered across enterprise,
          startup, and international environments.
        </h2>
        <p className="projects__lead">
          A selection of projects and platforms where I contributed across backend
          architecture, APIs, microservices, cloud infrastructure, frontend
          delivery, and mobile application development.
        </p>
      </div>

      <div className="projects__list">
        {projects.map(({ number, name, meta, tags, description, contribution }) => (
          <article key={name} className="project-entry">
            <div className="project-entry__header">
              <span className="project-entry__number">{number}</span>
              <div className="project-entry__tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-entry__tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-entry__body">
              <div className="project-entry__left">
                <h3 className="project-entry__name">{name}</h3>
                <span className="project-entry__meta">{meta}</span>
                <p className="project-entry__description">{description}</p>
              </div>

              <div className="project-entry__right">
                <div className="project-entry__contrib-label">CONTRIBUTION</div>
                <ul className="project-entry__bullets">
                  {contribution.map((line) => (
                    <li key={line} className="project-entry__bullet">{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
