import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Figma,
  FileText,
  Globe,
  Smartphone,
  ChevronLeft,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ZoomableImage } from "@/components/portfolio/CaseStudy/ZoomableImage";
import { workItems, type WorkItem } from "@/content";

// ─── Placeholder cover ────────────────────────────────────────────────────────
const CoverPlaceholder = ({ name }: { name: string }) => {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <span className="select-none font-display text-6xl font-bold tracking-tight text-muted-foreground/20">
        {initials}
      </span>
    </div>
  );
};

// ─── Status pill ──────────────────────────────────────────────────────────────
const StatusPill = ({ status }: { status: WorkItem["status"] }) => {
  const config = {
    live:     { dot: "bg-green-500", label: "Live" },
    wip:      { dot: "bg-amber-400", label: "In Progress" },
    internal: { dot: "bg-blue-400",  label: "Internal" },
    review:   { dot: "bg-purple-400",label: "In Review" },
  }[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-[12px] font-medium">
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
};

// ─── External link button ─────────────────────────────────────────────────────
const ExtLink = ({
  href,
  icon,
  label,
  cursorLabel,
  ariaLabel,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  cursorLabel?: string;
  ariaLabel?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={ariaLabel || label}
    title={label}
    data-cursor="hover"
    data-cursor-label={cursorLabel || label}
    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
  >
    {icon}
    <span>{label}</span>
    <ExternalLink className="h-3 w-3 opacity-50" />
  </a>
);

// ─── Info block ───────────────────────────────────────────────────────────────
const InfoBlock = ({ label, text }: { label: string; text: string }) => (
  <div>
    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
      {label}
    </p>
    <p className="text-sm leading-relaxed text-foreground/80">{text}</p>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Only items that have /work/:slug routes (not pvNXT Suite which uses /case/terranxt)
  const allItems = workItems.filter(
    (item) => item.projectPageHref && item.projectPageHref.startsWith("/work/")
  );

  const itemIndex = allItems.findIndex((item) => item.slug === slug);
  const item = itemIndex !== -1 ? allItems[itemIndex] : null;

  const prevItem = itemIndex > 0 ? allItems[itemIndex - 1] : null;
  const nextItem = itemIndex < allItems.length - 1 ? allItems[itemIndex + 1] : null;

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // ── 404 state ──
  if (!item) {
    return (
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="container flex flex-1 flex-col items-center justify-center gap-6 py-32">
          <p className="text-muted-foreground">Project not found.</p>
          <Link
            to="/#work"
            data-cursor="hover"
            data-cursor-label="Back to Work"
            aria-label="Back to Work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const hasLinks = item.liveLink || item.figmaLink || item.caseNotesLink || item.appLink;
  const isPrivate = item.status === "internal" || item.status === "review";

  // Resolve the visual for the detail page:
  // If detailVisual is explicitly set → use it (different from card cover)
  // If detailVisual is null (explicitly none) → use placeholder
  // If detailVisual is undefined (not set) → fall back to cover
  const mainVisual = "detailVisual" in item
    ? item.detailVisual    // explicitly set (may be different asset or null)
    : item.cover;          // fallback to card cover

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="w-full max-w-4xl mx-auto px-4 py-14 sm:px-6 sm:py-20 md:py-28">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <Link
            to="/#work"
            data-cursor="hover"
            data-cursor-label="Back to Work"
            aria-label="Back to Work"
            title="Back to all work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </motion.div>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Status + ecosystem chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <StatusPill status={item.status} />
            {item.pvnxtEcosystem && (
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                pvNXT ecosystem
              </span>
            )}
            {item.statusLabel && (
              <span className="rounded-full border border-dashed border-border bg-background/40 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                {item.statusLabel}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            {item.name}
          </h1>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {item.tagline}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {item.company}
            </span>
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Main visual (zoomable) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 sm:mt-12"
        >
          {mainVisual ? (
            <ZoomableImage
              src={mainVisual}
              alt={`${item.name} — main visual`}
              className="aspect-[16/9] w-full"
            />
          ) : (
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <CoverPlaceholder name={item.name} />
            </div>
          )}
        </motion.div>

        {/* ── Secondary images (zoomable, if any) ── */}
        {item.detailImages && item.detailImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 grid gap-4 sm:grid-cols-2"
          >
            {item.detailImages.map((img, i) => (
              <ZoomableImage
                key={i}
                src={img}
                alt={`${item.name} — view ${i + 2}`}
                className="aspect-[4/3] w-full"
              />
            ))}
          </motion.div>
        )}

        {/* ── Info sections ── */}
        {(item.whatItIs || item.whatIDid || item.whyItMatters) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 border-t border-border pt-10"
          >
            <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
              {item.whatItIs && (
                <InfoBlock label="What it is" text={item.whatItIs} />
              )}
              {item.whatIDid && (
                <InfoBlock label="What I did" text={item.whatIDid} />
              )}
              {item.whyItMatters && (
                <InfoBlock label="Why it matters" text={item.whyItMatters} />
              )}
            </div>
          </motion.div>
        )}

        {/* ── External links row ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 border-t border-border pt-8"
        >
          {hasLinks ? (
            <div className="flex flex-wrap gap-3">
              {item.liveLink && (
                <ExtLink
                  href={item.liveLink}
                  icon={<Globe className="h-4 w-4 shrink-0" />}
                  label="Live Site"
                  cursorLabel="Open live site"
                  ariaLabel={`Visit ${item.name} live site`}
                />
              )}
              {item.figmaLink && (
                <ExtLink
                  href={item.figmaLink}
                  icon={<Figma className="h-4 w-4 shrink-0" />}
                  label="Figma"
                  cursorLabel="Open in Figma"
                  ariaLabel={`Open ${item.name} in Figma`}
                />
              )}
              {item.appLink && (
                <ExtLink
                  href={item.appLink}
                  icon={<Smartphone className="h-4 w-4 shrink-0" />}
                  label="App Store"
                  cursorLabel="Download app"
                  ariaLabel={`Download ${item.name} from app store`}
                />
              )}
              {item.caseNotesLink && (
                <ExtLink
                  href={item.caseNotesLink}
                  icon={<FileText className="h-4 w-4 shrink-0" />}
                  label="Case Notes"
                  cursorLabel="Read case notes"
                  ariaLabel={`Read ${item.name} case notes`}
                />
              )}
            </div>
          ) : isPrivate ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border bg-background/40 px-4 py-2 text-sm text-muted-foreground">
              {item.status === "internal"
                ? "🔒 Internal — used in production, not publicly linked."
                : "🔍 In review — not publicly available yet."}
            </span>
          ) : null}
        </motion.div>

        {/* ── Prev / Next navigation ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 sm:mt-16 border-t border-border pt-8"
        >
          <div className="flex items-center justify-between gap-3">

            {/* Previous */}
            <div className="min-w-0 flex-1">
              {prevItem ? (
                <Link
                  to={`/work/${prevItem.slug}`}
                  data-cursor="hover"
                  data-cursor-label="Previous project"
                  aria-label={`Previous: ${prevItem.name}`}
                  title={prevItem.name}
                  className="group inline-flex max-w-full items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                  <span className="truncate">
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground/60">
                      Previous
                    </span>
                    <span className="block truncate font-medium">{prevItem.name}</span>
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* All Work */}
            <Link
              to="/#work"
              data-cursor="hover"
              data-cursor-label="All work"
              aria-label="Back to all work"
              title="All work"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              All Work
            </Link>

            {/* Next */}
            <div className="min-w-0 flex-1 text-right">
              {nextItem ? (
                <Link
                  to={`/work/${nextItem.slug}`}
                  data-cursor="hover"
                  data-cursor-label="Next project"
                  aria-label={`Next: ${nextItem.name}`}
                  title={nextItem.name}
                  className="group inline-flex max-w-full items-center justify-end gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="truncate">
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground/60">
                      Next
                    </span>
                    <span className="block truncate font-medium">{nextItem.name}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <div />
              )}
            </div>

          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default WorkDetail;
