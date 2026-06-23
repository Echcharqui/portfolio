import type { ReactNode } from 'react'

interface Props {
  label: string
  title: string
  intro?: string
  children?: ReactNode
}

function PageShell({ label, title, intro, children }: Props) {
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
