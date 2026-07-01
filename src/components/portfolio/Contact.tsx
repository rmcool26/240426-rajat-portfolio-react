import { motion } from "framer-motion";
import { Mail, Linkedin, FileDown } from "lucide-react";
import { content } from "@/content";
import { MagneticButton } from "./MagneticButton";

export const Contact = () => {
  const { contact } = content;

  return (
    <section id="contact" className="relative overflow-hidden bg-hero py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-full text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Let’s build something{" "}
            <span className="relative inline-block text-primary">
              cool together.
              {/* <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-primary/15" /> */}
            </span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Got a messy workflow, product idea, website, or dashboard that needs clarity? Send it over — I’ll help make it clean, usable and shippable.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
             <MagneticButton href={`mailto:${contact.email}`} variant="primary" data-cursor-label="Send the brief">
               <Mail className="h-4 w-4" /> Email Me
             </MagneticButton>
             <MagneticButton href={contact.linkedin} variant="secondary" data-cursor-label="See the professional trail">
               <Linkedin className="h-4 w-4" /> LinkedIn
             </MagneticButton>
             <MagneticButton href={contact.resume} variant="ghost" data-cursor-label="Download the proof">
               <FileDown className="h-4 w-4" /> Resume
             </MagneticButton>

          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Or just say hi at {" "} 
            <a href={`mailto:${contact.email}`} className="font-medium text-foreground underline-offset-4 hover:underline">
              {contact.email}
            </a>
             {" "}  — I actually reply.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
