import Section from "./Section";
import { profile } from "../data/portfolio";

// Contact card with a mailto button and social links. The email button
// opens the visitor's mail app, so no backend is needed yet.
export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <div className="card contact__card">
        <p>
          I'm open to internships, full-time roles and interesting projects.
          The quickest way to reach me is by email.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          {profile.email}
        </a>
        <div className="contact__links">
          <a href={profile.github} className="btn" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} className="btn" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}