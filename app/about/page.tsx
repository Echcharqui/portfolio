import PageShell from "@/components/layouts/pageShell/PageShell";
import { profileBlocks } from "@/lib/data/about.data";


export default function About() {
  return (
    <PageShell
      label="ABOUT / PROFILE"
      title="Backend-leaning Full-Stack Engineer"
      intro="Building APIs, platforms, cloud systems, and product-ready applications, with backend engineering as the core discipline."
    >
      <div className="about-blocks">
        {profileBlocks.map(({ title, content }) => (
          <div key={title} className="about-blocks__item">
            <h3 className="about-blocks__title">{title}</h3>
            <p className="about-blocks__content">{content}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
