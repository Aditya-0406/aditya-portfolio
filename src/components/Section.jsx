import Reveal from "./Reveal";
import "./Sections.css";

// Wrapper that gives every section the same layout: an anchor id (so the
// navbar links can scroll to it), an eyebrow label, a heading and content.
// The heading and content fade in when the section scrolls into view.
export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">{eyebrow}</p>
          <h2 className="section__title">{title}</h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
