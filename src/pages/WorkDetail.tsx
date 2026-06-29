import { useParams, Link, useNavigate } from "react-router-dom";
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
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
  >
    {icon}
    {label}
    <ExternalLink className="h-3 w-3 opacity-50" />
  </a>
);

// ─── Info block ───────────────────────────────────────────────────────────────
const InfoBlock = ({ label, text }: { label: string; text: string }) => (
  <div>
    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
      {label}
    </p>
    <p className="text-sm leading-relaxed text-foreground/80">{text}</p>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

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

  // 404 — redirect to homepage work section
  if (!item) {
    return (
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="container flex flex-1 flex-col items-center justify-center gap-6 py-32">
          <p className="text-muted-foreground">Project not found.</p>
          <Link
            to="/#work"
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

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="container max-w-4xl py-16 md:py-24">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/#work"
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
          <div className="flex flex-wrap items-center gap-3">
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

          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-5xl">
            {item.name}
          </h1>
          <p className="mt-2 text-base text-muted-foreground md:text-lg">
            {item.tagline}
          </p>

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

        {/* ── Cover ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border border-border"
        >
          <div className="aspect-[16/9] w-full bg-muted">
            {item.cover ? (
              <img
                src={item.cover}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <CoverPlaceholder name={item.name} />
            )}
          </div>
        </motion.div>

        {/* ── Info sections ── */}
        {(item.whatItIs || item.whatIDid || item.whyItMatters) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3"
          >
            {item.whatItIs && (
              <InfoBlock label="What it is" text={item.whatItIs} />
            )}
            {item.whatIDid && (
              <InfoBlock label="What I did" text={item.whatIDid} />
            )}
            {item.whyItMatters && (
              <InfoBlock label="Why it matters" text={item.whyItMatters} />
            )}
          </motion.div>
        )}

        {/* ── External links row ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8"
        >
          {hasLinks ? (
            <>
              {item.liveLink && (
                <ExtLink
                  href={item.liveLink}
                  icon={<Globe className="h-4 w-4" />}
                  label="Live Site"
                />
              )}
              {item.figmaLink && (
                <ExtLink
                  href={item.figmaLink}
                  icon={<Figma className="h-4 w-4" />}
                  label="Figma"
                />
              )}
              {item.appLink && (
                <ExtLink
                  href={item.appLink}
                  icon={<Smartphone className="h-4 w-4" />}
                  label="App Store"
                />
              )}
              {item.caseNotesLink && (
                <ExtLink
                  href={item.caseNotesLink}
                  icon={<FileText className="h-4 w-4" />}
                  label="Case Notes"
                />
              )}
            </>
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
          className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-8"
        >
          <div>
            {prevItem && (
              <Link
                to={`/work/${prevItem.slug}`}
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    Previous
                  </span>
                  {prevItem.name}
                </span>
              </Link>
            )}
          </div>

          <Link
            to="/#work"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
          >
            All Work
          </Link>

          <div>
            {nextItem && (
              <Link
                to={`/work/${nextItem.slug}`}
                className="group inline-flex items-center gap-2 text-right text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="hidden sm:inline">
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    Next
                  </span>
                  {nextItem.name}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkDetail;
