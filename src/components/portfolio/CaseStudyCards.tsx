import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content, type CaseStudyItem } from "@/content";

const CaseStudyCard = ({
  item,
  index,
}: {
  item: CaseStudyItem;
  index: number;
}) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="overflow-hidden rounded-3xl"
    >
      <div
        className={`grid gap-0 md:grid-cols-2 ${
          isReversed ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-secondary/30 md:[direction:ltr]">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            src={item.cover}
            alt={item.name}
            className="h-full min-h-[280px] w-full object-cover md:min-h-[400px]"
            loading="lazy"
          />
          {/* Eyebrow badge on image */}
          <div className="absolute left-4 top-4 md:left-6 md:top-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium shadow-soft backdrop-blur">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  item.isLive ? "bg-green-500" : "bg-amber-400"
                }`}
              />
              {item.eyebrow}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-12 md:[direction:ltr]">
          <h3 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {item.headline.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h3>

          <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
            {item.body}
          </p>

          {/* Stats row */}
          {item.stats.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-around gap-6 border-t border-border pt-6">
              {item.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
              {/* {item.badge && (
                <div>
                  <div className="font-display text-2xl font-bold text-primary">
                    🎓
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {item.badge}
                  </div>
                </div>
              )} */}
            </div>
          )}

          {/* CTA */}
          <div className="mt-8">
            {item.isLive ? (
              <Link
                to={item.cta.href}
                data-cursor="hover"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-5 hover:bg-primary"
              >
                {item.cta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-3 rounded-full border-2 border-dashed border-border bg-background/40 px-7 py-4 text-sm font-medium text-muted-foreground backdrop-blur cursor-default">
                {item.cta.label}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CaseStudyCards = () => {
  return (
    <div className="mt-12 md:mt-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium uppercase tracking-widest text-primary mb-6"
      >
        Case Studies
      </motion.p>
      {content.caseStudies.map((cs, i) => (
        <CaseStudyCard key={cs.slug} item={cs} index={i} />
      ))}
    </div>
  );
};
