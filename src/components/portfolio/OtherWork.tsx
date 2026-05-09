import { useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ExternalLink, Plus } from "lucide-react";
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
      </div>
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
      className={`group relative border-b border-border transition-colors ${
        isOpen ? "bg-card/40" : "hover:bg-card/20"
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
            className={`font-display text-2xl font-bold leading-tight tracking-tight transition-colors md:text-3xl lg:text-4xl ${
              isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
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
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
            isOpen
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
                <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3">
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
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-transform hover:scale-105 hover:underline"
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

export const OtherWork = () => {
  const [openSlug, setOpenSlug] = useState<string | null>(content.projects[0]?.slug ?? null);

  return (
    <div className="mt-16 md:mt-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
      >
        Other Work
      </motion.p>
      <div className="border-t border-border">
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
  );
};
