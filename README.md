# Zenly Paws

Marketing and direct-to-consumer site for the Zenly Paws Nail File Toy — a puzzle, slow feeder, and stress-free nail file.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Stripe Checkout (hosted)

## Setup

```bash
npm install
cp .env.example .env.local
# add Stripe test keys to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe

1. Create a [Stripe account](https://dashboard.stripe.com) and copy test keys into `.env.local`.
2. Checkout creates a hosted session from `POST /api/checkout` with quantity 1–10.
3. If `STRIPE_PRICE_ID` is set, that Price is used. Otherwise the API sends `price_data` for **$37.99**.
4. Success: `/success?session_id=...` · Cancel: `/cancel`.

## Swapping real photos

Keep filenames or update `lib/product.ts`:

| File | Use |
| --- | --- |
| `public/images/product-main.jpg` | Hero / primary shot (live product photo from zenlypaws.org) |
| `public/images/product-top.svg` | Gallery 2 — replace with top-down photo |
| `public/images/product-detail.svg` | Gallery 3 — replace with disc/refill close-up |
| `public/images/product-lifestyle.svg` | Gallery 4 — replace with lifestyle shot |
| `public/images/placeholder-family.svg` | Origin section |
| `public/images/logo.png` | Wordmark |

Remote images from `zenlypaws.org/wp-content/uploads/**` are already allowed in `next.config.mjs`.
