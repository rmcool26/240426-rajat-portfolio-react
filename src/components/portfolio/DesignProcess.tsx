import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/content";

export const DesignProcess = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container max-w-7xl">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">Process / From brief to build</p>
            <h2 className="mt-4 max-w-4xl font-editorial text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] text-foreground">
              A clear route through complex work.
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-[1.8] text-muted-foreground">{content.process.sub}</p>
            <Link to="/process" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground">
              View the process <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <ol className="mt-10 grid gap-0 border-y border-border md:grid-cols-4 md:divide-x md:divide-border">
          {content.process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="border-b border-border py-7 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-editorial text-4xl leading-none text-primary">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 font-display text-xl font-extrabold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
