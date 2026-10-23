import { profile, stats, heroRoles } from "../data/portfolio";
import useTypewriter from "../hooks/useTypewriter";
import useCountUp from "../hooks/useCountUp";
import "./Hero.css";

// One animated stat. It's its own component because each stat needs
// its own count-up hook, and hooks can't be called inside a .map().
function Stat({ value, decimals, suffix, label }) {
  const { ref, display } = useCountUp(value, { decimals });
  return (
    <li ref={ref}>
      <strong>
        {display}
        {suffix}
      </strong>
      <span>{label}</span>
    </li>
  );
}

export default function Hero() {
  // The word currently being typed, e.g. "IoT dev".
  const typed = useTypewriter(heroRoles);

  return (
    <section id="home" className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__inner">
        <p className="hero__eyebrow">Hi, I'm</p>
        <h1 className="hero__title">{profile.name}</h1>
        <h2 className="hero__role">{profile.role}</h2>
        <p className="hero__typed">
          I build <span>{typed}</span>
          <i className="hero__cursor" />
        </p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href={profile.resumeUrl} className="btn" download>
            Download resume
          </a>
        </div>

        <ul className="hero__stats">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </ul>
      </div>
    </section>
  );
}
