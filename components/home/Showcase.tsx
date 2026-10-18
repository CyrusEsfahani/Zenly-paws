import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { formatPrice, PRODUCT } from "@/lib/product";

export function Showcase() {
  return (
    <section id="product" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-teal/15 to-cream-paper p-4 sm:p-8 shadow-lift ring-1 ring-ink/5">
            <Image
              src="/images/product-main.jpg"
              alt={PRODUCT.images[0].alt}
              width={960}
              height={721}
              sizes="(min-width: 1024px) 640px, 92vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">The product</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              {PRODUCT.shortName}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{PRODUCT.description}</p>
            <p className="mt-5 font-serif text-3xl">{formatPrice(PRODUCT.priceInCents)}</p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {PRODUCT.benefits.map((b, i) => (
              <Reveal key={b.title} delay={0.06 * i}>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage">
                    <Check size={14} aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-sm leading-relaxed text-ink-muted">{b.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10" delay={0.16}>
            <MagneticButton href="/product">Choose quantity & checkout</MagneticButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
