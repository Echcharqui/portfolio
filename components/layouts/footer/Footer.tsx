import { statusItems } from "@/lib/data/footer.data"

const currentYear = new Date().getFullYear()

function FooterContact() {

    return (
        <footer className="footer-contact">
            <div className="footer-contact__panel">
                <div className="footer-contact__panel-left">
                    <div className="footer-contact__panel-header">STATUS</div>
                    <ul className="footer-contact__avail-list">
                        {statusItems.map((item) => (
                            <li key={item} className="footer-contact__avail-item">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="footer-contact__panel-right">
                    <div className="footer-contact__panel-header">INITIATE CONTACT</div>
                    <div className="footer-contact__actions">
                        <a href="mailto:echcharqui.dev@gmail.com" className="btn btn--primary btn--sm">
                            Email Me
                        </a>
                        <a href="tel:+212659040789" className="btn btn--outline btn--sm">
                            Call Me
                        </a>
                        <a
                            href="https://linkedin.com/in/hamza-echcharqui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--outline btn--sm"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Echcharqui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--outline btn--sm"
                        >
                            GitHub
                        </a>
                        <a
                            href="/echcharqui-hamza-cv-en.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--outline btn--sm"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>


            <div className="footer-contact__bottom">
                <p className="footer-contact__copyright">
                    © {currentYear} Hamza Echcharqui. All rights reserved.
                    <br />
                    Built with React, TypeScript, and Vite.
                </p>
                <p className="footer-contact__sys-label">SYS::PORTFOLIO / v1.0</p>
            </div>
        </footer>
    )
}

export default FooterContact
