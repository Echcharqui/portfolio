import PageShell from "@/components/layouts/pageShell/PageShell";
import { skillGroups } from "@/lib/data/skills.data";

export default function Skills() {
  return (
    <PageShell
      label="SKILLS / STACK"
      title="Technical Stack"
      intro="Backend-heavy full-stack engineering across cloud infrastructure, APIs, databases, frontend/mobile, and system architecture."
    >
      <div className="skills__grid">
        {skillGroups.map(({ id, label, skills }) => (
          <div key={id} className="skills__group">
            <div className="skills__group-header">{label}</div>
            <ul className="skills__items">
              {skills.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
