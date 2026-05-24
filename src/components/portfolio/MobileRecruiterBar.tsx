import { Mail, Linkedin } from "lucide-react";
import { content } from "@/content";

/** Sticky dual CTA for recruiters on mobile — Email + LinkedIn */
export function MobileRecruiterBar() {
  const { contact } = content;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 shadow-[0_-8px_30px_-12px_hsl(224_47%_11%/0.2)] backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Quick contact"
    >
      <div className="container flex gap-3 py-3">
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent("Portfolio — Let's connect")}`}
          data-allow-copy
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-soft transition active:scale-[0.98]"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          Email Me
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          data-allow-copy
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground transition active:scale-[0.98] hover:border-primary hover:text-primary"
        >
          <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default MobileRecruiterBar;
