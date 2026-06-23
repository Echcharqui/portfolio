import PageShell from '../layouts/PageShell'

interface ProfileBlock {
  title:   string
  content: string
}

const profileBlocks: ProfileBlock[] = [
  {
    title:   'Professional Profile',
    content: 'Morocco-based Senior Full-Stack Software Engineer with 6+ years of experience across backend systems, APIs, microservices, cloud platforms, and web/mobile products.',
  },
  {
    title:   'Engineering Mindset',
    content: 'Focused on backend reliability, clean service boundaries, practical architecture, and systems that can survive real product pressure.',
  },
  {
    title:   'How I Work',
    content: 'Comfortable working across backend, frontend, mobile, cloud, and CI/CD. Strong preference for clear ownership, readable code, and shipping stable features.',
  },
  {
    title:   'Current Focus',
    content: 'Senior full-stack/backend-heavy roles, international teams, product engineering, cloud systems, and event-driven architecture.',
  },
]

function AboutPage() {
  return (
    <PageShell
      label="ABOUT / PROFILE"
      title="Backend-leaning Full-Stack Engineer"
      intro="Building APIs, platforms, cloud systems, and product-ready applications, with backend engineering as the core discipline."
    >
      <div className="about-blocks">
        {profileBlocks.map(({ title, content }) => (
          <div key={title} className="about-blocks__item">
            <h3 className="about-blocks__title">{title}</h3>
            <p className="about-blocks__content">{content}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

export default AboutPage
