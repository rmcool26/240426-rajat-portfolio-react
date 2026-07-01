import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * RMCool Signal Cursor
 * - Small precise dot + soft outer halo
 * - Premium glass pill tooltips
 * - Supports prefers-reduced-motion
 * - Hidden on touch devices
 */
export const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // High-precision spring for the center dot
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.3 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.3 });

  // Softer, trailing spring for the halo
  const hx = useSpring(x, { damping: 25, stiffness: 200, mass: 0.5 });
  const hy = useSpring(y, { damping: 25, stiffness: 200, mass: 0.5 });

  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [touch, setTouch] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Touch detection
    if (window.matchMedia("(hover: none)").matches) {
      setTouch(true);
    }

    // Reduced motion detection
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionHandler);

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
      motionQuery.removeEventListener('change', motionHandler);
    };
  }, [x, y]);

  if (touch) return null;

  // Fallback to raw coordinates if reduced motion is preferred
  const dotX = reducedMotion ? x : sx;
  const dotY = reducedMotion ? y : sy;
  const haloX = reducedMotion ? x : hx;
  const haloY = reducedMotion ? y : hy;

  return (
    <>
      {/* center dot - the "Signal" anchor */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ 
            scale: hover ? 0.6 : 1, 
            opacity: hover ? 0.7 : 1 
          }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 25 }}
          className="h-1 w-1 rounded-full bg-foreground mix-blend-difference"
        />
      </motion.div>

      {/* outer halo - the "Signal" pulse */}
      <motion.div
        style={{ x: haloX, y: haloY }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ 
            scale: hover ? 1.8 : 1, 
            opacity: hover ? 1 : 0.4 
          }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 250, damping: 20 }}
          className="h-6 w-6 rounded-full border border-foreground/30 bg-foreground/5 mix-blend-difference"
        />
      </motion.div>

      {/* contextual label - Premium Dark Glass Pill */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[101]"
      >
        <AnimatePresence>
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: reducedMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: reducedMotion ? 1 : 0.95 }}
              transition={reducedMotion ? { duration: 0.1 } : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="ml-5 mt-5 whitespace-nowrap rounded-full bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white border border-white/10 shadow-xl"
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
