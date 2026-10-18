"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/logo/Wordmark";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background,box-shadow,transform] duration-300",
        scrolled ? "bg-cream/80 shadow-sm backdrop-blur-xl" : "bg-transparent",
      )}
      animate={reduce ? undefined : { y: hidden && !open ? -88 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="relative z-10 shrink-0" aria-label="Zenly Paws home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="/product" className="min-h-11 px-5 text-sm">
            Shop the toy
          </MagneticButton>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-paper/80 text-ink ring-1 ring-ink/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-cream pt-24 lg:hidden"
          >
            <nav className="flex flex-col gap-2 px-6" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-4 font-serif text-3xl text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 px-3">
                <MagneticButton href="/product" className="w-full" onClick={() => setOpen(false)}>
                  Shop the toy
                </MagneticButton>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
