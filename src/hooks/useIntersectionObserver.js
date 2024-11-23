import { useEffect, useState, RefObject } from "react";

export function useIntersectionObserver(ref, options = { threshold: 0.1 }) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], obs) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        obs.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { isIntersecting };
}
