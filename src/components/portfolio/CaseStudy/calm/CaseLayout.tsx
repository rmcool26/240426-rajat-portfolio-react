/**
 * CaseLayout.tsx
 * Calm, single-column case study layout shared by the pvNXT Help and
 * pvNXT Suite (v2) case studies. Uses portfolio theme tokens only, so it
 * follows the site's light / dark toggle.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ZoomableImage } from "../ZoomableImage";

// ---------- motion ----------
const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

// ---------- small atoms ----------
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary ${className}`}>{children}</p>
  );
}

// ---------- hero ----------
export type MetaItem = { label: string; value: ReactNode };

export function CaseHero({
  eyebrow,
  title,
  lede,
  meta,
  visual,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  meta: MetaItem[];
  visual?: ReactNode;
}) {
  return (
    <header id="top" className="bg-hero pt-28 md:pt-36">
      <div className="container max-w-[1100px]">
        <Link
          to="/work"
          data-cursor="hover"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to work
        </Link>

        <motion.div {...reveal} className="mt-10 max-w-[820px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.25rem,5.2vw,4rem)] font-bold leading-[1.04] tracking-tight text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-xl">{lede}</p>
        </motion.div>

        <motion.dl
          {...reveal}
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 md:grid-cols-4"
        >
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{m.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
      {visual && <div className="container max-w-[1100px] pt-14">{visual}</div>}
    </header>
  );
}

// ---------- device frames ----------
export function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <figure className="overflow-hidden rounded-t-2xl border border-b-0 border-border bg-card shadow-elegant">
      <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-2.5" aria-hidden="true">
        <i className="h-2.5 w-2.5 rounded-full bg-border" />
        <i className="h-2.5 w-2.5 rounded-full bg-border" />
        <i className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 rounded-md bg-background px-3 py-0.5 font-mono text-[11px] text-muted-foreground">{url}</span>
      </div>
      <img src={src} alt={alt} className="block w-full" width={1440} height={900} />
    </figure>
  );
}

export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-[2rem] border-[6px] border-foreground bg-card shadow-elegant ${className}`}>
      <img src={src} alt={alt} className="block w-full" width={780} height={1688} loading="lazy" />
    </figure>
  );
}

// ---------- tl;dr ----------
export function CaseSummary({ items }: { items: { label: string; body: ReactNode }[] }) {
  return (
    <section aria-label="Summary" className="border-b border-border bg-background">
      <div className="container grid max-w-[1100px] gap-4 py-12 md:grid-cols-3 md:py-16">
        {items.map((i) => (
          <motion.article key={i.label} {...reveal} className="rounded-2xl border border-border bg-card p-6">
            <Eyebrow>{i.label}</Eyebrow>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">{i.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

// ---------- body with table of contents ----------
export type TocItem = { id: string; label: string };

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function CaseBody({ toc, children }: { toc: TocItem[]; children: ReactNode }) {
  const active = useActiveSection(toc.map((t) => t.id));
  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="bg-background">
      <div className="container grid max-w-[1100px] gap-12 py-16 md:py-20 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">On this page</p>
            <ol className="mt-4 space-y-0.5 border-l border-border">
              {toc.map((t) => {
                const on = t.id === active;
                return (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      onClick={(e) => go(e, t.id)}
                      aria-current={on ? "true" : undefined}
                      className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                        on
                          ? "border-primary font-semibold text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t.label}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>
        <div className="min-w-0 max-w-[760px]">{children}</div>
      </div>
    </div>
  );
}

// ---------- section ----------
export function Sec({
  id,
  num,
  label,
  title,
  children,
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <motion.section
      {...reveal}
      id={id}
      className="scroll-mt-28 border-t border-border py-14 first:border-t-0 first:pt-0 md:py-16"
    >
      <Eyebrow>
        {num} · {label}
      </Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-[2.4rem]">
        {title}
      </h2>
      <div className="case-prose mt-6 space-y-5 text-[17px] leading-[1.7] text-foreground/80">{children}</div>
    </motion.section>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <h3 className="!mt-10 font-display text-xl font-bold text-foreground">{children}</h3>;
}

export function Ticks({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="rounded-2xl bg-primary/[0.07] p-5">
          <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
          <div className="mt-1 text-sm leading-snug text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Cards({ items, cols = 2 }: { items: { title: string; body: ReactNode }[]; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((c) => (
        <article key={c.title} className="rounded-2xl border border-border bg-card p-5">
          <h3 className="font-display text-base font-bold text-foreground">{c.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{c.body}</p>
        </article>
      ))}
    </div>
  );
}

/** Small labelled tiles, e.g. portals or user moments. */
export function Tiles({ items, accent = false }: { items: { title: string; body: ReactNode }[]; accent?: boolean }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${items.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
      {items.map((t) => (
        <div
          key={t.title}
          className={`rounded-xl p-4 ${accent ? "border-l-2 border-primary bg-primary/[0.06]" : "border border-border bg-card"}`}
        >
          <b className="block font-display text-[15px] font-bold text-foreground">{t.title}</b>
          <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{t.body}</span>
        </div>
      ))}
    </div>
  );
}

