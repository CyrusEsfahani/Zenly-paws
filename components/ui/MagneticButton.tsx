"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "ghost" | "dark";
};

export function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  disabled,
  className,
  variant = "primary",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.25 });

  function onMove(e: React.MouseEvent) {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const styles = {
    primary:
      "bg-teal-deep text-cream-paper shadow-lift hover:bg-ink",
    dark: "bg-ink text-cream-paper shadow-lift hover:bg-teal-deep",
    ghost:
      "bg-transparent text-ink ring-1 ring-ink/15 hover:bg-cream-paper hover:ring-ink/30",
  }[variant];

  const inner = (
    <motion.span
      style={{ x: springX, y: springY }}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  const shared = cn(
    "relative inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[15px] font-medium tracking-tight transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    styles,
    className,
  );

  const wrapClass = cn("inline-flex", className?.includes("w-full") && "w-full");

  if (href) {
    return (
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={wrapClass}>
        <Link href={href} onClick={onClick} className={cn(shared, className?.includes("w-full") && "w-full")}>
          {inner}
        </Link>
      </div>
    );
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={wrapClass}>
      <button type={type} onClick={onClick} disabled={disabled} className={cn(shared, className?.includes("w-full") && "w-full")}>
        {inner}
      </button>
    </div>
  );
}
