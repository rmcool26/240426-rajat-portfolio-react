import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkItem } from "@/content";

// ─── Neutral placeholder for items without a real cover image ───────────────
const CoverPlaceholder = ({ name }: { name: string }) => {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <span className="font-display text-4xl font-bold tracking-tight text-muted-foreground/40 select-none">
        {initials}
      </span>
    </div>
  );
};

// ─── Status pill ─────────────────────────────────────────────────────────────
const StatusPill = ({ status }: { status: WorkItem["status"] }) => {
  const config = {
    live: { dot: "bg-green-500", label: "Live" },
    wip: { dot: "bg-amber-400", label: "In Progress" },
    internal: { dot: "bg-blue-400", label: "In Use Internally" },
  }[status];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium shadow-soft backdrop-blur-sm">
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
};

// ─── Main card ───────────────────────────────────────────────────────────────
interface WorkCardProps {
  item: WorkItem;
  index: number;
}

export const WorkCard = ({ item, index }: WorkCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
    >
      {/* Cover image area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {item.cover ? (
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            src={item.cover}
            alt={item.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <CoverPlaceholder name={item.name} />
        )}

        {/* Status pill — top left */}
        <div className="absolute left-3 top-3">
          <StatusPill status={item.status} />
        </div>

        {/* pvNXT ecosystem chip — top right */}
        {item.pvnxtEcosystem && (
          <div className="absolute right-3 top-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm border border-primary/20">
              pvNXT ecosystem
            </span>
          </div>
        )}
      </div>

      {/* Info block */}
      <div className="flex flex-1 flex-col p-5">
        {/* Company */}
        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          {item.company}
        </p>

        {/* Name */}
        <h3 className="mt-1 font-display text-lg font-bold leading-snug tracking-tight text-foreground md:text-xl">
          {item.name}
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {item.tagline}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Tags + CTA row */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          {/* Tag pills */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          {item.status === "wip" && !item.cta ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border bg-background/40 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              Coming Soon
            </span>
          ) : item.status === "internal" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border bg-background/40 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              In Use Internally
            </span>
          ) : item.cta ? (
            item.ctaExternal ? (
              <a
                href={item.cta.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold text-background transition-colors hover:bg-primary"
              >
                {item.cta.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <Link
                to={item.cta.href}
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold text-background transition-colors hover:bg-primary"
              >
                {item.cta.label}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
              </Link>
            )
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};
