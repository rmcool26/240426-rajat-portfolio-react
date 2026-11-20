import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { workItems, type FilterKey } from "@/content";
import { WorkCard } from "./WorkCard";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "case-study", label: "Case studies" },
  { key: "web-app", label: "Web apps" },
  { key: "website", label: "Websites" },
  { key: "mobile-app", label: "Mobile apps" },
  { key: "ppt-pdf", label: "Decks & docs" },
];

export const WorkGrid = () => {
  const [active, setActive] = useState<FilterKey>("all");
  const [allExpanded, setAllExpanded] = useState(false);

  const allCurated = useMemo(() => workItems.filter((item) => item.showInAll === true), []);
  const allExtra = useMemo(() => workItems.filter((item) => !item.showInAll), []);
  const categoryItems = useMemo(
    () => workItems.filter((item) => item.filters.includes(active)),
    [active],
  );

  const countFor = (key: FilterKey) => key === "all"
    ? workItems.length
    : workItems.filter((item) => item.filters.includes(key)).length;

  const visibleItems = active === "all"
    ? (allExpanded ? workItems : allCurated)
    : categoryItems;

  const hasExtra = active === "all" && allExtra.length > 0;

  const selectFilter = (key: FilterKey) => {
    setActive(key);
    setAllExpanded(false);
  };

  return (
    <div className="mt-10 md:mt-14">
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Browse the archive</p>
          <p className="mt-2 font-editorial text-3xl leading-none text-foreground">
            {active === "all" ? (allExpanded ? "All projects" : "A considered selection") : FILTERS.find((f) => f.key === active)?.label}
          </p>
        </div>
        <p className="text-xs font-semibold text-muted-foreground">{visibleItems.length} shown · {workItems.length} projects in the archive</p>
      </div>

      <div className="mb-9">
        <div
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-none md:flex-wrap md:overflow-visible"
          role="tablist"
          aria-label="Filter projects by type"
        >
          {FILTERS.map((filter) => {
            const count = countFor(filter.key);
            const selected = active === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                role="tab"
                id={`work-filter-${filter.key}`}
                aria-selected={selected}
                aria-controls="project-grid"
                onClick={() => selectFilter(filter.key)}
                className={`inline-flex shrink-0 items-center gap-2 border px-3.5 py-2 text-xs font-bold transition-colors ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {filter.label}
                <span className={`text-[10px] tabular-nums ${selected ? "text-primary-foreground/75" : "text-muted-foreground/65"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        id="project-grid"
        layout
        className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 2xl:grid-cols-3"
        role="tabpanel"
        aria-labelledby={`work-filter-${active}`}
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleItems.length === 0 && (
        <p className="border-y border-border py-16 text-center text-sm text-muted-foreground">
          There are no projects in this category yet.
        </p>
      )}

      {hasExtra && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setAllExpanded((expanded) => !expanded)}
            aria-expanded={allExpanded}
            className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {allExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {allExpanded ? "Show selected projects" : `View all ${workItems.length} projects`}
          </button>
        </div>
      )}
    </div>
  );
};
