import { motion } from "framer-motion";
import { content } from "@/content";
import { Wrench, Rocket, UserRound, Sparkles, Users } from "lucide-react";

// Positions around the profile photo (percent)
const positions = [
  { top: "-4%", left: "-30%", delay: 0 },
  { top: "4%", right: "-48%", delay: 0.4 },
  { bottom: "-8%", left: "26%", delay: 0.8 },
  { bottom: "28%", right: "-50%", delay: 1.2 },
  { top: "46%", left: "-40%", delay: 1.6 },
];

const iconMap: Record<string, any> = {
  "Figjam → Jira": Wrench,
  "Real users & results": Rocket,
  "Shipping since 2016": UserRound,
  "Delivered · Audited": Sparkles,
  "Team Scaled": Users,
};

export const StatBadges = () => {
  const badges = content.hero.badges;

  return (
    <>
      {badges.map((b, i) => {
        const pos = positions[i] ?? positions[0];
        const Icon = iconMap[b.label] || Sparkles;
        return (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
              animationDelay: `${pos.delay}s`,
            }}
            className="absolute z-10 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
              whileHover={{ scale: 1.08, y: -4 }}
              data-cursor="hover"
              className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-2 shadow-soft backdrop-blur-md"
            >
              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              <div className="leading-tight">
                <div className="font-display text-sm font-bold text-foreground">{b.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{b.label}</div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Mobile fallback row */}
      <div className="mt-6 flex flex-wrap justify-center gap-2 md:hidden">
        {badges.map((b) => {
          const Icon = iconMap[b.label] || Sparkles;
          return (
            <div
              key={b.label}
              className="flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs shadow-soft"
            >
              <Icon className="h-3 w-3 text-primary" aria-hidden="true" />
              <span className="font-display font-bold">{b.value}</span>
              <span className="text-muted-foreground">{b.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
