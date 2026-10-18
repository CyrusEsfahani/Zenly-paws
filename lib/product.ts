export type ProductImage = {
  src: string;
  alt: string;
  /** Set true for SVG/placeholder assets that skip Next image optimization. */
  unoptimized?: boolean;
};

export type Product = {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  priceInCents: number;
  currency: "usd";
  tagline: string;
  description: string;
  details: string[];
  benefits: { title: string; body: string }[];
  specs: { label: string; value: string }[];
  images: ProductImage[];
};

export const PRODUCT: Product = {
  id: "zenly-nail-file-toy",
  name: "Zenly Paws Nail File Toy",
  shortName: "Nail File Toy",
  slug: "nail-file-toy",
  priceInCents: 3799,
  currency: "usd",
  tagline: "A puzzle, slow feeder, and gentle nail file — in one daily ritual.",
  description:
    "Dogs scratch the self-healing sandpaper top to dig for treats. Nails file naturally while they forage, puzzle, and slow down their meal — no clippers, no grinders, no struggle.",
  details: [
    "Self-healing 80-grit scratch pad — marks fade in about 24 hours",
    "Treat box + puzzle feeder slows eating and occupies busy minds",
    "Designed for small, medium, and large dogs",
    "Refillable discs last about 4–5 months of regular use",
    "About 10.2 × 10.2 × 4.3 in, lightweight and portable",
  ],
  benefits: [
    {
      title: "Stress-free nail care",
      body: "They stop scratching when nails feel short enough. No over-clipping. No grinder heat.",
    },
    {
      title: "Enrichment they choose",
      body: "Foraging, digging, and problem-solving turn grooming into something they look forward to.",
    },
    {
      title: "Slower, calmer meals",
      body: "Kibble or treats release gradually, which helps gulpers digest more comfortably.",
    },
    {
      title: "Built to last, easy to refill",
      body: "A durable body with peel-and-stick discs so the toy stays effective for years, not weeks.",
    },
  ],
  specs: [
    { label: "Size", value: "10.24 × 10.24 × 4.25 in" },
    { label: "Weight", value: "1.64 lb" },
    { label: "Pad grit", value: "80-grit, self-healing" },
    { label: "Fits", value: "Small, medium & large dogs" },
    { label: "Color", value: "Turquoise" },
  ],
  images: [
    {
      src: "/images/product-main.jpg",
      alt: "White dog scratching the teal Zenly Paws nail file toy while treats sit in the puzzle feeder",
    },
    {
      src: "/images/product-top.svg",
      alt: "Top-down illustration of the scratch pad, treat windows, and slow-feeder sliders",
      unoptimized: true,
    },
    {
      src: "/images/product-detail.svg",
      alt: "Close illustration of the self-healing sandpaper disc and refill pads",
      unoptimized: true,
    },
    {
      src: "/images/product-lifestyle.svg",
      alt: "Lifestyle illustration of a dog using the nail file toy on a calm living-room floor",
      unoptimized: true,
    },
  ],
};

export function formatPrice(cents: number, currency: string = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}
