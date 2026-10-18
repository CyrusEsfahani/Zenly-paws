const PHRASES = [
  "Stress-free nail care",
  "Puzzle enrichment",
  "Slow feeder",
  "Self-healing pad",
  "Family-owned",
  "Made for dogs who hide from clippers",
];

export function Marquee() {
  const items = [...PHRASES, ...PHRASES];
  return (
    <div className="relative overflow-hidden border-y border-ink/8 bg-sage-mist/70 py-4">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {items.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="font-serif text-xl text-sage sm:text-2xl"
          >
            {phrase}
            <span className="ml-10 text-teal">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
