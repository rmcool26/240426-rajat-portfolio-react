import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { workItems, type FilterKey } from "@/content";
import { WorkCard } from "./WorkCard";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "website", label: "Website" },
  { key: "web-app", label: "Web App" },
  { key: "mobile-app", label: "Mobile App" },
];

export const WorkGrid = () => {
  const [active, setActive] = useState<FilterKey>("all");

  const visible = workItems.filter(
    (item) => active === "all" || item.filters.includes(active)
  );

  return (
    <div className="mt-12 md:mt-16">
      {/* ── Filter bar ── */}
      <div
        className="mb-8 flex gap-2 overflow-x-auto pb-1 scrollbar-none md:flex-wrap md:overflow-visible"
        role="tablist"
        aria-label="Filter work by type"
      >
        {FILTERS.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            onClick={() => setActive(f.key)}
            data-cursor="hover"
            className={`
              shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200
              ${
                active === f.key
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-background/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── Card grid ── */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state (safety net — should never appear with valid data) */}
      {visible.length === 0 && (
        <div className="py-20 text-center text-muted-foreground text-sm">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
};
