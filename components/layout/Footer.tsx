import Link from "next/link";
import { Wordmark } from "@/components/logo/Wordmark";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-cream-paper">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="brightness-0 invert">
            <Wordmark className="h-9" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-paper/70">
            Family-owned nail care that feels like play. Designed by a mom and her
            brother after their dogs hid from clippers — now a daily ritual for
            thousands of homes.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cream-paper/45">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-teal-bright" href="/product">
                Nail File Toy
              </Link>
            </li>
            <li>
              <Link className="hover:text-teal-bright" href="/#story">
                Our story
              </Link>
            </li>
            <li>
              <Link className="hover:text-teal-bright" href="/#faq">
                FAQ
              </Link>
            </li>
            <li>
              <a
                className="hover:text-teal-bright"
                href="https://www.amazon.com/Zenly-Paws-Scratching-Scratcher-Dispenser/dp/B0C5Q53D2G"
                target="_blank"
                rel="noreferrer"
              >
                Also on Amazon
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cream-paper/45">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-paper/80">
            <li>
              <a className="hover:text-teal-bright" href="mailto:hello@zenlypaws.org">
                hello@zenlypaws.org
              </a>
            </li>
            <li>Family-owned in the United States</li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-cream-paper/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Zenly Paws. All rights reserved.</p>
        <p>Secure checkout by Stripe. Photos can be swapped in /public/images.</p>
      </Container>
    </footer>
  );
}
