import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import suiteCover from "@/assets/projects/rmcool26-pvNXT-suite-675.svg";
import helpCover from "@/assets/projects/pvnxt-help/after-home.jpg";

const CASES = [
  {
    href: "/case/terranxt",
    cover: suiteCover,
    eyebrow: "pvNXT Solar Suite · 2022 — now",
    title: "From WhatsApp and Excel to one connected solar product suite.",
    body: "Six products for EPCs, consumers, installers and O&M teams, built from scratch and live today.",
    chip: "Live · FITT IIT Delhi incubated",
    live: true,
  },
  {
    href: "/case/pvnxt-help",
    cover: helpCover,
    eyebrow: "pvNXT Help · 2026",
    title: "One calm help centre for six solar portals.",
    body: "Three long PDF guides became 58 short web guides, so users can get unstuck without messaging the team.",
    chip: "New · Ready for beta",
    live: false,
  },
];

/** Two featured case studies on the home page. */
export const HomeCaseStudies = () => (
  <section className="bg-secondary/40 py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Featured case studies</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-tight tracking-tight">
            How I think, start to finish.
          </h2>
        </div>
        <Link to="/work" data-cursor="hover" className="text-sm font-semibold text-primary hover:text-primary-glow">
          All work →
        </Link>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {CASES.map((c, i) => (
          <motion.div
            key={c.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={c.href}
              data-cursor="hover"
              data-cursor-label="Read the case study"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={c.cover}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium shadow-soft backdrop-blur">
                  <span className={`h-1.5 w-1.5 rounded-full ${c.live ? "bg-green-500" : "bg-primary"}`} />
                  {c.chip}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{c.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read the case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
