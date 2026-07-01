import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, ArrowRight } from "lucide-react";
import { content } from "@/content";
import { MagneticButton } from "./MagneticButton";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
  icon?: React.ReactNode;
  cursorLabel?: string;
  external?: boolean;
}

interface CTAProps {
  title?: string;
  subtext?: string;
  buttons?: CTAButton[];
}

export const CTA = ({
  title,
  subtext,
  buttons,
}: CTAProps = {}) => {
  const { contact } = content;

  // Defaults
  const finalTitle = title || `Got a messy workflow? <br /><span className="text-primary">Let’s make it cool.</span>`;
  const finalSubtext = subtext || "Send the brief — I’ll help turn it into something clean, usable and shippable.";
  const finalButtons = buttons || [
    {
      label: "Email Me",
      href: `mailto:${contact.email}`,
      variant: "primary",
      icon: <Mail className="h-4 w-4" />,
      cursorLabel: "Shoot me an email",
    },
    {
      label: "LinkedIn",
      href: contact.linkedin,
      variant: "ghost",
      icon: <Linkedin className="h-4 w-4" />,
      cursorLabel: "Connect on LinkedIn",
      external: true,
    },
    {
      label: "Download Resume",
      href: contact.resume,
      variant: "ghost",
      icon: <FileText className="h-4 w-4" />,
      cursorLabel: "View Resume",
    },
  ];

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
          <h2
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-foreground"
            dangerouslySetInnerHTML={{ __html: finalTitle }}
          />
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            {finalSubtext}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {finalButtons.map((btn, i) => (
              <MagneticButton
                key={i}
                href={btn.href}
                variant={btn.variant || "ghost"}
                data-cursor-label={btn.cursorLabel || btn.label}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
              >
                {btn.icon}
                {btn.label}
                {btn.label === "View Work" && <ArrowRight className="ml-2 h-4 w-4" />}
              </MagneticButton>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
