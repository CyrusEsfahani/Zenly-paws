import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zenly Paws — Gentle nail care that feels like play",
    template: "%s · Zenly Paws",
  },
  description:
    "The Nail File Toy is a puzzle, slow feeder, and stress-free nail file. Dogs scratch for treats — and file their nails without clippers.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Zenly Paws — Gentle nail care that feels like play",
    description:
      "A family-designed nail file toy, puzzle, and slow feeder for dogs who hate traditional trims.",
    images: ["/images/product-main.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EA",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-dvh bg-cream font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream-paper"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
