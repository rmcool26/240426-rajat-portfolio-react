import { ArrowUpRight, Download, Linkedin, Mail, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";

export const Contact = () => {
  const reduceMotion = useReducedMotion();
  const { contact } = content;

  return (
    <section id="contact" className="bg-foreground py-28 text-background md:py-36">
      <div className="container max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
        >
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-glow">Contact / Start a conversation</p>
            <h1 className="mt-5 max-w-4xl font-editorial text-[clamp(3.6rem,7vw,7rem)] leading-[0.9] text-background">
              Have a difficult workflow? Let’s work through it.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-[1.8] text-background/65 md:text-lg">
              Send me the brief, the screen that isn’t working or the problem your team keeps working around. We can start with the problem and figure out what needs to change.
            </p>
            <a
              href={\`mailto:\${contact.email}?subject=Portfolio%20enquiry\`}
              className="mt-10 inline-flex items-center gap-3 border-b border-primary-glow pb-2 text-xl font-semibold text-background transition-colors hover:text-primary-glow sm:text-2xl"
            >
              {contact.email}
              <ArrowUpRight className="h-5 w-5 text-primary-glow" />
            </a>
          </div>

          <div className="flex flex-col justify-end border-t border-background/20 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-background/45">Direct links</p>
            <div className="mt-4 divide-y divide-background/15 border-y border-background/15">
              <a href={\`mailto:\${contact.email}\`} className="flex items-center justify-between gap-4 py-5 text-sm font-semibold text-background/80 transition-colors hover:text-primary-glow">
                <span className="inline-flex items-center gap-3"><Mail className="h-4 w-4 text-primary-glow" /> Email</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 py-5 text-sm font-semibold text-background/80 transition-colors hover:text-primary-glow">
                <span className="inline-flex items-center gap-3"><Linkedin className="h-4 w-4 text-primary-glow" /> LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={\`tel:\${contact.phone.replace(/\\s/g, "")}\`} className="flex items-center justify-between gap-4 py-5 text-sm font-semibold text-background/80 transition-colors hover:text-primary-glow">
                <span className="inline-flex items-center gap-3"><Phone className="h-4 w-4 text-primary-glow" /> {contact.phone}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={contact.resume} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 py-5 text-sm font-semibold text-background/80 transition-colors hover:text-primary-glow">
                <span className="inline-flex items-center gap-3"><Download className="h-4 w-4 text-primary-glow" /> Download resume</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-7 text-xs leading-relaxed text-background/45">Based in India · Open to senior and lead product design roles.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
