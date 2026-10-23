import { useEffect, useRef, useState } from "react";

// Animates a number from 0 to `target` the first time the element
// scrolls into view. Returns a ref to attach to the element and the
// formatted number to display.
export default function useCountUp(target, { duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Visitors who prefer reduced motion just see the final number.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame;

    // `tick` runs on every animation frame. It works out how far through
    // the animation we are (0 to 1) and eases it so it slows near the end.
    const tick = (start) => (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick(start));
    };

    // Starts the animation once, when at least half the element is visible.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        frame = requestAnimationFrame(tick(performance.now()));
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, display: value.toFixed(decimals) };
}
