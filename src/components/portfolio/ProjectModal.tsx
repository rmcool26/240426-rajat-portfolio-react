import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/content";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [project?.slug]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => Math.min(i + 1, (project.gallery?.length ?? 1) - 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(i - 1, 0));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-md md:items-center md:p-6"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-t-3xl bg-background shadow-elegant md:rounded-3xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/90 backdrop-blur transition-colors hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid max-h-[92vh] grid-rows-[auto_1fr] md:grid-cols-[1.2fr_1fr] md:grid-rows-1">
              {/* Gallery */}
              <div className="relative overflow-hidden bg-secondary">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={idx}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      src={project.gallery[idx]}
                      alt={`${project.name} screen ${idx + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </AnimatePresence>
                  {project.gallery.length > 1 && (
                    <>
                      <button
                        onClick={() => setIdx((i) => Math.max(i - 1, 0))}
                        disabled={idx === 0}
                        className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-soft backdrop-blur disabled:opacity-30"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setIdx((i) => Math.min(i + 1, project.gallery.length - 1))}
                        disabled={idx === project.gallery.length - 1}
                        className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-soft backdrop-blur disabled:opacity-30"
                        aria-label="Next"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {project.gallery.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`h-1.5 rounded-full transition-all ${
                              i === idx ? "w-6 bg-primary" : "w-1.5 bg-foreground/30"
                            }`}
                            aria-label={`Go to ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="overflow-y-auto p-6 md:p-8">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-3xl font-bold leading-tight">{project.name}</h3>
                <p className="mt-2 text-base font-medium text-primary">{project.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                {project.stats?.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {project.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-border bg-secondary/50 p-4"
                      >
                        <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-6 text-xs text-muted-foreground">
                  Tip: use ← → arrow keys to navigate screens. Esc to close.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
