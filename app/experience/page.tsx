import PageShell from "@/components/layouts/pageShell/PageShell";
import { entries } from "@/lib/data/experience.data";

export default function Experience() {
  return (
    <PageShell
      label="EXPERIENCE / SYSTEMS"
      title="Engineering Experience"
      intro="Backend-heavy full-stack experience across enterprise delivery, a high-traffic sports platform, and a string of product and startup engagements — spanning Node.js APIs, event-driven microservices, and end-to-end web/mobile delivery."
    >
      <div className="experience__timeline">
        {entries.map(({ company, role, date, meta, engagements, tags, bullets }) => (
          <div key={company} className="experience__entry">
            <div className="experience__indicator">
              <div className="experience__node" />
            </div>

            <div className="experience__card">
              <header className="experience__card-header">
                <h3 className="experience__company">{company}</h3>
                <p className="experience__role">{role}</p>
                {date && <span className="experience__date">{date}</span>}
                <span className="experience__meta">{meta}</span>
                {engagements && (
                  <ul className="experience__engagements">
                    {engagements.map(({ name, period }) => (
                      <li key={name} className="experience__engagement">
                        {name} · {period}
                      </li>
                    ))}
                  </ul>
                )}
              </header>

              <div className="experience__tags">
                {tags.map((tag) => (
                  <span key={tag} className="experience__tag">{tag}</span>
                ))}
              </div>

              <ul className="experience__bullets">
                {bullets.map((bullet) => (
                  <li key={bullet} className="experience__bullet">{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
