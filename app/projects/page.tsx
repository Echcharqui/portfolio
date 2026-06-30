import PageShell from "@/components/layouts/pageShell/PageShell";
import { projects } from "@/lib/data/projects.data";

export default function Projects() {
  return (
    <PageShell
      label="PROJECTS / CASE STUDIES"
      title="Selected Engineering Systems"
      intro="Backend-heavy, full-stack engineering work — cloud platforms, product systems, and mobile platforms delivered end-to-end in production."
    >
      <div className="projects__list">
        {projects.map(({ number, name, meta, tags, description, contribution }) => (
          <article key={name} className="project-entry">
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
          </article>
        ))}
      </div>
    </PageShell>
  );
}
