import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Custom cursor with optional contextual label (e.g. "Click me").
 * - Reads data-cursor="hover" to expand
 * - Reads data-cursor-label="..." to show a tooltip near the cursor
 * - Hidden on touch devices
 */
export const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [touch, setTouch] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) {
      setTouch(true);
      return;
    }
    const updateFromTarget = (t: HTMLElement | null) => {
      if (!t) return;
      targetRef.current = t;
      const interactive = t.closest('a, button, [data-cursor="hover"]') as HTMLElement | null;
      setHover(!!interactive);
      const labelEl = t.closest("[data-cursor-label]") as HTMLElement | null;
      setLabel(labelEl?.getAttribute("data-cursor-label") ?? null);
    };
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      updateFromTarget(e.target as HTMLElement | null);
    };
    const refresh = () => setTimeout(() => updateFromTarget(targetRef.current), 0);
    window.addEventListener("mousemove", move);
    window.addEventListener("click", refresh, true);
    window.addEventListener("pointerup", refresh, true);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", refresh, true);
      window.removeEventListener("pointerup", refresh, true);
    };
  }, [x, y]);

  if (touch) return null;

  return (
    <>
      {/* inner dot */}
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

      {/* outer ring */}
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

      {/* contextual label */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[101]"
      >
        <AnimatePresence>
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="ml-5 mt-5 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-background shadow-lg"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Cursor;
