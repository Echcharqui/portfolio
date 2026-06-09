const stats = [
  { value: '7+',       label: 'YEARS EXPERIENCE'  },
  { value: 'NODE.JS',  label: 'TYPESCRIPT'         },
  { value: 'REACT',    label: 'REACT NATIVE'       },
  { value: 'APIS',     label: 'MICROSERVICES'      },
  { value: 'AWS',      label: 'AZURE'              },
  { value: 'MOROCCO',  label: 'INTERNATIONAL'      },
]

function Hero() {
  return (
    <section className="hero" id="hero">
      <header className="hero__header">
        <span className="hero__eyebrow">FULL-STACK SOFTWARE ENGINEER • MOROCCO</span>
        <span className="hero__sys">SYS :: ENG_001</span>
      </header>

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-line">Hamza</span>
          <span className="hero__title-line">Echcharqui</span>
        </h1>

        <p className="hero__bio">
          Senior Full-Stack Software Engineer with over 7 years of experience
          building reliable, production-grade systems across backend and frontend
          stacks. Specializing in Node.js and TypeScript for server-side
          architecture — RESTful and GraphQL APIs, microservices, and
          event-driven systems on AWS and Azure. Delivering clean,
          component-driven interfaces with React and React Native, across
          enterprise environments and international teams.
        </p>

        <ul className="hero__stats" aria-label="Key skills and experience">
          {stats.map(({ value, label }) => (
            <li key={`${value}-${label}`} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </li>
          ))}
        </ul>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#" className="btn btn--outline">Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
