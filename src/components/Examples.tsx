import { EXAMPLES } from "@/lib/constants";

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
              Quatro reels recentes que combinam edição cuidada, marca pessoal
              e tráfego pago. O mesmo método aplica-se à comunicação do Mauro.
            </p>
          </div>
          <p className="text-sm text-navy-600">
            Os vídeos correm directamente nesta página. Para abrir no
            Instagram, clique em cada cartão.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <article
              key={ex.code}
              data-reveal
              data-reveal-delay={`${i * 80}ms`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-navy-950">
                <iframe
                  src={`https://www.instagram.com/reel/${ex.code}/embed/`}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allowFullScreen
                  allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                  scrolling="no"
                  title={`${ex.label} ${i + 1}`}
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                  <InstagramIcon />
                  {ex.label}
                </div>
                <p className="text-sm leading-relaxed text-navy-800">
                  {ex.description}
                </p>
                <a
                  href={ex.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-navy-700 transition hover:text-navy-900"
                >
                  Abrir no Instagram
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
