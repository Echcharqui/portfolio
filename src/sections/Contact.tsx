import cvFile from '../assets/documents/echcharqui-hamza-cv-en.pdf'
import { motion, useReducedMotion } from 'motion/react'
import { EASE } from '../components/ui/motionConfig'

const availabilityItems = [
  'Backend Engineering',
  'Node.js / TypeScript',
  'React & React Native',
  'Full-Stack Engineering',
  'Remote Opportunities',
  'International Teams',
]

const metaItems = [
  { key: 'SYS-ID', value: 'HE-ENG-2026' },
  { key: 'UNIT', value: 'BACKEND ENGINEERING' },
  { key: 'STATUS', value: 'OPEN — SENIOR ROLES' },
]

function Contact() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="contact" id="contact">
      <div className="contact__label">CONTACT / TRANSMISSION</div>

      <div className="contact__badge">OPEN FOR WORK</div>

      <h2 className="contact__heading">
        Let's build reliable systems.
        <motion.span
          className="heading-accent"
          style={{ transformOrigin: 'left center' }}
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={reduceMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        />
      </h2>

      <p className="contact__description">
        Senior Full-Stack Engineer with a backend-first focus — Node.js,
        TypeScript, microservices, and cloud infrastructure across AWS and Azure.
        Available remotely for permanent or contract engagements with
        international teams.
      </p>

      <div className="contact__panel">
        <div className="contact__panel-left">
          <div className="contact__panel-header">AVAILABLE FOR</div>
          <ul className="contact__avail-list">
            {availabilityItems.map((item) => (
              <li key={item} className="contact__avail-item">{item}</li>
            ))}
          </ul>
        </div>

        <div className="contact__panel-right">
          <div className="contact__panel-header">INITIATE CONTACT</div>
          <div className="contact__actions">
            <a href="tel:+212659040789" className="btn btn--primary">
              Call Me
            </a>
            <a href="mailto:echcharqui.dev@gmail.com" className="btn btn--outline">
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/hamza-echcharqui"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Echcharqui"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              GitHub
            </a>

            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <footer className="contact__footer">
        {metaItems.map(({ key, value }) => (
          <span key={key} className="contact__meta-item">
            <span className="contact__meta-key">{key}:</span>
            {' '}{value}
          </span>
        ))}
      </footer>
    </section>
  )
}

export default Contact