export function Rules({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="space-y-3">
      {items.map((r, i) => (
        <li key={r.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
          <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
          <span>
            <b className="font-semibold text-foreground">{r.title}</b>{" "}
            <span className="text-muted-foreground">{r.body}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="!my-8 rounded-2xl bg-foreground p-6 text-background md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">{label}</p>
      <div className="mt-3 space-y-3 text-[17px] leading-relaxed text-background/90">{children}</div>
    </div>
  );
}

export function Shot({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: ReactNode; className?: string }) {
  return (
    <figure className={`!my-8 ${className}`}>
      <ZoomableImage src={src} alt={alt} caption={typeof caption === "string" ? caption : undefined} className="shadow-soft" />
      {caption && <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

export function ShotGrid({
  items,
  cols = 3,
}: {
  items: { src: string; alt: string; caption: ReactNode }[];
  cols?: 2 | 3;
}) {
  return (
    <div className={`!my-8 grid gap-5 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((it) => (
        <figure key={it.src}>
          <ZoomableImage src={it.src} alt={it.alt} />
          <figcaption className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{it.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

type Pane = { src: string; alt: string; caption: ReactNode };

export function BeforeAfter({ label, before, after }: { label: string; before: Pane; after: Pane }) {
  const [tab, setTab] = useState<"b" | "a">("b");
  const pane = tab === "b" ? before : after;
  return (
    <div className="!my-8">
      <div role="tablist" aria-label={label} className="inline-flex rounded-full border border-border bg-muted p-1">
        {(["b", "a"] as const).map((k) => (
          <button
            key={k}
            role="tab"
            type="button"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            data-cursor="hover"
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              tab === k ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {k === "b" ? "Before" : "After"}
          </button>
        ))}
      </div>
      <figure role="tabpanel" className="mt-4">
        <ZoomableImage key={pane.src} src={pane.src} alt={pane.alt} className="shadow-soft" />
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{pane.caption}</figcaption>
      </figure>
    </div>
  );
}

/** Label / text rows used inside decisions: "The problem", "The fix", "Why". */
export function Why({ rows }: { rows: { k: string; v: ReactNode }[] }) {
  return (
    <dl className="mt-5 divide-y divide-border border-t border-border">
      {rows.map((r) => (
        <div key={r.k} className="grid gap-1 py-4 sm:grid-cols-[130px_1fr] sm:gap-6">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:pt-1">{r.k}</dt>
          <dd className="text-[16px] leading-relaxed text-foreground/80">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Decision({ n, title, children }: { n: number; title: ReactNode; children: ReactNode }) {
  return (
    <article className="!mt-8 rounded-3xl border border-border bg-card p-5 md:p-7">
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
        Decision {n}
      </span>
      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground md:text-2xl">{title}</h3>
      <div className="mt-2">{children}</div>
    </article>
  );
}

export function Compare({ rows }: { rows: { k: string; before: ReactNode; after: ReactNode }[] }) {
  return (
    <div className="!my-8 overflow-hidden rounded-2xl border border-border">
      <div className="hidden grid-cols-[1fr_1.2fr_1.2fr] bg-muted px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:grid">
        <span />
        <span>Before</span>
        <span className="text-primary">After</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.k}
          className="grid gap-1 border-t border-border px-5 py-4 text-[15px] first:border-t-0 sm:grid-cols-[1fr_1.2fr_1.2fr] sm:gap-4 sm:first:border-t"
        >
          <b className="font-semibold text-foreground">{r.k}</b>
          <span className="text-muted-foreground">
            <span className="mr-1 text-xs font-semibold uppercase text-muted-foreground/70 sm:hidden">Before:</span>
            {r.before}
          </span>
          <span className="text-foreground">
            <span className="mr-1 text-xs font-semibold uppercase text-primary sm:hidden">After:</span>
            {r.after}
          </span>
        </div>
      ))}
    </div>
  );
}

// ---------- end matter ----------
export function RelatedCase({
  eyebrow,
  title,
  body,
  href,
  cover,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cover: string;
}) {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="container max-w-[1100px] py-16 md:py-20">
        <Eyebrow>Related case study</Eyebrow>
        <Link
          to={href}
          data-cursor="hover"
          data-cursor-label="Read the case study"
          className="group mt-6 grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant md:grid-cols-[1.1fr_1fr]"
        >
          <div className="aspect-[16/10] overflow-hidden bg-muted md:aspect-auto">
            <img
              src={cover}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">{title}</h3>
            <p className="mt-3 text-muted-foreground">{body}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read the case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </span>
          </div>
        </Link>
        <div className="mt-12 text-center">
          <Link
            to="/work"
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Scroll to top on mount; shared by both case study pages. */
export function useCaseStudyPage(title: string) {
  useEffect(() => {
    document.title = title;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [title]);
}
