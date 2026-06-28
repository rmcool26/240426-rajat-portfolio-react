import { motion } from "framer-motion";
import { content } from "@/content";
import { WorkGrid } from "./WorkGrid";
import { EarlierWork } from "./EarlierWork";

export const FeaturedWork = () => {
  return (
    <section id="work" className="bg-secondary/40 py-24 md:py-32">
      <div className="container">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Selected Work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {content.featured.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Websites, apps, and systems designed to be used — not just shown.
          </p>
        </motion.div>

        {/* ── Unified work grid with filters ── */}
        <WorkGrid />

        {/* ── Earlier work archive (text-only, visually secondary) ── */}
        <EarlierWork />
      </div>
    </section>
  );
};
