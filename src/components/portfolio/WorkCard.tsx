import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkItem } from "@/content";

const STATUS: Record<WorkItem["status"], { label: string; className: string }> = {
  live: { label: "Live", className: "bg-background text-foreground" },
  wip: { label: "In progress", className: "bg-background text-foreground" },
  internal: { label: "Internal", className: "bg-background text-foreground" },
  review: { label: "In review", className: "bg-background text-foreground" },
};

const CoverPlaceholder = ({ name }: { name: string }) => {
  const initials = name.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  return (
    <div className="grid h-full w-full place-items-center bg-secondary">
      <span className="font-editorial text-7xl text-primary/45">{initials}</span>
    </div>
  );
};

interface WorkCardProps {
  item: WorkItem;
  index: number;
}

export const WorkCard = ({ item, index }: WorkCardProps) => {
  const reduceMotion = useReducedMotion();
  const href = item.projectPageHref || "/";
  const status = STATUS[item.status];
  const descriptor = item.meta?.platform || item.tags[0] || "Selected work";
  const details = item.meta?.scope || item.meta?.industry || item.tags[1] || item.company;

  return (
    <motion.article
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.035, 0.2) }}
      className="group min-w-0"
    >
      <Link
        to={href}
        className="block focus-visible:outline-none"
        data-cursor="hover"
        data-cursor-label={`Open ${item.name}`}
        aria-label={`View project: ${item.name}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary">
          {item.cover ? (
            <motion.img
              src={item.cover}
              alt={`${item.name} project preview`}
              loading="lazy"
              whileHover={reduceMotion ? undefined : { scale: 1.035 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <CoverPlaceholder name={item.name} />
          )}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3 sm:p-4">
            <span className="bg-background/95 px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-foreground">
              {descriptor}
            </span>
            <span className={`px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] ${status.className}`}>
              {status.label}
            </span>
          </div>
          {item.pvnxtEcosystem && (
            <span className="absolute bottom-3 left-3 bg-foreground/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-background sm:bottom-4 sm:left-4">
              pvNXT ecosystem
            </span>
          )}
          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45 sm:bottom-4 sm:right-4">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="border-b border-border py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">{item.company}</p>
              <h3 className="mt-2 font-display text-xl font-extrabold leading-tight tracking-[-0.035em] text-foreground sm:text-2xl">
                {item.name}
              </h3>
            </div>
            <span className="shrink-0 font-editorial text-2xl text-primary/80">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <p className="mt-3 line-clamp-3 max-w-xl text-sm leading-[1.7] text-muted-foreground">{item.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground/75">
            <span>{details}</span>
            {item.statusLabel && <><span className="h-1 w-1 rounded-full bg-primary" /><span className="text-primary">{item.statusLabel}</span></>}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
