import { useEffect } from "react";

/**
 * Disables right-click context menu and common dev-tools shortcuts site-wide.
 * Buttons, links, and form interactions remain fully functional.
 * Note: this is a UX deterrent, not real security.
 */
export function SiteGuards() {
  useEffect(() => {
    const onContext = (e: MouseEvent) => e.preventDefault();
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      // F12, Ctrl/Cmd+Shift+I/J/C, Ctrl/Cmd+U
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
        ((e.ctrlKey || e.metaKey) && k === "u")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}

export default SiteGuards;
