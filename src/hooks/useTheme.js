import { useEffect, useState } from "react";

// Reads the saved theme, or falls back to the visitor's system preference.
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    // localStorage can be blocked; ignore and use the system setting
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Whenever `theme` changes: write it onto <html data-theme="...">,
  // which the CSS variables key off, and remember it for next visit.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  // Flips between light and dark. Called by the navbar button.
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
