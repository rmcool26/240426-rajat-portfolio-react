import { useEffect } from "react";
import {
  shouldBlockClipboard,
  shouldBlockDrag,
  shouldBlockKeyboard,
  shouldBlockSelection,
} from "@/lib/siteGuards";

/**
 * Site-wide UX deterrent: blocks right-click, text copy, image drag,
 * common devtools shortcuts, and Print Screen key.
 *
 * Not real security — determined users can still view source, screenshot via OS tools,
 * or disable JS. Set VITE_DISABLE_SITE_GUARDS=true in .env to turn off during local dev.
 */
export function SiteGuards() {
  const enabled = import.meta.env.VITE_DISABLE_SITE_GUARDS !== "true";

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("site-guards-active");

    const onContext = (e: MouseEvent) => e.preventDefault();

    const onCopy = (e: ClipboardEvent) => {
      if (shouldBlockClipboard(e.target)) e.preventDefault();
    };

    const onCut = (e: ClipboardEvent) => {
      if (shouldBlockClipboard(e.target)) e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      if (shouldBlockSelection(e.target)) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      if (shouldBlockDrag(e.target)) e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (
        shouldBlockKeyboard({
          key: e.key,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          target: e.target,
        })
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContext);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCut);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      root.classList.remove("site-guards-active");
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCut);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [enabled]);

  return null;
}

export default SiteGuards;
