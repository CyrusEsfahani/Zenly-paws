"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCT } from "@/lib/product";
import { cn } from "@/lib/cn";

export function ProductGallery() {
  const [active, setActive] = useState(0);
  const current = PRODUCT.images[active];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-cream-paper shadow-card ring-1 ring-ink/5 sm:aspect-[4/3.4]">
        <motion.div
          key={current.src}
          initial={{ opacity: 0.4, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            unoptimized={current.unoptimized}
            sizes="(min-width: 1024px) 560px, 92vw"
            className="object-contain p-5 sm:p-8"
          />
        </motion.div>
      </div>
      <ul className="mt-4 grid grid-cols-4 gap-3">
        {PRODUCT.images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={active === i}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-2xl bg-cream-paper ring-1 ring-ink/10 transition",
                active === i && "ring-2 ring-teal-deep",
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                unoptimized={image.unoptimized}
                sizes="120px"
                className="object-contain p-2"
              />
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink-soft">
        Drop real photos over <code>public/images/product-*.svg</code> and update{" "}
        <code>lib/product.ts</code>.
      </p>
    </div>
  );
}
