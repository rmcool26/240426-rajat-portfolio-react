import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
}

interface CTAProps {
  title?: string;
  subtext?: string;
  buttons?: CTAButton[];
}

export const CTA = ({
  title = "Have a complex product problem?",
  subtext = "Let’s start with the workflow, the people using it and what needs to get easier.",
  buttons = [],
}: CTAProps = {}) => (
  <section className="bg-secondary/50 py-20 md:py-28">
    <div className="container max-w-7xl">
      <div className="grid gap-10 border-y border-border py-10 md:grid-cols-[1fr_0.7fr] md:items-end md:py-14">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">Next conversation</p>
          <h2 className="mt-4 max-w-4xl font-editorial text-[clamp(3rem,6vw,5.6rem)] leading-[0.92] text-foreground">{title}</h2>
          <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-muted-foreground md:text-base">{subtext}</p>
        </div>

        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-3 md:justify-end">
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noreferrer" : undefined}
                className={\`inline-flex min-h-12 items-center gap-2 px-5 text-sm font-bold transition-colors \${
                  button.variant === "primary"
                    ? "bg-primary text-primary-foreground hover:bg-foreground"
                    : "border border-border bg-card text-foreground hover:border-primary hover:text-primary"
                }\`}
                data-cursor="hover"
              >
                {button.icon}
                {button.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);
