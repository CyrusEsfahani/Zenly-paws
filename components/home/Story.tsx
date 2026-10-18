import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">The origin</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            Built at the kitchen table, for dogs who hid from the clippers.
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-muted">
            <p>
              Nail night used to mean closed doors, trembling paws, and a lot of
              apology treats. Two dogs in one family made it clear: traditional
              trims were not a training problem. They were the wrong ritual.
            </p>
            <p>
              A mom and her brother started sketching something kinder — a toy that
              invited digging, foraging, and play, with a sandpaper lid that quietly
              filed nails while the dog was busy being a dog.
            </p>
            <p>
              Zenly Paws is still that idea. No gadgets that corner them. No
              burning grinders. Just a daily game they choose, designed by people
              who had to live with the alternative.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <figure className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-cream-paper shadow-lift ring-1 ring-ink/5">
              <Image
                src="/images/placeholder-family.svg"
                alt="Placeholder for a family photo with their dogs — swap this file in public/images"
                width={900}
                height={1100}
                unoptimized
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 text-sm text-ink-soft">
              Swap <code className="text-ink-muted">public/images/placeholder-family.svg</code>{" "}
              with a real family or lifestyle photo.
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
