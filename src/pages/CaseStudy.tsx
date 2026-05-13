import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { content } from "@/content";
import { Footer } from "@/components/portfolio/Footer";
import { Cursor } from "@/components/portfolio/Cursor";
import { CaseStudyAccordion } from "@/components/portfolio/CaseStudyAccordion";
import { MagneticButton } from "@/components/portfolio/MagneticButton";

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
            className="mt-10 max-w-full"
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
          className="overflow-hidden rounded-3xl"
        >
          <img src={hero.cover} alt={hero.name} className="h-auto w-full object-cover" />
        </motion.div>
      </div>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold">Overview</h2>
            <p className="whitespace-pre-line mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {hero.description}
            </p>

            <h2 className="mt-12 font-display text-3xl font-bold">The Challenge</h2>
            <p className="whitespace-pre-line mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              When I joined TerraNXT, the 'product' was just an idea. The Indian solar industry was stuck, as single project took 2-3 months, full of communication gaps and costly errors.
              <br /><br />
              Consumers had to call or message for basic feasibility and cost clarity. EPC(engineers) teams were switching between multiple tools like SAM, pvsyst, spreadsheets, WhatsApp chats, and manual AutoCAD designs for analysis and proposals. Installers were updating progress through WhatsApp and calls, so managers had no reliable daily visibility. After commissioning, O&M teams needed fault and work-order context connected back to the plant.
            </p>
            <div>
              <h3 className="my-4 font-display text-xl font-bold ">My challenge was to not just design an app, but to architect a digital flexible enough for real EPC operations, but simple enough that each role only sees what they need.</h3>
              <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground">
                {hero.challenge.map((highlight, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <span className="font-medium text-slate-700">{highlight.label}</span>{" "}
                      <span className="text-slate-500">{highlight.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-12 font-display text-3xl font-bold">My Role</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              I owned the product design process across research, workflows, UI, design system, dev handoff, QA support, and release coordination.
            </p>

            <ul className="mt-4 space-y-3 text-base text-muted-foreground md:text-lg">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Consumer portal experience
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                EPC dashboard and roof analysis flow
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Installer assignment and daily progress tracking
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                O&M / SCADA-connected workflows
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Design system and reusable components
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Developer handoff, edge states, QA checks, and bug iteration
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Developer handoff, edge states, QA checks, and bug iteration
              </li>
            </ul>

            <h2 className="mt-12 font-display text-3xl font-bold">My Process: From Whiteboard to Working Product</h2>
            <p className="whitespace-pre-line mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              What I did is how I transformed a complex industrial problem into a simple, elegant software solution.
            </p>
            <CaseStudyAccordion pvnxtCases={content.pvnxtCases} />

            <h2 className="mt-12 font-display text-3xl font-bold">Key Product Decisions</h2>
            <div>
              <h3 className="my-4 font-display text-xl font-bold">Role-based experience</h3>
              <p className="whitespace-pre-line mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Instead of showing everyone everything, each portal was designed around the user’s actual job.
              </p>
              <ul className="mt-4 space-y-3 text-base text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Consumers see request status, estimates, and progress.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  EPC teams see leads, analysis, proposals, assignments, and execution status.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Installers see assigned work and daily update requirements.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  O&M / SCADA-connected workflows
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  O&M teams get plant monitoring, alerts, faults, and work-order context.
                </li>
              </ul>

              <h3 className="my-4 font-display text-xl font-bold">Design for handoff, not just presentation</h3>
              <p className="whitespace-pre-line mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                The pvNXT Solar Suite is no longer an idea. It's a live, revenue-generating platform incubated at IIT Delhi that is fundamentally changing how solar projects are executed in India/UAE.

                For the team, it means fewer support tickets, fewer “kya status hai?” calls, and one place to see how the business is actually running. For me, it turned into an ongoing 0 → 1 → n product, not a one‑off redesign.

                typical rooftop analysis now takes ~15 minutes vs 1–2 days with site visits

                The product had many states: pending, approved, rejected, assigned, in progress, completed, failed, delayed, alert, fault, and more.
                <br /><br />
                So I designed reusable status patterns, validation behavior, empty states, and error states to make development smoother and reduce confusion during implementation.
              </p>
            </div>


            <h2 className="mt-12 font-display text-3xl font-bold">Outcome</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              The pvNXT Solar Suite is no longer an idea. It's a live, revenue-generating platform <span className="font-medium text-foreground">incubated at IIT Delhi</span> that is fundamentally changing how solar projects are executed in India.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-">
              <li className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-soft text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                <section className="flex items-start gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="font-medium text-foreground">Revolutionized Efficiency</span>
                </section>
                <span className="text-slate-500">We reduced the time for detailed site analysis and proposal generation from 2 weeks to under 15 minutes.</span>
              </li>
              <li className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-soft text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                <section className="flex items-start gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="font-medium text-foreground">Accelerated Timelines</span>

                </section>
                <span className="text-slate-500">The entire project lifecycle was compressed from a chaotic 2-3 months to a streamlined 1-2 weeks.</span>
              </li>
              <li className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-soft text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                <section className="flex items-start gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="font-medium text-foreground">Business & Personal Growth</span>
                </section>
                <span className="text-slate-500">The platform attracted investment and secured incubation at a prestigious institution. For me, I evolved from a designer to a product leader who built a product and a process from the ground up.</span>
              </li>
            </ul>

          </div>

          {/* Sticky stats sidebar */}
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Impact
              </h3>
              <div className="mt-4 flex flex-col gap-y-8 justify-between">
                {hero.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-start items-center gap-x-2 mt-6">
                <span className="font-medium text-white">Visit:</span>
                <div className="flex justify-between gap-x-6">
                  <a
                    href="https://consumer.pvnxt.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline"
                  >
                    Consumer <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://epc.pvnxt.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline"
                  >
                    EPC <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://installer.pvnxt.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline"
                  >
                    Installer <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Full case study with research artifacts, wireframes, and design system docs available on request.
              Full research artifacts, workflows, wireframes, design system, and QA notes <a href={`mailto:${content.contact.email}`} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline">available on request.</a>
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
