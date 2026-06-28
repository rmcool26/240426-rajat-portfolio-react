import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { archiveItems } from "@/content";

export const EarlierWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 border-t border-border pt-10 md:mt-20 md:pt-12"
    >
      {/* Heading */}
      <div className="mb-6 flex items-baseline gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Earlier Work
        </p>
        <span className="text-xs text-muted-foreground/50">
          — 2016 – 2019, client websites shipped at Dreamz Merchandising Solutions
        </span>
      </div>

      {/* Text-only archive list */}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {archiveItems.map((item, i) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {item.name}
              </p>
              <div className="mt-1 flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${item.name}`}
                className="mt-0.5 shrink-0 text-muted-foreground/50 transition-colors hover:text-primary"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
