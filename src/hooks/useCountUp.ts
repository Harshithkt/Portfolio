import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Animates from the last shown value to `target` once `start` is true, so a
// late API update eases from the fallback number instead of restarting at 0.
export function useCountUp(target: number, start: boolean, duration = 1200) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);
  const shown = useRef(0);

  useEffect(() => {
    if (!start || reduceMotion) return;
    const from = shown.current;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      shown.current = Math.round(from + (target - from) * eased);
      setValue(shown.current);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, reduceMotion]);

  return reduceMotion ? target : value;
}
