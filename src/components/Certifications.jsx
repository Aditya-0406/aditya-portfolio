import Section from "./Section";
import { certifications } from "../data/portfolio";

// Renders one small card per certification: title and issuer.
// `certifications.map(...)` loops over the array in portfolio.js
// and returns one card for each entry.
export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials">
      <div className="certs__grid">
        {certifications.map((cert) => (
          <div key={cert.title} className="card cert">
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}