import { NextResponse } from "next/server";
import { PRODUCT } from "@/lib/product";
import { getSiteUrl, getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured yet. Add STRIPE_SECRET_KEY to .env.local (see .env.example).",
      },
      { status: 503 },
    );
  }

  let quantity = 1;
  try {
    const body = (await request.json()) as { quantity?: number; productId?: string };
    quantity = Math.min(10, Math.max(1, Number(body.quantity) || 1));
    if (body.productId && body.productId !== PRODUCT.id) {
      return NextResponse.json({ error: "Unknown product." }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const origin = request.headers.get("origin") || getSiteUrl();
  const stripe = getStripe();
  const priceId = process.env.STRIPE_PRICE_ID;
  const imageUrl = `${origin}${PRODUCT.images[0].src}`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Standard shipping",
            type: "fixed_amount",
            fixed_amount: { amount: 595, currency: "usd" },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 8 },
            },
          },
        },
      ],
      line_items: priceId
        ? [{ price: priceId, quantity }]
        : [
            {
              quantity,
              price_data: {
                currency: PRODUCT.currency,
                unit_amount: PRODUCT.priceInCents,
                product_data: {
                  name: PRODUCT.name,
                  description: PRODUCT.tagline,
                  images: [imageUrl],
                },
              },
            },
          ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        productId: PRODUCT.id,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe did not return a checkout URL." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Stripe checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
