"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

export function PawMark({
  className,
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-40, 40], [12, -12]), {
    stiffness: 180,
    damping: 16,
  });
  const ry = useSpring(useTransform(mx, [-40, 40], [-16, 16]), {
    stiffness: 180,
    damping: 16,
  });

  function onMove(e: React.MouseEvent) {
    if (!interactive || reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={cn("relative", className)}
      style={{ perspective: 700 }}
    >
      <motion.div
        className="preserve-3d relative"
        style={reduce || !interactive ? undefined : { rotateX: rx, rotateY: ry }}
      >
        <svg viewBox="0 0 120 108" className="h-full w-full drop-shadow-md" aria-hidden>
          <defs>
            <linearGradient id="padMain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8EC8DE" />
              <stop offset="55%" stopColor="#5BA8C9" />
              <stop offset="100%" stopColor="#3E8FB4" />
            </linearGradient>
            <linearGradient id="padToe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7FBBD6" />
              <stop offset="100%" stopColor="#4A92B8" />
            </linearGradient>
            <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.45" />
              <stop offset="40%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="38" cy="26" rx="14" ry="18" fill="url(#padToe)" transform="rotate(-28 38 26)" />
          <ellipse cx="62" cy="16" rx="13" ry="17" fill="url(#padToe)" />
          <ellipse cx="86" cy="24" rx="13" ry="17" fill="url(#padToe)" transform="rotate(22 86 24)" />
          <ellipse cx="104" cy="42" rx="11" ry="15" fill="url(#padToe)" transform="rotate(42 104 42)" />
          <path
            d="M22 58c8-18 30-28 52-22 18 5 32 22 30 40-2 16-16 26-34 28-20 2-40-6-48-20-6-11-6-18 0-26z"
            fill="url(#padMain)"
          />
          <path
            d="M30 56c10-14 28-20 46-14 8 3 14 8 18 14-8-10-22-16-38-14-12 1-20 6-26 14z"
            fill="url(#shine)"
          />
        </svg>
      </motion.div>
    </div>
  );
}
