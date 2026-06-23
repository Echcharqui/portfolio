import PageShell from '../layouts/PageShell'

interface SkillGroup {
  id:     string
  label:  string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
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
      'Next.js',
      'React Native',
      'Expo',
    ],
  },
  {
    id:     'cloud',
    label:  'CLOUD & DEVOPS',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'Linux',
    ],
  },
  {
    id:     'data',
    label:  'DATABASES & CACHING',
    skills: [
      'MongoDB',
      'MySQL',
      'SQL Server',
      'Redis',
    ],
  },
  {
    id:     'architecture',
    label:  'ARCHITECTURE & INTEGRATION',
    skills: [
      'System Design',
      'API Design',
      'Service & Repository Patterns',
      'Third-Party API Integration',
      'Architecture Review',
    ],
  },
  {
    id:     'tooling',
    label:  'TOOLING & DELIVERY',
    skills: [
      'Git',
      'GitHub Actions',
      'CI/CD Pipelines',
      'Agile / Scrum Delivery',
    ],
  },
]

function SkillsPage() {
  return (
    <PageShell
      label="SKILLS / STACK"
      title="Technical Stack"
      intro="Backend-heavy full-stack engineering across cloud infrastructure, APIs, databases, frontend/mobile, and system architecture."
    >
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
    </PageShell>
  )
}

export default SkillsPage
