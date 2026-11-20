import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import { WorkGrid } from "./WorkGrid";
import { EarlierWork } from "./EarlierWork";

export const FeaturedWork = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="work" className="bg-background pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="container max-w-7xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 border-b border-border pb-9 md:grid-cols-[1.15fr_0.85fr] md:items-end"
        >
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">Selected work / 2016—2026</p>
            <h1 className="mt-4 max-w-4xl font-editorial text-[clamp(3rem,6.4vw,6rem)] leading-[0.92] text-foreground">
              Work built around real constraints.
            </h1>
          </div>
          <p className="max-w-xl text-base leading-[1.8] text-muted-foreground md:pb-1">
            Product systems, websites and mobile experiences. Each project starts with a problem to understand, then moves through the decisions, details and delivery that make the work useful.
          </p>
        </motion.header>
        <WorkGrid />
        <div className="mt-24 hidden">
          <EarlierWork />
        </div>
      </div>
    </section>
  );
};
