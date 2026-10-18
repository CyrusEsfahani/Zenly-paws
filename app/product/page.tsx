import type { Metadata } from "next";
import { BuyBox } from "@/components/product/BuyBox";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Container } from "@/components/ui/Container";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: PRODUCT.name,
  description: PRODUCT.description,
};

export default function ProductPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-32">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <ProductGallery />
        <div className="lg:sticky lg:top-28">
          <BuyBox />
        </div>
      </Container>
      <Container className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PRODUCT.specs.map((spec) => (
          <div key={spec.label} className="rounded-2xl bg-cream-paper px-4 py-5 ring-1 ring-ink/5">
            <p className="text-xs uppercase tracking-[0.16em] text-ink-soft">{spec.label}</p>
            <p className="mt-1 font-medium">{spec.value}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
