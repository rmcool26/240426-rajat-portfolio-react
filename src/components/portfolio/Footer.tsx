import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/content";

export const Footer = () => (
  <footer className="bg-footer py-8">
    <div className="container max-w-7xl">
      <div className="flex flex-col gap-7 border-b border-[hsl(var(--footer-fg)/0.16)] pb-7 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" aria-label="Rajat Mishra home" className="inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-[hsl(var(--footer-fg)/0.4)] text-[hsl(var(--footer-fg))]" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 38V10.5h8.3c7 0 10.4 3.1 10.4 8.1s-3.5 8.3-10.4 8.3H7.5M18.4 27l9 11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" strokeLinejoin="miter"/>
              <path d="M26.5 38V10.5l7.4 11.2 7.1-11.2V38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" strokeLinejoin="miter"/>
            </svg>
          </span>
          <span className="font-display text-sm font-extrabold tracking-[-0.03em] text-[hsl(var(--footer-fg))]">Rajat Mishra</span>
        </Link>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[hsl(var(--footer-fg)/0.68)]">
          <Link to="/work" className="transition-colors hover:text-[hsl(var(--footer-fg))]">Work</Link>
          <Link to="/about" className="transition-colors hover:text-[hsl(var(--footer-fg))]">About</Link>
          <Link to="/experience" className="transition-colors hover:text-[hsl(var(--footer-fg))]">Experience</Link>
          <Link to="/process" className="transition-colors hover:text-[hsl(var(--footer-fg))]">Process</Link>
          <Link to="/contact" className="transition-colors hover:text-[hsl(var(--footer-fg))]">Contact</Link>
        </nav>

        <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--footer-fg)/0.68)] transition-colors hover:text-[hsl(var(--footer-fg))]">
          LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="flex flex-col gap-3 pt-5 text-[11px] text-[hsl(var(--footer-fg)/0.5)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rajat Mishra</p>
        <p>Product design · Systems thinking · Delivery</p>
        <a href={\`mailto:\${content.contact.email}\`} className="transition-colors hover:text-[hsl(var(--footer-fg))]">{content.contact.email}</a>
      </div>
    </div>
  </footer>
);
