import { content } from "@/content";

export const Footer = () => (
  <footer className="bg-footer py-10">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-[hsl(var(--footer-fg)/0.7)] sm:flex-row">
      <p className="font-display">
        <span className="font-bold text-[hsl(var(--footer-fg))]">RMCOOL26</span>
        <span className="mx-2">·</span>© {new Date().getFullYear()} {content.meta.name}
      </p>
      <p className="text-xs">Designed & coded with ☕ in {content.meta.location}</p>
      <div className="flex items-center gap-6">
        <a
          href={content.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-[hsl(var(--footer-fg))]"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${content.contact.email}`}
          className="transition-colors hover:text-[hsl(var(--footer-fg))]"
        >
          Email
        </a>
        <a href="#top" className="transition-colors hover:text-[hsl(var(--footer-fg))]">
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
