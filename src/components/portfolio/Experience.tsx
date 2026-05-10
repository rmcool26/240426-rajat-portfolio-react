import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { content } from "@/content";

export const Experience = () => {
  const { experience } = content;

  return (
    <section id="experience" className="bg-secondary/30 py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            {experience.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {experience.heading}{" "}
            <span className="text-primary">{experience.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">  
          {/* LEFT — timeline */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
              <Briefcase className="h-4 w-4 text-primary" /> Career
            </h3>
            <ol className="relative border-l-2 border-border pl-6">
              {experience.timeline.map((job, i) => (
                <motion.li
                  key={job.company}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[35px] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-background bg-primary shadow-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {job.year}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-bold">{job.role}</h4>
                  <p className="text-sm font-medium text-primary">{job.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {job.desc}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* RIGHT — rail (4 blocks) */}
          <div className="space-y-6">
            {/* Currently */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-5 shadow-soft"
            >
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Live
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {experience.currently.label}
              </p>
              <h4 className="mt-1 font-display text-lg font-bold">
                {experience.currently.role}
              </h4>
              <p className="text-sm font-medium text-primary">
                {experience.currently.company}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {experience.currently.status}
              </p>
            </motion.div>

            {/* Stack grouped */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                The Stack
              </h4>
              <div className="space-y-4">
                {experience.stackGrouped.map((g) => (
                  <div key={g.group}>
                    <p className="mb-2 text-xs font-medium text-foreground/70">
                      {g.group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.tools.map((t) => (
                        <span
                          key={t}
                          data-cursor="hover"
                          className="cursor-default rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            {/* <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" /> Education
              </h4>
              <ul className="space-y-2.5">
                {experience.education.map((e) => (
                  <li
                    key={e.title}
                    className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2.5 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-bold text-foreground">{e.title}</p>
                      <p className="text-xs text-muted-foreground">{e.school}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {e.year}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div> */}

            {/* Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                <Award className="h-4 w-4 text-primary" /> Recognition
              </h4>
              <ul className="space-y-2.5">
                {experience.recognition.map((r) => (
                  <li
                    key={r.label}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <span className="text-sm text-muted-foreground">{r.label}</span>
                    <span className="text-sm font-bold text-foreground">{r.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
