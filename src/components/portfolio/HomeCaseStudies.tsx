import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import suiteCover from "@/assets/projects/rmcool26-pvNXT-suite-675.svg";
import helpCover from "@/assets/projects/pvnxt-help/after-home.jpg";

const CASES = [
  {
    href: "/case/terranxt",
    cover: suiteCover,
    number: "01",
    eyebrow: "Terranxt · 2022 — present",
    title: "A connected product system for the rooftop-solar journey.",
    body: "Product design across consumer, EPC, installer, field and operations workflows. Built from the ground up with a shared design system.",
    tag: "Flagship case study",
  },
  {
    href: "/case/pvnxt-help",
    cover: helpCover,
    number: "02",
    eyebrow: "Terranxt · 2026",
    title: "A help centre designed around the moment someone gets stuck.",
    body: "Three long user guides were restructured into 58 task-led web guides, with search and a clear route to human support across six portals.",
    tag: "Built · pre-beta",
  },
];

export const HomeCaseStudies = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="container max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">Selected case studies</p>
            <h2 className="mt-3 max-w-3xl font-editorial text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.98] text-foreground">
              The decisions behind the interface.
            </h2>
          </div>
          <Link to="/work" className="inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm font-bold text-primary" data-cursor="hover">
            View all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {CASES.map((item, index) => (
            <motion.article
              key={item.href}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="min-w-0"
            >
              <Link
                to={item.href}
                data-cursor="hover"
                data-cursor-label="Read the case study"
                className="group block h-full"
              >
                <div className={\`relative overflow-hidden border border-border bg-card \${
                  index === 0 ? "aspect-[16/10]" : "aspect-[16/10] lg:aspect-[16/11]"
                }\`}>
                  <img
                    src={item.cover}
                    alt={index === 0 ? "pvNXT solar product suite interface" : "pvNXT Help Portal home page"}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-4 top-4 bg-background/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-foreground">
                    {item.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="grid gap-3 border-b border-border py-5 sm:grid-cols-[auto_1fr] sm:gap-5">
                  <span className="font-editorial text-3xl text-primary">{item.number}</span>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">{item.eyebrow}</p>
                    <h3 className="mt-2 max-w-2xl font-display text-xl font-extrabold leading-tight text-foreground sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
