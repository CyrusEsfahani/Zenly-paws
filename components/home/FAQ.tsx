"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">FAQ</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl text-balance">
            Before you bring one home.
          </h2>
        </Reveal>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-medium tracking-tight">{item.q}</span>
                    <Plus
                      className={cn(
                        "shrink-0 text-ink-muted transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                      size={20}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-ink-muted leading-relaxed">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
