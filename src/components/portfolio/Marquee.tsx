import { content } from "@/content";

export const Marquee = () => {
  const items = [...content.marquee, ...content.marquee];
  return (
    <section className="border-y border-border bg-secondary/40 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-6 font-display text-2xl md:text-4xl">
            <span>{item}</span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </section>
  );
};
