import PageShell from '../layouts/PageShell'
import cvFile from '../assets/documents/echcharqui-hamza-cv-en.pdf'

const statusItems = [
  'Location: Morocco',
  'Availability: Open to senior full-stack / backend-heavy roles',
  'Work mode: Remote / hybrid / international teams',
  'Focus: APIs, microservices, cloud systems, product platforms',
]

function ContactPage() {
  return (
    <PageShell
      label="CONTACT / TRANSMISSION"
      title="Let's Build Something Reliable"
      intro="Available for senior full-stack, backend-heavy, remote, CDI, and international opportunities."
    >
      <div className="contact__badge">OPEN FOR WORK</div>

      <div className="contact__panel">
        <div className="contact__panel-left">
          <div className="contact__panel-header">STATUS</div>
          <ul className="contact__avail-list">
            {statusItems.map((item) => (
              <li key={item} className="contact__avail-item">{item}</li>
            ))}
          </ul>
        </div>

        <div className="contact__panel-right">
          <div className="contact__panel-header">INITIATE CONTACT</div>
          <div className="contact__actions">
            <a href="mailto:echcharqui.dev@gmail.com" className="btn btn--primary">
              Email Me
            </a>
            <a href="tel:+212659040789" className="btn btn--outline">
              Call Me
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
    </PageShell>
  )
}

export default ContactPage
