import Section from "./Section";
import { projects } from "../data/portfolio";

// Renders one card per project: title and year, summary, bullet highlights,
// tech tags, and an optional link. The link only shows if `link` is non-empty
// in portfolio.js, so unfinished projects don't show a dead button.
export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <div className="project__head">
              <h3>{project.title}</h3>
              <span className="project__year">{project.year}</span>
            </div>
            <p className="project__summary">{project.summary}</p>
            <ul className="project__highlights">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                className="project__link"
                target="_blank"
                rel="noreferrer"
              >
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}