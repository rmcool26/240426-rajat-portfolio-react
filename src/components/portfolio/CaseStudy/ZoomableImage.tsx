import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  /** Fallback content when no src — still zoomable into a placeholder modal */
  children?: ReactNode;
};

/**
 * Image wrapper that:
 * - shows a "Click me" tooltip via custom cursor (data-cursor-label)
 * - on click, opens an enlarged modal view (Esc / backdrop closes)
 */
export function ZoomableImage({ src, alt = "", caption, className = "", children }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="hover"
        data-cursor-label="Click to zoom"
        className={`group relative block w-full overflow-hidden rounded-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}
        aria-label={alt || "Open image"}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center">{children}</div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              data-cursor="hover"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
                />
              ) : (
                <div className="flex h-[70vh] w-[80vw] items-center justify-center rounded-xl bg-neutral-900 text-neutral-400">
                  {children}
                </div>
              )}
              {caption && (
                <p className="mt-3 text-center text-xs uppercase tracking-wider text-white/70">
                  {caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ZoomableImage;
