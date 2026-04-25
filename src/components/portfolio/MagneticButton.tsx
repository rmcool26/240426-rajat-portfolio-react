import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "none";
  strength?: number;
}

export const MagneticButton = ({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  strength = 0.3,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-glow",
    secondary:
      "bg-foreground text-background hover:opacity-90",
    ghost:
      "border border-border bg-background/60 backdrop-blur hover:bg-secondary text-foreground",
    none:
      "bg-background/60 backdrop-blur",
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      data-cursor="hover"
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-shadow duration-300",
        variantClasses[variant],
        className,
      )}
    >
      <motion.span animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }} className="inline-flex items-center gap-2">
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
};
