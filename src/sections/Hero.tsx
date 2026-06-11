import cvFile from '../assets/documents/echcharqui-hamza-cv-en.pdf'
import { motion, useReducedMotion } from 'motion/react'
import { EASE } from '../components/ui/motionConfig'

const stats = [
  { value: '6+', label: 'YEARS EXPERIENCE' },
  { value: 'NODE.JS', label: 'TYPESCRIPT' },
  { value: 'REACT', label: 'REACT NATIVE' },
  { value: 'APIS', label: 'MICROSERVICES' },
  { value: 'AWS', label: 'AZURE' },
  { value: 'MOROCCO', label: 'INTERNATIONAL' },
]

type FadeProps = {
  initial?: { opacity: number; y: number }
  animate?: { opacity: number; y: number }
  transition?: { duration: number; ease: [number, number, number, number]; delay: number }
}

function Hero() {
  const reduceMotion = useReducedMotion()

  const fade = (delay: number): FadeProps =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: EASE, delay },
        }

  return (
    <section className="hero" id="hero">
      <motion.header className="hero__header" {...fade(0.05)}>
        <span className="hero__eyebrow">FULL-STACK SOFTWARE ENGINEER • MOROCCO</span>
        <span className="hero__sys">SYS :: ENG_001</span>
      </motion.header>

      <div className="hero__content">
        <motion.h1 className="hero__title" {...fade(0.15)}>
          <span className="hero__title-line">Hamza</span>
          <span className="hero__title-line">Echcharqui</span>
        </motion.h1>

        <motion.p className="hero__bio" {...fade(0.25)}>
          Senior Full-Stack Software Engineer with over 6 years of experience
          building reliable, production-grade systems across backend and frontend
          stacks. Specializing in Node.js and TypeScript for server-side
          architecture — RESTful and GraphQL APIs, microservices, and
          event-driven systems on AWS and Azure. Delivering clean,
          component-driven interfaces with React and React Native, across
          enterprise environments and international teams.
        </motion.p>

        <motion.ul
          className="hero__stats"
          aria-label="Key skills and experience"
          {...fade(0.35)}
        >
          {stats.map(({ value, label }) => (
            <li key={`${value}-${label}`} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div className="hero__actions" {...fade(0.45)}>
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
