import { motion } from "framer-motion";
import { content } from "@/content";
import { CaseStudyCards } from "./CaseStudyCards";
import { OtherWork } from "./OtherWork";

export const FeaturedWork = () => {
  return (
    <section id="work" className="bg-secondary/40 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Selected Work</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {content.featured.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">{content.featured.sub}</p>
        </motion.div>

        <CaseStudyCards />
        <OtherWork />
      </div>
    </section>
  );
};
