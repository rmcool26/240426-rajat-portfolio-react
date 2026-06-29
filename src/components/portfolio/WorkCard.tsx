import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Figma } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkItem, WorkAction } from "@/content";

// ─── Neutral placeholder ─────────────────────────────────────────────────────
const CoverPlaceholder = ({ name }: { name: string }) => {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <span className="select-none font-display text-4xl font-bold tracking-tight text-muted-foreground/30">
        {initials}
      </span>
    </div>
  );
};

// ─── Status pill ─────────────────────────────────────────────────────────────
const StatusPill = ({ status }: { status: WorkItem["status"] }) => {
  const config = {
    live:     { dot: "bg-green-500", label: "Live" },
    wip:      { dot: "bg-amber-400", label: "In Progress" },
    internal: { dot: "bg-blue-400",  label: "Internal" },
    review:   { dot: "bg-purple-400",label: "In Review" },
  }[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium shadow-soft backdrop-blur-sm">
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
};

// ─── CTA button — always renders as internal route (View Project) or Figma ──
const ActionButton = ({
  action,
  variant,
}: {
  action: WorkAction;
  variant: "primary" | "secondary";
}) => {
  const isFigma = action.label.toLowerCase() === "figma";

  const icon = action.isRoute ? (
    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
  ) : isFigma ? (
    <Figma className="h-3 w-3" />
  ) : (
    <ExternalLink className="h-3 w-3" />
  );

  const tooltipLabel = isFigma ? "Open in Figma" : action.isRoute ? "View project details" : "Open link";

  const cls =
    variant === "primary"
      ? "group inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold text-background transition-colors hover:bg-primary"
      : "group inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground";

  if (action.isRoute) {
    return (
      <Link
        to={action.href}
        data-cursor="hover"
        data-cursor-label={tooltipLabel}
        aria-label={`${action.label} — ${tooltipLabel}`}
        title={tooltipLabel}
        className={cls}
      >
        {action.label}
        {icon}
      </Link>
    );
  }
  return (
    <a
      href={action.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      data-cursor-label={tooltipLabel}
      aria-label={`${action.label} — ${tooltipLabel}`}
      title={tooltipLabel}
      className={cls}
    >
      {action.label}
      {icon}
    </a>
  );
};

// ─── Main card ───────────────────────────────────────────────────────────────
interface WorkCardProps {
  item: WorkItem;
  index: number;
}

export const WorkCard = ({ item, index }: WorkCardProps) => {
  // Build homepage CTAs from data:
  // Primary = "View Project" → internal projectPageHref
  // Secondary = "Figma" → figmaLink only if available
  const primaryAction: WorkAction | undefined = item.projectPageHref
    ? {
        label: "View Project",
        href: item.projectPageHref,
        isRoute: true,
      }
    : item.primaryAction;

  const secondaryAction: WorkAction | undefined = item.figmaLink
    ? { label: "Figma", href: item.figmaLink, external: true }
    : undefined;

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
      {/* Cover */}
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
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
              pvNXT ecosystem
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          {item.company}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug tracking-tight text-foreground md:text-xl">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {item.tagline}
        </p>

        <div className="flex-1" />

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA row — View Project (primary) + Figma (secondary, if available) */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {primaryAction && (
            <ActionButton action={primaryAction} variant="primary" />
          )}
          {secondaryAction && (
            <ActionButton action={secondaryAction} variant="secondary" />
          )}
          {/* Status label: alongside primary, or solo if no primary */}
          {item.statusLabel && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-border bg-background/40 px-3 py-1 text-[10px] font-medium text-muted-foreground ${
                primaryAction ? "ml-auto" : ""
              }`}
            >
              {item.statusLabel}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};
