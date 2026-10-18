import type { Metadata } from "next";
import Link from "next/link";
import { PawMark } from "@/components/logo/PawMark";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Order confirmed",
};

type Props = {
  searchParams: { session_id?: string };
};

export default async function SuccessPage({ searchParams }: Props) {
  let email: string | null = null;

  if (searchParams.session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(searchParams.session_id);
      email = session.customer_details?.email ?? null;
    } catch {
      email = null;
    }
  }

  return (
    <section className="flex min-h-[80dvh] items-center pt-24">
      <Container className="max-w-xl py-20 text-center">
        <div className="mx-auto mb-6 h-16 w-[4.5rem]">
          <PawMark interactive={false} />
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">Thank you</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
          They’re going to love this ritual.
        </h1>
        <p className="mt-4 text-ink-muted leading-relaxed">
          Payment went through. A receipt
          {email ? (
            <>
              {" "}
              is on its way to <strong className="text-ink">{email}</strong>
            </>
          ) : (
            " is on its way"
          )}
          . We’ll follow with shipping details as soon as the order is packed.
        </p>
        <p className="mt-6 text-sm text-ink-soft">
          Tip: let them watch the first handful of treats go in. Curiosity does the
          rest.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <MagneticButton href="/">Back home</MagneticButton>
          <Link href="/product" className="text-sm text-ink-muted underline-offset-4 hover:underline">
            Order another
          </Link>
        </div>
      </Container>
    </section>
  );
}
