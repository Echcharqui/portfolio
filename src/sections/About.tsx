import { motion, useReducedMotion } from 'motion/react'
import { containerVariants, itemVariants, EASE } from '../components/ui/motionConfig'

const infoCards = [
  {
    title:   'Backend-Oriented Full-Stack',
    content: 'Node.js · TypeScript · REST & GraphQL APIs · Microservices · Event-Driven Architecture',
  },
  {
    title:   'Production APIs & Microservices',
    content: 'Distributed Systems · Message Queues · Service Design · Performance at Scale',
  },
  {
    title:   'Cloud + Cross-Platform Delivery',
    content: 'AWS · Azure · React · React Native · Full Delivery Cycles',
  },
]

function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="about" id="about">
      <div className="about__label">ABOUT / PROFILE</div>

      <h2 className="about__heading">
        Engineering reliable systems from backend architecture to user-facing products.
        <motion.span
          className="heading-accent"
          style={{ transformOrigin: 'left center' }}
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={reduceMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        />
      </h2>

      <div className="about__body">
        <p className="about__para">
          Morocco-based Senior Full-Stack Software Engineer with over 6 years of
          experience designing and delivering production systems across backend,
          frontend, and mobile stacks. My core is backend engineering — Node.js
          and TypeScript, RESTful and GraphQL APIs, microservices, and
          event-driven systems deployed on AWS and Azure.
        </p>
        <p className="about__para">
          I also build product-facing interfaces with React and React Native,
          which lets me own full delivery cycles — from system architecture
          through to the end-user experience. I have contributed to
          international and enterprise-scale projects, approaching each with a
          focus on reliability, maintainability, and engineering quality.
        </p>
      </div>

      <motion.div
        className="about__cards"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {infoCards.map(({ title, content }) => (
          <motion.div key={title} className="about__card" variants={itemVariants}>
            <h3 className="about__card-title">{title}</h3>
            <p className="about__card-content">{content}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About
