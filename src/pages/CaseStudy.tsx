import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { content } from "@/content";
import { Footer } from "@/components/portfolio/Footer";
import { Cursor } from "@/components/portfolio/Cursor";

const CaseStudy = () => {
  const { hero } = content.featured;

  useEffect(() => {
    document.title = `${hero.name} — Case Study · ${content.meta.name}`;
    window.scrollTo(0, 0);
  }, [hero.name]);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <Cursor />

      <div className="bg-hero pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="container">
          <Link
            to="/"
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-background"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-3xl"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Case Study</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {hero.name}
            </h1>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              {hero.role} · {hero.company}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {hero.tags.map((t) => (
                <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container -mt-12 md:-mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-border shadow-elegant"
        >
          <img src={hero.cover} alt={hero.name} className="h-auto w-full object-cover" />
        </motion.div>
      </div>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {hero.description}
            </p>

            <h2 className="mt-12 font-display text-3xl font-bold">The Challenge</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Three fragmented portals — Consumer, EPC, and Installer — each built by different teams at different
              times. Overlapping flows, inconsistent UI patterns, and a pile-up of support tickets from users who
              couldn't figure out where to do what.
            </p>

            <h2 className="mt-12 font-display text-3xl font-bold">What I Did</h2>
            <ul className="mt-4 space-y-3 text-base text-muted-foreground md:text-lg">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Sat with solar engineers and EPC partners to learn the domain end-to-end before touching Figma.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Mapped the unified user journey across all three personas.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Built the pvNXT design system from scratch — tokens, components, motion specs.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Owned dev handoff, wrote the QA tickets, partnered with engineering on every release.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Scaled the design team from solo to 12 across web, mobile, and brand.
              </li>
            </ul>

            <h2 className="mt-12 font-display text-3xl font-bold">Outcome</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              A single Solar Suite that real EPCs, installers, and homeowners use every day. Faster task completion,
              fewer support tickets, and a design system that lets the team ship 3× faster than before.
            </p>
          </div>

          {/* Sticky stats sidebar */}
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Impact
              </h3>
              <div className="mt-4 space-y-5">
                {hero.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <a
                href="https://pvnxt.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow"
              >
                Visit pvNXT <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Full case study with research artifacts, wireframes, and design system docs available on request.
            </p>
          </aside>
        </div>

        <div className="mt-20 border-t border-border pt-10 text-center">
          <Link
            to="/"
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudy;
