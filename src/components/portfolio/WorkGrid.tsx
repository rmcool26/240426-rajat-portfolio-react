import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { workItems, type FilterKey } from "@/content";
import { WorkCard } from "./WorkCard";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",        label: "All" },
  { key: "website",    label: "Website" },
  { key: "web-app",    label: "Web App" },
  { key: "mobile-app", label: "Mobile App" },
];

export const WorkGrid = () => {
  const [active, setActive] = useState<FilterKey>("all");
  const [allExpanded, setAllExpanded] = useState(false);

  // "All" tab: curated 8 first, then rest on expand
  const allCurated = workItems.filter((item) => item.showInAll === true);
  const allExtra   = workItems.filter((item) => !item.showInAll);

  // Category tabs: full list for that filter
  const categoryItems = workItems.filter((item) =>
    item.filters.includes(active)
  );

  // What to actually render
  const isAllTab = active === "all";
  const visibleItems = isAllTab
    ? allExpanded
      ? workItems // all 20 when expanded
      : allCurated // 8 curated by default
    : categoryItems;

  const hasExtra = isAllTab && allExtra.length > 0;

  const handleFilterChange = (key: FilterKey) => {
    setActive(key);
    if (key !== "all") setAllExpanded(false); // reset expand when switching tabs
  };

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
            id={`work-filter-${f.key}`}
            aria-selected={active === f.key}
            onClick={() => handleFilterChange(f.key)}
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
          {visibleItems.map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleItems.length === 0 && (
        <div className="py-20 text-center text-muted-foreground text-sm">
          No projects in this category yet.
        </div>
      )}

      {/* ── View all work / Show less — only on "All" tab ── */}
      {hasExtra && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => setAllExpanded((prev) => !prev)}
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground"
          >
            {allExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                View all work
                <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  +{allExtra.length}
                </span>
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
};
