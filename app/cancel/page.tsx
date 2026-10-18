import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Checkout canceled",
};

export default function CancelPage() {
  return (
    <section className="flex min-h-[80dvh] items-center pt-24">
      <Container className="max-w-xl py-20 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">Checkout paused</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
          No charge — whenever you’re ready.
        </h1>
        <p className="mt-4 text-ink-muted leading-relaxed">
          You left Stripe before finishing. Your cart wasn’t charged. The Nail File
          Toy will be here when clipper night starts looking grim again.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton href="/product">Return to the product</MagneticButton>
        </div>
      </Container>
    </section>
  );
}
