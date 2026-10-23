import { profile } from "../data/portfolio";

// Footer with an auto-updating year: `new Date().getFullYear()` returns
// the current year, so you never have to edit it.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </div>
    </footer>
  );
}