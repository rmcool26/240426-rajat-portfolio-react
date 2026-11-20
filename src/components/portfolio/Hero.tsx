import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/content";

export const Hero = () => {
  const { hero } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-hero pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="container max-w-7xl">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] lg:gap-16">
          <div className="relative z-10 pb-2">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-7 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary sm:text-xs"
            >
              <span className="h-px w-8 bg-primary" />
              Lead Product Designer · UI/UX Lead
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="max-w-[900px] text-balance font-editorial text-[clamp(3.1rem,7.2vw,6.9rem)] leading-[0.94] text-foreground"
            >
              I turn complex workflows into{" "}
              <span className="text-primary">products teams can use.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 max-w-[650px] text-base leading-[1.8] text-muted-foreground md:text-lg"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/work"
                className="inline-flex h-12 items-center gap-3 bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-foreground"
                data-cursor="hover"
              >
                Explore selected work <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex h-12 items-center gap-2 border border-border bg-card/70 px-5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                data-cursor="hover"
              >
                About Rajat <ArrowDownRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 text-[11px] font-bold uppercase tracking-[0.13em] text-muted-foreground">
              <span>10+ years</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span>Enterprise SaaS</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span>Web & mobile</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span>Design leadership</span>
            </div>
          </div>

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[440px] lg:ml-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-secondary">
              <img
                src={hero.profileImage}
                alt="Portrait of Rajat Mishra"
                width="900"
                height="1125"
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent px-5 pb-5 pt-24 sm:px-7 sm:pb-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-background/75">Rajat Mishra</p>
                <p className="mt-1 font-editorial text-3xl leading-none text-background sm:text-4xl">Design, from first question to release.</p>
              </div>
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              <span>Product thinking / systems / craft</span>
              <span>01 — 04</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};
