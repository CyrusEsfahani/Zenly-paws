import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { REVIEWS } from "@/lib/content";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-ink py-24 text-cream-paper sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-bright">Loved by dog parents</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl text-balance">
            The clipper truce, in their words.
          </h2>
          <p className="mt-4 text-cream-paper/65">
            Tone drawn from the happiest Amazon notes: enrichment, calmer nails, and
            dinners that last longer than thirty seconds.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.06}>
              <blockquote className="h-full rounded-[1.8rem] bg-white/5 p-7 ring-1 ring-white/10">
                <div className="flex gap-1 text-teal-bright" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-[17px] leading-relaxed text-cream-paper/90">
                  “{review.quote}”
                </p>
                <footer className="mt-6 text-sm">
                  <cite className="not-italic font-medium">{review.name}</cite>
                  <span className="text-cream-paper/50"> · {review.detail}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
