import { useEffect, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FileText,
  Figma,
  Globe,
  Smartphone,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ZoomableImage } from "@/components/portfolio/CaseStudy/ZoomableImage";
import { Cursor } from "@/components/portfolio/Cursor";
import { workItems, type WorkItem } from "@/content";

const STATUS: Record<WorkItem["status"], string> = {
  live: "Live",
  wip: "In progress",
  internal: "Internal",
  review: "In review",
};

const ExtLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex min-h-11 items-center gap-2 border border-border bg-card px-4 py-2 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
  >
    {icon}
    {label}
    <ExternalLink className="h-3.5 w-3.5 opacity-55" />
  </a>
);

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const reduceMotion = useReducedMotion();

  const allItems = workItems.filter(
    (item) => item.projectPageHref && item.projectPageHref.startsWith("/work/"),
  );
  const itemIndex = allItems.findIndex((item) => item.slug === slug);
  const item = itemIndex >= 0 ? allItems[itemIndex] : null;
  const previous = itemIndex > 0 ? allItems[itemIndex - 1] : null;
  const next = itemIndex >= 0 && itemIndex < allItems.length - 1 ? allItems[itemIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (item) document.title = item.name + " — Rajat Mishra";
  }, [slug, item]);

  if (!item) {
    return (
      <main className="flex min-h-screen flex-col bg-background">
        <Nav />
        <div className="container flex flex-1 flex-col items-start justify-center gap-5 py-36">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary">Project not found</p>
          <h1 className="font-editorial text-5xl text-foreground">This project isn’t in the archive.</h1>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const mainVisual = item.detailVisual ?? item.cover;
  const hasExternalLinks = Boolean(item.liveLink || item.figmaLink || item.appLink || item.caseNotesLink);
  const isPrivate = item.status === "internal" || item.status === "review";
  const story = [
    { label: "The challenge", body: item.problem ?? item.whatItIs },
    { label: "My contribution", body: item.myMove ?? item.whatIDid },
    { label: "Outcome", body: item.result ?? item.whyItMatters },
  ].filter((entry): entry is { label: string; body: string } => Boolean(entry.body));

  return (
    <main className="min-h-screen overflow-x-clip bg-background">
      <Cursor />
      <Nav />

      <header className="bg-hero pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="container max-w-7xl">
          <Link to="/work" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary" data-cursor="hover">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-9 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary">
                <span>{item.company}</span>
                <span className="h-1 w-1 bg-primary" />
                <span>{STATUS[item.status]}</span>
                {item.pvnxtEcosystem && <><span className="h-1 w-1 bg-primary" /><span>pvNXT ecosystem</span></>}
              </div>
              <h1 className="mt-5 max-w-5xl font-editorial text-[clamp(3.2rem,7vw,6.8rem)] leading-[0.92] text-foreground">{item.name}</h1>
              <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg">
                {item.detailIntro ?? item.tagline}
              </p>
              {item.statusLabel && (
                <p className="mt-4 inline-flex border border-primary/30 bg-primary/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary">
                  {item.statusLabel}
                </p>
              )}
            </div>

            {item.meta && (
              <dl className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-border pt-6 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                {[
                  ["Role", item.meta.role],
                  ["Platform", item.meta.platform],
                  ["Scope", item.meta.scope],
                  ["Industry", item.meta.industry],
                  ["Users", item.meta.users],
                  ["Impact", item.meta.impact],
                ].filter((entry): entry is [string, string] => Boolean(entry[1])).map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
                    <dd className="mt-2 text-xs font-semibold leading-relaxed text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </motion.div>
        </div>
      </header>

      <div className="container max-w-7xl pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-10"
        >
          {mainVisual ? (
            <ZoomableImage
              src={mainVisual}
              alt={item.name + " project interface and design"}
              className="w-full border border-border shadow-soft"
            />
          ) : (
            <div className="grid aspect-[16/9] place-items-center border border-border bg-secondary">
              <span className="font-editorial text-7xl text-primary/45">{item.name.slice(0, 2)}</span>
            </div>
          )}
        </motion.div>

        {story.length > 0 && (
          <section className="mt-16 grid gap-0 border-y border-border md:mt-20 md:grid-cols-3 md:divide-x md:divide-border">
            {story.map((entry, index) => (
              <motion.article
                key={entry.label}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-border py-6 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
              >
                <p className="font-editorial text-3xl text-primary">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 font-display text-lg font-extrabold text-foreground">{entry.label}</h2>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{entry.body}</p>
              </motion.article>
            ))}
          </section>
        )}

        {item.designDecisions && item.designDecisions.length > 0 && (
          <section className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">Design rationale</p>
              <h2 className="mt-4 font-editorial text-4xl leading-[0.96] text-foreground md:text-5xl">The decisions that shaped the solution.</h2>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {item.designDecisions.map((decision, index) => (
                <li key={decision} className="grid gap-3 py-5 sm:grid-cols-[42px_1fr] sm:gap-5">
                  <span className="font-editorial text-2xl text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-[1.8] text-muted-foreground">{decision}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {item.detailImages && item.detailImages.length > 0 && (
          <section className="mt-16 grid gap-5 md:grid-cols-2">
            {item.detailImages.map((image, index) => (
              <ZoomableImage
                key={image}
                src={image}
                alt={item.name + " — additional view " + (index + 1)}
                className="w-full border border-border"
              />
            ))}
          </section>
        )}

        {item.punchLine && (
          <blockquote className="my-16 border-y border-border py-10 text-center md:my-20 md:py-14">
            <p className="mx-auto max-w-4xl font-editorial text-3xl leading-[1.08] text-foreground md:text-5xl">“{item.punchLine}”</p>
          </blockquote>
        )}

        <section className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">Explore further</p>
              <h2 className="mt-2 font-editorial text-3xl text-foreground">Project links</h2>
            </div>
            {isPrivate && !hasExternalLinks && (
              <p className="text-xs text-muted-foreground">
                {item.status === "internal" ? "This work is used internally and is not publicly linked." : "This work is being reviewed and is not publicly available yet."}
              </p>
            )}
          </div>

          {hasExternalLinks && (
            <div className="mt-6 flex flex-wrap gap-3">
              {item.liveLink && <ExtLink href={item.liveLink} icon={<Globe className="h-4 w-4" />} label="Live product" />}
              {item.figmaLink && <ExtLink href={item.figmaLink} icon={<Figma className="h-4 w-4" />} label="Figma prototype" />}
              {item.appLink && <ExtLink href={item.appLink} icon={<Smartphone className="h-4 w-4" />} label="App link" />}
              {item.caseNotesLink && <ExtLink href={item.caseNotesLink} icon={<FileText className="h-4 w-4" />} label="Case notes" />}
            </div>
          )}
        </section>

        <nav aria-label="Other projects" className="mt-16 grid gap-5 border-t border-border pt-7 sm:grid-cols-2">
          <div>
            {previous && (
              <Link to={`/work/${previous.slug}`} className="group block" data-cursor="hover">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">Previous project</p>
                <p className="mt-2 inline-flex items-center gap-2 font-display text-lg font-extrabold text-foreground group-hover:text-primary">
                  <ArrowLeft className="h-4 w-4" /> {previous.name}
                </p>
              </Link>
            )}
          </div>
          <div className="sm:text-right">
            {next && (
              <Link to={`/work/${next.slug}`} className="group inline-block" data-cursor="hover">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">Next project</p>
                <p className="mt-2 inline-flex items-center gap-2 font-display text-lg font-extrabold text-foreground group-hover:text-primary">
                  {next.name} <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            )}
          </div>
        </nav>

        <div className="mt-10">
          <Link to="/work" className="inline-flex items-center gap-2 border border-border bg-card px-4 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default WorkDetail;
