import { Link } from 'react-router-dom'
import cvFile from '../assets/documents/echcharqui-hamza-cv-en.pdf'

const snapshotItems = [
  { value: '6+', label: 'YEARS EXPERIENCE' },
  { value: 'BACKEND', label: 'CLOUD / FULL-STACK' },
  { value: 'MOROCCO', label: 'REMOTE READY' },
]

const featuredSystems = [
  {
    name: 'Arsenal FC Platform',
    description: 'Distributed backend microservices for real-time sports data and match-day load.',
  },
  {
    name: 'NTT DATA Internal Systems',
    description: 'Enterprise Node.js APIs and Azure infrastructure across international teams.',
  },
  {
    name: 'Beebs Marketplace',
    description: 'Full-stack marketplace product — Node.js API layer and React frontend.',
  },
]

const coreStack = [
  'Node.js', 'TypeScript', 'React', 'React Native',
  'AWS', 'Azure', 'Docker', 'Redis / BullMQ', 'MongoDB / SQL',
]



function HomePage() {
  return (
    <main className="main-content">
      <section className="home-hero" id="hero">
        <span className="home-hero__eyebrow">FULL-STACK SOFTWARE ENGINEER • MOROCCO</span>

        <h1 className="home-hero__title">
          <span className="home-hero__title-line">Hamza Echcharqui</span>
          <span className="home-hero__title-line home-hero__title-line--accent">Senior Full-Stack Software Engineer</span>
        </h1>

        <p className="home-hero__subtitle">
          Backend-leaning full-stack engineer building APIs, microservices,
          event-driven systems, and product-ready web/mobile platforms.
        </p>

        <div className="home-hero__actions">
          <Link to="/experience" className="btn btn--primary">View Experience</Link>
          <Link to="/projects" className="btn btn--outline">View Projects</Link>
          <a href={cvFile} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            Download CV
          </a>
        </div>

        <ul className="home-snapshot" aria-label="Quick facts">
          {snapshotItems.map(({ value, label }) => (
            <li key={label} className="home-snapshot__item">
              <span className="home-snapshot__value">{value}</span>
              <span className="home-snapshot__label">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="home-featured-label">
        <div id="home-featured-label" className="home-section__label">FEATURED SYSTEMS</div>

        <div className="home-featured-grid">
          {featuredSystems.map(({ name, description }) => (
            <Link key={name} to="/projects" className="home-featured-card">
              <h3 className="home-featured-card__name">{name}</h3>
              <p className="home-featured-card__description">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-stack-label">
        <div id="home-stack-label" className="home-section__label">CORE STACK</div>

        <ul className="home-stack-list">
          {coreStack.map((item) => (
            <li key={item} className="home-stack-list__item">{item}</li>
          ))}
        </ul>
      </section>

    </main>
  )
}

export default HomePage
