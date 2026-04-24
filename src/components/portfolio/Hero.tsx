import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { content } from "@/content";
import { StatBadges } from "./StatBadges";
import { MagneticButton } from "./MagneticButton";

export const Hero = () => {
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-32"
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
            <motion.p
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
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-balance text-foreground"
            >
              I turn {" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">messy workflows into products</span>
                {/* <span className="absolute -bottom-1 left-0 right-0 -z-0 h-3 rounded-full bg-primary/20" /> */}
              </span>{" "}
              that actually work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href={hero.secondaryCta.href} variant="ghost">
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
            className="relative mx-auto h-[280px] w-[280px] md:h-[360px] md:w-[360px]"
          >
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

            <StatBadges />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
