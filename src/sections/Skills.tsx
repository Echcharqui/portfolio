import { motion, useReducedMotion } from 'motion/react'
import { containerVariants, itemVariants } from '../components/ui/motionConfig'

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
      'BullMQ / RabbitMQ / Kafka',
    ],
  },
  {
    id:     'cloud',
    label:  'CLOUD & INFRASTRUCTURE',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'GitHub Actions',
      'Linux',
    ],
  },
  {
    id:     'frontend',
    label:  'FRONTEND & MOBILE',
    skills: [
      'React',
      'React Native',
      'Next.js',
      'Expo',
    ],
  },
  {
    id:     'architecture',
    label:  'ARCHITECTURE & DELIVERY',
    skills: [
      'System Design',
      'API Design',
      'Service & Repository Patterns',
      'Architecture Review',
    ],
  },
]

function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="skills" id="skills">
      <div className="skills__label">SKILLS / CAPABILITIES</div>

      <motion.div
        className="skills__grid"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {skillGroups.map(({ id, label, skills }) => (
          <motion.div key={id} className="skills__group reveal-item" variants={itemVariants}>
            <div className="skills__group-header">{label}</div>
            <ul className="skills__items">
              {skills.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
