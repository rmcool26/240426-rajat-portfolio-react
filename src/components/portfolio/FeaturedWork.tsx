import { useRef, useState, type MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { content, type Project } from "@/content";
import { ProjectModal } from "./ProjectModal";

const CountUp = ({ value }: { value: string }) => {
  // Pull leading digits, keep suffix (k+, %, +, ★)
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = value.match(/^([\d.]+)(.*)$/);
  const num = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(num ? "0" : value);

  if (num !== null && inView && display === "0") {
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = num * eased;
      setDisplay(v >= 10 ? Math.round(v).toString() : v.toFixed(1).replace(/\.0$/, ""));
      if (t < 1) requestAnimationFrame(step);
      else setDisplay(num.toString());
    };
    requestAnimationFrame(step);
  }

  return (
    <span ref={ref}>
      {num !== null ? display : value}
      {num !== null && suffix}
    </span>
  );
};

const TiltCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 6, ry: px * 6 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-elegant"
      data-cursor="hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-bold">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.tagline}</p>
        <button
          onClick={onOpen}
          className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-colors hover:text-primary-glow"
          data-cursor="hover"
        >
          <Eye className="h-4 w-4" />
          View Preview
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
};

export const FeaturedWork = () => {
  const [active, setActive] = useState<Project | null>(null);
  const { hero } = content.featured;

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

        {/* HERO project card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant md:mt-16"
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative overflow-hidden bg-secondary">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                src={hero.cover}
                alt={hero.name}
                className="h-full min-h-[300px] w-full object-cover md:min-h-[480px]"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium shadow-soft backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Featured Case Study
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
              <div>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {hero.tags.map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">{hero.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {hero.role} · {hero.company}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{hero.description}</p>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                  {hero.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                        <CountUp value={s.value} />
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={hero.caseStudyHref}
                  data-cursor="hover"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-card grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:mt-16">
          {content.projects.map((p) => (
            <TiltCard key={p.slug} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
};
