import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { HomeCaseStudies } from "@/components/portfolio/HomeCaseStudies";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { content } from "@/content";

const PROOF = [
  { value: "10+", label: "Years in design" },
  { value: "20+", label: "Distinct live products" },
  { value: "4", label: "Designers managed" },
  { value: "50+", label: "pvNXT screens shipped" },
];

const IMPACT = [
  {
    label: "Solar product delivery",
    before: "2–3 months",
    after: "2–3 weeks",
    note: "A connected pvNXT workflow replaced fragmented, manual coordination.",
  },
  {
    label: "Fresh satellite imagery · Spade",
    before: "2–3 weeks",
    after: "2–3 days",
    note: "A self-serve procurement journey made fresh imagery easier to order.",
  },
  {
    label: "IIDE course pages",
    before: "Baseline",
    after: "+16%",
    note: "Course-page conversion improved through a clearer information journey.",
  },
];

const Index = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frameId = 0;
    let lenis: Lenis | null = null;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (!prefersReducedMotion && !coarsePointer) {
      lenis = new Lenis({ duration: 0.9, smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };
      frameId = window.requestAnimationFrame(raf);
    }

    document.title = content.meta.name + " — " + content.meta.role;
    const description =
      "Rajat Mishra is a Lead Product Designer and UI/UX Design Lead with 10+ years across enterprise SaaS, solar, geospatial and education products.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      lenis?.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <Cursor />
      <ScrollProgress />
      <Nav />

      <Hero />

      <section aria-label="Experience at a glance" className="border-y border-border bg-card">
        <div className="container grid max-w-7xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {PROOF.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="px-4 py-6 first:pl-0 sm:px-6 sm:py-7"
            >
              <p className="font-editorial text-4xl leading-none text-primary md:text-5xl">{item.value}</p>
              <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <HomeCaseStudies />

      <section className="bg-background py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">Evidence / selected outcomes</p>
              <h2 className="mt-4 max-w-3xl font-editorial text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.94] text-foreground">
                Better workflows should change the time it takes to do the work.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-[1.8] text-muted-foreground">
              A few outcomes from different roles. The numbers stay attached to the product and problem they came from.
            </p>
          </div>

          <div className="border-y border-border">
            {IMPACT.map((item, index) => (
              <motion.article
                key={item.label}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="grid gap-4 border-b border-border py-6 last:border-b-0 md:grid-cols-[1fr_0.9fr_1fr] md:items-center md:gap-8"
              >
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{String(index + 1).padStart(2, "0")} / Outcome</p>
                  <h3 className="mt-2 font-display text-lg font-extrabold text-foreground">{item.label}</h3>
                </div>
                <div className="flex items-center gap-3 font-editorial text-3xl leading-none sm:text-4xl">
                  <span className="text-muted-foreground/70">{item.before}</span>
                  <span className="h-px w-6 bg-primary" />
                  <span className="text-primary">{item.after}</span>
                </div>
                <p className="max-w-lg text-sm leading-[1.75] text-muted-foreground">{item.note}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">How I contribute</p>
              <h2 className="mt-4 font-editorial text-[clamp(3rem,5.6vw,5.2rem)] leading-[0.94] text-foreground">
                Product thinking with a delivery mindset.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-[1.8] text-muted-foreground">
                I work between user needs, business rules and engineering constraints, then stay involved until the experience works in the product.
              </p>
              <Link to="/about" className="mt-7 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-bold text-primary hover:text-foreground" data-cursor="hover">
                More about Rajat <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="border-y border-border">
              {[
                ["01", "Product structure", "Translate business rules and user needs into journeys, roles, information architecture and product flows."],
                ["02", "Research & validation", "Use stakeholder conversations, user feedback and workflow reviews to understand what needs to change."],
                ["03", "Design systems", "Create reusable patterns, states and guidance that help teams build and maintain a consistent product."],
                ["04", "Delivery & leadership", "Manage four designers and collaborate with engineering through handoff, QA, release and iteration."],
              ].map(([number, title, body]) => (
                <div key={number} className="grid gap-3 border-b border-border py-5 last:border-b-0 sm:grid-cols-[42px_1fr] sm:gap-5">
                  <span className="font-editorial text-2xl text-primary">{number}</span>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-foreground">{title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-[1.75] text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Have a complex product problem?"
        subtext="Let’s start with the workflow, the people using it and what needs to get easier."
        buttons={[
          { label: "Email Rajat", href: "mailto:rmcool26@gmail.com?subject=Portfolio%20enquiry", variant: "primary" },
          { label: "LinkedIn", href: content.contact.linkedin, variant: "ghost", external: true },
          { label: "View experience", href: "/experience", variant: "ghost" },
        ]}
      />

      <Footer />
    </main>
  );
};

export default Index;
