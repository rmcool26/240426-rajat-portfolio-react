import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { content } from "@/content";
import { MagneticButton } from "./MagneticButton";

export const CTA = () => {
  const { contact } = content;

  return (
    <section className="relative isolate overflow-hidden bg-background py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-foreground">
            Got a messy workflow? <br />
            <span className="text-primary">Let’s make it cool.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Send the brief — I’ll help turn it into something clean, usable and shippable.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton
              href={`mailto:${contact.email}`}
              variant="primary"
              data-cursor-label="Shoot me an email"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </MagneticButton>
            <MagneticButton
              href={contact.linkedin}
              variant="ghost"
              data-cursor-label="Connect on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={contact.resume}
              variant="ghost"
              data-cursor-label="View Resume"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
