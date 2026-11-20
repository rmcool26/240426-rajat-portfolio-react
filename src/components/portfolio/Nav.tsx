import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { content } from "@/content";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const navLinks = content.nav;
  const isActive = (href: string) => pathname === href || (href === "/work" && pathname.startsWith("/case/"));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main navigation"
        className={\`mx-auto flex max-w-7xl items-center justify-between border px-3 py-2.5 transition-all duration-300 sm:px-5 \${
          scrolled
            ? "rounded-xl border-border bg-background shadow-soft"
            : "rounded-xl border-border/70 bg-background/95"
        }\`}
      >
        <Link
          to="/"
          aria-label="Rajat Mishra — home"
          className="group inline-flex min-w-0 items-center gap-3"
          data-cursor="hover"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-primary/40 bg-primary text-[13px] font-extrabold tracking-[-0.08em] text-primary-foreground transition-transform group-hover:-rotate-3">
            RM
          </span>
          <span className="hidden font-display text-sm font-extrabold tracking-[-0.04em] text-foreground sm:inline">
            Rajat Mishra
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  data-cursor="hover"
                  className={\`relative inline-flex items-center px-3 py-2 text-[13px] font-semibold transition-colors \${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }\`}
                >
                  {item.label}
                  {active && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-px bg-primary" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={content.contact.resume}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="hidden h-10 items-center gap-2 bg-primary px-4 text-[13px] font-bold text-primary-foreground transition-colors hover:bg-foreground sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="grid h-10 w-10 place-items-center border border-border bg-card md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-7xl border border-border bg-card p-4 shadow-elegant md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((item) => (
                <li key={item.href} className="border-b border-border last:border-0">
                  <Link
                    to={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="flex items-center justify-between py-3 font-display text-lg font-bold"
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </Link>
                </li>
              ))}
              <li className="border-b border-border py-3">
                <Link to="/process" className="text-sm font-semibold text-muted-foreground">Design process</Link>
              </li>
              <li className="pt-4">
                <a
                  href={content.contact.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
                >
                  <Download className="h-4 w-4" /> Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
