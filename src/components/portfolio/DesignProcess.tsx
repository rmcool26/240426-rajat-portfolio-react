import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";

export const DesignProcess = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Process</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {content.process.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">{content.process.sub}</p>
        </motion.div>

        <div className="relative mt-16 md:mt-24">
          {/* Connector line — desktop */}
          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-border md:block" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-0 top-10 hidden h-[2px] bg-gradient-to-r from-primary via-primary-glow to-primary md:block"
          />

          <div className="grid gap-10 md:grid-cols-5 md:gap-4">
            {content.process.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full border-2 border-border bg-background text-3xl shadow-soft transition-transform duration-300 hover:scale-110 hover:border-primary">
                  {step.emoji}
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 max-w-[180px] text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
