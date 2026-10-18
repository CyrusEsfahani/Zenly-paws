import { Bone, PawPrint, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HOW_IT_WORKS } from "@/lib/content";

const ICONS = [Bone, PawPrint, Sparkles];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-sage-mist/50 py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">How it works</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl text-balance">
            Fill. Scratch. File — without a fight.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.step} delay={i * 0.08}>
                <li className="h-full rounded-[1.8rem] bg-cream-paper p-7 shadow-card ring-1 ring-ink/5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-teal">{item.step}</span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-mist text-sage">
                      <Icon size={20} aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">{item.body}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
