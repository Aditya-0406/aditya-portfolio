import Section from "./Section";
import { about } from "../data/portfolio";

// Renders the intro paragraphs on the left and quick facts on the right.
// Both come from the `about` object in portfolio.js.
export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="card about__facts">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}