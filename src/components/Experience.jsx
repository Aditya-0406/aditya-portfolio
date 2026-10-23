import Section from "./Section";
import { experience } from "../data/portfolio";

// Renders one card per role. The period line only shows when `period`
// is filled in, so empty TODO fields don't leave a blank gap.
export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Leadership & activities">
      <ul className="timeline">
        {experience.map((item) => (
          <li key={item.role + item.org} className="card">
            <div className="timeline__head">
              <h3>{item.role}</h3>
              {item.period && (
                <span className="timeline__period">{item.period}</span>
              )}
            </div>
            <p className="timeline__org">{item.org}</p>
            <p className="timeline__desc">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}