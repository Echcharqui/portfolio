const skillGroups = [
  {
    id:     'backend',
    label:  'BACKEND ENGINEERING',
    skills: [
      'Node.js',
      'TypeScript',
      'REST APIs',
      'GraphQL',
      'Microservices',
      'Event-Driven Architecture',
      'BullMQ',
      'RabbitMQ',
      'Kafka',
    ],
  },
  {
    id:     'frontend',
    label:  'FRONTEND & MOBILE',
    skills: [
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'Responsive Design',
      'Component Architecture',
    ],
  },
  {
    id:     'cloud',
    label:  'CLOUD & DEVOPS',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Jenkins',
      'Linux',
    ],
  },
  {
    id:     'practices',
    label:  'ENGINEERING PRACTICES',
    skills: [
      'System Design',
      'API Design',
      'Security Awareness',
      'OWASP Basics',
      'Testing Mindset',
      'Documentation',
      'Code Review',
      'Service / Repository Patterns',
    ],
  },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__label">SKILLS / CAPABILITIES</div>

      <div className="skills__grid">
        {skillGroups.map(({ id, label, skills }) => (
          <div key={id} className="skills__group">
            <div className="skills__group-header">{label}</div>
            <ul className="skills__items">
              {skills.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
