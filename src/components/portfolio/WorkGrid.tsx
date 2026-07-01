import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { workItems, type FilterKey } from "@/content";
import { WorkCard } from "./WorkCard";

// ── Filter definitions with live counts ──────────────────────────────────────
const getFilterCount = (key: FilterKey): number => {
  if (key === "all") return workItems.length;
  return workItems.filter((item) => item.filters.includes(key)).length;
};

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",        label: "All" },
  { key: "website",    label: "Website" },
  { key: "web-app",    label: "Web App" },
  { key: "mobile-app", label: "Mobile App" },
  { key: "ppt-pdf",    label: "Decks & Docs" },
];

export const WorkGrid = () => {
  const [active, setActive]       = useState<FilterKey>("all");
  const [allExpanded, setAllExpanded] = useState(false);

  const allCurated = workItems.filter((item) => item.showInAll === true);
  const allExtra   = workItems.filter((item) => !item.showInAll);

  const categoryItems = workItems.filter((item) => item.filters.includes(active));

  const isAllTab    = active === "all";
  const visibleItems = isAllTab
    ? (allExpanded ? workItems : allCurated)
    : categoryItems;

  const hasExtra = isAllTab && allExtra.length > 0;

  const handleFilterChange = (key: FilterKey) => {
    setActive(key);
    if (key !== "all") setAllExpanded(false);
  };

  return (
    <div className="mt-12 md:mt-16">
 
       {/* ── Filter bar ── */}
       <div className="mb-8">
         <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
           Filter by type
         </p>
         <div
           className="flex gap-2 overflow-x-auto pb-1 scrollbar-none md:flex-wrap md:overflow-visible"
           role="tablist"
           aria-label="Filter work by type"
         >

        {FILTERS.map((f) => {
          const count = getFilterCount(f.key);
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              role="tab"
              id={`work-filter-${f.key}`}
              aria-selected={isActive}
              aria-label={`Filter by ${f.label} — ${count} project${count !== 1 ? "s" : ""}`}
              title={`Show ${f.label} projects (${count})`}
              onClick={() => handleFilterChange(f.key)}
              data-cursor="hover"
              data-cursor-label={`${f.label} (${count})`}
              className={`
                shrink-0 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200
                ${isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-background/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }
              `}
            >
              {f.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
         })}
       </div>
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
        <div className="py-20 text-center text-sm text-muted-foreground">
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
             data-cursor-label={allExpanded ? "Keep it curated" : "Open the full stack of work"}
             aria-label={allExpanded ? "Show fewer projects" : `View all ${workItems.length} projects`}
             title={allExpanded ? "Show fewer projects" : `View all ${workItems.length} projects`}
             className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground"
           >

                {allExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Show fewer projects
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Show all {workItems.length} projects
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
