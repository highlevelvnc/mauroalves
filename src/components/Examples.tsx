import { EXAMPLES } from "@/lib/constants";

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

const GRADIENTS = [
  "linear-gradient(135deg, #1f3686 0%, #0b1830 100%)",
  "linear-gradient(135deg, #a9885a 0%, #1f3686 100%)",
  "linear-gradient(135deg, #142543 0%, #c8a878 100%)",
  "linear-gradient(135deg, #2d49a8 0%, #060f21 100%)",
];

export function Examples() {
  return (
    <section id="exemplos" className="bg-ink-100 py-24 sm:py-28">
      <div className="container-wide">
        <div
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
          data-reveal
        >
          <div className="max-w-2xl">
            <span className="eyebrow">Exemplos reais</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              O que já está a funcionar com outros clientes.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
              Quatro reels recentes que combinam edição cuidada, marca pessoal e
              tráfego pago. O mesmo método aplica-se à comunicação do Mauro.
            </p>
          </div>
          <p className="text-sm text-navy-600">
            Clique em cada reel para abrir no Instagram.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <a
              key={ex.url}
              href={ex.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              data-reveal
              data-reveal-delay={`${i * 80}ms`}
            >
              <div
                className="relative aspect-[9/16] w-full"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                aria-hidden
              >
                <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,255,255,0.18),transparent)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-50/95 text-navy-900 shadow-card transition group-hover:scale-110">
                    <PlayIcon />
                  </span>
                </div>
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-navy-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-50 backdrop-blur">
                  <InstagramIcon />
                  Reel
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-50/85">
                  <span>0:00 · 0:30</span>
                  <span>9:16</span>
                </div>
              </div>
              <div className="space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                  {ex.label}
                </p>
                <p className="text-sm leading-relaxed text-navy-800">
                  {ex.description}
                </p>
                <p className="pt-2 text-xs font-semibold text-navy-600 group-hover:text-navy-900">
                  Ver no Instagram →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
