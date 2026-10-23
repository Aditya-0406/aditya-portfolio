import Section from "./Section";
import { skills } from "../data/portfolio";

// Renders one card per skill group, each with a row of tags.
// The outer map loops over groups, the inner map loops over that group's items.
export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.group} className="card">
            <h3>{group.group}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}