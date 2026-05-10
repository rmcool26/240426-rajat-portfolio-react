import { motion } from "framer-motion";
import { content } from "@/content";

export const About = () => {
  const { about } = content;

  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            {about.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {about.heading}{" "}
            <span className="text-primary">{about.headingAccent}</span>
          </h2>
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Inline stat strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-4 border-y border-border py-5">
            {about.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value cards — titles + 1-line subtitle */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {about.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary"
            >
              <div className="mb-2 h-1 w-8 rounded-full bg-primary/30 transition-all group-hover:w-12 group-hover:bg-primary" />
              <h3 className="font-display text-base font-bold text-foreground">
                {h.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
