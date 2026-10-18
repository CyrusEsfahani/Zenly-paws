"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PawMark } from "@/components/logo/PawMark";
import { formatPrice, PRODUCT } from "@/lib/product";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-blush/40 blur-3xl" />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div style={reduce ? undefined : { y }} className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <PawMark className="h-12 w-14" />
            <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
              Family-designed · Direct from Zenly Paws
            </p>
          </div>
          <h1 className="font-serif text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            Nail care that feels like play.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted text-balance">
            {PRODUCT.tagline} Dogs scratch the sandpaper top to forage — and file
            their nails without the clipper standoff.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton href="/product" className="w-full sm:w-auto">
              Shop the Nail File Toy · {formatPrice(PRODUCT.priceInCents)}
            </MagneticButton>
            <MagneticButton href="/#story" variant="ghost" className="w-full sm:w-auto">
              Read our story
            </MagneticButton>
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Secure Stripe checkout · Ships from the U.S. · Refillable discs
          </p>
        </motion.div>

        <motion.div style={reduce ? undefined : { y: imgY }} className="relative">
          <div className="relative mx-auto aspect-[4/3.2] w-full max-w-xl">
            <div className="absolute inset-6 rounded-[2.2rem] bg-gradient-to-br from-teal/25 via-sage-mist to-cream-deep" />
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-[2.4rem] bg-cream-paper shadow-lift ring-1 ring-ink/5"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/product-main.jpg"
                alt={PRODUCT.images[0].alt}
                fill
                priority
                sizes="(min-width: 1024px) 540px, 90vw"
                className="object-contain object-center p-4 sm:p-6"
              />
            </motion.div>
            <motion.div
              className="absolute -left-2 bottom-10 hidden rounded-2xl bg-cream-paper/90 px-4 py-3 text-sm shadow-card ring-1 ring-ink/5 backdrop-blur sm:block"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Puzzle + slow feeder + nail file
            </motion.div>
            <motion.div
              className="absolute -right-1 top-8 hidden rounded-2xl bg-ink px-4 py-3 text-sm text-cream-paper shadow-lift sm:block"
              initial={reduce ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              Self-healing 80-grit pad
            </motion.div>
          </div>
        </motion.div>
      </Container>

      <a
        href="#story"
        className="mx-auto mt-16 mb-6 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-soft"
      >
        <ArrowDown size={14} className="animate-bounce" />
        Scroll
      </a>
    </section>
  );
}
