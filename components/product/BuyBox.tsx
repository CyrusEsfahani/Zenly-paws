"use client";

import { useState } from "react";
import { Minus, Plus, ShieldCheck } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { formatPrice, PRODUCT } from "@/lib/product";

export function BuyBox() {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: qty, productId: PRODUCT.id }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed.");
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] bg-cream-paper p-6 shadow-card ring-1 ring-ink/5 sm:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-teal-deep">Direct from the family</p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight">{PRODUCT.name}</h1>
      <p className="mt-3 text-ink-muted">{PRODUCT.tagline}</p>
      <p className="mt-5 font-serif text-4xl">{formatPrice(PRODUCT.priceInCents)}</p>

      <div className="mt-8">
        <p id="qty-label" className="mb-2 text-sm font-medium">
          Quantity
        </p>
        <div
          className="inline-flex items-center rounded-full bg-cream ring-1 ring-ink/10"
          role="group"
          aria-labelledby="qty-label"
        >
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center"
            aria-label="Decrease quantity"
            onClick={() => setQty((n) => Math.max(1, n - 1))}
          >
            <Minus size={16} />
          </button>
          <span className="w-10 text-center tabular-nums" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center"
            aria-label="Increase quantity"
            onClick={() => setQty((n) => Math.min(10, n + 1))}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <MagneticButton
          onClick={checkout}
          disabled={loading}
          className="w-full min-h-12"
          variant="dark"
        >
          {loading ? "Redirecting to Stripe…" : `Checkout · ${formatPrice(PRODUCT.priceInCents * qty)}`}
        </MagneticButton>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <p className="mt-5 flex items-start gap-2 text-sm text-ink-muted">
        <ShieldCheck size={16} className="mt-0.5 shrink-0 text-sage" />
        You’ll complete payment on Stripe’s hosted checkout — cards, Apple Pay, and
        Link where available.
      </p>

      <ul className="mt-8 space-y-2 text-sm text-ink-muted">
        {PRODUCT.details.map((d) => (
          <li key={d} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
