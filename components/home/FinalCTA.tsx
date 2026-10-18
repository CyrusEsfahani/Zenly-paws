import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { formatPrice, PRODUCT } from "@/lib/product";

export function FinalCTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-teal-deep via-sage to-ink px-8 py-16 text-center text-cream-paper sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-bright/30 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.22em] text-cream-paper/60">
              Ready when they are
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl text-balance">
              Skip the clipper night. Start a better ritual.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream-paper/75">
              Direct checkout with Stripe. Same Nail File Toy families already know
              from Amazon — without the marketplace noise.
            </p>
            <div className="mt-8 flex justify-center">
              <MagneticButton href="/product" variant="ghost" className="bg-cream-paper text-ink ring-0 hover:bg-white">
                Buy now · {formatPrice(PRODUCT.priceInCents)}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
