import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70dvh] items-center pt-24">
      <Container className="py-20 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">404</p>
        <h1 className="mt-3 font-serif text-4xl">This trail went cold.</h1>
        <p className="mt-3 text-ink-muted">The page you’re looking for isn’t here.</p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/">Back to Zenly Paws</MagneticButton>
        </div>
      </Container>
    </section>
  );
}
