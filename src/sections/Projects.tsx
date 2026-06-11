import { motion, useReducedMotion } from 'motion/react'
import { containerVariants, itemVariants, EASE } from '../components/ui/motionConfig'

const projects = [
  {
    number:  'PROJECT 01',
    name:    'Arsenal FC Platform',
    meta:    'Node.js / EDA / BullMQ — NTT DATA',
    tags:    ['NODE', 'TYPESCRIPT', 'BULLMQ', 'EDA', 'MICROSERVICES'],
    description:
      'Distributed backend platform built for Arsenal FC through NTT DATA — microservices handling real-time sports data ingestion, asynchronous job processing, and downstream content delivery for a Premier League club\'s digital operations. The engineering constraint was reliability: match-day traffic is unpredictable, failures are visible, and upstream data providers do not retry.',
    contribution: [
      'Designed and built backend microservices in Node.js and TypeScript — defining service contracts, data models, and inter-service communication patterns across a distributed, event-driven architecture.',
      'Integrated external sports data providers and third-party APIs — designing the normalisation, validation, and routing layer that delivered reliable data to downstream service consumers.',
      'Built asynchronous job infrastructure with BullMQ — task scheduling, retry policies, and queue durability configured to sustain operational load during live match periods.',
      'Owned fault-tolerance at the service level: dead-letter handling, circuit design between services, and queue configuration that kept the system stable under high-concurrency event spikes.',
    ],
  },
  {
    number:  'PROJECT 02',
    name:    'NTT DATA Enterprise Systems',
    meta:    'Node.js / Azure / REST — Enterprise Delivery',
    tags:    ['NODE', 'TYPESCRIPT', 'AZURE', 'REST', 'EDA'],
    description:
      'Backend and full-stack engineering across multiple enterprise client engagements at NTT DATA — Node.js REST APIs, Azure-hosted services, and React frontend work delivered for clients operating production systems at scale. Each project required owned API development, cloud deployment operations, and coordinated delivery across distributed international teams.',
    contribution: [
      'Owned RESTful API development across client projects — endpoint design, business logic, validation, and third-party integration work built in Node.js and TypeScript.',
      'Deployed and operated backend services on Azure — App Services, messaging queues, and storage infrastructure — with direct responsibility for environment configuration and production CI/CD pipelines.',
      'Led microservice boundary decisions on distributed backend systems — decomposing services, defining communication contracts, and establishing data ownership rules across team boundaries.',
      'Delivered within NTT DATA\'s international engineering model — contributing to architecture reviews and sprint cycles alongside teams across Europe and Asia-Pacific.',
    ],
  },
  {
    number:  'PROJECT 03',
    name:    'Beebs Marketplace',
    meta:    'Node.js / React / Full-Stack Product',
    tags:    ['NODE', 'REACT', 'API', 'FULLSTACK'],
    description:
      'Full-stack engineering on a consumer marketplace product — Node.js REST API layer, backend service logic, and React frontend built across a shared codebase. Engineering work covered relational data modelling for marketplace workflows, third-party service integrations, and end-to-end feature ownership from schema design through to production UI.',
    contribution: [
      'Built the REST API layer in Node.js — endpoint design, data models, and business logic covering listings, user accounts, transaction state, and search workflows.',
      'Owned both sides of multiple feature cycles — designing the API contract on the backend, then building the React interface that consumed it, eliminating the hand-off gap.',
      'Integrated external APIs and third-party services into the backend layer — authentication providers, payment flows, and external data sources — with validation and error handling at each integration boundary.',
      'Maintained schema migrations, API versioning, and deployment coordination across a shared codebase where backend and frontend changes shipped together.',
    ],
  },
  {
    number:  'PROJECT 04',
    name:    'HiHello Platform',
    meta:    'Node.js / React / CRM Integration — SaaS',
    tags:    ['NODE', 'REACT', 'API', 'CRM', 'SAAS'],
    description:
      'Full-stack engineering on HiHello\'s SaaS platform — Node.js backend services and React frontend work within a live codebase with an active user base. Technical work centred on API development, CRM integration endpoints, and feature delivery across both web and mobile surfaces in a product environment where backend changes shipped directly to users.',
    contribution: [
      'Owned Node.js API development across core product workflows — profile management, contact exchange, and the service logic underpinning HiHello\'s primary user-facing features.',
      'Built CRM integration endpoints connecting platform profile data to enterprise tools — handling data mapping, synchronisation flows, and OAuth authentication with downstream providers.',
      'Delivered features end-to-end in React and Node.js — from API contract and data model design through to frontend implementation — within a production sprint cadence.',
      'Maintained backward-compatible APIs and managed deployment coordination on a live SaaS product, where unversioned breaking changes would directly affect active users.',
    ],
  },
  {
    number:  'PROJECT 05',
    name:    'Consortium Mobile Platform',
    meta:    'React Native / Node.js / End-to-End Delivery',
    tags:    ['REACT-NATIVE', 'NODE', 'API', 'MOBILE', 'FULLSTACK'],
    description:
      'React Native mobile application and Node.js backend service layer, designed and delivered end-to-end as the primary engineer across both codebases. The engineering challenge was full ownership of two layers simultaneously — maintaining a coherent API contract, consistent data model, and stable deployment pipeline without a separate backend team.',
    contribution: [
      'Architected the React Native application — screen structure, navigation patterns, state management, and API integration layer connecting the mobile client to all backend surfaces.',
      'Built the Node.js backend from the ground up — data models, REST API routes, authentication flows, and business logic designed specifically to support the mobile client\'s workflow requirements.',
      'Owned the API contract between client and server — endpoint design, response shapes, error handling, and versioning across the full development cycle.',
      'Delivered the complete product end-to-end as primary engineer — from architecture and initial build through to App Store and Google Play deployment.',
    ],
  },
]

function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="projects" id="projects">
      <div className="projects__label">PROJECTS / DEPLOYMENTS</div>

      <div className="projects__intro">
        <h2 className="projects__heading">
          Selected engineering work — enterprise platforms, SaaS products, and
          mobile applications delivered in production.
          <motion.span
            className="heading-accent"
            style={{ transformOrigin: 'left center' }}
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          />
        </h2>
        <p className="projects__lead">
          From a Premier League sports platform and global enterprise delivery to
          independently shipped mobile applications and SaaS products — each
          entry reflects direct ownership and end-to-end contribution.
        </p>
      </div>

      <motion.div
        className="projects__list"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={containerVariants}
      >
        {projects.map(({ number, name, meta, tags, description, contribution }) => (
          <motion.article key={name} className="project-entry reveal-item" variants={itemVariants}>
            <div className="project-entry__header">
              <span className="project-entry__number">{number}</span>
              <div className="project-entry__tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-entry__tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-entry__body">
              <div className="project-entry__left">
                <h3 className="project-entry__name">{name}</h3>
                <span className="project-entry__meta">{meta}</span>
                <p className="project-entry__description">{description}</p>
              </div>

              <div className="project-entry__right">
                <div className="project-entry__contrib-label">CONTRIBUTION</div>
                <ul className="project-entry__bullets">
                  {contribution.map((line) => (
                    <li key={line} className="project-entry__bullet">{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
