import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Theme toggle — defaults to LIGHT (Figma is light-first).
 * Persists choice in localStorage.
 */
export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : false;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      data-cursor="hover"
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 backdrop-blur transition-colors hover:bg-secondary"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};
