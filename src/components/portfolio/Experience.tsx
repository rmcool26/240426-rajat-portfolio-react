import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/content";

const CAREER = [
  {
    period: "2022 — present",
    company: "Terranxt · pvNXT",
    title: "Product Designer · UI/UX Design Lead",
    note: "Joined as employee #2. Helped build the product and design practice as the organisation grew. I now manage four designers within a 12-person cross-functional team, working across product design, engineering and QA.",
    detail: "Solar product workflows · Design systems · Product delivery",
  },
  {
    period: "2021",
    company: "IIDE",
    title: "Executive Web Designer",
    note: "Redesigned high-intent course pages and improved course information hierarchy, contributing to a 16% improvement in course-page conversion. Mentored three junior designers.",
    detail: "EdTech · Course-page UX · WordPress",
  },
  {
    period: "2020",
    company: "Skymap Global",
    title: "Software Engineer · UI",
    note: "Worked on geospatial web applications for land monitoring alongside GIS specialists. This role connected interface design with map data and practical field workflows.",
    detail: "GIS · Geospatial applications · Land monitoring",
  },
  {
    period: "2016 — 2019",
    company: "Dreamz Merchandising Solutions",
    title: "Junior Web Designer & Developer",
    note: "Built the foundation in web design and frontend development, delivering client websites across multiple industries.",
    detail: "Web design · HTML/CSS · Client delivery",
  },
];

export const Experience = () => {
  const reduceMotion = useReducedMotion();
  const { experience } = content;

  return (
    <section id="experience" className="bg-background py-24 md:py-32">
      <div className="container max-w-7xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 border-b border-border pb-10 md:grid-cols-[1fr_0.7fr] md:items-end"
        >
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">Experience / 2016—2026</p>
            <h2 className="mt-4 font-editorial text-[clamp(3rem,6vw,5.6rem)] leading-[0.92] text-foreground">
              From making websites to leading product design.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-[1.8] text-muted-foreground">
            Ten years across web, geospatial products, education and enterprise SaaS. The through-line is practical: understand the workflow, design the system and stay close to the build.
          </p>
        </motion.header>

        <div className="grid gap-14 pt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-20">
          <ol className="relative">
            {CAREER.map((job, index) => (
              <motion.li
                key={job.company}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-3 border-t border-border py-7 first:border-t-0 first:pt-0 sm:grid-cols-[135px_1fr] sm:gap-7"
              >
                <p className="pt-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">{job.period}</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{job.company}</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold leading-tight text-foreground sm:text-2xl">{job.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-[1.8] text-muted-foreground">{job.note}</p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/70">{job.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <aside className="space-y-5">
            <div className="border border-primary/30 bg-primary p-6 text-primary-foreground md:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-foreground/70">Current scope</p>
              <p className="mt-4 font-editorial text-5xl leading-none">4 designers</p>
              <p className="mt-2 text-sm text-primary-foreground/80">Directly managed within a 12-person cross-functional team.</p>
              <div className="my-6 h-px bg-primary-foreground/25" />
              <p className="font-editorial text-4xl leading-none">20+ products</p>
              <p className="mt-2 text-sm text-primary-foreground/80">Distinct live products contributed to across roles and industries.</p>
            </div>

            <div className="border border-border bg-card p-6 md:p-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Recognition</p>
              <div className="mt-4 flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-lg font-extrabold text-foreground">FITT · IIT Delhi</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">The pvNXT product was accepted for incubation through FITT, IIT Delhi.</p>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 md:p-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Tools & methods</p>
              <div className="mt-4 space-y-4">
                {experience.stackGrouped.map((group) => (
                  <div key={group.group}>
                    <p className="mb-2 text-xs font-bold text-foreground">{group.group}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span key={tool} className="border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/process" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground" data-cursor="hover">
                How I work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
