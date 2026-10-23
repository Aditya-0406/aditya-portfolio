import { useEffect, useState } from "react";

// A thin gradient bar at the top of the page that fills as you scroll.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  // Works out how far down the page you are as a number from 0 to 1.
  // Runs on scroll and on window resize.
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
