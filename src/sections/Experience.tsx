const entries = [
  {
    company: 'NTT DATA',
    role:    'Senior Full-Stack Software Engineer',
    meta:    'Enterprise / International',
    tags:    ['SYS', 'ARCH', 'API', 'CLOUD', 'EDA'],
    bullets: [
      'Enterprise and international project delivery across backend and frontend stacks.',
      'Backend architecture with Node.js and TypeScript — RESTful and event-driven APIs, microservices.',
      'Azure cloud infrastructure, service configuration, and production-grade system deployment.',
      'Frontend delivery with React in cross-functional, multi-team engineering environments.',
    ],
  },
  {
    company: 'Arsenal FC Project',
    role:    'Full-Stack / Backend Engineering Contribution',
    meta:    'Sport Tech / Product Engineering',
    tags:    ['ARCH', 'API', 'EDA', 'SVC'],
    bullets: [
      'Microservice architecture design and delivery for a high-visibility sports technology system.',
      'API integrations and event-driven communication across distributed backend services.',
      'Job queue coordination with BullMQ for real-time service operations and task scheduling.',
      'Service-oriented architecture built for production-level reliability and scalability.',
    ],
  },
  {
    company: 'Product & Startup Engagements',
    role:    'Full-Stack Engineer',
    meta:    'Various / Mobile & Web Product Work',
    tags:    ['MOBILE', 'API', 'WEB', 'PROD'],
    bullets: [
      'React Native mobile application development across full product cycles.',
      'Frontend and backend delivery in fast-moving startup and product engineering environments.',
      'Cross-functional collaboration spanning product, design, and engineering teams.',
      'API-to-interface ownership — from backend architecture through to user-facing delivery.',
    ],
  },
]

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__label">EXPERIENCE / SYSTEMS</div>

      <div className="experience__timeline">
        {entries.map(({ company, role, meta, tags, bullets }) => (
          <div key={company} className="experience__entry">
            <div className="experience__indicator">
              <div className="experience__node" />
            </div>

            <div className="experience__card">
              <header className="experience__card-header">
                <h3 className="experience__company">{company}</h3>
                <p className="experience__role">{role}</p>
                <span className="experience__meta">{meta}</span>
              </header>

              <div className="experience__tags">
                {tags.map((tag) => (
                  <span key={tag} className="experience__tag">{tag}</span>
                ))}
              </div>

              <ul className="experience__bullets">
                {bullets.map((bullet) => (
                  <li key={bullet} className="experience__bullet">{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
