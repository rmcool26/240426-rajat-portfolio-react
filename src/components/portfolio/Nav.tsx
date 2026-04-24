import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { content } from "@/content";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // active section detection
      const sections = ["#top", "#work", "#about", "#contact"];
      const y = window.scrollY + 140;
      let current = "#top";
      for (const s of sections) {
        const el = document.querySelector(s);
        if (el && (el as HTMLElement).offsetTop <= y) current = s;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-40 px-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "bg-background/85 shadow-soft backdrop-blur-xl" : "bg-background/70 backdrop-blur-md"
        }`}
      >
        <a href="#top" data-cursor="hover" className="font-display text-base font-bold tracking-tight">
          <span className="text-primary">RM</span>
          <span className="text-foreground">COOL</span>
          <span className="text-muted-foreground">26</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {content.nav.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  data-cursor="hover"
                  className="relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative ${isActive ? "text-foreground" : ""}`}>{item.label}</span>
                </a>
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
            className="hidden h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-transform hover:scale-105 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {content.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-display text-2xl hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={content.contact.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
