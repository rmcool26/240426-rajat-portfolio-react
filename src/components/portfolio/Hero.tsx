import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { content } from "@/content";
import { StatBadges } from "./StatBadges";
import { MagneticButton } from "./MagneticButton";


export const Hero = () => {
  const { hero } = content;
  const [showTooltip, setShowTooltip] = useState(false);


  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-hero pt-32 pb-20 md:pt-44 md:pb-32"
    >
      {/* Soft mesh blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary-glow/10 blur-3xl"
      />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* LEFT — copy */}
          <div>
            {/* <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-sm font-medium text-foreground shadow-soft backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {hero.eyebrow}
            </motion.p> */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-sm font-medium text-foreground shadow-soft backdrop-blur"
            >
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              {/* <span>Shipping since 2014</span> */}
              {/* <span className="mx-1 h-4 w-px bg-border" /> */}
              <span
                className="relative cursor-help text-primary font-semibold"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip((v) => !v)}
              >
                Pragmatic  Product and UI/UX Designer {/* ✦ */}
                <AnimatePresence>
                  {showTooltip && (
                    <motion.span
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -left-1/4 bottom-full z-50 mb-3 w-64 -translate-x-1/2 rounded-xl border border-border bg-background/95 px-4 py-3 text-xs font-normal leading-relaxed text-muted-foreground shadow-elegant backdrop-blur-md"
                    >
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-r border-b border-border bg-background/95" />
                      <span className="relative z-10">
                        I design clear, practical systems that balance user needs, business goals, and technical constraints.
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-balance text-foreground"
            >
              The cool guy who{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">makes messy</span>
                {/* <span className="absolute -bottom-1 left-0 right-0 -z-0 h-3 rounded-full bg-primary/20" /> */}
              </span>{" "}
              workflows work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-full text-base text-muted-foreground md:text-lg"
            >
              {hero.sub}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 text-xs font-medium text-primary/80 md:text-sm italic"
            >
              rmcool26 = calm under complexity, sharp with pixels, focused on shipping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-2"
            >
               <MagneticButton href={hero.primaryCta.href} variant="primary" data-cursor-label="Skip to the good stuff">
                 {hero.primaryCta.label}
                 <ArrowRight className="h-4 w-4" />
               </MagneticButton>
               <MagneticButton href={hero.secondaryCta.href} variant="ghost" data-cursor-label="Let’s build something useful">
                 <MessageCircle className="h-4 w-4" />
                 {hero.secondaryCta.label}
               </MagneticButton>

            </motion.div>
          </div>

          {/* RIGHT — profile + floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-[280px] md:w-[360px] h-auto md:h-[360px]"
            >
              <div className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px]">
                {/* Glow ring */}
                <div className="absolute -inset-4 -z-10 animate-float rounded-full bg-gradient-to-br from-primary/40 via-primary-glow/30 to-transparent blur-2xl" />

                {/* Decorative dotted ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                />

                {/* Profile */}
                <div className="absolute inset-3 overflow-hidden rounded-full bg-background shadow-elegant ring-4 ring-background">
                  <img
                    src={hero.profileImage}
                    alt={`${content.meta.name} portrait`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <StatBadges />
            </motion.div>
        </div>
      </div >
    </section >
  );
};
