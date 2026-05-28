const KEYWORDS = [
  "Reels",
  "Drone",
  "YouTube Shorts",
  "Meta Ads",
  "Google Ads",
  "Marca pessoal",
  "SEO local",
  "Social media",
  "Landing pages",
  "Tour 360°",
  "Email marketing",
  "Branded content",
];

function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500"
    />
  );
}

export function Marquee() {
  const items = [...KEYWORDS, ...KEYWORDS];
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-navy-100 bg-navy-950 py-5"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent"
      />
      <div className="marquee">
        <div className="marquee-track">
          {items.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-ink-100/70"
            >
              <Dot />
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
