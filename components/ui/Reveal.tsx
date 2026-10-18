"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
