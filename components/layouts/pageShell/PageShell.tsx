import { Shell } from "@/types/pageShell.type"

function PageShell({ label, title, intro, children }: Shell) {
    return (
        <main className="main-content">
            <section className="page-shell">
                <div className="page-shell__label">{label}</div>
                <h2 className="page-shell__title">
                    {title}
                    <span className="heading-accent" />
                </h2>
                {intro && <p className="page-shell__intro">{intro}</p>}
                {children}
            </section> 
        </main>
    )
}

export default PageShell
