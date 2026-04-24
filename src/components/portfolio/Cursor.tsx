import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor — refined.
 * - Inner dot uses mix-blend-difference for visibility on light + dark
 * - Outer ring expands on interactive elements
 * - Hidden on touch devices
 */
export const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setTouch(true);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest('a, button, [data-cursor="hover"]'));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (touch) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 0.4 : 1, opacity: hover ? 0.5 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="h-3 w-3 rounded-full bg-foreground mix-blend-difference"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 1 : 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="h-9 w-9 rounded-full border border-foreground/40 mix-blend-difference"
        />
      </motion.div>
    </>
  );
};
