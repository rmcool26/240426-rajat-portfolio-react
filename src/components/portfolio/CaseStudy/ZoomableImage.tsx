import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

type Props = {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * Click thumbnail → full-screen modal.
 * Inside modal: click image to toggle zoom; drag to pan when zoomed.
 * No internal scrollbars — image is transformed inside a fixed viewport.
 */
export function ZoomableImage({ src, alt = "", caption, className = "", children }: Props) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ sx: number; sy: number; bx: number; by: number; moved: boolean } | null>(null);
  const ZOOM = 2.4;

  useEffect(() => {
    if (!open) return;
    setZoomed(false);
    setPan({ x: 0, y: 0 });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!zoomed) setPan({ x: 0, y: 0 });
  }, [zoomed]);

  const onPointerDown = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!zoomed) return;
    e.preventDefault();
    e.stopPropagation();
    (e.target as HTMLImageElement).setPointerCapture(e.pointerId);
    dragRef.current = { sx: e.clientX, sy: e.clientY, bx: pan.x, by: pan.y, moved: false };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLImageElement>) => {
    const d = dragRef.current;
    if (!d) return;
    e.preventDefault();
    e.stopPropagation();
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
    setPan({ x: d.bx + dx, y: d.by + dy });
  };
  const onPointerUp = (e: React.PointerEvent<HTMLImageElement>) => {
    e.stopPropagation();
    try { (e.target as HTMLImageElement).releasePointerCapture(e.pointerId); } catch {}
    setDragging(false);
    setTimeout(() => { dragRef.current = null; }, 0);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="hover"
        data-cursor-label="Click to zoom"
        className={`group relative block w-full overflow-hidden rounded-2xl border border-border bg-muted transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
        aria-label={alt || "Open image"}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center">{children}</div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] overflow-hidden overscroll-contain bg-black/90 backdrop-blur-sm"
            style={{ touchAction: "none" }}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setOpen(false); }}
              data-cursor="hover"
              data-cursor-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute inset-0 flex select-none items-center justify-center overflow-hidden px-3 py-16 sm:px-8 sm:py-12">
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (dragRef.current?.moved) return;
                    setZoomed((z) => !z);
                  }}
                  data-cursor="hover"
                  data-cursor-label={dragging ? "Drag" : zoomed ? "Drag / click out" : "Click to zoom in"}
                  style={{
                    transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomed ? ZOOM : 1})`,
                    transformOrigin: "center",
                    transition: dragging ? "none" : "transform 0.28s ease-out",
                    cursor: zoomed ? (dragging ? "grabbing" : "grab") : "zoom-in",
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    willChange: "transform",
                    touchAction: "none",
                    userSelect: "none",
                  }}
                  className="block rounded-xl object-contain shadow-2xl"
                />
              ) : (
                <div className="flex h-[70vh] w-[80vw] items-center justify-center rounded-xl bg-foreground text-muted-foreground">
                  {children}
                </div>
              )}
            </div>

            {src && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
                data-cursor="hover"
                data-cursor-label={zoomed ? "Zoom out" : "Zoom in"}
                className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/20 sm:bottom-7"
                aria-label={zoomed ? "Zoom out" : "Zoom in"}
              >
                {zoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                {zoomed ? "Zoom out" : "Zoom in"}
              </button>
            )}

            {caption && (
              <p className="absolute bottom-[4.5rem] left-1/2 hidden -translate-x-1/2 text-center text-xs uppercase tracking-wider text-white/70 sm:block">
                {caption}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ZoomableImage;