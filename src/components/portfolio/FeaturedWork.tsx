import { useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { content, type Project } from "@/content";

const CountUp = ({ value }: { value: string }) => {
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

const ShowcasePanel = ({ item }: { item: Project }) => {
  const [activeImg, setActiveImg] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 4, ry: px * 4 });
  };

  const gallery = item.gallery?.length ? item.gallery : [item.cover];

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-6 md:gap-10"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        style={{ transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
        className="relative overflow-hidden rounded-2xl transition-transform duration-300 ease-out"
        data-cursor="hover"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={gallery[activeImg]}
            alt={item.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" /> */}
      </div>

      {/* <div className="flex flex-row gap-3">
        {gallery.slice(0, 4).map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => setActiveImg(i)}
            data-cursor="hover"
            className={`max-w-24 group relative aspect-video overflow-hidden rounded-xl border bg-secondary transition-all ${activeImg === i
              ? "border-primary shadow-soft ring-2 ring-primary/30"
              : "border-border hover:border-primary/50"
              }`}
          >
            <img
              src={src}
              alt={`${item.name} ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
        {gallery.length < 4 &&
          Array.from({ length: 4 - gallery.length }).map((_, i) => (
            <div
              key={`ph-${i}`}
              className="max-w-24 aspect-video rounded-xl border border-dashed border-border bg-secondary/40"
            />
          ))}
      </div> */}
    </motion.div>
  );
};

const Row = ({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative border-b border-border transition-colors ${isOpen ? "bg-card/40" : "hover:bg-card/20"
        }`}
    >
      <button
        onClick={onToggle}
        data-cursor="hover"
        className="flex w-full items-center gap-6 py-6 text-left md:py-8"
        aria-expanded={isOpen}
      >
        <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:inline-block md:w-12">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-display text-2xl font-bold leading-tight tracking-tight transition-colors md:text-3xl lg:text-4xl ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
              }`}
          >
            {item.name}
          </h3>
          <div className="mt-2 text-sm text-muted-foreground md:text-base">
            {item.role} | {item.company}
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {item.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background/50 px-3 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background/50 text-foreground group-hover:border-primary group-hover:text-primary"
            }`}
        >
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-10 pb-10 md:grid-cols-[1fr_1.4fr] md:pb-12 md:pl-12">
              <div className="flex flex-col">
                {/* <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground border-t border-border">
                  {item.description}
                </p> */}

                {/* Dynamic Highlights - Bullet Points */}
                <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  {item.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium text-slate-700">{highlight.label}</span>{" "}
                        <span className="text-slate-500">{highlight.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {item.stats?.length ? (
                  <div className="mt-4 grid grid-cols-3 gap-3 border-b border-border pb-6">
                    {item.stats.map((s) => (
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
                ) : null}

                <div className="mt-6 flex justify-between align-center gap-2">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="h-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow hover:underline"
                  >
                    Visit Site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>

              <ShowcasePanel item={item} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FeaturedWork = () => {
  const [openSlug, setOpenSlug] = useState<string | null>(content.projects[0]?.slug ?? null);
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
                  See how it works
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>


        <div className="mt-12 border-t border-border md:mt-16">
          {content.projects.map((project, index) => (
            <Row
              key={project.slug}
              item={project}
              index={index}
              isOpen={openSlug === project.slug}
              onToggle={() => setOpenSlug(openSlug === project.slug ? null : project.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
