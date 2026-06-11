interface Engagement {
  name:   string
  period: string
}

interface Entry {
  company:      string
  role:         string
  date?:        string
  meta:         string
  engagements?: Engagement[]
  tags:         string[]
  bullets:      string[]
}

const entries: Entry[] = [
  {
    company: 'NTT DATA',
    role:    'Senior Full-Stack Software Engineer',
    date:    'OCT 2024 — APR 2026',
    meta:    'Enterprise / International Delivery',
    tags:    ['BACKEND', 'NODE', 'AZURE', 'REST', 'EDA'],
    bullets: [
      'Owned backend API development across enterprise client projects — Node.js and TypeScript services covering RESTful interfaces, business logic layers, and third-party system integrations.',
      'Designed and delivered microservices with event-driven communication patterns, decoupling service responsibilities and enabling reliable asynchronous processing across distributed backend systems.',
      'Deployed and operated services on Azure — App Services, storage, and messaging infrastructure — with direct ownership over environment configuration, CI/CD pipelines, and production releases.',
      'Collaborated with engineering teams across Europe and Asia-Pacific within NTT DATA\'s international project structure, contributing to architectural reviews, technical specifications, and sprint delivery.',
    ],
  },
  {
    company: 'Arsenal FC',
    role:    'Backend Engineer — Sports Technology Platform',
    meta:    'Sport Tech / High-Traffic Real-Time System',
    tags:    ['MICROSERVICES', 'API', 'BULLMQ', 'EDA', 'QUEUE'],
    bullets: [
      'Designed and built backend microservices for a high-visibility sports technology platform — defining service contracts, data flow boundaries, and component responsibilities across a distributed architecture.',
      'Integrated external sports data providers and third-party APIs into the platform backend, handling data normalisation, validation, and reliable delivery to downstream service consumers.',
      'Implemented job queue infrastructure with BullMQ — asynchronous task processing, retry logic, and scheduled background operations built to handle match-day operational load and event spikes.',
      'Built for production reliability under live event traffic conditions — fault-tolerant service design, queue durability, and consistent system behaviour during high-concurrency periods.',
    ],
  },
  {
    company: 'Product & Startup Engagements',
    role:    'Full-Stack Engineer — Web & Mobile',
    date:    'MAR 2020 — MAR 2025',
    meta:    'Product Engineering / Web & Mobile',
    engagements: [
      { name: 'HiHello',    period: 'MAR 2020 — MAY 2022' },
      { name: 'Beebs',      period: 'JUN 2022 — SEP 2024' },
      { name: 'EasyTrip',   period: 'OCT 2024 — JAN 2025' },
      { name: 'Consortium', period: 'JAN 2025 — MAR 2025' },
    ],
    tags:    ['MOBILE', 'RN', 'API', 'NODE', 'REACT'],
    bullets: [
      'Built and shipped React Native mobile applications across full product cycles — from API design and backend service setup through to App Store and Google Play delivery.',
      'Owned the full stack end-to-end: designed backend routes, data models, and service logic in Node.js, then built the React and React Native interfaces that consumed them — reducing hand-off friction in small-team environments.',
      'Collaborated directly with product managers and designers in fast-moving startup contexts, contributing to technical scoping, sprint planning, and delivery prioritisation.',
      'Delivered complete web and mobile products as the primary engineer, maintaining frontend and backend codebases concurrently across multiple short-cycle engagements.',
    ],
  },
]

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__label">EXPERIENCE / SYSTEMS</div>

      <div className="experience__timeline">
        {entries.map(({ company, role, date, meta, engagements, tags, bullets }) => (
          <div key={company} className="experience__entry">
            <div className="experience__indicator">
              <div className="experience__node" />
            </div>

            <div className="experience__card">
              <header className="experience__card-header">
                <h3 className="experience__company">{company}</h3>
                <p className="experience__role">{role}</p>
                {date && <span className="experience__date">{date}</span>}
                <span className="experience__meta">{meta}</span>
                {engagements && (
                  <ul className="experience__engagements">
                    {engagements.map(({ name, period }) => (
                      <li key={name} className="experience__engagement">
                        {name} · {period}
                      </li>
                    ))}
                  </ul>
                )}
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
