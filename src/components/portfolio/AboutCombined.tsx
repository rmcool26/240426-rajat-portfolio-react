import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { content } from "@/content";

export const AboutCombined = () => {
  const { about } = content;

  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            {about.heading}{" "}
            <span className="relative inline-block text-primary">
              {about.headingAccent}
              <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-primary/15" />
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — experience timeline */}
          <div>
            <h3 className="mb-6 font-display text-2xl font-bold">Experience</h3>
            <ol className="relative border-l-2 border-border pl-6">
              {about.timeline.map((job, i) => (
                <motion.li
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[33px] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-background bg-primary shadow-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {job.year}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-bold">{job.role}</h4>
                  <p className="text-sm font-medium text-primary">{job.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* RIGHT — skills */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 font-display text-2xl font-bold">Core Skills</h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {about.coreSkills.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-soft"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-display text-2xl font-bold">Design & Development</h3>
              <div className="flex flex-wrap gap-2">
                {[...about.designTools, ...about.techTools].map((t) => (
                  <span
                    key={t}
                    data-cursor="hover"
                    className="cursor-default rounded-full border border-border bg-secondary px-3.5 py-1.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display text-2xl font-bold">Collaboration</h3>
              <div className="flex flex-wrap gap-2">
                {about.collaboration.map((t) => (
                  <span
                    key={t}
                    data-cursor="hover"
                    className="cursor-default rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
